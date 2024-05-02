import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import ApodImageCard from "./ApodImageCard";
import ApodImgInfoCard from "./ApodImgInfoCard";
const apiKey = import.meta.env.VITE_NASA_API_KEY;

export default function Apod() {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState(null);

  function changDate(newDate) {
    setDate(newDate);
  }

  // API call and data handling logic
  async function fetchData(date) {
    try {
      setData(null); // for main loading animation to trigger
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${
          date.toISOString().split("T")[0]
        }`
      );

      // track rate limits
      console.log('Remaining: ', response.headers.get('X-RateLimit-Remaining'));

      // parse and set data
      setData(await response.json());
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // make the API call when component loads and when date changes
  useEffect(() => {
    fetchData(date);
  }, [date]);

  return (
    <>
      {/* desktop nav */}
      <div className="hidden sm:block">
        <Navbar title={"Astronomy Picture of the Day"} />
      </div>
      {/* mobile nav */}
      <div className="sm:hidden">
        <Navbar title={"APOD"} />
      </div>

      {!data && (
        <div className="min-h-full min-w-full flex absolute top-0 justify-center items-center">
          <span className="loader"></span>
        </div>
      )}
      {data && (
        <div className="grid gap-4 xl:flex xl:grid-cols-2 xl:flex-row-reverse justify-center py-4">
          <ApodImageCard url={data.url} />
          <ApodImgInfoCard
            date={date}
            explanation={data.explanation}
            title={data.title}
            changDate={changDate}
          />
        </div>
      )}
    </>
  );
}
