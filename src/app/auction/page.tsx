import Image from "next/image";

export default function Uipage() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-3">
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
      Hello world
    </div>
  );
}
