import { Inputs } from "@/types/Inputs";
import axios from "axios";
import { toast } from "react-toastify";

const notifySucces = () => {
  toast.success("Dados enviados com Successo");
};

const notifyError = () => {
  toast.error("Desculpe ocorreu um erro inesperado,tente novamente");
};

export const UseSendSucces = (data: Inputs) => {
  axios
    .post(
      `https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey-post-success.json`,
      data
    )
    .then(() => {
      notifySucces();
    })
    .catch(() => {
      notifyError();
    });
};
