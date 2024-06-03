import { FC } from "react";
import { InputProps } from "../utils/interface";

const Input: FC<InputProps> = ({
  id,
  type,
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="mb-4">
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 border py-2 border rounded-lg "
      />
    </div>
  );
};

export default Input;
