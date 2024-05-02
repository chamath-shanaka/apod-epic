import Navbar from "../Navbar";
import EpicImageCard from "./EpicImageCard";
import EpicImgInfoCard from "./EpicImgInfoCard";

async function getData() {
  const response = await fetch('https://epic.gsfc.nasa.gov/api/enhanced/date/2015-10-31');
  const data = await response.json();
  console.log(data);
}

export default function Epic() {
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

      <div className="grid gap-4 xl:flex xl:grid-cols-2 xl:flex-row-reverse grid-rows-2 justify-center items-center py-4">
        <EpicImageCard />
        <EpicImgInfoCard />
      </div>
    </>
  );
}
