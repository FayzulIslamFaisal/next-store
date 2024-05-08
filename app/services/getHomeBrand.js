export const getHomeBrand = async () => {
    try {
        const response = await fetch( `${process.env.NEXT_PUBLIC_API_BASE_URL}/get-brand` );
        return await response.json();
    } catch (error) {
        console.error( 'Something went wrong fetching slider data' );
        console.info(error);
    }
}