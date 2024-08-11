import HeroSlider from "./components/HeroSlider";
import Partner from "./components/Partner";
import Category from "./components/Category";
import Sales from "./components/Sales";
import { getFlashSlaeShowOnHomePage } from "./services/getFlashSlaeShowOnHomePage";
export default async function Home() {
    const endTimeSetting = await getFlashSlaeShowOnHomePage();
    const endTimeResult = new Date(endTimeSetting?.results?.end_time);
    const showOnHome = endTimeSetting?.results?.show_on_home;
    
    const currentDate = new Date();
    const flashSaleEndTime = endTimeResult >= currentDate;
    
    return (
        <>
            <HeroSlider />
            <Partner />
            {(flashSaleEndTime && showOnHome === 1) && <Sales isHome={true} />}
            <Category flashSaleEndTime ={flashSaleEndTime} showOnHome={showOnHome}/>
        </>
    );
}
