import Navbar from "../Navbar";
import EpicImageCard from "./EpicImageCard";
import EpicImgInfoCard from "./EpicImgInfoCard";

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
