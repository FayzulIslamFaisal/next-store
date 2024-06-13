export const fetchShippingDistricts = async (divisionName) => {
  const lowercaseResponse = divisionName.toLowerCase();

  try {
    const response = await fetch(
      `https://bdapis.com/api/v1.2/division/${lowercaseResponse}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("I am calling", data.data.district);
    return data.data;
  } catch (error) {
    console.error("Error fetching districts:", error);
    throw error;
  }
};
