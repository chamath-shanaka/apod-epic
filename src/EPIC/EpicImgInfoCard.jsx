import { useState } from "react";
import { DatePicker, CustomProvider } from "rsuite";
import "rsuite/dist/rsuite.min.css";

export default function () {
  const [date, setDate] = useState(new Date())

  return (
    <div className="h-max w-[90vw] xl:w-[25vw] rounded-md border-solid border-[1px] border-neutral-700">
      <div className="card-body font-mono font-medium">

        <CustomProvider theme="dark">
          <DatePicker oneTap style={{ width: 200 }} value={date} onSelect={(date) => setDate(date)} />
        </CustomProvider> 

        <p className="leading-relaxed">
          <br />
          caption: <br /><br />
          centroid coordinates: <br /><br />
          DSCOVR j2000 position: 150,000,000 km <br /><br />
          lunar_j2000_position: <br /><br />
          sun_j2000_position: <br /><br />
          attitude_quaternions: <br /><br />
          coords
        </p>
      </div>
    </div>
  );
}
