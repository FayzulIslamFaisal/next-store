
export const getCategoryMenu = async () => {
    try {
        const response = await fetch(`https://v3.nagadhat.com/api/all-category-main`, { next: { revalidate: 1 } });
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Something went wrong fetching Home Category data');
        console.info(error);
    }
}

