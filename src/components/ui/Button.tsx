import type { ButtonHTMLAttributes, ReactNode } from "react";
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Button = ({ children, className, width = "w-full", ...rest }: IProps) => {
  return (
    <button
      {...rest}
      className={`text-white p-2 ${width} rounded-md ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
