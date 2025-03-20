import React from "react";
import { Container, Grid, GridCol, Group, Stack } from "@mantine/core";
import PortfolioButton from "@components/button/portfolio-button";
import { downloadPDF } from "@dashboard/utils/download-pdf";
import PersonalInfo from "../user-personal-info/user-personal-info";
import CoreProjects from "../user-core-projects/user-core-projects";
import UserTechnicalSkills from "../user-technical-skills/user-technical-skills";
import UserSpokenLanguages from "../user-spoken-langauges/user-spoken-languages";
import UserEducationInfo from "../user-education-info/user-education-info";
import UserContactInfo from "../user-contact-info/user-contact-info";
import { MAIN_COLORS } from "@/core/constants/colors";

const CV = () => {
  return (
    <Container size="lg" py="xl" my="30">
      <Group justify="end" mb="20">
        <PortfolioButton
          onClick={() => downloadPDF("cv-content", "Lama-Ibrahim-CV.pdf")}
          schema={{
            variant: "filled",
            size: "compact-lg",
            color: MAIN_COLORS.PRIMARY_BUTTON,
            label: "Download PDF",
          }}
        />
        <PortfolioButton
          onClick={() => {
            alert("Edit CV clicked");
          }}
          schema={{
            size: "compact-lg",
            color: MAIN_COLORS.SECONDARY_BUTTON,
            label: "Edit My CV",
          }}
        />
      </Group>

      <Stack gap="xl">
        <PersonalInfo></PersonalInfo>
        <CoreProjects></CoreProjects>

        <Grid my={30}>
          <GridCol span={{ md: 4 }}>
            <UserTechnicalSkills></UserTechnicalSkills>
          </GridCol>

          <GridCol span={{ md: 4 }}>
            <UserSpokenLanguages></UserSpokenLanguages>
          </GridCol>

          <GridCol span={{ md: 4 }}>
            <UserEducationInfo></UserEducationInfo>
          </GridCol>
        </Grid>
      </Stack>

      <UserContactInfo></UserContactInfo>
    </Container>
  );
};

export default CV;
