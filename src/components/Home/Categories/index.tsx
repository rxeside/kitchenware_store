"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useRef, useEffect, useState } from "react";
import Image from "next/image";
import { fetchProducts } from "@/utils/fetchProducts"; // Функция для загрузки товаров
import SingleItem from "./SingleItem";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css";

const Categories = () => {
  const sliderRef = useRef(null);
  const [categories, setCategories] = useState<string[]>([]);

  // Функции управления слайдером
  const handlePrev = useCallback(() => {
    if (sliderRef.current) sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (sliderRef.current) sliderRef.current.swiper.slideNext();
  }, []);

  // Загружаем товары и формируем список категорий
  useEffect(() => {
    fetchProducts().then((products) => {
      const uniqueCategories = Array.from(new Set(products.map((p) => p.category).filter(Boolean)));
      setCategories(uniqueCategories);
    });
  }, []);

  return (
      <section className="overflow-hidden pt-17.5">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 pb-15 border-b border-gray-3">
          <div className="swiper categories-carousel common-carousel">
            {/* Заголовок */}
            <div className="mb-10 flex items-center justify-between">
              <div>
              <span className="flex items-center gap-2.5 font-medium text-dark mb-1.5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_834_7356)">
                    <path d="M3.94 13.45C2.65 12.16 2.01 11.52 1.77 10.68C1.53 9.84 1.73 8.96 2.14 7.18L2.38 6.16C2.72 4.67 2.9 3.92 3.41 3.41C3.92 2.9 4.67 2.72 6.16 2.38L7.18 2.14C8.96 1.73 9.84 1.53 10.68 1.77C11.52 2.01 12.16 2.65 13.45 3.94L14.97 5.46C17.21 7.71 18.33 8.83 18.33 10.22C18.33 11.61 17.21 12.73 14.97 14.97C12.73 17.21 11.61 18.33 10.22 18.33C8.83 18.33 7.71 17.21 5.46 14.97L3.94 13.45Z" stroke="#543b27" strokeWidth="1.5"/>
                    <circle cx="7.17" cy="7.4" r="1.67" transform="rotate(-45 7.17 7.4)" stroke="#543b27" strokeWidth="1.5"/>
                    <path d="M9.62 15.42L15.43 9.6" stroke="#543b27" strokeWidth="1.5" strokeLinecap="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_834_7356">
                      <rect width="20" height="20" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                Категории
              </span>
                <h2 className="font-semibold text-xl xl:text-heading-5 text-dark">
                  Выберите категорию
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <button onClick={handlePrev} className="swiper-button-prev">‹</button>
                <button onClick={handleNext} className="swiper-button-next">›</button>
              </div>
            </div>

            {/* Слайдер с категориями */}
            <Swiper
                ref={sliderRef}
                slidesPerView={6}
                breakpoints={{
                  0: { slidesPerView: 2 },
                  1000: { slidesPerView: 4 },
                  1200: { slidesPerView: 6 },
                }}
            >
              {categories.map((category, key) => (
                  <SwiperSlide key={key}>
                    <SingleItem category={{ name: category }} />
                  </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
  );
};

export default Categories;
