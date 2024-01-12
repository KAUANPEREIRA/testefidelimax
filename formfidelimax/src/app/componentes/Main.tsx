"use client";
import { Inputs } from "@/types/Inputs";
import { getQuestions } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { InputCheckBox } from "./InputCheckBox";
import { InputRadioYesorNo } from "./InputRadioYesorNo";
import { InputRadiosNumber } from "./InputRadiosNumbers";
import { InputTextArea } from "./InputTextArea";
import { MultipleHorizontal } from "./MultipleHorizontal";
import { QuestionEstatic } from "./QuestionEstatic";
import { SelectComponent } from "./SelectComponent";
import { TextEstatic } from "./TextEstatic";
import { TitleEstatic } from "./TitleEstatic";
import { Star } from "./stars";

export const Main = () => {
  const methods = useForm<Inputs>();
  const { handleSubmit, register, setValue, getValues } = methods;

  const handleFormSubmit = (data: Inputs) => {
    console.log({ data });
  };
  const items = [0, 1, 2, 3, 4];
  const inputRadios = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const query = useQuery({ queryKey: ["questions"], queryFn: getQuestions });
  const [activeIndex, setActiveIndex] = useState<number>();

  useEffect(() => {
    if (query?.data) {
      const questionWithType1 = query?.data?.itens.find(
        (question) => question?.typeQuestion === 1
      );

      setActiveIndex(questionWithType1?.answerValue);
    }
  }, [query?.data]);

  const onClickStars = (index: number) => {
    setActiveIndex(index);

    setValue("stars", index + 1);
  };

  console.log("console", query.data);

  return (
    <div className="-m-44">
      <h1 className="text-4xl text-center text-white font-poppins font-semibold mb-5">
        Pesquisa de Satisfação
      </h1>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="w-1/2 bg-white rounded-lg m-auto p-8">
            {query.isLoading && "carregando..."}
            {query?.data?.itens.map((question, index) => {
              return (
                <div>
                  {(question?.answerValue === 5 ||
                    question?.answerValue === 9) && <TitleEstatic />}
                  <p className="text-sm font-poppins m-4 font-medium">
                    {question?.answerValue === 9 ? (
                      <TextEstatic />
                    ) : (
                      question?.content
                    )}
                  </p>

                  {question?.typeQuestion === 1 && (
                    <div className="flex m-4">
                      {items.map((item, index) => {
                        return (
                          <Star
                            {...register("stars")}
                            onClick={() => onClickStars(index)}
                            isActive={index <= activeIndex!}
                          />
                        );
                      })}
                    </div>
                  )}
                  {question?.typeQuestion === 2 && (
                    <div className="flex m-4">
                      {inputRadios.map((radio, index) => (
                        <InputRadiosNumber radio={radio} index={index} />
                      ))}
                    </div>
                  )}

                  {question?.typeQuestion === 3 && !question?.answerValue && (
                    <InputTextArea nameInput="reasonForEvaluation" />
                  )}

                  {question?.typeQuestion === 3 && question?.answerValue && (
                    <InputTextArea nameInput="questionTextOne" />
                  )}

                  {question?.typeQuestion === 4 && <SelectComponent />}

                  {question?.typeQuestion === 5 && <InputRadioYesorNo />}

                  {question?.typeQuestion === 6 && question?.horizontal && (
                    <div className="flex flex-row m-4">
                      {question?.itens?.map((item, index) => (
                        <MultipleHorizontal
                          index={index}
                          description={item?.description}
                        />
                      ))}
                    </div>
                  )}

                  {question?.typeQuestion === 6 && !question?.horizontal && (
                    <div className="flex flex-col">
                      {question?.itens?.map((item, index) => {
                        return (
                          <InputCheckBox
                            description={item.description}
                            name={item?.description}
                          />
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {!query?.isLoading && (
              <div>
                <QuestionEstatic />
                <button
                  type="submit"
                  className="bg-yellow-500 w-48 h-14 rounded-3xl font-bold"
                >
                  Enviar
                </button>
                <button className="bg-yellow-500 w-48 h-14 rounded-3xl font-bold">
                  Enviar fake post
                </button>
                <button className="bg-yellow-500 w-48 h-14 rounded-3xl font-bold">
                  Enviar Erro
                </button>
                <button className="bg-yellow-500 w-48 h-14 rounded-3xl font-bold">
                  Enviar Sucesso
                </button>
              </div>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
