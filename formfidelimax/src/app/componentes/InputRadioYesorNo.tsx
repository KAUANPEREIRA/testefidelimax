import { useFormContext } from "react-hook-form";

export const InputRadioYesorNo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="m-4 p-2">
      <label className="text-xs font-poppins">
        <input
          type="radio"
          value="Sim"
          {...register("onlyChoice", {
            required: "Por favor, escolha uma opção",
          })}
          className="mr-2"
        />
        Sim
      </label>
      <label className="text-xs font-poppins ml-4">
        <input
          type="radio"
          value="Não"
          {...register("onlyChoice", {
            required: "Por favor, escolha uma opção",
          })}
          className="mr-2"
        />
        Não
      </label>
    </div>
  );
};
