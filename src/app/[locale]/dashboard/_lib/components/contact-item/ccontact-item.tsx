import React from "react";
import { Anchor, Group, Text } from "@mantine/core";


const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, text, href }) => {
  return (
    <Group gap="xs">
      {href ? (
        <Anchor href={href} target="_blank" rel="noopener noreferrer">
          <Group gap="xs">
            <Icon size={16} />
            <Text>{text}</Text>
          </Group>
        </Anchor>
      ) : (
        <Group gap="xs">
          <Icon size={16} />
          <Text>{text}</Text>
        </Group>
      )}
    </Group>
  );
};

export default ContactItem;
