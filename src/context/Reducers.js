import { faker } from '@faker-js/faker';
faker.seed(99);

export const products = [...Array(42)].map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  image: faker.image.food(640, 480, true),
  inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
  fastDelivery: faker.datatype.boolean(),
  ratings: faker.helpers.arrayElement([1, 3, 3, 4, 5]),
}));

const cartReducers = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state, 
          cart : [
            ...state.cart, 
            {...action.payload, qty:1}
          ]
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state, 
          cart : state.cart.filter((c) => c.id !== action.payload.id)
        };
      case 'CHANGE_CART_QTY':
        return {
          ...state, 
          cart : state.cart.filter((c) => 
            c.id === action.payload.id ? c.qty = action.payload.qty : c.qty
          )
        };
      default:
        return state;
    }
};

export default cartReducers;
