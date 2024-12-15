import React from "react";
import { Switch } from "@mantine/core";
import { ISwitchInput } from "./models/portfolio-switch.interface";

const PortfolioSwitchInput = ({
  schema,
  value,
  onChange,
}: {
  schema: ISwitchInput;
  value: boolean;
  onChange: ({ value }: { value: boolean }) => void;
}): React.ReactNode => {
  const { label, size = "md", color, disabled = false } = schema;

  const handleOnChange = (checked: boolean) => {
    if (onChange) {
      onChange({ value: checked });
    }
  };

  return (
    <Switch
      label={label}
      size={size}
      color={color}
      checked={value}
      onChange={(event) => handleOnChange(event.currentTarget.checked)}
      disabled={disabled}
    />
  );
};

export default PortfolioSwitchInput;
