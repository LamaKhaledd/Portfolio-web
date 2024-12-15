import { MantineSize } from "@mantine/core";
import { InputType } from "./input-base.type";

export interface BaseInputSchema {
  inputType: InputType;
  label?: string;
  name: string;
  size?: MantineSize;
  color?: string;
  required?: boolean;
  placeholder?: string;
}

export interface ILamaOption {
  id: string;
  value: string;
  label: string;
}
