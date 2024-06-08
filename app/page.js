import HeroSlider from "./components/HeroSlider";
import Partner from "./components/Partner";

import Category from "./components/Category";
import Sales from "./components/Sales";
export default function Home() {
  return (
    <>
      <HeroSlider />
      <Partner />
      <Sales isHome={true} />
      <Category />
    </>
  );
}
