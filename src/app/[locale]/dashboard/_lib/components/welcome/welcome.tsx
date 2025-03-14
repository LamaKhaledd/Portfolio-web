"use client";
import React from "react";
import { Text, Box, Flex } from "@mantine/core";
import ArrowButton from "./arrow-button/arrow-button";
import { useGradientBackground } from "@hooks/gradient-background";
import { useWelcomeText } from "@dashboard/hooks/use-welcome";
import { MONT_SERRAT, SPACE_MONO } from "@dashboard/constants/fonts";
import { scrollDownByScreen } from "@dashboard/utils/scroll-down";

export const Welcome = () => {
  const { showArrow } = useWelcomeText();
  const background = useGradientBackground();

  return (
    <Flex
      mih="100vh"
      direction="column"
      justify="center"
      align="center"
      bg={background}
    >
      <Text
        id="name"
        lts={2}
        fw="bold"
        fz={{ base: "2.5rem", md: "5rem" }}
        my= {30}
        className={MONT_SERRAT.className}
      ></Text>

      <Text
        id="role"
        fw="bold"
        fz={{ base: "1rem", md: "2rem" }}
        className={SPACE_MONO.className}
      ></Text>

      <Box mih="3rem" my={30}>
        <ArrowButton show={showArrow} onClick={scrollDownByScreen} />
      </Box>
    </Flex>
  );
};
