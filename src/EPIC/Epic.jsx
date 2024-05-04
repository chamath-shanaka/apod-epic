import { useEffect, useState, useRef } from "react";
import Navbar from "../Navbar";
import EpicImageCard from "./EpicImageCard";
import EpicImgInfoCard from "./EpicImgInfoCard";
const apiKey = import.meta.env.VITE_NASA_API_KEY;

export default function Epic() {
  const [date, setDate] = useState(""); // YYYY-MM-DD
  const [availableDates, setAvailableDates] = useState([]);
  const [metaData, setMetaData] = useState(null);
  const isInitialMount = useRef(true);

  function changDate(newDate) {
    // will trigger fetchMetaData in useEffect
    setDate(newDate);
  }

  // Fetch the listing of all dates with available natural color imagery
  // and setAvailableDates.
  // This is part of the initial date fetching process and is not used again
  async function fetchAvailableDates() {
    try {
      const response = await fetch(
        `https://api.nasa.gov/EPIC/api/natural/all?api_key=${apiKey}`
      );

      // response [] of {"date": "2024-05-01"}
      const data = await response.json();
      const dateList = data.map((obj) => obj.date);

      setAvailableDates(dateList);

      if (dateList.length > 0) {
        // date change will trigger fetchMetaData in useEffect
        setDate(dateList[0]);
      }
    } catch (error) {
      console.error("Error fetching available dates: ", error);
    }
  }

  // API call to get most recent metadata & setMetaData
  // date in format YYYY-MM-DD
  async function fetchMetaData(date) {
    try {
      // get metadata
      const response = await fetch(
        `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${apiKey}`
      );
      setMetaData(await response.json());
    } catch (error) {
      console.error("error fetching recent metaData: ", error);
    }
  }

  // initial fetch
  useEffect(() => {
    fetchAvailableDates();
  }, []);

  // fetch metaData
  // ! NOT fetching on initial render
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      fetchMetaData(date);
    }
  }, [date]);

  // output metaData [temp] [testing]
  useEffect(() => {
    if (metaData !== null) {
      if (!metaData.length) {
        console.log("No data for this date");
      } else {
        console.log("Data: ", metaData);
        console.log("Date: ", date);
        console.log("dates: ", availableDates);
      }
    }
  }, [metaData]);

  return (
    <>
      {/* desktop nav */}
      <div className="hidden sm:block">
        <Navbar title={"DSCOVR's Earth Polychromatic Imaging Camera"} />
      </div>
      {/* mobile nav */}
      <div className="sm:hidden">
        <Navbar title={"EPIC"} />
      </div>

      {/* main loader */}
      {!metaData &&  (
        <div className="min-h-full min-w-full flex absolute top-0 justify-center items-center">
          <span className="loader"></span>
        </div>
      )}

      {/* main components */}
      {metaData && (
        <div className="grid gap-4 xl:flex xl:grid-cols-2 xl:flex-row-reverse grid-rows-2 justify-center items-center py-4">
          <EpicImageCard />
          <EpicImgInfoCard
            availableDates={availableDates}
            date={date}
            metaData={metaData}
            changDate={changDate}
          />
        </div>
      )}
    </>
  );
}
