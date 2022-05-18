export const initialState = {
  basket: [],
  user: null,
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
// incrementing all the price in the basket and basically starts with 0

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER": //yhe only reason it gone have to update when the user login or logout
      return {
        ...state,
        user: action.user, //if its say no and it will set the user inside as no and if auth
      };

    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    // logic for adding item to basket
    //   break;
    case "REMOVE_FROM_BASKET":
      // logic for removing item from basket

      // we cloned the basket
      let newBasket = [...state.basket];

      // we check to see if product exists
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // item exists in basket ,remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket`
        );
      }

      return { ...state, basket: newBasket };
    //   break;
    default:
      return state;
  }
};
export default reducer;
