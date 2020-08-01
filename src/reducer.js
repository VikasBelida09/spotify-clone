export const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  user: null,
};
export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => amount + item.price, 0);

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      localStorage.setItem(
        "basket",
        JSON.stringify([...state.basket, action.item])
      );
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((item) => item.id === action.id);
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove the prodcut (id:${action.id}) as its not in the basket`
        );
      }
      localStorage.setItem("basket", JSON.stringify(newBasket));
      return { ...state, basket: newBasket };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}
export default reducer;
