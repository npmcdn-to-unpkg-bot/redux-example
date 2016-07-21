import shop from '../api/shop';

export const ADD_TO_CART = 'ADD_TO_CART';
export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST';
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE';

function addToCartUnsafe(productId) {
  return {
    type: ADD_TO_CART,
    productId
  };
}

export function addToCart(productId) {
  return (dispatch, getState) => {
    if (getState().products.byId[productId].inventory > 0) {
      dispatch(addToCartUnsafe(productId));
    }
  };
}

export function checkout(products) {
  return (dispatch, getState) => {
    const cart = getState().cart;

    dispatch({
      type: CHECKOUT_REQUEST
    });
    shop.buyProducts(products, () => {
      dispatch({
        type: CHECKOUT_SUCCESS,
        cart
      });
      // Replace the line above with line below to rollback on failure:
      // dispatch({ type: types.CHECKOUT_FAILURE, cart })
    });
  };
}

const initialState = {
  addedIds: [],
  quantityById: {}
};

function addedIds(state = initialState.addedIds, action) {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state;
      }
      return [...state, action.productId];
    default:
      return state;
  }
}

function quantityById(state = initialState.quantityById, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const { productId } = action;
      return Object.assign({}, state, {
        [productId]: (state[productId] || 0) + 1
      });
    }
    default:
      return state;
  }
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState;
    case CHECKOUT_FAILURE:
      return action.cart;
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      };
  }
}

export function getQuantity(state, productId) {
  return state.quantityById[productId] || 0;
}

export function getAddedIds(state) {
  return state.addedIds;
}
