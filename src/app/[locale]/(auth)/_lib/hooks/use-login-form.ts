import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { validationSchema } from "@auth/_lib/utils/login-validation-schema";
import { AUTH_ROUTES } from "@auth/_lib/constants/auth-routes";
import { submitHandler } from "@/core/ui/utils/submit-handler";

export const useLoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");

  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });

  const submit = async () => {
    setLoading(true);
    await submitHandler(router, AUTH_ROUTES.MAINCONTENT); 
    setLoading(false);
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
