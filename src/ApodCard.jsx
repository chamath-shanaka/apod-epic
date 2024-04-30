import bgImg from "./assets/M57Ring_HubbleGendler_3000.jpg";
import { useNavigate } from "react-router-dom";

export default function ApodCard() {
  const navigate = useNavigate();

  return (
    <div
      className="hero lg:min-h-screen min-h-[50vh] overflow-hidden"
      onClick={() => navigate("/apod")}
    >
      <div
        className="hero lg:min-h-screen min-h-[50vh] hover:scale-[1.02] transition duration-1000"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40 hover:cursor-pointer"></div>
        <div className="hero-content text-center text-neutral-200">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">APOD</h1>
            <p className="mb-5">
              Astronomy Picture of the Day.
              <br />
              Each day a different image or photograph of our fascinating
              universe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
