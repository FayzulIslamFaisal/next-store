export const getHomeCategory = async () => {
    try {
        const response = await fetch(`https://v3.nagadhat.com/api/all-category`, { next: { revalidate: 10 } });
        return await response.json();
    } catch (error) {
        console.error('Something went wrong fetching Home Category data');
        console.info(error);
    }
}