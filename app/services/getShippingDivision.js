// services/api.js

export const fetchShippingDivisions = async () => {
  try {
    const response = await fetch("https://bdapis.com/api/v1.2/divisions");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching shipping divisions:", error);
    throw error;
  }
};
