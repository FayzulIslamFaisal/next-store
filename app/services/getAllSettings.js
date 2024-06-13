
const getAllSettings = async () => {
    try {
        const response = await fetch(`https://v3.nagadhat.com/api/get-all-settings/business`, { next: { revalidate: 1 } });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Something went wrong fetching All Setting data');
        console.info(error);
    }
}

export default getAllSettings