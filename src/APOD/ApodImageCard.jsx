import Img from "../assets/M57Ring_HubbleGendler_3000.jpg";

export default function ApodImageCard() {
  return (
    <div className="carousel w-[90vw] xl:w-[70vw]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={Img} className="w-fit" />
      </div> 
    </div>
  );
}