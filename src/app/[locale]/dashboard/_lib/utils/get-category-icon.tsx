import {
  FaCode,
  FaServer,
  FaLaptopCode,
  FaTools,
  FaLanguage,
} from "react-icons/fa";

export const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Programming Languages":
      return <FaCode />;
    case "Backend Development":
      return <FaServer />;
    case "Frontend Development":
      return <FaLaptopCode />;
    case "Tools":
      return <FaTools />;
    case "Languages":
      return <FaLanguage />;
    default:
      return null;
  }
};
