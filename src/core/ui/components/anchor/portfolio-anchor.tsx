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
    href = "",
    color = "blue",
    size = "sm",
    target = "_blank",
    fullWidth = false,
    textAlign = "center", 
    rel = "noopener noreferrer",
  } = schema || {};

  return (
    <div style={{ width: fullWidth ? "100%" : "auto", textAlign }}>
      <Anchor
        href={href}
        onClick={onClick}
        c={color}
        rel={rel}
      >
        {label || children}
      </Anchor>
    </div>
  );
};

export default PortfolioAnchor;
