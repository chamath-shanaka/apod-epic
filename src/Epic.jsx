import Navbar from "./Navbar";

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

      <div>
        <p>Hello form EPIC</p>
      </div>
    </>
  );
}
