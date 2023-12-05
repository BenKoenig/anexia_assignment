/**
 * This file defines an event handler that returns a list of products.
 * Each product has an id, name, price, description, and an image URL.
 * The products are hard-coded and include various tech products like iPhones, Macbooks, and laptops from different brands.
 */

/**
 * returns a list of products.
 */
export const products = [
  {
    id: 1,
    slug: "iphone-9",
    name: "iPhone 9",
    price: 799,
    desc: "Imagine a mobile phone that, while named 'apple,' bears no resemblance to any products from the well-known Apple brand. This mobile device features a unique, futuristic design, distinct from the sleek, minimalist style typical of Apple products. It has a vibrant, iridescent body that changes color depending on the angle of light, unlike the standard monochrome finishes of Apple's iPhones.",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  },
  {
    id: 2,
    slug: "iphone-x",
    name: "iPhone X",
    price: 999,
    desc: "This is a SIM-Free smartphone, designated as Model A19211, featuring a large and impressive 6.5-inch Super Retina HD display. The display utilizes advanced OLED technology, known for its outstanding color accuracy, deep blacks, and striking contrast. Powering this device is the A12 Bionic chip, a high-performance processor known for its efficiency and speed. ",
    thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
  },
  {
    id: 3,
    slug: "macbook-pro",
    name: "Macbook Pro",
    price: 2399,
    desc: "The MacBook Pro 2021 represents a significant leap in Apple's laptop design and technology, particularly with its mini-LED display. This advanced display technology offers a remarkably vibrant and crisp visual experience, characterized by higher brightness levels and deeper blacks compared to traditional LCD panels.",
    thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
  },
  {
    id: 4,
    slug: "samsung-galaxy-book",
    name: "Samsung Galaxy Book",
    price: 1400,
    desc: "The Samsung Galaxy Book S (2020) is a cutting-edge laptop that stands out for its integration of the Intel Lakefield chip, a hybrid processor designed to combine high performance with energy efficiency. This laptop's slim, lightweight design makes it incredibly portable, yet it doesn't compromise on power or functionality.",
    thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
  },
  {
    id: 5,
    slug: "infinix-inbook",
    name: "Infinix INBOOK",
    price: 1099,
    desc: "The Infinix Inbook X1 is a sleek and efficient laptop, featuring a 10th generation Intel Core i3 processor. This processor provides a balance of performance and energy efficiency, making the Inbook X1 suitable for both everyday tasks and more demanding applications. ",
    thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
  },
  {
    id: 6,
    slug: "hp-pavilion-15-dk1056wm",
    name: "HP Pavilion 15-DK1056WM",
    price: 1399,
    desc: "The HP Pavilion 15-DK1056WM is a high-performance gaming laptop designed to deliver an immersive gaming experience. It is powered by a 10th Generation Intel Core i5 processor, which offers robust performance for gaming, multitasking, and productivity tasks.",
    thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
  },
];

/**
 * exports the event handler and returns the list of products when called.
 */
export default defineEventHandler(() => {
  return products;
});
