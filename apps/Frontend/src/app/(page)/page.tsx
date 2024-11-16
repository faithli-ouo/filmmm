
import HeroSection from "@/components/Pages/Landing/HeroSection/Hero/Hero";
import SearchMovies from "@/components/Pages/Landing/HeroSection/SearchMovies/SearchMovies";
import { MoviesResultObject } from "@filmmm/types";


export default async function Home() {
  
  const movies: MoviesResultObject = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL!}/movies?type=now_playing&page=1`, {cache: 'force-cache'})
  .then(async (res) => res.json())
  
  


  for (let index = 2; index < movies.total_pages; index++) {
    const afterMovies: MoviesResultObject = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL!}/movies?type=now_playing&page=${index}`, {cache: 'force-cache'})
    .then(async (res) => await res.json());
    movies.results = [...movies.results, ...afterMovies.results] 
  }
  
  

  return (
    <>
      <HeroSection images={movies.results.map((movie) => ({path: movie.backdrop_path, title: movie.title}))}/>
      <SearchMovies/>
    </>
  );
}
