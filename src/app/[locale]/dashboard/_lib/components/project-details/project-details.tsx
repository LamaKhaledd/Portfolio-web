import React from "react";
import { Badge, Group, Paper, Stack, Text, Title } from "@mantine/core";

interface ProjectDetailsProps {
  title: string;
  date: string;
  description: string;
  badges: string[];
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ title, date, description, badges}) => {

  return (
    <Paper withBorder p="md" radius="md">
      <Stack gap="xs">
        <Group justify="space-between">
          <Group>
            <Title order={3}>{title}</Title>
          </Group>
          <Text>{date}</Text>
        </Group>
        <Text>{description}</Text>
        <Group gap="xs">
          {badges.map((badge) => (
            <Badge key={badge} size="sm">
              {badge}
            </Badge>
          ))}
        </Group>
      </Stack>
    </Paper>
  );
};

export default ProjectDetails;
