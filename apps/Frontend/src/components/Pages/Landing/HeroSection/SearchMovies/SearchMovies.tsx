"use client"
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { SearchMovieObject } from "@filmmm/types";
import searchMovies from "./SearchMoviesFunction";

const SearchMovies: React.FC = () => {
    const [keywordInputValue, setkeywordInputValue] = useState("");
    const [movies, setMovies] = useState<SearchMovieObject | null>(null)

    const handleOnchange = async(keyword: string | "") => {
        setkeywordInputValue(keyword);

        if (keyword && keyword !== "") {
            const searchResult = await searchMovies(keyword);
            console.log(searchResult);
            
            if (searchResult.total_results > 0) { // Should be > 0, not 1
              setMovies(searchResult);
            } else {
              setMovies(null); // Clear movies if no results
            }
          } else {
            setMovies(null); // Clear movies if input is empty
          }
        };
    
    const handleOnblur = () => {
        setMovies(null)
        setkeywordInputValue("")
    }

    return (
        <form className="absolute z-20 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-3/4 flex flex-col gap-4 justify-center align-middle
        py-5 rounded-md">
            <h2 className="text-white text-center">在找那一套電影?</h2>
            <div className="static">

                <Input name="keywordInput" type="text" placeholder="輸入關鍵字" className="h-10 text-white font-semibold" value={keywordInputValue}
                onChange={(e) => handleOnchange(e.target.value)} onBlur={handleOnblur}
                />
                {movies?.results &&
                <div className="border-x-[1px] border-b-[1px] absolute w-full h-full text-white px-2 py-2 rounded-b-md ease-in-out animate-out animate-pulse overflow-y-scroll">
                    {movies?.results?.map((movie) => {
                        return (
                            <h6 key={movie?.id}>{movie?.title}</h6>
                        )
                    })}
                </div>
                }
                </div>
                
        </form>
    )
}

export default SearchMovies;