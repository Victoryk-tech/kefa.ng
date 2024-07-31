export const initialState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add_To_Cart":
      // Check if item already exists in the cart
      const existingIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex !== -1) {
        // If item exists, increase quantity
        const updatedItems = [...state.cart];
        updatedItems[existingIndex].quantity += 1;
        return updateCartState(updatedItems);
      } else {
        // If item does not exist, add it to the cart
        const newItem = { ...action.payload, quantity: 1 };
        const updatedItems = [...state.cart, newItem];
        return updateCartState(updatedItems);
      }

    case "Remove_From_Cart":
      // Remove item from cart
      const filteredItems = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return updateCartState(filteredItems);

    case "Increase_Cart":
      // Increase quantity of a specific item in the cart
      const increasedItems = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return updateCartState(increasedItems);

    case "Decrease_Cart":
      // Decrease quantity of a specific item in the cart
      const decreasedItems = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(0, item.quantity - 1) }
          : item
      );

      // Remove item if quantity becomes zero
      const updatedItems = decreasedItems.filter((item) => item.quantity > 0);
      return updateCartState(updatedItems);

    default:
      state;
  }
};

// Function to calculate total quantity and total price
const updateCartState = (cart) => {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.amount * item.quantity, //item.quantity[0] because products are in array and we are calculating products that are [0]
    0
  );
  return { cart, totalQuantity, totalPrice };
};

export default CartReducer;
