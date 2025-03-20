import { Flex, Text, Title } from "@mantine/core";
import PortfolioButton from "@components/button/portfolio-button";
import PortfolioImage from "@/core/ui/components/image/image";
import "@/app/globals.css";
import {
  USER_BIO,
  USER_BIO_2,
  USER_NAME,
  SEE_MY_PROJECTS,
} from "@dashboard/constants/dashboard-data";
import { MAIN_COLORS } from "@/core/constants/colors";
import { TEXT_PROPS } from "@dashboard/constants/about-constants";


const AboutDetails: React.FC<IAboutDetailsProps> = ({ navigateToProjects }) => {
  return (
    <Flex
      direction="column"
      gap="sm"
      w={{ md: "50%" }}
      align={{ base: "center", md: "flex-start" }}
    >
      <Title order={2} className="font-montserrat" pt={20}>
        {USER_NAME}
      </Title>
      <Text {...TEXT_PROPS}>{USER_BIO}</Text>
      <Text {...TEXT_PROPS}>{USER_BIO_2}</Text>

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
