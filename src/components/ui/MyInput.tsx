import type { InputHTMLAttributes } from "react";
// import type { IInputs } from "../../interfaces";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  // input: IInputs;
}

const MyInput = ({ ...rest }: IProps) => {
  return (
    <input
      {...rest}
      className={
        "shadow-md  rounded-md py-3 text-md px-3 outline-2 focus:outline-blue-600 focus:border-none border border-gray-400"
      }
    />
  );
};

export default MyInput;
