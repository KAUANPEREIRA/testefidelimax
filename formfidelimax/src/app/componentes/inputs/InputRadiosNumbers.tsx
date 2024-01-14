import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  index: number;
  radio: number;
  valueDefault: number | undefined;
};

export const InputRadiosNumber = ({ index, radio, valueDefault }: Props) => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    setValue("inputRadiosNumber", valueDefault);
  }, [valueDefault]);

  const selectedValue = watch("inputRadiosNumber");

  return (
    <div className="flex flex-row flex-col">
      <label key={index}>
        <input
          type="radio"
          value={Number(selectedValue)}
          {...register("inputRadiosNumber", { required: true })}
          checked={Number(selectedValue) === radio}
          onChange={() => setValue("inputRadiosNumber", radio)}
          className={index !== 0 ? "ml-8" : ""}
        />
      </label>
      <h3 className={index !== 0 ? "ml-8" : ""}>{radio}</h3>
    </div>
  );
};
