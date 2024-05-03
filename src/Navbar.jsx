import NasaLogo from "./assets/NASA logo pngwing.com.png";
import homeIcon from "./assets/icons8-home.svg";
import { useNavigate } from "react-router-dom";

export default function Navbar({ title }) {
  const navigate = useNavigate();

  return (
    <nav className="bg-black py-2 px-7 sticky top-0 z-40 flex justify-between text-neutral-200 items-center">
      <span className="h-16 w-[82px] flex justify-center items-center">
        <img src={NasaLogo} alt="NASA Logo" />
      </span>
      <span>
        <h1 className="font-semibold text-xl">{title}</h1>
      </span>
      <span className="w-[82px] flex justify-center items-center">
        <img src={homeIcon} alt="HomeIcon" onClick={() => navigate("/")} />
      </span>
    </nav>
  );
}
