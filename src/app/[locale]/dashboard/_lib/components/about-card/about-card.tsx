import { Title, Text, Card, Flex } from "@mantine/core";
import PortfolioButton from "@components/button/portfolio-button";
import { LAMA_NAME, LAMA_USERNAME } from "@dashboard/constants/dashboard-data";
import PortfolioImage from "@/core/ui/components/image/image";
import { MAIN_COLORS } from "@/core/constants/colors";
import SocialMediaGroup from "../social-media-group/social-media-group";

const AboutCard: React.FC<AboutCardProps> = ({ openContactModal }) => {
  return (
    <Card radius="md" py="3rem" miw={{ base: "100%", md: "40%" }}>
      <Flex justify="center" align="center">
        <PortfolioImage
          schema={{
            src: "/images/Icon.jpg",
            height: 120,
            width: 120,
            radius: "200",
          }}
        />
      </Flex>

      <Title ta="center" order={3} mt="md">
        {LAMA_NAME}
      </Title>
      <Text ta="center" c={MAIN_COLORS.TEXT_SECONDARY}>
        {LAMA_USERNAME} • Full Stack Developer
      </Text>

      <SocialMediaGroup />

      <PortfolioButton
        onClick={openContactModal}
        schema={{
          fullWidth: true,
          size: "compact-lg",
        }}
      >
        Contact Me
      </PortfolioButton>
    </Card>
  );
};

export default AboutCard;
