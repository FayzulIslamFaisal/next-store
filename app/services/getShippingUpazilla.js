export const fetchShippingUpazilla = async (districtName, matchValue) => {
  const lowercaseResponse = districtName.toLowerCase();
  try {
    const response = await fetch(
      `https://bdapis.com/api/v1.2/division/${lowercaseResponse}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data.find((up) => up.district === matchValue).upazilla;
  } catch (error) {
    console.error("Error fetching upazilla:", error);
    throw error;
  }
};
