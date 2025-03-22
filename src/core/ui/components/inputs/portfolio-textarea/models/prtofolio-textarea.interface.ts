import { BaseInputSchema } from "@/core/models/input-base.interface";

export interface IPortfolioTextarea extends BaseInputSchema {
  autosize?: boolean;
  minRows?: number;
  maxRows?: number;
}
