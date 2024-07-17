import { Dispatch, SetStateAction } from "react";

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>
    tip: number
}

export default function TipPercentageForm({setTip, tip}: TipPercentageFormProps) {
    
    const tipOptions = [
      {
        id: "tip-10",
        value: 0.1,
        label: "10%",
      },
      {
        id: "tip-20",
        value: 0.2,
        label: "20%",
      },
      {
        id: "tip-50",
        value: 0.5,
        label: "50%",
      },
    ];

    return (
      <div>
        <h3 className="text-2xl font-black"></h3>

        <form>
          {tipOptions.map((tipOption) => (
            <div className="flex gap-2" key={tipOption.id}>
              <label htmlFor={tipOption.id}>{tipOption.label}</label>
              <input
                id={tipOption.id}
                type="radio"
                name="tip"
                value={tipOption.value}
                onChange={(e) => setTip(+e.target.value)}
                checked={tipOption.value === tip}
              />
            </div>
          ))}
          <div className=""></div>
        </form>
      </div>
    );
}
