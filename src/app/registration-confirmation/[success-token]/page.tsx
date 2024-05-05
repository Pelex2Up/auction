import { Suspense } from "react";
import VerificationData from "./VerificationData";

export default function RegistrationConfirmation({
  params,
}: {
  params: { "success-token": string };
}) {
  const { "success-token": token } = params;

  return (
    <Suspense fallback={<div>Проверка токена...</div>}>
      <VerificationData token={token} />
    </Suspense>
  );
}
