import { Inputs } from "@/types/Inputs";
import axios from "axios";
import { toast } from "react-toastify";

const notifyError = (err: string) => {
  toast.error(err);
};

export const useSendError = (data: Inputs) => {
  return axios
    .post(
      `https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey-post-error.json`,
      data
    )
    .then((res) => {
      alert("sucesso");
    })
    .catch((err: any) => {
      notifyError(err.message);
    });
};
