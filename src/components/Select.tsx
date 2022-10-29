import { ChangeEventHandler, FC } from "react";

type Props = {
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
};

export const Select: FC<Props> = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      <option value={""}></option>
      <option value={"option1"}>option1</option>
      <option value={"option2"}>option2</option>
      <option value={"option3"}>option3</option>
    </select>
  );
};
