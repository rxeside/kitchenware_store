"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Интерфейс категории
interface Category {
    name: string;
    img?: string;
}

const SingleItem = ({ category }: { category: Category }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/shop-with-sidebar?category=${encodeURIComponent(category.name)}`);
    };

    return (
        <button onClick={handleClick} className="group flex flex-col items-center">
            <div className="max-w-[130px] w-full bg-[#F2F3F8] h-32.5 rounded-full flex items-center justify-center mb-4">
                <img
                    src={category.img || "/images/default-category.png"}
                    alt={category.name}
                    width={82}
                    height={62}
                />
            </div>

            <div className="flex justify-center">
                <h3 className="inline-block font-medium text-center text-dark bg-gradient-to-r from-blue to-blue bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px] group-hover:text-[#543b27]">
                    {category.name}
                </h3>
            </div>
        </button>
    );
};

export default SingleItem;
