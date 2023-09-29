import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface CustomInputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  disabled: boolean;
  className: string;
}
const CInput: React.FC<CustomInputProps> = ({
  placeholder,
  value,
  onChange,
  onSubmit,
  disabled,
  className,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleIconClick = () => {
    if (value.trim()) {
      onSubmit();
    }
  };

  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        width: "100%",
      }}
    >
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={`flex-grow text-primary-white p-4 pr-7.5 border bg-primary-background ${
          value ? "border-primary-blue" : "border-primary-white"
        } text-white bg-1A1A1A w-full box-border rounded-full`}
      />
      <button
        disabled={disabled}
        onClick={handleIconClick}
        className={`absolute right-2.5 flex items-center justify-center p-1 rounded-full ${
          value.trim()
            ? "cursor-pointer bg-primary-blue"
            : "cursor-not-allowed bg-primary-blue"
        }`}
      >
        <FaArrowRight
          style={{
            color: value.trim() ? "#000000" : "#B3B3B3",
            fontSize: "24px",
          }}
        />
      </button>
    </div>
  );
};
export default CInput;
