/*
 * product.ts
 *
 * This module defines a Pinia store for managing product data.
 * The store has two state properties: productName and isProductLoading.
 * productName is a string that holds the name of the current product.
 * isProductLoading is a boolean that indicates whether the product data is being loaded.
 * The store also has two actions: updateProductName and clearProductName.
 * updateProductName takes a new name as a parameter and updates productName with it.
 * clearProductName clears the productName by setting it to an empty string.
 */

import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    productName: "",
    isProductLoading: true,
  }),
  actions: {
    updateProductName(newName: string) {
      this.productName = newName;
    },
    clearProductName() {
      this.productName = ""; // Clear the product name
    },
  },
});
