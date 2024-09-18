import HeroSlider from "./components/HeroSlider";
import Partner from "./components/Partner";
import Category from "./components/Category";
import Sales from "./components/Sales";
import JustForYou from "./components/JustForYou";
import Service from "./components/Service";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
export default async function Home() {
    return (
        <>
            <HeroSlider />
            <Partner />
            <Sales isHome={true} />
            <Category showOnHome={true} />
            <JustForYou />
            <div className="pb-5">
               <Service /> 
            </div>
            
        </>
    );
}
