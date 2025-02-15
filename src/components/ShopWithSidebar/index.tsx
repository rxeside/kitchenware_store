"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Breadcrumb from "../Common/Breadcrumb";
import CategoryDropdown from "./CategoryDropdown";
import { fetchProducts } from "@/utils/fetchProducts";
import SingleGridItem from "../Shop/SingleGridItem";
import SingleListItem from "../Shop/SingleListItem";
import { Product } from "@/types/product";

const ITEMS_PER_PAGE = 30;

const ShopWithSidebar = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryFromUrl = searchParams.get("category");

  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [productStyle, setProductStyle] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryFromUrl);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);

      if (categoryFromUrl) {
        setSelectedCategory(categoryFromUrl);
        setFilteredProducts(data.filter((p) => p.category === categoryFromUrl));
      } else {
        setFilteredProducts(data);
      }
    });
  }, [categoryFromUrl]);

  useEffect(() => {
    let result = products;

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedType) {
      result = result.filter((p) => p.type === selectedType);
    }

    setFilteredProducts(result);
    setCurrentPage(1);
  }, [selectedCategory, selectedType, products]);

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    setSelectedType(null);

    if (category) {
      router.push(`/shop-with-sidebar?category=${encodeURIComponent(category)}`);
    } else {
      router.push(`/shop-with-sidebar`);
    }
  };

  const handleTypeSelect = (type: string | null) => {
    setSelectedType(type);
    router.push(`/shop-with-sidebar`);
  };

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const currentProducts = filteredProducts.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
  );

  const handleNextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const handlePrevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  return (
      <>
        <Breadcrumb title="Все Продукты" pages={["shop"]} />
        <section className="overflow-hidden pb-20 pt-5 lg:pt-20 xl:pt-28 bg-[#f3f4f6]">
          <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 flex gap-7.5">
            <aside className="w-1/4">
              <CategoryDropdown
                  products={products}
                  onCategorySelect={handleTypeSelect}
                  selectedCategory={selectedType}
              />
            </aside>

            <div className="w-3/4">
              <div className="bg-white shadow-1 p-3 mb-6 flex justify-between">
                <p>
                  Показано {currentProducts.length} из {filteredProducts.length} товаров
                </p>
              </div>

              <div className={productStyle === "grid" ? "grid grid-cols-3 gap-6" : "grid grid-cols-1"}>
                {currentProducts.map((product) =>
                    productStyle === "grid" ? (
                        <SingleGridItem key={product.id} item={product} />
                    ) : (
                        <SingleListItem key={product.id} item={product} />
                    )
                )}
              </div>

              {/* Пагинация */}
              <div className="flex justify-center mt-6">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-md bg-[#543b27] text-white disabled:bg-gray-300 mx-6"
                >
                  ← Назад
                </button>
                <span className="px-4 py-2">{currentPage} из {totalPages}</span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-md bg-[#543b27] text-white disabled:bg-gray-300 mx-6"
                >
                  Вперёд →
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
  );
};

export default ShopWithSidebar;
