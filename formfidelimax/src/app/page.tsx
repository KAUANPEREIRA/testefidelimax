import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "./componentes/Header";
import { Main } from "./componentes/Main";

export default function Home() {
  return (
    <div className="bg-gray-200 flex flex-col">
      <ToastContainer />
      <Header />
      <Main />
    </div>
  );
}
