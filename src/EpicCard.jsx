import bgImg from "./assets/earth-space-view-canada-0155150d68fb392562e320dd07b92781.jpg";

export default function EpicCard() {
  return (
    <div className="hero lg:min-h-screen min-h-[50vh] overflow-hidden">
      <div
        className="hero lg:min-h-screen min-h-[50vh] hover:scale-[1.04] transition duration-1000"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 hover:cursor-pointer"></div>
        <div className="hero-content text-center text-neutral-200">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">EPIC</h1>
            <p className="mb-5">
              See our blue marble form the Earth-Sun Lagrange point.
              <br />
              Imagery collected by DSCOVR's Earth Polychromatic Imaging Camera
              (EPIC)
            </p>
          </div>
        </div>
      </div>
    </div>

    
  );
}
