"use client";
import React, { useEffect, useState } from "react";
import { Text, Box, Flex } from "@mantine/core";
import { scrollDownByScreen } from "@dashboard/utils/scroll-down";
import { typeTextEffect } from "@dashboard/utils/text-typing";
import { MONT_SERRAT, SPACE_MONO } from "@dashboard/constants/welcome-fonts";
import { WELCOME_USER_NAME, WELCOME_USER_ROLE } from "@dashboard/constants/dashboard-data";
import ArrowButton from "./arrow-button/arrow-button";
import { useGradientBackground } from "@/core/ui/hooks/gradient-background";

export const Welcome = () => {
  const [showArrow, setShowArrow] = useState(false);
  const background = useGradientBackground();

  useEffect(() => {
    const typingSpeed = 150;
    const cleanUp = typeTextEffect(
      WELCOME_USER_NAME,
      WELCOME_USER_ROLE,
      typingSpeed,
      setShowArrow,
      "name",
      "role"
    );

    return cleanUp;
  }, []);

  return (
    <Flex
      h="100vh"
      direction="column"
      justify="center"
      align="center"
      bg={background}
    >
      <Text
        id="name"
        lts={2}
        fw="bold"
        size="5rem"
        my={30}
        className={MONT_SERRAT.className}
      ></Text>

      <Text
        id="role"
        fw="bold"
        size="2rem"
        className={SPACE_MONO.className}
      ></Text>

      <Box
        id="arrow-button"
        h="3rem"
        my={30}
        style={{ display: showArrow ? "block" : "none" }}
      >
        <ArrowButton show={showArrow} onClick={scrollDownByScreen} />
      </Box>
    </Flex>
  );
};
