'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef} from "react";

interface MovieHero {
    path: string;
    title: string;
    className?: string;
}

interface HeroSectionProps {
    images: Array<MovieHero>

}

const HeroItem: React.FC<MovieHero> = ({path, title, className}) => {
    return (
    <div className={`w-full h-full blur-sm ${className}`}>
        <div id='images-container' className=" w-full h-full object-fill relative">
            <Image src={`https://image.tmdb.org/t/p/w500/${path}`} alt={title} width={400} height={300} sizes="33vw" quality={ 10 } className="w-full  rounded-sm" />
        </div>
    </div>
    )
}


const HeroSection: React.FC<HeroSectionProps> =  ({ images } ) => {
    const imagesGrid = useRef<HTMLElement | null>(null)
    
    useGSAP(() => {
        const imagesGridAnimation = gsap.timeline({repeat: -1, yoyo: true, ease: "power1.inOut"})
        // gsap.to('#film_photo_grid', { y: 30, repeat: -1, duration: 2, yoyo: true, runBackwards: true, delay: 2 })
        imagesGridAnimation.to("#film_photo_grid > :nth-child(3n-2)", {yPercent: 10, duration: 3, opacity: 0.9}, 0);
        imagesGridAnimation.to("#film_photo_grid > :nth-child(3n-1)", {yPercent: -10, duration: 3, opacity: 0.9}, 0);
        imagesGridAnimation.to("#film_photo_grid > :nth-child(3n)", {yPercent: 10, duration: 3, opacity: 0.9}, 0);



    }, {scope: imagesGrid, revertOnUpdate: true})
    
    return (
        <>
            <section className="static w-full h-full max-h-screen overflow-hidden" ref={imagesGrid}>
                <div id="film_photo_grid"  className="grid grid-cols-3 gap-6 py-4" >
                    {images.map((image) => (
                    image?.path && <HeroItem key={image?.title ?? ''} path={image?.path ?? ''} title={image?.title ?? ''} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default HeroSection;