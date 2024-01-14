import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import MyLogo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <div className="h-80 bg-gray-900 ">
      <header className="w-screen max-w-screen-xl mx-auto flex justify-between">
        <div className="flex mt-5">
          <Image src={MyLogo} alt="Sua Logo" />
        </div>
        <div className="flex cursor-pointer items-center mt-5">
          <div className="w-10 h-10 rounded-full bg-gray-800 flex justify-center items-center text-white">
            F
          </div>
          <div className="flex justify-center items-center text-white text-xs font-poppins">
            Fabio C Pinto
          </div>
          <MdKeyboardArrowDown style={{ color: "white" }} />
        </div>
      </header>
      <div className="text-gray-400 text-xs font-poppins font-medium p-12">
        Pesquisa de satisfação
      </div>
    </div>
  );
};
