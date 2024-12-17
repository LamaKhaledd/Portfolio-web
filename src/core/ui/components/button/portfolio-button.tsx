import React from "react";
import { Button, px } from "@mantine/core";
import { IPortfolioButton } from "./models/portfolio-button.interface";
const PortfolioButton = ({
  schema = {},
  children = null,
  onClick,
  loading = false,
}: {
  schema?: IPortfolioButton;
  children?: React.ReactNode;
  onClick?: () => void;
  loading?: boolean;
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
      styles={(theme) => ({
        root: {
          boxShadow: theme.shadows.md,
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: theme.shadows.lg,
          },
        },
      })}
    >
      {label || children}
    </Button>
  );
};
export default PortfolioButton;