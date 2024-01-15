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
  const sendFakePost = async () => {
    try {
      await axios.post(`https://jsonplaceholder.typicode.com/posts/`, formData);
      setTimeout(() => {
        notifySucces();
      });
    } catch (error) {
      notifyError();
    }
  };
  sendFakePost();
};
