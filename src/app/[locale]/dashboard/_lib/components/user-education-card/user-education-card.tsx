import React from "react";
import { Paper, Text } from "@mantine/core";
import { MAIN_COLORS } from "@/core/constants/colors";

const UserEducationCard: React.FC<IUserEducationCardProps> = ({ degree, institution, duration }) => {
  return (
    <Paper withBorder p="xs" radius="10">
      <Text fw="bold">{degree}</Text>
      <Text fz="sm" c={MAIN_COLORS.TEXT_SECONDARY}>
        {institution}
      </Text>
      <Text fz="sm" c={MAIN_COLORS.TEXT_SECONDARY}>
        {duration}
      </Text>
    </Paper>
  );
};

export default UserEducationCard;
