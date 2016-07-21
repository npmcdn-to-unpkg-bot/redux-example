import _products from './products.json';

const TIMEOUT = 1000;

export default {
  getProducts(cb) {
    setTimeout(() => cb(_products), TIMEOUT);
  },

  buyProducts(payload, cb) {
    setTimeout(() => cb(), TIMEOUT);
  }
};
