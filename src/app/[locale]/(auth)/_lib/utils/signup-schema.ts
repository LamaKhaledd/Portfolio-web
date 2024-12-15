import { InputType } from "@/core/ui/models/input-base.type";

export const signUpFields = [
  {
    inputType: "text" as InputType,
    label: "Username",
    name: "username",
  },
  {
    inputType: "text" as InputType,
    label: "Email",
    name: "email",
  },
  {
    inputType: "password" as InputType,
    label: "Password",
    name: "password",
  },
  {
    inputType: "password" as InputType,
    label: "Confirm Password",
    name: "confirmPassword",
  },
  {
    inputType: "checkbox" as InputType,
    label: "Terms and conditions",
    name: "terms",
    options: [
      {
        id: "terms",
        value: "terms",
        label: "I accept the terms and conditions",
      },
      {
        id: "privacy",
        value: "privacy",
        label: "I accept the privacy policy",
      },
    ],
  },
  {
    inputType: "radio" as InputType,
    label: "Gender",
    name: "gender",
    options: [
      {
        id: "male",
        value: "male",
        label: "Male",
      },
      {
        id: "female",
        value: "female",
        label: "Female",
      },
      {
        id: "other",
        value: "other",
        label: "Other",
      },
    ],
  },
];
