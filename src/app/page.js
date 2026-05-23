import Banner from "@/Components/Banner";
import CorsesPage from "./corses/page";
import { WithIcons } from "./modeChang/page";


export default function Home() {
  return <div className=" container mx-auto">
     <WithIcons  />
    <Banner/>
    <CorsesPage/>
  </div>;
}
