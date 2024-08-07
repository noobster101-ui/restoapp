import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const LabelInput: React.FC<InputProps> = ({ label, className, ...props }) => {
  return (
    <div className="flex flex-col px-2">
      <label
        className="mb-1 text-sm"
        style={{ padding: "0 4px 5px" }}
      >
        {label}
      </label>
      <input
        className={`border rounded-full px-3 py-2 ${className}`}
        {...props}
      />
    </div>
  );
};

export default LabelInput;
