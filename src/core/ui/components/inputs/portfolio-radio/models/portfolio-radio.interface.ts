import {
  BaseInputSchema,
  IPortfolioOption,
} from "@/core/models/input-base.interface";

export interface IPortfolioRadioInput extends BaseInputSchema {
  options: IPortfolioOption[];
}
