import { useState } from "react";
import { DatePicker, CustomProvider } from "rsuite";
import "rsuite/dist/rsuite.min.css";

export default function ApodImgInfoCard() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="h-max w-[90vw] xl:w-[25vw]">
      <br />
      <br />
      <h2 className="card-title">Card title!</h2>

      <div className="card-body font-medium text-lg text-neutral-300">
        <CustomProvider theme="dark">
          <DatePicker
            oneTap
            style={{ width: 200 }}
            value={date}
            onSelect={(date) => setDate(date)}
            format="dd, MMM, yyyy"
          />
        </CustomProvider>

        <p className="leading-relaxed">
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, ad.
          Amet dolor perferendis incidunt! Maiores sunt praesentium fugit
          recusandae vero facere reprehenderit eos molestiae ipsam blanditiis a
          excepturi, laborum quam. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Laborum, ad. Amet dolor perferendis incidunt!
          Maiores sunt praesentium fugit recusandae vero facere reprehenderit
          eos molestiae ipsam blanditiis a excepturi, laborum quam. <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, ad.
          Amet dolor perferendis incidunt! Maiores sunt praesentium fugit
          recusandae vero facere reprehenderit eos molestiae ipsam blanditiis a
          excepturi, laborum quam.
        </p>
      </div>
    </div>
  );
}
