"use client";

import { useState, useEffect } from "react";
import { Product } from "@/types/product";

interface Category {
    name: string;
    count: number;
}

const CategoryItem = ({ category, onSelect, isSelected }: { category: Category; onSelect: () => void; isSelected: boolean }) => {
    return (
        <button
            className={`group flex items-center justify-between w-full ease-out duration-200 ${isSelected ? "text-[#543b27]" : "hover:text-[#543b27]"}`}
            onClick={onSelect}
        >
            <div className="flex items-center gap-2 flex-grow">
                <div
                    className={`cursor-pointer flex items-center justify-center rounded w-4 h-4 border flex-shrink-0 ${
                        isSelected ? "border-[#543b27] bg-[#543b27]" : "bg-white border-gray-3"
                    }`}
                >
                    {isSelected && (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.33317 2.5L3.74984 7.08333L1.6665 5" stroke="white" strokeWidth="1.94437" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
                </div>

                <span className="text-left">{category.name}</span>
            </div>

            <span className={`inline-flex rounded-[30px] text-custom-xs px-2 ease-out duration-200 flex-shrink-0 ${isSelected ? "text-white bg-[#543b27]" : "bg-gray-2 group-hover:text-white group-hover:bg-[#543b27]"}`}>
                {category.count}
            </span>
        </button>
    );
};

const CategoryDropdown = ({ products = [], onCategorySelect }: { products: Product[]; onCategorySelect: (category: string | null) => void }) => {
    const [toggleDropdown, setToggleDropdown] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        if (!products.length) return; // Если нет товаров, ничего не делаем

        // Группировка товаров по типу
        const categoryMap = new Map<string, number>();

        products.forEach((product) => {
            if (product.type) {
                categoryMap.set(product.type, (categoryMap.get(product.type) || 0) + 1);
            }
        });

        // Формируем список категорий
        const categoryList = Array.from(categoryMap.entries()).map(([name, count]) => ({
            name,
            count,
        }));

        setCategories(categoryList);
    }, [products]);

    const handleCategorySelect = (category: string | null) => {
        setSelectedCategory(category);
        onCategorySelect(category);
    };

    return (
        <div className="bg-white shadow-1 rounded-lg">
            <div
                onClick={(e) => {
                    e.preventDefault();
                    setToggleDropdown(!toggleDropdown);
                }}
                className={`cursor-pointer flex items-center justify-between py-3 pl-6 pr-5.5 ${toggleDropdown && "shadow-filter"}`}
            >
                <p className="text-dark">Категории</p>
                <button aria-label="button for category dropdown" className={`text-dark ease-out duration-200 ${toggleDropdown && "rotate-180"}`}>
                    <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z"
                            fill=""
                        />
                    </svg>
                </button>
            </div>

            {products.length > 0 && (
                <div className={`flex-col gap-3 py-6 pl-6 pr-5.5 ${toggleDropdown ? "flex" : "hidden"}`}>
                    <CategoryItem category={{ name: "Все категории", count: products.length }} onSelect={() => handleCategorySelect(null)} isSelected={selectedCategory === null} />
                    {categories.map((category, key) => (
                        <CategoryItem key={key} category={category} onSelect={() => handleCategorySelect(category.name)} isSelected={selectedCategory === category.name} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoryDropdown;
