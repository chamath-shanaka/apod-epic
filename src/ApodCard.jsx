import bgImg from "./assets/M57Ring_HubbleGendler_3000.jpg";

export default function ApodCard() {
  return (
    <div className="hero lg:min-h-screen min-h-[50vh] overflow-hidden">
      <div
        className="hero lg:min-h-screen min-h-[50vh] hover:scale-[1.04] hover:bg-opacity-60 transition duration-1000"
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
