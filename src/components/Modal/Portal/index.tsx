import { FC, ReactNode, useCallback, useEffect, useState } from "react";

interface IPortal {
  children: ReactNode;
  close: () => void;
}

export const Portal: FC<IPortal> = ({ children, close }) => {
  const [container, setContainer] = useState<Element | null>();

  const handleClose = useCallback(() => {
    if (container) {
      document.body.classList.remove("modal-open");
      close();
    }
  }, [close, container]);

  useEffect(() => {
    if (!container) {
      setContainer(document.querySelector("#overlay"));
    }
    if (container) {
      document.body.classList.add("modal-open");
      container.addEventListener("click", handleClose);
    }
  }, [container, handleClose]);

  return (
    <>
      <div
        id="overlay"
        className="w-full h-full absolute top-0 left-0 right-0 bottom-0 z-20 backdrop-blur-sm overflow-hidden"
      ></div>
      <div className="w-screen h-screen flex absolute top-0 left-0 bottom-0 right-0 justify-center items-center overflow-auto">
        {children}
      </div>
    </>
  );
};

export default Portal;
