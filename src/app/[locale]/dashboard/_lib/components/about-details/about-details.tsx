import { Flex, Text, Title } from "@mantine/core";
import PortfolioButton from "@components/button/portfolio-button";
import PortfolioImage from "@/core/ui/components/image/image";
import { MONT_SERRAT } from "@dashboard/constants/fonts";
import {
  LAMA_BIO,
  LAMA_BIO_2,
  LAMA_NAME,
  SEE_MY_PROJECTS,
} from "@dashboard/constants/dashboard-data";
import { MAIN_COLORS } from "@/core/constants/colors";

const textProps = {
  my: 5,
  c: MAIN_COLORS.TEXT_PRIMARY,
};

const AboutDetails: React.FC<AboutDetailsProps> = ({ navigateToProjects }) => {
  return (
    <Flex
      direction="column"
      gap="sm"
      w={{ base: "100%", md: "50%" }}
      align={{ base: "center", md: "flex-start" }}
    >
      <Title order={2} className={MONT_SERRAT.className} pt={20}>
        {LAMA_NAME}
      </Title>
      <Text {...textProps}>{LAMA_BIO}</Text>
      <Text {...textProps}>{LAMA_BIO_2}</Text>

      <PortfolioButton
        onClick={navigateToProjects}
        schema={{
          size: "md",
          label: SEE_MY_PROJECTS,
          variant: "outline",
          color: MAIN_COLORS.PRIMARY,
          leftSection: (
            <PortfolioImage
              schema={{
                src: "/icons/llama.png",
                alt: "Llama Icon",
                width: 20,
                height: 20,
              }}
            />
          ),
        }}
      />
    </Flex>
  );
};

export default AboutDetails;
