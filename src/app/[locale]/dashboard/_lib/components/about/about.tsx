import { Flex, Container } from "@mantine/core";
import useAbout from "@dashboard/hooks/use-about";
import { FormProvider } from "react-hook-form";
import AboutDetails from "../about-details/about-details";
import ContactModal from "../contact-modal/contact-modal";
import AboutCard from "../about-card/about-card";

const About = () => {
  const {
    navigateToProjects,
    openContactModal,
    closeContactModal,
    contactModalOpened,
    methods,
  } = useAbout();

  return (
    <Container size="lg" py={30}>
      <Flex
        align="center"
        mih="80vh"
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        pb={50}
      >
        <AboutCard openContactModal={openContactModal} />{" "}
        <AboutDetails navigateToProjects={navigateToProjects} />
      </Flex>

      <FormProvider {...methods}>
        <Container size="lg">
          <ContactModal
            opened={contactModalOpened}
            onClose={closeContactModal}
          />
        </Container>
      </FormProvider>
    </Container>
  );
};

export default About;
