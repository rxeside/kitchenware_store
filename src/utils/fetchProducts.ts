import {Product} from "@/types/product";

export const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch("/data/products.json");
    if (!response.ok) {
        throw new Error("Ошибка загрузки данных");
    }
    return response.json();
};
