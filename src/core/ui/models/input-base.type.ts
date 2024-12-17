import exp from "constants";
import { ICheckboxInput } from "@components/inputs/portfolio-checkbox/models/portfolio-checkbox.interface";
import { IPasswordInput } from "@components/inputs/portfolio-password/models/portfolio-password.interface";
import { IRadioInput } from "@components/inputs/portfolio-radio/models/portfolio-radio.interface";
import { ISelectInput } from "@components/inputs/portfolio-select/models/portfolio-select.interface";
import { ISwitchInput } from "@components/inputs/portfolio-switch/models/portfolio-switch.interface";
import { ITextInput } from "@components/inputs/portfolio-text/models/portfolio-text.interface";
import { ITextarea } from "@components/inputs/portfolio-textarea/models/prtofolio-textarea.interface";

export type InputSchema =
  | ITextInput
  | IPasswordInput
  | ITextarea
  | IRadioInput
  | ISwitchInput
  | ISelectInput
  | ICheckboxInput;

export type InputType =
  | "text"
  | "password"
  | "textarea"
  | "checkbox"
  | "radio"
  | "select"
  | "switch";

export type ValuesTypes =
  | string
  | number
  | boolean
  | string[]
  | number[]
  | Date
  | Date[]
  | [number, number];
