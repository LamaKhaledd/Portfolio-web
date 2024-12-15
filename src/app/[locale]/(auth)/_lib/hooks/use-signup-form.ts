import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { signUpSchema } from "../utils/sign-up-validation-schema";

export const useSignUpForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const methods = useForm({
    resolver: yupResolver(signUpSchema)
  });

  const submit = async (data: any) => {
    setLoading(true);
    try {
      console.log(data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.replace("/en/main-content");
    } catch (error) {
      console.error("Signup failed", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginClick = () => {
    if (typeof window !== "undefined") {
      router.replace("/en/login");
    }
  };

  return {
    methods,
    loading,
    submit,
    handleLoginClick
  };
};
