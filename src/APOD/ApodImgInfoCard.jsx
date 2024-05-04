import { useState } from "react";
import { DatePicker, CustomProvider } from "rsuite";
import "rsuite/dist/rsuite.min.css";

export default function ApodImgInfoCard({ date, explanation, title, changDate }) {

  return (
    <div className="h-max w-[90vw] xl:w-[25vw]">
      <br />
      <br />
      <h2 className="card-title">{title}</h2>

      <div className="card-body font-medium text-[17px] text-neutral-300">
        <CustomProvider theme="dark">
          <DatePicker
            oneTap
            style={{ width: 200 }}
            value={date}
            onSelect={(date) => changDate(date)}
            format="dd, MMM, yyyy"
          />
        </CustomProvider>

        <p className="leading-relaxed">
          <br />
          {explanation}
        </p>
      </div>
    </div>
  );
}
