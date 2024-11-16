"use client";
import { MoviesResult } from "@filmmm/types";
import Image from "next/image";
import React from "react";

interface SliderCard {
  movieData: MoviesResult;
}

const SliderCard: React.FC<SliderCard> = ({ movieData }) => {
  return (
    <>
      <div id="slider_card" className="w-full h-full flex flex-col text-white">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL_ORIGINAL!}${movieData.backdrop_path}`}
          alt={movieData.title}
          width={200}
          height={150}
          sizes="33vw"
          quality={100}
          className="w-full z-10"
        />
        <div className="z-20 absolute w-full h-full px-10 py-10 flex flex-col items-center">
          <h1 className="justify-center align-middle self-center">{movieData.title}</h1>
        </div>
      </div>
    </>
  );
};


export default SliderCard;
