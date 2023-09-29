import { FC, MouseEvent } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outlined" | "borderless";
  children: React.ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
  className = "",
}) => {
  let backgroundColor = "bg-primary-blue";
  let textColor = "text-primary-black";
  let width = "";
  let border = "";

  switch (variant) {
    case "primary":
      backgroundColor = "bg-primary-white";
      textColor = "text-primary-black";
      width = "w-64";
      break;
    case "secondary":
      backgroundColor = "bg-primary-blue";
      textColor = "text-primary-black";
      break;
    case "outlined":
      backgroundColor = "bg-[#020202]";
      textColor = "text-primary-white";
      border = "border-solid border border-white";
      width = "w-32";
      break;
    case "borderless":
      textColor = "text-primary-blue";
      width = "w-32";
      backgroundColor = "bg-[#020202]";
      break;
  }

  return (
    <button
      className={`px-4 py-2 w-64 h-14 text- rounded-full ${backgroundColor} ${textColor} ${border} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
