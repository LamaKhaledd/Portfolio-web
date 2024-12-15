import {
  BaseInputSchema,
  ILamaOption,
} from "@/core/ui/models/input-base.interface";

export interface IRadioInput extends BaseInputSchema {
  options: ILamaOption[];
}
