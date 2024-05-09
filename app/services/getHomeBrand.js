export const getHomeBrand = async () => {
    try {
        const response = await fetch(`https://v3.nagadhat.com/api/get-brand`, { next: { revalidate: 10 } });
        return await response.json();
    } catch (error) {
        console.error('Something went wrong fetching Home Brand data');
        console.info(error);
    }
}