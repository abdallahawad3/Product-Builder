import type { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
  color: string;
}

const Circle = ({ color, ...rest }: IProps) => {
  return (
    <span
      className={`h-5 w-5 rounded-full block cursor-pointer `}
      style={{ background: color }}
      {...rest}
    />
  );
};

export default Circle;
