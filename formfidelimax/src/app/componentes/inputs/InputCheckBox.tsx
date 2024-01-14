import { Controller, useFormContext } from "react-hook-form";

type Props = {
  description: string;
  name: string;
};

export const InputCheckBox = ({ description, name }: Props) => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <label className="text-xs p-4">
      <Controller
        control={control}
        name={"inputCheckbox"}
        render={({ field }) => (
          <>
            <input
              type="checkbox"
              {...field}
              {...register("inputCheckbox", {
                required: true,
              })}
              value={description}
            />
            {description}
          </>
        )}
      />
    </label>
  );
};
