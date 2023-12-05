import { products } from './index';

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, "slug");
  const product = products.find(product => product.slug === slug);

  return product ? product : null;
}); 