import { FC } from "react";
import { ButtonProps } from "../utils/interface";

const Button: FC<ButtonProps> = ({ title, style, onClick }) => {
  return (
    <button onClick={onClick} className={style}>
      {title}
    </button>
  );
};

export default Button;
