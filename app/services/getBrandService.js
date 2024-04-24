export default async function getBrandService() {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    try {
        const response = await fetch( `${baseUrl}/get-brand` );
        const { results: data} = await response.json();
        return data;
    } catch (error) {
        console.log("error :=>>>>>>>", error);
    }
}