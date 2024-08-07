import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  className,
  children,
  ...props
}) => {
  return (
    <div className="flex flex-col px-2">
      <label
        className="mb-1 text-sm"
        style={{ padding: "0 4px 5px" }}
      >
        {label}
      </label>
      <select
        className={`border rounded-full px-3 py-2 ${className}`}
        {...props}
      >
        {children}
      </select>
    </div>
  );
};

interface SelectItemProps
  extends React.OptionHTMLAttributes<HTMLOptionElement> {}

export const SelectItem: React.FC<SelectItemProps> = ({
  children,
  ...props
}) => {
  return <option {...props}>{children}</option>;
};

export default Select;
