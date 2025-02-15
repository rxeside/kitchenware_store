import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";
import Image from "next/image";

const Hero = () => {
  return (
      <section className="overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-57.5 sm:pt-45 lg:pt-30 xl:pt-51.5 bg-[#E5EAF4]">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-wrap gap-5">
            <div className="xl:max-w-[757px] w-full h-[500px]"> {/* Фиксированная высота */}
              <div className="relative z-1 rounded-[10px] bg-white overflow-hidden h-full">
                <Image
                    src="/images/hero/hero-bg.png"
                    alt="hero bg shapes"
                    className="absolute right-0 bottom-0 -z-1"
                    layout="fill"
                    objectFit="cover"
                />
                <HeroCarousel />
              </div>
            </div>

            <div className="xl:max-w-[393px] w-full h-[500px]"> {/* Фиксированная высота */}
              <div className="flex flex-col h-full gap-5">
                <div className="w-full h-1/2 relative rounded-[10px] bg-white overflow-hidden">
                  <Image
                      src="/images/icons/3.jpg"
                      alt="iPhone 14 Plus & 14 Pro Max"
                      layout="fill"
                      objectFit="cover"
                  />
                </div>
                <div className="w-full h-1/2 relative rounded-[10px] bg-white overflow-hidden">
                  <Image
                      src="/images/icons/4.jpg"
                      alt="Wireless Headphone"
                      layout="fill"
                      objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <HeroFeature />
      </section>
  );
};

export default Hero;
