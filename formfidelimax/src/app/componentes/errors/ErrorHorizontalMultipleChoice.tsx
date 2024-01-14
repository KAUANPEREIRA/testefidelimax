import { useFormContext } from "react-hook-form";

export const ErrorHorizontalMultipleChoice = () => {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      {errors.horizontalMultipleChoice && (
        <p className="text-red-500 m-6 text-xs">
          Por favor, selecione uma opção.
        </p>
      )}
    </div>
  );
};
