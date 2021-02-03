import { getters, actions, mutations } from '../../../store/cart.js';

describe('Test cart store getters', () => {
  let state;

  beforeEach(() => {
    state = {
      cart: []
    };
  });
  it('Should return the total price of cart', () => {
    // Given three cart items.
    for (let i = 1; i <= 3; i++) {
      state.cart.push({
        id: `id${i}`,
        description: 'testDescription',
        price: i,
        quantity: 1
      });
    }

    // Where total price should be 6.
    const totalFormated = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(6);

    expect(getters.totalCartPrice(state)).toBe(totalFormated);
  });
});

describe('Test cart store actions', () => {
  // Given context, a product.
  let context;
  let product;

  beforeEach(() => {
    context = {
      state: {
        cart: []
      },
      commit: jest.fn()
    };

    product = {
      id: 'id',
      description: 'description',
      quantity: 1,
      price: 1
    };
  });

  it('Should test cart action: add a new product to cart ', () => {
    // Given no product into cart.
    actions.addProductToCart(context, product);

    expect(context.commit).toHaveBeenCalledWith('ADD_PRODUCT_TO_CART', product);
    expect(context.commit).toHaveBeenCalledWith('INCREASE_ITEMS_COUNTER');
    expect(context.commit).toHaveBeenCalledTimes(2);
  });

  it('Should test cart action: add a product that already exist into cart', () => {
    // Given a product into cart.
    context.state.cart.push(product);

    actions.addProductToCart(context, product);

    // Then just increase quantity.
    expect(context.commit).toHaveBeenCalledWith('INCREASE_QUANTITY', product);
    expect(context.commit).toHaveBeenCalledWith('INCREASE_ITEMS_COUNTER');
    expect(context.commit).toHaveBeenCalledTimes(2);
  });
});

describe('Test cart mutations', () => {
  // Given cart state.
  let state;

  beforeEach(() => {
    state = {
      cart: []
    };
  });

  it('Should map product to cartItem', () => {
    // Given a hive product.
    const product = {
      id: 'testid123',
      name: 'Fromage',
      description: 'Fromage de chèvre',
      price: 4.9
    };

    // Then the corresponding cart Item should be.
    const carItem = {
      id: 'testid123',
      description: 'Fromage de chèvre',
      price: 4.9,
      quantity: 1 // Because its the first that it be added to the cart.
    };

    mutations.ADD_PRODUCT_TO_CART(state, product);

    expect(state.cart[0]).toEqual(carItem);
  });
});
