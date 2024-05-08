export const getHomeCategory = async () => {
    try {
        const response = await fetch( `https://v3.nagadhat.com/api/all-category` );
        return await response.json();
    } catch (error) {
        console.error( 'Something went wrong fetching slider data' );
        console.info(error);
    }
}