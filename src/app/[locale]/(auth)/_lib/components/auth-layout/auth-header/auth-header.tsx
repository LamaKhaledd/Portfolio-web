import React from "react";
import { Card, Flex, Group, Text } from "@mantine/core";
import Image from "next/image";
import PortfolioButton from "@components/button/portfolio-button";
import { LABELS } from "@auth/_lib/constants/header-labels";
import { MAIN_COLORS } from "@/core/constants/colors";
import { ActionToggle } from "@action/toggle-theme";
import { useAuthRedirect } from "@hooks/use-auth-header-redirect";

export const AuthHeader = () => {
  const { loading, onLoginButtonClick } = useAuthRedirect();

  return (
    <Card shadow="md">
      <Group justify="space-between" h="3rem" p="0 5rem" bg="white">
        <Flex align="center">
          <Image
            src="/icons/llama.png"
            alt="Llama Icon"
            width={50}
            height={50}
          />
          <Text size="xl" fw="bold" ps="0.5rem" c={MAIN_COLORS.BLUE_DARK} lts="1px">
            {LABELS.name}
          </Text>
        </Flex>

        <Group me="2rem">
          <Flex gap="md" me="2rem">
            {LABELS.navItems.map((item, index) => (
              <Text
                key={index}
                size="1.1rem"
                fw="bold"
                c={MAIN_COLORS.GRAY_DARK}
                style={{ cursor: "pointer" }}
              >
                {item.label}
              </Text>
            ))}
          </Flex>
          <PortfolioButton
            onClick={onLoginButtonClick}
            schema={{
              label: LABELS.login,
              size: "md",
              variant: "light",
              color: "blue",
              radius: 5,
              leftSection: (
                <Image
                  src="/icons/tap.png"
                  alt="Tap Icon"
                  width={20}
                  height={20}
                />
              ),
            }}
          />

          <ActionToggle />
        </Group>
      </Group>
    </Card>
  );
};

export default AuthHeader;
