import React from "react";
import { Badge } from "@mantine/core";
import { MAIN_COLORS } from "@/core/constants/colors";

const TechnicalSkillComponent: React.FC<TechnicalSkillProps> = ({ skill }) => {
    return (
      <Badge size="lg" variant="light" c={MAIN_COLORS.TEXT_BLUE}>
        {skill}
      </Badge>
    );
  };
  
  export default TechnicalSkillComponent;
  