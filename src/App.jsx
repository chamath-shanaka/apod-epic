import ApodCard from "./ApodCard";
import "./App.css";
import EpicCard from "./EpicCard";

function App() {
  return (
    <div 
      className="flex flex-col lg:flex-row">
      <EpicCard />
      <ApodCard />
    </div>
  );
}

export default App;
