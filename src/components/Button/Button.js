import React from "react";
import "./Button.css";

const Button = ({ variant, className, children, ...props }) => {
  const content =
    typeof children === "string" ? children.toUpperCase() : children || "DEFAULT";

  const variants = {
    primary: "cstm-btn primary-btn",
    secondary: "cstm-btn secondary-btn",
  };
  
  return (
    <button {...props} 
    className={`${variants[variant]} ${className}`}>
      {content}
    </button>
  );
};

export default Button;
