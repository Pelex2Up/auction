import DefaultLink from "@/components/common/DefaultLink";
import { Input } from "@/components/common/Input";
import { Button } from "@/components/common/buttons";
import Checkbox from "@/components/common/checkbox";
import { Dispatch, FC, SetStateAction } from "react";

interface IElement {
  changeAction: Dispatch<SetStateAction<number>>;
}

export const LoginElement: FC<IElement> = ({ changeAction }) => {
  return (
    <>
      <div className="w-[315px] h-[63px] left-[93px] top-[179px] absolute flex-col justify-center items-start gap-1.5 inline-flex">
        <div className="justify-start items-start gap-0.5 inline-flex">
          <label className="text-zinc-900 text-sm font-normal font-['SF Pro Text'] leading-[16.80px] tracking-tight">
            Электронная почта
          </label>
        </div>
        <Input
          multiline={false}
          placeholder="Ваша электронная почта"
          className="w-full"
          name="email"
          type="email"
        />
      </div>
      <div className="w-[315px] h-[63px] left-[93px] top-[260px] absolute flex-col justify-center items-start gap-1.5 inline-flex">
        <div className="justify-start items-start gap-0.5 inline-flex">
          <label className="text-zinc-900 text-sm font-normal font-['SF Pro Text'] leading-[16.80px] tracking-tight">
            Пароль
          </label>
        </div>
        <Input
          multiline={false}
          secure={true}
          placeholder="Ваш пароль"
          className="w-full"
          name="password"
        />
      </div>
      <div className="left-[93px] top-[347px] absolute justify-start items-center gap-[93px] inline-flex">
        <div className="justify-start items-center gap-[11px] flex">
          <Checkbox label />
          <span className="text-zinc-500 text-xs font-normal font-['SF Pro Text'] leading-[17px]">
            Запомнить меня
          </span>
        </div>
        <DefaultLink
          onClick={() => changeAction(3)}
          text="Забыли пароль?"
          style={{
            color: "#008001",
            fontSize: "12px",
            letterSpacing: "1%",
            lineHeight: "14.4px",
            borderBottom: "1px solid #008001",
            cursor: "pointer",
          }}
        />
      </div>
      <Button
        text="Войти"
        style={{ width: "315px" }}
        className="left-[93px] top-[404px] absolute"
      />
      <div className="left-[129px] top-[468px] absolute justify-start items-center gap-2 inline-flex">
        <div className="text-zinc-500 text-base font-normal font-['SF Pro Text'] leading-snug">
          Еще нет аккаунта?
        </div>
        <DefaultLink
          onClick={() => changeAction(2)}
          text="Регистрация"
          style={{ fontSize: "16px", color: "#008001" }}
        />
      </div>
    </>
  );
};

export default LoginElement;
