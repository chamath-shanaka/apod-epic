import Navbar from "../Navbar";
import ApodImageCard from "./ApodImageCard";
import ApodImgInfoCard from "./ApodImgInfoCard";

export default function Apod() {
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

      <div className="grid gap-4 xl:flex xl:grid-cols-2 xl:flex-row-reverse grid-rows-2 justify-center items-center py-4">
        <ApodImageCard />
        <ApodImgInfoCard />
      </div>
    </>
  );
}
