import { useFormContext } from "react-hook-form";

export const ErrorMensagerRadio = () => {
  const {
    formState: { errors },
  } = useFormContext();

  const hasError = errors.inputRadiosNumber !== undefined;

  return (
    <div>
      {hasError && (
        <p className="text-red-500 text-xs">Este campo é obrigatório.</p>
      )}
    </div>
  );
};
