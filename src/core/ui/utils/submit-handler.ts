export const submitHandler = async (
  router: any,
  successRoute: string
) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.replace(successRoute);
  } catch (error) {
    console.error("Submission failed", error);
  }
};
