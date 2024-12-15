import { InputType } from "@/core/ui/models/input-base.type";

export const loginSchema = [
  {
    inputType: "text" as InputType,
    label: "Email",
    name: "username",
  },

  {
    inputType: "password" as InputType,
    label: "Password",
    name: "password",
  },
];

export const forgotPasswordSchema = [
  {
    inputType: "text" as InputType,
    name: "forgotEmail",
    label: "Enter your email to reset your password",
    placeholder: "example@domain.com",
  },
];
