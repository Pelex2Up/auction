import Image from "next/image";
import Person from "../../assets/images/feedbackPerson.png";
import BG from "../../assets/images/feedbackBG.png";
import { Input } from "../common/Input";
import Checkbox from "../common/checkbox";
import { Button } from "../common/buttons";

export default function FeedBack() {
  return (
    <div className="w-full relative">
      <Image
        src={Person}
        height={247}
        width={350}
        style={{
          objectFit: "scale-down",
          zIndex: "20",
          position: "relative",
          marginLeft: "20px",
        }}
        alt="feed-back"
      />
      <div className="w-full min-h-[215px] h-auto absolute top-[22px] left-0 z-0 bg-[#f3f3f3]">
        <Image src={BG} layout="fill" objectFit="cover" alt="background" />
        <div className="w-full py-[32px] pl-[390px] pr-[40px] relative z-20 flex flex-col gap-[10px]">
          <span className="text-sm leading-[16.8px] font-normal text-[#1D1E22]">
            Отправьте ваш электронный адрес и мы ответим
          </span>
          <div className="grid grid-cols-2 w-full gap-[20px]">
            <div className="grid grid-cols-2 w-full gap-[10px]">
              <Input
                multiline={false}
                placeholder="Имя"
                name="name"
                width={300}
              />
              <Input
                multiline={false}
                placeholder="Электронная почта"
                name="email"
              />
              <Input
                multiline
                rows={2}
                placeholder="Сообщение"
                className="col-span-2"
                name="message"
                aria-multiline
              />
            </div>
            <div className="flex flex-col gap-[20px]">
              <Checkbox
                label={
                  <p className="max-w-[230px] text-sm text-[#808080] font-normal">
                    Я принимаю условия{" "}
                    <a className="text-[#008001] cursor-pointer">
                      Пользовательского соглашения
                    </a>{" "}
                    и{" "}
                    <a className="text-[#008001] cursor-pointer">
                      Политику конфиденциальности
                    </a>
                  </p>
                }
              />
              <Button variant="primary" text="Отправить" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
