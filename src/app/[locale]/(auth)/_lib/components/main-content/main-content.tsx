"use client";
import { Box, Flex } from "@mantine/core";
import Layout from "../auth-layout/layout";

const MainContent = () => {
  return (
    <Flex
      justify="center"
      direction="column"
      bg="linear-gradient(to bottom, rgba(23, 96, 159, 0.3), white)"
    >
      <Layout />
    </Flex>
  );
};

export default MainContent;
