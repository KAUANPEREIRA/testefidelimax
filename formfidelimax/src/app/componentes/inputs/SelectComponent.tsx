import { Itens } from "@/types/Question";
import { useFormContext } from "react-hook-form";

type Props = {
  storeSelect?: Itens[];
};

export const SelectComponent = ({ storeSelect }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <select
        {...register("storeType", {
          setValueAs: (value: string) => (value === "" ? undefined : value),
          required: true,
        })}
        className="w-11/12 m-4 border border-gray-400 rounded-md outline-none font-poppins h-14 p-4"
      >
        <option value="">Selecione uma opção</option>
        {storeSelect &&
          storeSelect.map((item, index) => (
            <option key={index} value={item?.value}>
              {item?.description}
            </option>
          ))}
      </select>
      {errors.storeType && (
        <p className="text-red-500 text-xs m-4">Este campo é obrigatório</p>
      )}
    </div>
  );
};
