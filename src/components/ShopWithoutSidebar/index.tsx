"use client";
import React, { useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import SingleGridItem from "../Shop/SingleGridItem";
import SingleListItem from "../Shop/SingleListItem";
import shopData from "../Shop/shopData";

const ITEMS_PER_PAGE = 9; // Количество товаров на странице

const ShopWithoutSidebar = () => {
  const [productStyle, setProductStyle] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(shopData.length / ITEMS_PER_PAGE);
  const currentProducts = shopData.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
      <>
        <Breadcrumb title={"Все продукты"} pages={["магазин"]} />
        <section className="overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-28 bg-[#f3f4f6]">
          <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
            <div className="flex gap-7.5">
              <div className="w-full">
                <div className="rounded-lg bg-white shadow-1 pl-3 pr-2.5 py-2.5 mb-6 flex justify-between items-center">
                  <p>
                    Показано <span className="text-dark">{currentProducts.length}</span> из{" "}
                    {shopData.length} товаров
                  </p>

                  <div className="flex items-center gap-2.5">
                    <button
                        onClick={() => setProductStyle("grid")}
                        className={`${productStyle === "grid" ? "bg-[#543b27] text-white" : "text-dark bg-gray-1"} px-3 py-1 rounded-md`}
                    >
                      Grid
                    </button>
                    <button
                        onClick={() => setProductStyle("list")}
                        className={`${productStyle === "list" ? "bg-[#543b27] text-white" : "text-dark bg-gray-1"} px-3 py-1 rounded-md`}
                    >
                      List
                    </button>
                  </div>
                </div>

                {/* Отображение товаров */}
                <div className={`grid ${productStyle === "grid" ? "grid-cols-3 gap-6" : "grid-cols-1"}`}>
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
                      className={`px-4 py-2 rounded-md mr-2 ${currentPage === 1 ? "bg-gray-300" : "bg-[#543b27] text-white"}`}
                  >
                    ← Назад
                  </button>
                  <span className="px-4 py-2">{currentPage} из {totalPages}</span>
                  <button
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      className={`px-4 py-2 rounded-md ml-2 ${currentPage === totalPages ? "bg-gray-300" : "bg-[#543b27] text-white"}`}
                  >
                    Вперёд →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
};

export default ShopWithoutSidebar;
