import React from "react";
import { Anchor, Container, Text } from "@mantine/core";
import {
  FOOTER_LINKS,
  FOOTER_TEXT,
} from "@auth/_lib/constants/footer-constants";
const AuthFooter = () => (
  <Container size="md" mih="2rem" mt={"1rem"}>
    <Text size="xs" c="dimmed" ta="center">
      {FOOTER_TEXT}
      {FOOTER_LINKS.map((link, index) => (
        <React.Fragment key={link.href}>
          <Anchor href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
          </Anchor>
          {index < FOOTER_LINKS.length - 1 && ", "}
        </React.Fragment>
      ))}
    </Text>
  </Container>
);

export default AuthFooter;
