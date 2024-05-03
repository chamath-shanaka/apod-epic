import React, { useEffect, useState } from "react";

export default function ApodImageCard({ url }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
  }, [url]);

  return (
    <div className="carousel max-w-[90vw] xl:min-w-[65vw] xl:max-w-[65vw] justify-center items-start">
      {isLoading && (
        <div className="min-w-[65vw] min-h-full flex justify-center items-center">
          <span className="loader"></span>
        </div>
      )}
      <div id="slide1" className="carousel-item relative w-fit flex">
        <img
          src={url}
          className="w-fit h-auto object-contain"
          onLoad={handleImageLoad}
          style={{ display: isLoading ? "none" : "block" }}
          alt="APOD"
        />
      </div>
    </div>
  );
}