import React from "react";
import { Flex, Paper, Stack, Text, Title } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import { PERSONAL_INFO } from "@dashboard/constants/cv-constants";
import { MAIN_COLORS } from "@/core/constants/colors";
import ContactItem from "../contact-item/contact-item";

const PersonalInfo = () => {
  const { name, title, email, phone, linkedin, github, address, bio } =
    PERSONAL_INFO;

  return (
    <Stack gap="xs">
      <Title order={1} c={MAIN_COLORS.TITLE_COLOR}>
        {name}
      </Title>
      <Text fz="lg" c={MAIN_COLORS.TEXT_SECONDARY}>
        {title}
      </Text>

      <Flex justify="space-between" direction={{ base: "column", md: "row" }}>
        <ContactItem icon={IconMail} text={email} href={`mailto:${email}`} />
        <ContactItem icon={IconPhone} text={phone} href={`tel:${phone}`} />
        <ContactItem icon={IconBrandLinkedin} text={linkedin} href={linkedin} />
        <ContactItem icon={IconBrandGithub} text={github} href={github} />
        <ContactItem icon={IconMapPin} text={address} />
      </Flex>

      <Paper withBorder p="md" radius="md">
        <Text>{bio}</Text>
      </Paper>
    </Stack>
  );
};

export default PersonalInfo;
