import { Suspense } from "react";
import VerificationData from "./VerificationData";

export default function RegistrationConfirmation({
  params,
}: {
  params: { "success-token": string };
}) {
  const { "success-token": token } = params;

  return (
    <Suspense
      fallback={
        <div className="w-full h-full text-center">Проверка токена...</div>
      }
    >
      <VerificationData token={token} />
    </Suspense>
  );
}
