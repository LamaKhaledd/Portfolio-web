"use client";
import {
  Text,
  Flex,
  Tabs,
  TabsList,
  TabsTab,
  TabsPanel,
  Box,
  Title,
} from "@mantine/core";
import { skillsSchema } from "@dashboard/constants/skills-schema";
import { getCategoryIcon } from "@dashboard/utils/get-category-icon";
import { MAIN_COLORS } from "@/core/constants/colors";

const UserSkillsPanel = () => {
  return (
    <Flex mih="80vh" justify="center" pt="50" pl="30">
      <Tabs
        variant="pills"
        defaultValue={skillsSchema[0].category}
        orientation="vertical"
      >
        <TabsList justify="left">
          {skillsSchema.map(({ category }) => (
            <TabsTab key={category} value={category}>
              <Flex align="center" gap="md">
                <Text>{getCategoryIcon(category)}</Text>
                <Title order={4}>{category}</Title>
              </Flex>
            </TabsTab>
          ))}
        </TabsList>
        {skillsSchema.map(({ category, skills }) => (
          <TabsPanel key={category} value={category} py="md">
            <Flex wrap="wrap" gap="md" justify="center">
              {skills.map((skill, index) => (
                <Box
                  key={index}
                  bg="rgba(255, 255, 255, 0.1)"
                  py="sm"
                  miw={{ base: "10rem", md: "20rem" }}
                  ta="center"
                >
                  <Title size="lg" c={MAIN_COLORS.PRIMARY}>
                    {skill}
                  </Title>
                </Box>
              ))}
            </Flex>
          </TabsPanel>
        ))}
      </Tabs>
    </Flex>
  );
};

export default UserSkillsPanel;
