/*
 * [slug].ts
 *
 * This event handler fetches a specific product from a list of products based on the product slug.
 * The product slug is retrieved from the router parameters.
 * If the product is found, it is returned; otherwise, null is returned.
 */

import { products } from './index';

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, "slug");
  const product = products.find(product => product.slug === slug);

  return product ? product : null;
}); 