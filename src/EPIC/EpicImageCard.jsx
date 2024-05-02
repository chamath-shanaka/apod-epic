import Img from "../assets/earth-space-view-canada-0155150d68fb392562e320dd07b92781.jpg";

export default function EpicImageCard() {
  return (
    <div className="carousel w-[90vw] xl:w-[70vw]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={Img} className="w-fit" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-ghost">❮</a> 
          <a href="#slide2" className="btn btn-ghost">❯</a>
        </div>
      </div> 
      <div id="slide2" className="carousel-item relative w-full items-center justify-center">
        <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-fit" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-ghost">❮</a> 
          <a href="#slide3" className="btn btn-ghost">❯</a>
        </div>
      </div> 
      <div id="slide3" className="carousel-item relative w-full items-center justify-center">
        <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-fit" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-ghost">❮</a> 
          <a href="#slide4" className="btn btn-ghost">❯</a>
        </div>
      </div> 
      <div id="slide4" className="carousel-item relative w-full items-center justify-center">
        <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-fit" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-ghost">❮</a> 
          <a href="#slide1" className="btn btn-ghost">❯</a>
        </div>
      </div>
    </div>
  );
}


function temp() {
  return(
    // single
    // when taken from api images to and array then loop

    <div className="carousel w-[90vw] xl:w-[70vw]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={Img} className="w-fit" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-ghost">❮</a> 
          <a href="#slide2" className="btn btn-ghost">❯</a>
        </div>
      </div> 
    </div>
  )
}