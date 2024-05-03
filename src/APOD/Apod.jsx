import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import ApodImageCard from "./ApodImageCard";
import ApodImgInfoCard from "./ApodImgInfoCard";
const apiKey = import.meta.env.VITE_NASA_API_KEY;

export default function Apod() {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  function changDate(newDate) {
    setDate(newDate);
  }

  // API call and data handling logic
  async function fetchData(date) {
    try {
      // for main loading animation to trigger
      setData(null);
      setError(null);

      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${
          date.toISOString().split("T")[0]
        }`
      );

      if (response.ok) {
        // track rate limits
        console.log(
          "Remaining: ",
          response.headers.get("X-RateLimit-Remaining")
        );

        // parse and set data
        setData(await response.json());
      } else {
        // parse error data
        setError(await response.json());
        setError((error) => {
          console.error(error.code, error.msg);
          return error;
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // make the API call when component loads and when date changes
  useEffect(() => {
    fetchData(date);
  }, [date]);

  // trigger error modal
  useEffect(() => {
    if (error) {
      document.getElementById("error_modal").showModal();
    }
  }, [error]);

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

      {/* main loader */}
      {!data && !error && (
        <div className="min-h-full min-w-full flex absolute top-0 justify-center items-center">
          <span className="loader"></span>
        </div>
      )}

      {/* error modal */}
      {error && (
        <dialog id="error_modal" className="modal text-warning">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Error: {error.code}</h3>
            <p className="py-4">{error.msg}</p>
            <div className="modal-action">
              <form method="dialog">
                <button
                  className="btn btn-outline btn-warning"
                  // date change will trigger fetchData(date)
                  onClick={() => setDate(new Date())}
                >
                  OK
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}

      {/* main components */}
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
