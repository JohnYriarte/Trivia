import React from "react";
import "./Button.css";

const Button = ({ variant, className, children, ...props }) => {
  const content =
    typeof children === "string" ? children.toUpperCase() : children || "DEFAULT";

  const variants = {
    primary: "primary-button",
    secondary: "secondary-button",
  };
  
  return (
    <button {...props} 
    className={`${variants[variant]} ${className}`}>
      {content}
    </button>
  );
};

export default Button;
