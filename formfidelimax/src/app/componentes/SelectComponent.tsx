import { useFormContext } from "react-hook-form";

export const SelectComponent = () => {
  const { register } = useFormContext();
  return (
    <select
      className="w-11/12 m-4 border border-gray-400 rounded-md outline-none font-poppins h-14 p-4"
      {...register("storeType")}
    >
      <option disabled selected>
        Qual loja voçê frequenta ?
      </option>
      <option value="store1">Loja 1</option>
      <option value="store2">Loja 2</option>
      <option value="store3">Loja 3</option>
    </select>
  );
};
