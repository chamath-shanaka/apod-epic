import { useEffect, useState, useRef } from "react";
import Navbar from "../Navbar";
import EpicImageCard from "./EpicImageCard";
import EpicImgInfoCard from "./EpicImgInfoCard";
import { useNavigate } from "react-router-dom";
const apiKey = import.meta.env.VITE_NASA_API_KEY;

export default function Epic() {
  const [date, setDate] = useState(""); // YYYY-MM-DD
  const [availableDates, setAvailableDates] = useState([]);
  const [metaData, setMetaData] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);
  const isInitialMount = useRef(true);
  const navigate = useNavigate();

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
      setErrorInfo(error.message);
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
      setErrorInfo(error.message);
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
      setMetaData(null);
      fetchMetaData(date);
    }
  }, [date]);

  // trigger error modal
  useEffect(() => {
    if (errorInfo) {
      document.getElementById("epic_error_modal").showModal();
    }
  }, [errorInfo]);

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
      {!metaData && (
        <div className="min-h-full min-w-full flex absolute top-0 justify-center items-center">
          <span className="loader"></span>
        </div>
      )}

      {/* error modal */}
      {errorInfo && (
        <dialog id="epic_error_modal" className="modal text-error">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Error!</h3>
            <p className="py-4">{errorInfo}</p>
            <div className="modal-action">
              <form method="dialog">
                <button
                  className="btn btn-outline btn-error"
                  // date change will trigger fetchData(date)
                  onClick={() => location.reload()}
                >
                  Reload
                </button>
                <button
                  className="btn btn-outline btn-accent ml-3"
                  // date change will trigger fetchData(date)
                  onClick={() => navigate("/")}
                >
                  Home
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}

      {/* main components */}
      {metaData && (
        <div className="grid gap-4 xl:flex xl:grid-cols-2 xl:flex-row-reverse justify-center py-4">
          <EpicImageCard date={date} image={metaData[0].image} />
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
