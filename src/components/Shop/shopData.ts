import { Product } from "@/types/product";
const shopData: Product[] = [
    {
      id: 1,
      article: 2130142,
      title: "Бейдж для официанта;пластик,металл;,H=55,L=90,B=15мм;прозр.,металлич.",
      brand: "TABL",
      category: "Прочее",
      type: "Аксессуары для официанта",
      origin: "РОССИЯ",
      img: {
        thumbnails: [
          "https://pbd.complexbar.ru/images/product/4F9586CB-3E12-11EB-BBDF-005056921CC4.jpg",
          "https://pbd.complexbar.ru/images/product/ACFB71BB-424D-11E8-A155-00259035BB67.jpg"
        ],
        previews: [
          "https://pbd.complexbar.ru/images/product/4F9586CB-3E12-11EB-BBDF-005056921CC4.jpg"
        ]
      },
      discountPrice: 25,
      remainder: 14
    },
    {
      id: 2,
      article: 2150801,
      title: "Кошелек официанта;кожа;,L=18,B=10см",
      brand: "Was",
      category: "Прочее",
      type: "Аксессуары для официанта",
      origin: "ГЕРМАНИЯ",
      img: {
        thumbnails: [
          "https://pbd.complexbar.ru/images/product/96059347-4250-11E8-A155-00259035BB67.gif"
        ],
        previews: [
          "https://pbd.complexbar.ru/images/product/96059347-4250-11E8-A155-00259035BB67.gif"
        ]
      },
      discountPrice: 2665,
      remainder: 0
    }
]

export default shopData;