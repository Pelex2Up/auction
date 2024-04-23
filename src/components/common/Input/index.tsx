import {
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

type InputT = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  multiline: boolean;
} & DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;

export const Input: FC<InputT> = ({ multiline, ...rest }) => {
  return !multiline ? (
    <input
      {...rest}
      style={{ border: "1px solid #D9D9D9" }}
      className={`p-[12px] rounded bg-transparent text-sm font-normal ${rest.className}`}
    />
  ) : (
    <textarea
      {...rest}
      style={{ border: "1px solid #D9D9D9" }}
      className={`p-[12px] rounded bg-transparent text-sm font-normal ${rest.className}`}
    />
  );
};
