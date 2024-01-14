"use client";
import { useSendError } from "@/hooks/useSendErro";
import { useSendFakePost } from "@/hooks/useSendFakePost";
import { useSendSucces } from "@/hooks/useSendSucces";
import { Inputs } from "@/types/Inputs";
import { Itens } from "@/types/Question";
import { getQuestions } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { ButtonFakePost } from "./buttons/ButtonFakePost";
import { ButtonSendError } from "./buttons/ButtonSendError";
import { ButtonSendSuccess } from "./buttons/ButtonSendSuccess";
import { ErrorCheckBox } from "./errors/ErrorCheckBox";
import { ErrorHorizontalMultipleChoice } from "./errors/ErrorHorizontalMultipleChoice";
import { ErrorMensagerRadio } from "./errors/ErrorMensagerRadio";
import { QuestionEstatic } from "./estatics/QuestionEstatic";
import { TextEstatic } from "./estatics/TextEstatic";
import { TitleEstatic } from "./estatics/TitleEstatic";
import { InputCheckBox } from "./inputs/InputCheckBox";
import { InputRadioYesorNo } from "./inputs/InputRadioYesorNo";
import { InputRadiosNumber } from "./inputs/InputRadiosNumbers";
import { InputTextArea } from "./inputs/InputTextArea";
import { MultipleHorizontal } from "./inputs/MultipleHorizontal";
import { SelectComponent } from "./inputs/SelectComponent";
import { Star } from "./inputs/stars";

export const Main = () => {
  const methods = useForm<Inputs>();
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = methods;

  const items = [0, 1, 2, 3, 4];
  const inputRadios = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //chamada api utilizando reactQuery
  const query = useQuery({ queryKey: ["questions"], queryFn: getQuestions });

  const [activeIndex, setActiveIndex] = useState<number>();
  const [radioDefaultValue, setRadioDefaultValue] = useState<number>();
  const [storeSelect, setStoreSelect] = useState<Itens[]>();
  const [buttonClicked, setButtonClicked] = useState("");

  const handleFormSubmit = (data: Inputs) => {
    if (buttonClicked === "sendFakePost") {
      useSendFakePost(data);
    } else if (buttonClicked === "sendError") {
      useSendError(data);
    } else {
      useSendSucces(data);
    }
  };

  useEffect(() => {
    if (query?.data) {
      const questionWithType1 = query?.data?.itens.find(
        (question) => question?.typeQuestion === 1
      );

      const radioValueDefault = query?.data?.itens.find(
        (question) => question?.typeQuestion === 2
      );

      const storeSelect = query?.data?.itens?.find(
        (question) => question?.typeQuestion === 4
      );
      setStoreSelect(storeSelect?.itens);
      setRadioDefaultValue(radioValueDefault?.answerValue);

      setActiveIndex(questionWithType1?.answerValue);
    }
  }, [query?.data]);

  const onClickStars = (index: number) => {
    setActiveIndex(index);
    setValue("stars", index + 1);
  };

  return (
    <div className="-mt-44">
      <h1 className="text-4xl text-center text-white font-poppins font-semibold mb-5">
        Pesquisa de Satisfação
      </h1>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="w-1/2 bg-white rounded-lg m-auto p-8">
            {query.isLoading && "carregando..."}
            {query?.data?.itens.map((question, index) => {
              return (
                <div key={index}>
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
                    <div className="flex m-4 flex-wrap">
                      {items.map((item, index) => {
                        return (
                          <Star
                            key={index}
                            {...register("stars")}
                            onClick={(event: any) => {
                              event.preventDefault();
                              onClickStars(index);
                            }}
                            isActive={index <= activeIndex!}
                          />
                        );
                      })}
                    </div>
                  )}
                  {question?.typeQuestion === 2 && (
                    <div className="m-4">
                      <div className="flex m-4 flex-wrap">
                        {inputRadios.map((radio, index) => (
                          <InputRadiosNumber
                            key={index}
                            radio={radio}
                            index={index}
                            valueDefault={radioDefaultValue}
                          />
                        ))}
                      </div>

                      <ErrorMensagerRadio />
                    </div>
                  )}

                  {question?.typeQuestion === 3 && !question?.answerValue && (
                    <InputTextArea
                      nameInput="reasonForEvaluation"
                      mandatory={false}
                    />
                  )}

                  {question?.typeQuestion === 3 && question?.answerValue && (
                    <InputTextArea
                      nameInput="questionTextOne"
                      mandatory={false}
                      valueDefault={question?.answerValue}
                    />
                  )}

                  {question?.typeQuestion === 4 && (
                    <SelectComponent storeSelect={storeSelect} />
                  )}

                  {question?.typeQuestion === 5 && <InputRadioYesorNo />}

                  {question?.typeQuestion === 6 && question?.horizontal && (
                    <div>
                      <div className="flex flex-row m-4 flex-wrap">
                        {question?.itens?.map((item, index) => (
                          <MultipleHorizontal
                            key={index}
                            index={index}
                            description={item?.description}
                          />
                        ))}
                      </div>

                      <ErrorHorizontalMultipleChoice />
                    </div>
                  )}

                  {question?.typeQuestion === 6 && !question?.horizontal && (
                    <div className="flex flex-col">
                      {question?.itens?.map((item, index) => {
                        return (
                          <InputCheckBox
                            key={index}
                            description={item.description}
                            name={item?.description}
                          />
                        );
                      })}
                      <ErrorCheckBox />
                    </div>
                  )}
                </div>
              );
            })}

            {!query?.isLoading && (
              <div>
                <QuestionEstatic />

                <footer className="flex flex-col md:flex-row justify-between flex-wrap">
                  <ButtonFakePost setButtonClicked={setButtonClicked} />
                  <ButtonSendError setButtonClicked={setButtonClicked} />
                  <ButtonSendSuccess />
                </footer>
              </div>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
