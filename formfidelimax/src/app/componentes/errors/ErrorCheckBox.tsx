import { useFormContext } from "react-hook-form";

export const ErrorCheckBox = () => {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      {errors.inputCheckbox && (
        <p className="text-red-500 m-6 text-xs">
          Por favor, selecione uma opção.
        </p>
      )}
    </div>
  );
};
