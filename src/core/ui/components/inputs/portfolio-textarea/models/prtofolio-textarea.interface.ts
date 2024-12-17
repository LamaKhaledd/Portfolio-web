import { BaseInputSchema } from "@/core/ui/models/input-base.interface";

export interface IPortfolioTextarea extends BaseInputSchema {
  autosize?: boolean;
  minRows?: number;
  maxRows?: number;
}
