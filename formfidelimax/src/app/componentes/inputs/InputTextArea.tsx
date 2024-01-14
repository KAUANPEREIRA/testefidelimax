import { useFormContext } from "react-hook-form";

type Props = {
  nameInput: string;
  mandatory: boolean;
  valueDefault?: string;
};

//componente reutilizavél

export const InputTextArea = ({
  nameInput,
  mandatory,
  valueDefault,
}: Props) => {
  const { register } = useFormContext();
  return (
    <div>
      <textarea
        defaultValue={valueDefault}
        {...register(nameInput, { required: mandatory })}
        className="w-11/12 m-4 border border-gray-400 rounded-md h-28 outline-none font-poppins p-4"
        placeholder="Digite aqui..."
      />
    </div>
  );
};
