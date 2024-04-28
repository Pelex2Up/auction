"use client";
import DefaultLink from "@/components/common/DefaultLink";
import { Input } from "@/components/common/Input";
import { Button } from "@/components/common/buttons";
import Checkbox from "@/components/common/checkbox";
import { PathE } from "@/enum/pathE";
import { useRouter } from "next/navigation";
import {
  ChangeEvent,
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useState,
} from "react";

interface IElement {
  changeAction: Dispatch<SetStateAction<number>>;
  close: () => void;
}

export const RegistrationElement: FC<IElement> = ({ changeAction, close }) => {
  const router = useRouter();
  const [step, setStep] = useState<number>(1);
  const [errors, setErrors] = useState<{ email: string; pass: string }>({
    email: "",
    pass: "",
  });

  const handleEmailChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: "",
    }));
  };

  const handlePasswordChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      pass: "",
    }));
  };

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formdata = new FormData(form);
    const resp = await fetch("https://auction.magnetica.by/api/signup/", {
      method: "POST",
      body: formdata,
    });
    if (!resp.ok) {
      const err = await resp.json();
      if (err.email && err.email.length > 0) {
        setErrors((prevErrors) => ({ ...prevErrors, email: err.email }));
      }
    } else if (resp.ok) {
      router.push(PathE.RegistrationConfirm + `/${formdata.get("email")}`);
      close();
    }
  };

  return step === 1 ? (
    <form onSubmit={submitForm}>
      <div className="flex flex-col gap-[20px] justify-start w-full top-[159px] relative px-[93px] py-[30px]">
        <div className="w-full flex flex-col gap-1">
          <label className="text-zinc-900 text-sm font-normal font-['SF Pro Text'] leading-[16.80px] tracking-tight">
            Электронная почта
          </label>
          <Input
            multiline={false}
            placeholder="Ваша электронная почта"
            className="w-full"
            name="email"
            id="email"
            type="text"
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="text-zinc-900 text-sm font-normal font-['SF Pro Text'] leading-[16.80px] tracking-tight">
            Пароль
          </label>
          <Input
            multiline={false}
            placeholder="Введите ваш пароль"
            className="w-full"
            type="password"
            name="password"
            id="password"
            onChange={handlePasswordChange}
            required
            secure
          />
          <label className="text-zinc-500 text-sm font-normal font-['SF Pro Text'] leading-[16.80px] tracking-tight">
            Введите не менее 8 символов
          </label>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="text-zinc-900 text-sm font-normal font-['SF Pro Text'] leading-[16.80px] tracking-tight">
            Повторите пароль
          </label>
          <Input
            multiline={false}
            name="password_confirmation"
            placeholder="Введите ваш пароль"
            className="w-full"
            onChange={handlePasswordChange}
            type="password"
            required
            id="password_confirmation"
            secure
          />
        </div>
        <Checkbox
          required
          label={
            <p className="max-w-[230px] text-sm text-[#808080] font-normal">
              Я принимаю условия{" "}
              <DefaultLink
                text="Пользовательского соглашения"
                style={{ color: "#008001" }}
              />
            </p>
          }
        />
        <Button
          type="submit"
          text="Создать аккаунт"
          style={{ width: "100%" }}
        />
        <div className="w-full h-[22px] justify-center items-center gap-2 flex">
          <label className="text-zinc-500 text-base font-normal font-['SF Pro Text'] leading-snug">
            Уже есть аккаунт?
          </label>
          <DefaultLink
            text="Войти"
            href="#"
            onClick={() => changeAction(1)}
            style={{
              color: "#008001",
              fontSize: 16,
              fontFamily: "SF Pro Text",
              fontWeight: "400",
              borderBottom: "1px solid #008001",
              lineHeight: "18px",
            }}
          />
        </div>
      </div>
    </form>
  ) : (
    <></>
  );
};

export default RegistrationElement;
