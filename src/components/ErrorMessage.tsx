interface IProps {
  msg: string;
}

const ErrorMessage = ({ msg }: IProps) => {
  return (
    msg && (
      <span className="block text-red-600 font-semibold text-sm">{msg}</span>
    )
  );
};

export default ErrorMessage;
