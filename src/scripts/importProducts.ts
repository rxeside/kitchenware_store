import fs from "fs";
import * as XLSX from "xlsx";
import { Product } from "@/types/product";

const XLSX_FILE_PATH = "./data.xlsx"; // Укажите путь к файлу

function parseImages(imageCell: string): { thumbnails: string[]; previews: string[] } {
    try {
        const urls = JSON.parse(imageCell) as string[];
        return {
            thumbnails: urls.slice(0, 2), // первые 2 изображения — превью
            previews: urls, // остальные как фоновые
        };
    } catch (error) {
        console.error("Ошибка парсинга изображений:", imageCell);
        return { thumbnails: [], previews: [] };
    }
}

function loadProductsFromXlsx(filePath: string): Product[] {
    const workbook = XLSX.read(fs.readFileSync(filePath), { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json<any>(sheet);

    return rows.map((row, index) => ({
        id: index + 1,
        title: row["Название"],
        reviews: Math.floor(Math.random() * 20), // случайное количество отзывов
        price: parseFloat(row["Цена"]) || 0,
        discountedPrice: parseFloat(row["Старая цена"]) || 0,
        imgs: parseImages(row["Изображения"]),
    }));
}

const products = loadProductsFromXlsx(XLSX_FILE_PATH);
fs.writeFileSync("products.json", JSON.stringify(products, null, 2));

console.log("Импорт завершен! Данные сохранены в data/products.json");
