import { AnchorVariant, MantineSize } from "@mantine/core";

export interface IAnchor {
  href?: string;
  label?: string;
  color?: string;
  size?: MantineSize;
  target?: string;
  rel?: string;
  fullWidth?: boolean;
  underline?: boolean;
  radius?: number;
  textAlign?: "left" | "center" | "right";
}
