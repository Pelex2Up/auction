import { FC, useState } from "react";
import Logo from "../../../assets/logo/logoModal.png";
import Image from "next/image";
import LoginElement from "./loginElement";
import ResetPassword from "./resetPassword";

type LoginT = {
  close: () => void;
};

export const LoginModal: FC<LoginT> = ({ close }) => {
  const [selected, setSelected] = useState<number>(1);

  const handleClose = () => {
    document.body.classList.remove(".modal-open");
    close();
  };

  return (
    <div
      className={
        selected !== 3
          ? "w-[501px] h-[530px] relative z-30"
          : "w-[501px] h-[430px] relative z-30"
      }
    >
      <div
        className={
          selected !== 3
            ? "w-[501px] h-[530px] left-0 top-0 absolute bg-white rounded shadow"
            : "w-[501px] h-[410px] left-0 top-0 absolute bg-white rounded shadow"
        }
      />
      <div className="w-[162.78px] h-[30px] left-[32px] top-[29px] absolute justify-center items-start gap-[6.67px] inline-flex">
        <Image src={Logo} alt="logo" />
        <div className="w-[51.11px] h-[30px] relative origin-top-left rotate-180 flex-col justify-start items-start flex" />
      </div>
      <div className="w-6 h-6 left-[445px] top-[32px] absolute justify-center items-center inline-flex cursor-pointer">
        <button
          onClick={handleClose}
          className="w-6 h-6 relative flex-col justify-start items-start flex"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.1406 5L4.99849 19.1421"
              stroke="#008001"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 5L19.1421 19.1421"
              stroke="#008001"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {selected <= 2 && (
        <ul className="top-[99px] absolute flex flex-row items-center w-full">
          <li
            style={
              selected === 1
                ? { borderBottom: "2px solid #1D1E22", color: "#1D1E22" }
                : { borderBottom: "2px solid #D9D9D9", color: "#D9D9D9" }
            }
            onClick={() => setSelected(1)}
            className="w-[50%] h-[55px] transition-all duration-500 flex items-center justify-center text-lg font-normal font-['SF Pro Text'] leading-snug tracking-tight cursor-pointer"
          >
            Вход в аккаунт
          </li>
          <li
            style={
              selected === 2
                ? { borderBottom: "2px solid #1D1E22", color: "#1D1E22" }
                : { borderBottom: "2px solid #D9D9D9", color: "#D9D9D9" }
            }
            onClick={() => setSelected(2)}
            className="w-[50%] h-[55px] transition-all duration-500 flex items-center justify-center text-lg font-normal font-['SF Pro Text'] leading-snug tracking-tight cursor-pointer"
          >
            Регистрация
          </li>
        </ul>
      )}
      {selected === 1 ? (
        <LoginElement changeAction={setSelected} />
      ) : selected === 3 ? (
        <ResetPassword />
      ) : (
        <></>
      )}
    </div>
  );
};
