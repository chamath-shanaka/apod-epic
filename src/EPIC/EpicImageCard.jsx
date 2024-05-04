import { useEffect, useState } from "react";
const apiKey = import.meta.env.VITE_NASA_API_KEY;

export default function EpicImageCard({ date, image }) {
  const [isLoading, setIsLoading] = useState(true);
  const [imgUrl, setImgUrl] = useState(null);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  // format date for API request (yyyy/mm/dd)
  const imgDate = date.split("-").join("/");

  // image url
  useEffect(() => {
    setImgUrl(
      `https://api.nasa.gov/EPIC/archive/natural/${imgDate}/png/${image}.png?api_key=${apiKey}`
    );
  }, []);

  // useEffect(() => {
  //   setIsLoading(true);
  // }, [img])

  return (
    <div className="carousel max-w-[90vw] xl:min-w-[65vw] xl:max-w-[65vw] justify-center items-start">
      {isLoading && (
        <div className="min-w-[65vw] min-h-full flex justify-center items-center">
          <span className="loader"></span>
        </div>
      )}
      {imgUrl && (
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={imgUrl}
            className="w-fit h-auto object-contain"
            onLoad={handleImageLoad}
            style={{ display: isLoading ? "none" : "block" }}
            alt="EPIC"
          />
          {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-ghost">
            ❮
          </a>
          <a href="#slide2" className="btn btn-ghost">
            ❯
          </a>
        </div> */}
        </div>
      )}
    </div>
  );
}
