import bgImg from "./assets/M57Ring_HubbleGendler_3000.jpg";

export default function ApodCard() {
  return (
    <div
      className="hero lg:min-h-screen min-h-[50vh]"
      style={{
        backgroundImage:
          `url(${bgImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">APOD</h1>
          <p className="mb-5">
            Astronomy Picture of the Day.<br />
            Each day a different image or photograph of our fascinating universe
          </p>
        </div>
      </div>
    </div>
  );
}
