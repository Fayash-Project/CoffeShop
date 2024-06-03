import { FC } from "react";

import { ReusableProps } from "../utils/interface";

const ReusableText: FC<ReusableProps> = ({ description }) => {
  return (
    <div>
      <div>ReusableText</div>
      <div>{description}</div>
    </div>
  );
};

export default ReusableText;
