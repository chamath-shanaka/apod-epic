import { useEffect, useState } from "react";
const apiKey = import.meta.env.VITE_NASA_API_KEY;

export default function EpicImageCard({ date, image }) {
  const [isLoading, setIsLoading] = useState(true);
  const [imgUrl, setImgUrl] = useState(null);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // format date for API request (yyyy/mm/dd)
    const imgDate = date.split("-").join("/");

    // set image url
    setImgUrl(
      `https://api.nasa.gov/EPIC/archive/natural/${imgDate}/png/${image}.png?api_key=${apiKey}`
    );
  }, [date, image]);

  return (
    <div className="carousel max-w-[90vw] xl:min-w-[65vw] xl:max-w-[65vw] justify-center items-start">
      {isLoading && (
        <div className="min-w-[65vw] min-h-full flex justify-center items-center">
          <span className="loader"></span>
        </div>
      )}
      {imgUrl && (
        <div id="slide1" className="carousel-item relative w-fit flex">
          <img
            src={imgUrl}
            className="w-fit h-auto object-contain"
            onLoad={handleImageLoad}
            style={{ display: isLoading ? "none" : "block" }}
            alt="EPIC"
          />
        </div>
      )}
    </div>
  );
}