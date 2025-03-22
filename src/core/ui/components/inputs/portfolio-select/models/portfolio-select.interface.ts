import {
  BaseInputSchema,
  IPortfolioOption,
} from "@/core/models/input-base.interface";

export interface IPortfolioSelectInput extends BaseInputSchema {
  options: IPortfolioOption[];
  placeholder?: string;
  searchable?: boolean;
  clearable?: boolean;
  multiple?: boolean;
}
