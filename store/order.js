export const state = () => ({
  order: {
    consumerId: '',
    hive_siret: '',
    orderLines: []
  }
});

export const getters = {
  currentOrder: (state) => {
    return state.order;
  }
};

export const actions = {};

export const mutations = {
  SET_ORDER_LINES: (state, orderData) => {
    // Ordeline DTO.
    const OrderLine = class {
      constructor(productId, quantity, linePrice) {
        this.productId = productId;
        this.quantity = quantity;
        this.linePrice = linePrice;
      }
    };

    const orderLines = orderData.productsCart.map(
      (line) => new OrderLine(line.id, line.quantity, line.price)
    );

    state.order.consumerId = orderData.consumerId;
    state.order.hive_siret = orderData.hive_siret;
    state.order.orderLines = orderLines;
  },
  SET_CONSUMER: (state, consumerId) => {
    state.order.consumerId = consumerId;
  },
  SET_SIRET: (state, siret) => {
    state.order.hive_siret = siret;
  }
};
