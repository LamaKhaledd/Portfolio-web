
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AUTH_ROUTES } from "../constants/auth-routes";

export const useAuthRedirect = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onLoginButtonClick = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.replace(AUTH_ROUTES.LOGIN);
    } catch (error) {
      console.error("login page open failed", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, onLoginButtonClick };
};
