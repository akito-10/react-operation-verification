import { useState } from "react";
import { Checkbox } from "../components/Checkbox";

export const CheckboxArea = () => {
  const [checked, setChecked] = useState(false);
  const handleChangeChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Checkbox checked={checked} item={"hoge"} onChange={handleChangeChecked} />
  );
};
