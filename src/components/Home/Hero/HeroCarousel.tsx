"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

const HeroCarousel = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="hero-carousel h-full"
        >
            <SwiperSlide className="h-full">
                <img
                    src="/images/icons/1.jpg"
                    alt="Hero image 1"
                    className="w-full h-full object-cover"
                />
            </SwiperSlide>
            <SwiperSlide className="h-full">
                <img
                    src="/images/icons/2.jpg"
                    alt="Hero image 2"
                    className="w-full h-full object-cover"
                />
            </SwiperSlide>
        </Swiper>
    );
};

export default HeroCarousel;
