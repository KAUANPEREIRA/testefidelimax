import { Controller, useFormContext } from "react-hook-form";

type Props = {
  description: string;
  name: string;
};

export const InputCheckBox = ({ description, name }: Props) => {
  const { control } = useFormContext();

  return (
    <label className="text-xs p-4">
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <>
            <input type="checkbox" {...field} value={description} />
            {description}
          </>
        )}
      />
    </label>
  );
};
