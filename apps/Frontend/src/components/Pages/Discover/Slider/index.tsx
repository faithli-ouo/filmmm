"use client";
import { MoviesResultObject } from "@filmmm/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import SliderCard from "./Card";


interface DiscoverSilderProps {
  now_playing: MoviesResultObject;
}




const DiscoverSlider: React.FC<DiscoverSilderProps> = ({ now_playing }) => {
  return (
    <>
      <section className="">
        <Carousel className="w-full h-full max-h-dvh aspect-video overflow-hidden">
          <CarouselContent>
            {now_playing.results.map((movie) => {
              return (
                <CarouselItem
                  key={movie.id}
                  className="w-full transition-opacity"
                ><SliderCard movieData={movie}/></CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </>
  );
};

export default DiscoverSlider;
