"use client";
import { Box, Flex } from "@mantine/core";
import Layout from "../auth-layout/layout";

const MainContent=()=> {
  return (
    <Flex justify="center" direction="column" w="100%" bg= "linear-gradient(to bottom, rgba(23, 96, 159, 0.3), white)">
      <Box w="100%">
        <Layout />
      </Box>
    </Flex>
  );
}

export default MainContent;
