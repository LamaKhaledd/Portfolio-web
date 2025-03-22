import { useEffect, useState } from "react";
import { typeTextEffect } from "@dashboard/utils/text-typing";
import {
  WELCOME_USER_NAME,
  WELCOME_USER_ROLE,
} from "@dashboard/constants/dashboard-data";

export const useWelcomeText = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const typingSpeed = 150;
    const cleanUp = typeTextEffect(
      WELCOME_USER_NAME,
      WELCOME_USER_ROLE,
      typingSpeed,
      setShowArrow,
      "name",
      "role"
    );

    return cleanUp;
  }, []);

  return { showArrow };
};
