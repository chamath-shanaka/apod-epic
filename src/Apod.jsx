import Navbar from "./Navbar";

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

      <div>
        <p>Hello form APOD</p>
      </div>
    </>
  );
}
