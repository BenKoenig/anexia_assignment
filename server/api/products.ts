/**
 * This file defines an event handler that returns a list of products.
 * Each product has an id, name, price, description, and an image URL.
 * The products are hard-coded and include various tech products like iPhones, Macbooks, and laptops from different brands.
 */

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      name: "iPhone 9",
      price: 799,
      desc: "An apple mobile which is nothing like apple",
      img: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    },
    {
      id: 2,
      name: "iPhone X",
      price: 999,
      desc: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip",
      img: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    },
    {
      id: 3,
      name: "Macbook Pro",
      price: 2399,
      desc: "MacBook Pro 2021 with mini-LED display",
      img: "https://i.dummyjson.com/data/products/6/thumbnail.png",
    },
    {
      id: 4,
      name: "Samsung Galaxy Book",
      price: 1400,
      desc: "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip",
      img: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
    },
    {
      id: 5,
      name: "Infinix INBOOK",
      price: 1099,
      desc: "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
      img: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
    },
    {
      id: 6,
      name: "HP Pavilion 15-DK1056WM",
      price: 1399,
      desc: "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
      img: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
    }
  ];
});
