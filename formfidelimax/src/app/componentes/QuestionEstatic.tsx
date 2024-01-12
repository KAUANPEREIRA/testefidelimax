import { useFormContext } from "react-hook-form";

export const QuestionEstatic = () => {
  const { register } = useFormContext();
  return (
    <div>
      <p className="text-sm font-poppins m-4 font-medium">Pergunta de texto?</p>
      <textarea
        {...register("questionTextTwo")}
        className="w-11/12 m-4 border border-gray-400 rounded-md h-28 outline-none font-poppins p-4"
        placeholder="Digite aqui..."
      />
    </div>
  );
};
