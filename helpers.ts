/*
 * helpers.ts
 *
 * This file contains utility functions that can be used throughout the application.
 */



/* The formatPrice function takes a number as input and 
returns a string with the number formatted as a price. */
export const formatPrice = (price: number) =>
  new Intl.NumberFormat().format(price);
