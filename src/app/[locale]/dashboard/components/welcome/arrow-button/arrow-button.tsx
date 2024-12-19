import React from "react";
import { IconArrowDown } from "@tabler/icons-react";
import { Transition } from "@mantine/core";
import PortfolioButton from "@components/button/portfolio-button";

const ArrowButton: React.FC<ArrowButtonProps> = ({ show, onClick }) => (
  <Transition
    mounted={show}
    transition="fade-down"
    duration={1000}
    timingFunction="ease"
  >
    {(styles) => (
      <PortfolioButton
        schema={{
          variant: "subtle",
        }}
        onClick={onClick}
        style={styles}
      >
        <IconArrowDown size={32} />
      </PortfolioButton>
    )}
  </Transition>
);

export default ArrowButton;
