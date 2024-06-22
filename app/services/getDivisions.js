export const getDivisions = async () => {
  try {
    const response = await fetch(`https://v3.nagadhat.com/api/get-divisions`, {
      next: { revalidate: 1 },
    });
    return await response.json();
  } catch (error) {
    console.error("Something went wrong fetching division data");
    console.info(error);
  }
};
