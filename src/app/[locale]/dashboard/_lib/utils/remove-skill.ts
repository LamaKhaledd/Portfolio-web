const useRemoveSkill = (
  skills: string[],
  setSkills: React.Dispatch<React.SetStateAction<string[]>>
) => {
  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  return removeSkill;
};

export default useRemoveSkill;
