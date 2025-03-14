import {
  BaseInputSchema,
  IPortfolioOption,
} from "@/core/models/input-base.interface";

export interface IPortfolioCheckboxInput extends BaseInputSchema {
  options?: IPortfolioOption[];
  indeterminate?: boolean;
}
