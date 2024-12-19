import React from "react";
import { Button, px } from "@mantine/core";
import { IPortfolioButton } from "./models/portfolio-button.interface";
const PortfolioButton = ({
  schema = {},
  children = null,
  onClick,
  loading = false,
  style,
}: {
  schema?: IPortfolioButton;
  children?: React.ReactNode;
  onClick?: () => void;
  loading?: boolean;
  style?: React.CSSProperties;
}): React.ReactElement => {
  const {
    label,
    type = "button",
    color = "blue",
    size = "compact-md",
    variant = "filled",
    rightSection,
    leftSection,
    fullWidth = false,
    radius = "xs",
  } = schema || {};

  return (
    <Button
      variant={variant}
      size={size}
      type={type}
      color={color}
      rightSection={rightSection}
      leftSection={leftSection}
      onClick={onClick}
      fullWidth={fullWidth}
      radius={radius}
      loading={loading} 
      style={style}
    >
      {label || children}
    </Button>
  );
};
export default PortfolioButton;