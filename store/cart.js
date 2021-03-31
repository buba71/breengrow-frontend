export const state = () => ({
  cart: [],
  cartItemsCounter: 0
});

export const getters = {
  cartProducts: (state) => {
    return state.cart;
  },
  getCounter: (state) => {
    return state.cartItemsCounter;
  },
  totalCartPrice: (state) => {
    const total = state.cart.map((element) => element.quantity * element.price);

    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(total.reduce((acc, cur) => acc + cur, 0));
  }
};

export const actions = {
  addProductToCart: (context, product) => {
    const cartItem = context.state.cart.find((item) => item.id === product.id);

    if (typeof cartItem === 'undefined') {
      context.commit('ADD_PRODUCT_TO_CART', product);
    } else {
      context.commit('INCREASE_QUANTITY', cartItem);
    }
    context.commit('INCREASE_ITEMS_COUNTER');
  },

  removeProductFromCart: (context, product) => {
    const cartItem = context.state.cart.find((item) => item.id === product.id);

    if (cartItem && cartItem.quantity > 1) {
      context.commit('DECREASE_QUANTITY', product);
      context.commit('DECREASE_ITEMS_COUNTER');
    }
    // handling the case when user want remove product from cart
    // Quantity = 0;
  }
};

export const mutations = {
  ADD_PRODUCT_TO_CART: (state, product) => {
    state.cart.push({
      id: product.id,
      description: product.description,
      price: product.price,
      quantity: 1
    });
  },

  REMOVE_PRODUCT_FROM_CART: (state, index) => {
    // state.cart.splice(index, 1);
  },

  INCREASE_QUANTITY: (state, cartItem) => {
    cartItem.quantity++;
  },

  DECREASE_QUANTITY: (state, cartItem) => {
    cartItem.quantity--;
  },

  INCREASE_ITEMS_COUNTER: (state) => {
    state.cartItemsCounter++;
  },

  DECREASE_ITEMS_COUNTER: (state) => {
    state.cartItemsCounter--;
  }
};
