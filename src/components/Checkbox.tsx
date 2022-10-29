import { FC, ReactNode } from "react";

type Props = {
  checked: boolean;
  item: ReactNode;
  onChange: () => void;
};

export const Checkbox: FC<Props> = ({ checked, item, onChange }) => {
  return (
    <label>
      <input type={"checkbox"} checked={checked} onChange={onChange} />
      {item}
    </label>
  );
};
