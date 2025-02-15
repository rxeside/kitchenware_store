import React from "react";
import Image from "next/image";

const featureData = [
  {
    img: "/images/icons/icon-products.png",
    title: "Более 100.000 товаров",
/*
    description: "For all orders $200",
*/
  },
  {
    img: "/images/icons/icon-world.png",
    title: "Более 37 стран производителей",
/*
    description: "Cancellation after 1 day",
*/
  },
  {
    img: "/images/icons/icon-brand.png",
    title: "Более 550 брендов",
/*
    description: "Gurantee secure payments",
*/
  },

];

const HeroFeature = () => {
  return (
    <div className="max-w-[1060px] w-full mx-auto px-4 sm:px-8 xl:px-0">
      <div className="flex flex-wrap items-center gap-7.5 xl:gap-12.5 mt-10">
        {featureData.map((item, key) => (
          <div className="flex items-center gap-4" key={key}>
            <Image src={item.img} alt="icons" width={40} height={41} />

            <div>
              <h3 className="font-medium text-lg text-dark">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroFeature;
