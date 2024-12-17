import {
  BaseInputSchema,
  IPortfolioOption,
} from "@/core/ui/models/input-base.interface";

export interface IPortfolioRadioInput extends BaseInputSchema {
  options: IPortfolioOption[];
}
