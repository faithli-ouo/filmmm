import HeroSection from "@/components/Landing/HeroSection/Hero/Hero";
import SearchMovies from "@/components/Landing/HeroSection/SearchMovies/SearchMovies";
import { MoviesResultObject } from "@global-types/movies/movies.types";


export default async function Home() {
  const res = await fetch('http://localhost:3000/movies?type=now_playing&page=1');
  const movies: MoviesResultObject = await res.json();

  for (let index = 2; index < movies.total_pages; index++) {
    const afterRes = await fetch(`http://localhost:3000/movies?type=now_playing&page=${index}`);
    const afterMovies: MoviesResultObject = await afterRes.json()
    movies.results = [...movies.results, ...afterMovies.results] 
  }
  
  
  

  return (
    <>
      <HeroSection images={movies.results.map((movie) => ({path: movie.backdrop_path, title: movie.title}))}/>
      <SearchMovies/>
    </>
  );
}
