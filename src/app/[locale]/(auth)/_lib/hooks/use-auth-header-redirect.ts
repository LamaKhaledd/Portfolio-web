
import { useState } from "react";
import { useRouter } from "next/navigation";

export const useAuthRedirect = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onButtonClick = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.replace("/en/login");
    } catch (error) {
      console.error("login page open failed", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, onButtonClick };
};
