import { BaseInputSchema } from "@/core/ui/models/input-base.interface";

export interface ITextarea extends BaseInputSchema {
  autosize?: boolean;
  minRows?: number;
  maxRows?: number;
}
