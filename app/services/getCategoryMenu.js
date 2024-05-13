
export const getCategoryMenu = async () => {
    try {
        const response = await fetch(`https://v3.nagadhat.com/api/all-category-main`, { next: { revalidate: 1 } });
        return await response.json();
    } catch (error) {
        console.error('Something went wrong fetching Home Category data');
        console.info(error);
    }
}

