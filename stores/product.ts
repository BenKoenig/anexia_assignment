import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  state: () => ({
    productName: '',
  }),
  actions: {
    updateProductName(newName: string) {
      this.productName = newName;
    },
    clearProductName() {
      this.productName = '';  // Clear the product name
    }
  },
});
