import DiscoverSlider from "@/components/Pages/Discover/Slider";
import { MoviesResultObject } from "@filmmm/types";





export default async function Discover() {

  const now_playing: MoviesResultObject = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL!}/movies?type=now_playing&page=1`, {cache: 'force-cache'})
  .then(async (res) => res.json())
  
  return (
    
    <DiscoverSlider now_playing={now_playing}/>

  );
}
