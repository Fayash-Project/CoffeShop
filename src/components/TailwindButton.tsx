import { FC } from "react";

import { TailwindButtonProps } from "../utils/interface";

const TailwindButton: FC<TailwindButtonProps> = ({
  id,
  title,
  type,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full h-10 bg-blue-500 hover:bg-blue-700 text-white"
      id={id}
    >
      {title}
    </button>
  );
};

export default TailwindButton;
