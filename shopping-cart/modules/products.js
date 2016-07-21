import shop from '../api/shop';
import { combineReducers } from 'redux';
import { ADD_TO_CART } from './cart';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

function receiveProducts(products) {
  return {
    type: RECEIVE_PRODUCTS,
    products
  };
}

export function getAllProducts() {
  return dispatch => {
    shop.getProducts(products => {
      dispatch(receiveProducts(products));
    });
  };
}

function productsReducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return Object.assign({}, state, {
        inventory: state.inventory - 1
      });
    default:
      return state;
  }
}

function byId(state = {}, action) {
  let productId;
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return Object.assign({},
        state,
        action.products.reduce((obj, product) => {
          obj[product.id] = product;
          return obj;
        }, {})
      );
    default:
      productId = action.productId;
      if (productId) {
        return Object.assign({}, state, {
          [productId]: productsReducer(state[productId], action)
        });
      }
      return state;
  }
}

function visibleIds(state = [], action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.id);
    default:
      return state;
  }
}

export default combineReducers({
  byId,
  visibleIds
});

export function getProduct(state, id) {
  return state.byId[id];
}

export function getVisibleProducts(state) {
  return state.visibleIds.map(id => getProduct(state, id));
}
