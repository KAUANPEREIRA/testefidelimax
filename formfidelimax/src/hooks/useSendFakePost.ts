import { Inputs } from "@/types/Inputs";
import axios from "axios";
import { toast } from "react-toastify";

const notifySucces = () => {
  toast.success("Dados enviados com Successo");
};

const notifyError = () => {
  toast.error("Formulário invalido, tente novamente");
};

export const useSendFakePost = (formData: Inputs) => {
  axios
    .post(`https://jsonplaceholder.typicode.com/posts/`, formData)
    .then((res) => {
      setTimeout(() => {
        notifySucces();
      });
    })
    .catch((err) => {
      notifyError();
    });
};
