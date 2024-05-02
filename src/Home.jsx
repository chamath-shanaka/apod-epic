import ApodHero from "./APOD/ApodHero";
import EpicHero from "./EPIC/EpicHero";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row">
      <EpicHero />
      <ApodHero />
    </div>
  );
}
