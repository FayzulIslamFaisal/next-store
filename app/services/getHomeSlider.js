export const getHomeSlider = async () => {
    try {
        const response = await fetch(`https://v3.nagadhat.com/api/get-sliders`, { next: { revalidate: 10 } });
        return await response.json();
    } catch (error) {
        console.error('Something went wrong fetching slider data');
        console.info(error);
    }
}