export interface Product {
  id: number;       // added unique id
  name: string;
  price: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: "35.27",
    image: "/images/p1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: "13.06",
    image: "/images/p2.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: "24.99",
    image: "/images/p3.jpg",
  },
  {
    id: 4,
    name: "Product 4",
    price: "45.03",
    image: "/images/p4.jpg",
  },
  {
    id: 5,
    name: "Product 5",
    price: "48.39",
    image: "/images/p5.jpg",
  },
  {
    id: 6,
    name: "Product 6",
    price: "10.26",
    image: "/images/p6.jpg",
  },
  {
    id: 7,
    name: "Product 7",
    price: "46.59",
    image: "/images/p7.jpg",
  },
  {
    id: 8,
    name: "Product 8",
    price: "59.04",
    image: "/images/p8.jpg",
  },
];
