"use client";
import Image from "next/image";
import mail from "@/assets/images/mailSuccess.png";
import warning from "@/assets/images/warning.png";
import { useEffect, useState } from "react";

// eslint-disable-next-line @next/next/no-async-client-component
const VerificationData = async ({ token }: { token: string }) => {
  const [validationData, setValidationData] = useState<string>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://auction.magnetica.by/api/email-verify/?token=${token}`
      );
      if (!response.ok) {
        setValidationData("Ошибка валидации электронной почты. Неверный токен");
      } else {
        setValidationData("Email успешно подтвержден");
      }
      const data = await response.json();
    };
    fetchData();
  }, [token]);

  return (
    <div className="w-full h-full py-[50px] px-[90px] flex flex-col items-center transition-all duration-200 ease-in">
      {validationData &&
      validationData !==
        "Ошибка валидации электронной почты. Неверный токен" ? (
        <Image src={mail} width={99} height={99} alt="mail-success" />
      ) : (
        <Image src={warning} width={99} height={99} alt="mail-not-success" />
      )}
      <div className="w-full flex-col justify-start items-center gap-1.5 inline-flex">
        <div className="text-zinc-900 text-lg font-medium font-['SF Pro Text'] leading-snug">
          {validationData}
        </div>
      </div>
    </div>
  );
};

export default VerificationData;
