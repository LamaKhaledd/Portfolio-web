const useAddSkill = (
  skills: string[],
  setSkills: React.Dispatch<React.SetStateAction<string[]>>,
  skillInput: string,
  setSkillInput: React.Dispatch<React.SetStateAction<string>>
) => {
  const addSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  return addSkill;
};

export default useAddSkill;
