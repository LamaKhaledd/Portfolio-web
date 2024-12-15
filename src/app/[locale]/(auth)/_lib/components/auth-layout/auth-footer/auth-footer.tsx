import React from "react";
import { Container, Flex, Text } from "@mantine/core";
import {
  FOOTER_LINKS,
  FOOTER_TEXT,
} from "@auth/_lib/constants/footer-constants";
import PortfolioAnchor from "@/core/ui/components/anchor/portfolio-anchor";

const AuthFooter = () => (
  <Container size="xl" mih="2rem" mt={"1rem"}>
    <Text size="xs" c="dimmed" ta="center">
      <Flex align="center" gap="4px" justify="center" flex="wrap">
        {FOOTER_TEXT}
        {FOOTER_LINKS.map((link, index) => (
          <React.Fragment key={link.href}>
            <PortfolioAnchor
              schema={{
                label: link.label,
                href: link.href,
                target: "_blank",
                rel: "noopener noreferrer",
              }}
            >
              {link.label}
            </PortfolioAnchor>
            {index < FOOTER_LINKS.length - 1 && <span>,</span>}
          </React.Fragment>
        ))}
      </Flex>
    </Text>
  </Container>
);

export default AuthFooter;
