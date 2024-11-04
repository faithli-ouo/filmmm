import { SearchMovieObject } from "@global-types/search/search.type";

async function searchMovies(keyword: string): Promise<SearchMovieObject> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL!}/search/movie?query=${keyword}`)
    const movies: SearchMovieObject = await res.json()
    return movies
}


export default searchMovies;
