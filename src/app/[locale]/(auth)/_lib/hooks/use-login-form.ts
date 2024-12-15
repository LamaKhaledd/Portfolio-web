import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { validationSchema } from "../utils/login-validation-schema";

export const useLoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");

  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });


  const submit = async (data: any) => {
    setLoading(true);
    try {
      console.log(data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.replace("/en/main-content");
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPasswordSubmit = () => {
    console.log("Forgot password email:", forgotEmail);
    setModalOpened(false);
  };

  return {
    methods,
    loading,
    modalOpened,
    forgotEmail,
    setForgotEmail,
    setModalOpened,
    submit,
    handleForgotPasswordSubmit,
  };
};
