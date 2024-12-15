import React from "react";
import { Anchor } from "@mantine/core";
import { IAnchor } from "./models/portfolio-anchor.interface";

const PortfolioAnchor = ({
  schema = {},
  children = null,
  onClick,
}: {
  schema?: IAnchor;
  children?: React.ReactNode;
  onClick?: () => void;
}): React.ReactElement => {
  const {
    label = "",
    href = "#",
    color = "blue",
    size = "md",
    target = "_self",
    rel = "noopener noreferrer",
    fullWidth = false,
    textAlign = "center", 
  } = schema || {};

  return (
    <div style={{ width: fullWidth ? "100%" : "auto", textAlign }}>
      <Anchor
        href={href}
        onClick={onClick}
        c={color}
        size={size}
        target={target}
        rel={rel}
      >
        {label || children}
      </Anchor>
    </div>
  );
};

export default PortfolioAnchor;
