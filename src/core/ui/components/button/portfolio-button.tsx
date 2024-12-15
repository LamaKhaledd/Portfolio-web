import React from "react";
import { Button, px } from "@mantine/core";
import { IButton } from "./models/portfolio-button.interface";

const PortfolioButton = ({
  schema = {},
  children = null,
  onClick,
}: {
  schema?: IButton;
  children?: React.ReactNode; 
  onClick: () => void;
}): React.ReactElement => {
  const {
    label = "",
    type = "button",
    color = "pink",
    size = "compact-md",
    variant = "gradient",
    rightSection,
    leftSection,
    fullWidth = false,
    radius=50,
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
      gradient={{ from: "blue", to: "black", deg: 135 }} 
      radius={radius} 
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
