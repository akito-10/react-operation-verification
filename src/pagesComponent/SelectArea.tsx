import { ChangeEventHandler, useCallback, useState } from "react";
import { Select } from "../components/Select";

export const SelectArea = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const handleChangeSelectedItem: ChangeEventHandler<HTMLSelectElement> =
    useCallback((e) => {
      setSelectedItem(e.target.value);
    }, []);

  return <Select value={selectedItem} onChange={handleChangeSelectedItem} />;
};
