export const getHomeBrand = async () => {
    try {
        const response = await fetch( `https://v3.nagadhat.com/api/get-brand` );
        return await response.json();
    } catch (error) {
        console.error( 'Something went wrong fetching slider data' );
        console.info(error);
    }
}