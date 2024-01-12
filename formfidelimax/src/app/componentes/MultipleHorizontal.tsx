import { useState } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  index: number;
  description: string;
};

export const MultipleHorizontal = ({ index, description }: Props) => {
  const { register, setValue } = useFormContext();
  const [selectedDescription, setSelectedDescription] = useState<string | null>(
    null
  );

  const handleDivClick = () => {
    setValue("horizontalMultipleChoice", description);

    setSelectedDescription(description);
  };

  return (
    <div
      className={`w-24 h-7 rounded-3xl border border-gray-400 text-xs p-1 mr-2 text-center cursor-pointer ${
        selectedDescription === description ? "bg-blue-500 text-white" : ""
      }`}
      key={index}
      onClick={handleDivClick}
    >
      {description}
    </div>
  );
};
