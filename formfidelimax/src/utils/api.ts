import { Questions } from "@/types/Question";
import axios from "axios";

export const getQuestions = async (): Promise<Questions> => {
  const result = await axios.get(
    "https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey.json "
  );
  return result.data;
};
