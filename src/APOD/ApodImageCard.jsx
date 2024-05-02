import Img from "../assets/M57Ring_HubbleGendler_3000.jpg";

export default function ApodImageCard() {
  return (
    <div className="carousel max-w-[90vw] xl:max-w-[70vw] justify-center items-center">
      <div id="slide1" className="carousel-item relative w-fit flex">
        <img src={Img} className="w-fit h-auto object-contain" />
      </div> 
    </div>
  );
}