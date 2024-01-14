import { useFormContext } from "react-hook-form";

type Props = {
  index: number;
  description: string;
};

export const MultipleHorizontal = ({ index, description }: Props) => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
  const selectedDescription = watch("horizontalMultipleChoice");

  const handleDivClick = () => {
    if (selectedDescription === description) {
      setValue("horizontalMultipleChoice", null);
    } else {
      setValue("horizontalMultipleChoice", description);
    }
  };

  return (
    <div>
      <div
        className={`w-24 h-7 rounded-3xl border border-gray-400 text-xs p-1 mr-2 text-center cursor-pointer ${
          selectedDescription === description ? "bg-blue-500 text-white" : ""
        }`}
        key={index}
        onClick={handleDivClick}
      >
        {description}
      </div>

      <input
        type="hidden"
        {...register("horizontalMultipleChoice", { required: true })}
      />
    </div>
  );
};
