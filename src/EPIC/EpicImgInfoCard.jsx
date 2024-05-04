import "rsuite/dist/rsuite.min.css";

export default function EpicImgInfoCard({
  availableDates,
  date,
  metaData,
  changDate,
}) {
  // calculate the distance between DSCOVR and Earth
  function calDistance(j2000cod) {
    const distance =
      (j2000cod.x ** 2 + j2000cod.y ** 2 + j2000cod.z ** 2) ** 0.5;
    return distance.toLocaleString("en-US", { maximumFractionDigits: 3 });
  }

  return (
    <div className="h-max w-[90vw] xl:w-[25vw] rounded-md border-solid border-[1px] border-neutral-700">
      <div className="card-body font-mono font-medium">
        {/* Date selection */}
        <select
          className="select select-ghost w-full max-w-xs"
          value={date}
          onChange={(e) => changDate(e.target.value)}
        >
          <option disabled selected>
            {date}
          </option>
          {/* list available dates */}
          {availableDates.map((element) => (
            <option key={element} value={element}>
              {element}
            </option>
          ))}
        </select>

        <p className="leading-relaxed">
          <br />
          Images taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft,
          <br />
          situated at the Earth-Sun Lagrange point
          <br />
          <br />
          Distance form Earth: {calDistance(
            metaData[0].dscovr_j2000_position
          )}{" "}
          km
          <br />
          <br />
          EPIC is looking at, <br />
          latitude: {metaData[0].centroid_coordinates.lat}
          <br />
          longitude: {metaData[0].centroid_coordinates.lon}
          <br />
          <br />
          DSCOVR J2000 position <br />
          x: {metaData[0].dscovr_j2000_position.x}
          <br />
          y: {metaData[0].dscovr_j2000_position.y}
          <br />
          z: {metaData[0].dscovr_j2000_position.z}
          <br />
          <br />
        </p>
      </div>
    </div>
  );
}
