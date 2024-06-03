import { FC } from "react";
import { ContainerProps } from "../utils/interface";

const ReusableContainer: FC<ContainerProps> = ({ children }) => {
  return (
    <div>
      Reausable Container
      <div>{children}</div>
    </div>
  );
};

export default ReusableContainer;
