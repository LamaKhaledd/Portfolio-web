import { AnchorVariant, MantineSize } from "@mantine/core";

export interface IAnchor {
  label?: string;
  color?: string;
  href?: string;
  size?: MantineSize;
  fullWidth?: boolean;
  underline?: boolean;
  target?: string;
  rel?: string;
  textAlign?: "left" | "center" | "right";
}
