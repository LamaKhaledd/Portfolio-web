import {
  BaseInputSchema,
  ILamaOption,
} from "@/core/ui/models/input-base.interface";

export interface ICheckboxInput extends BaseInputSchema {
  options?: ILamaOption[];
  indeterminate?: boolean;
}
