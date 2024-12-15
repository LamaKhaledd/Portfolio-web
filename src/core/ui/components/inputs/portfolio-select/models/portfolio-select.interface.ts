import {
  BaseInputSchema,
  ILamaOption,
} from "@/core/ui/models/input-base.interface";

export interface ISelectInput extends BaseInputSchema {
  options: ILamaOption[];
  placeholder?: string;
  searchable?: boolean;
  clearable?: boolean;
  multiple?: boolean;
}
