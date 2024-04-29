import ApodCard from "./ApodCard";
import EpicCard from "./EpicCard";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row">
      <EpicCard />
      <ApodCard />
    </div>
  );
}
