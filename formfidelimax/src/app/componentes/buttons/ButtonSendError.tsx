type Props = {
  setButtonClicked: (value: string) => void;
};

export const ButtonSendError = ({ setButtonClicked }: Props) => {
  return (
    <button
      className="bg-yellow-500 w-full md:w-48 h-14 md:h-16 rounded-3xl font-bold text-base md:text-lg lg:text-xl flex-1 mx-2 my-2"
      type="submit"
      value="sendError"
      onClick={() => setButtonClicked("sendError")}
    >
      Enviar Erro
    </button>
  );
};
