import React from "react";
import styles from "./ButtonFood.module.css";

type Props = {
  isChecked: boolean;
  onCheckboxChange: (checked: boolean) => void; // Function to notify parent of the checkbox change
  disableStatus: boolean;
};

export default function ButtonFood({
  isChecked,
  onCheckboxChange,
  disableStatus,
}: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onCheckboxChange(event.target.checked); // Notify the parent about the change
  };

  return (
    <div className={`${styles.checkGroup}`}>
      <input
        type="checkbox"
        name="check"
        id={`${styles.check}`}
        checked={isChecked} // Controlled by the parent component
        onChange={handleChange} // Call the parent's handler on change
        className="cursor-pointer"
        disabled={disableStatus}
      />
      <label htmlFor={`${styles.check}`} className="cursor-pointer">
        <span className={`${styles.toggle}`}></span>
      </label>
    </div>
  );
}
