import { useState } from "react";
import useAddSkill from "@dashboard/utils/add-skill";
import useRemoveSkill from "@dashboard/utils/remove-skill";

const useSkills = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState("");

  const addSkill = useAddSkill(skills, setSkills, skillInput, setSkillInput);
  const removeSkill = useRemoveSkill(skills, setSkills);

  return {
    skills,
    skillInput,
    setSkillInput,
    addSkill,
    removeSkill,
  };
};

export default useSkills;
