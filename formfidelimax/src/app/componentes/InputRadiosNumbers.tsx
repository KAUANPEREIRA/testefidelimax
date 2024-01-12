import { useFormContext } from "react-hook-form";

type Props = {
  index: number;
  radio: number;
};
export const InputRadiosNumber = ({ index, radio }: Props) => {
  const { register } = useFormContext();
  return (
    <div className="flex flex-row flex-col">
      <label key={index}>
        <input
          type="radio"
          value={radio}
          {...register("inputRadiosNumber")}
          className={index !== 0 ? "ml-8" : ""}
        />
      </label>
      <h3 className={index !== 0 ? "ml-8" : ""}>{radio}</h3>
    </div>
  );
};
