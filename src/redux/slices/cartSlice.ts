import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number;
  type: string;
  count: number;
};

interface CartSliceState {
  allPrice: number;
  amount: number;
  items: CartItem[];
}

const localAllPrice = JSON.parse(localStorage.getItem("allPrice") || "0");
const localItems = JSON.parse(localStorage.getItem("items") || "[]");
const localAmount = JSON.parse(localStorage.getItem("amount") || "0");

const localStorageChange = (state: CartSliceState) => {
  try {
    localStorage.setItem("allPrice", JSON.stringify(state.allPrice));
    localStorage.setItem("items", JSON.stringify(state.items));
    localStorage.setItem("amount", JSON.stringify(state.amount));
  } catch (error) {
    console.log(error);
  }
};

const initialState: CartSliceState = {
  allPrice: localAllPrice,
  amount: localAmount,
  items: localItems,
};

const findItemsPizza = (
  state: CartSliceState,
  action: PayloadAction<CartItem>,
) => {
  const isSamePizza = (obj1: CartItem, obj2: CartItem) => {
    const { count: _, ...o1 } = obj1;
    const { count: __, ...o2 } = obj2;
    return JSON.stringify(o1) === JSON.stringify(o2);
  };

  const findItems = state.items.find((obj) => isSamePizza(obj, action.payload));

  return findItems;
};

const allPriceCount = (state: CartSliceState) => {
  state.allPrice = state.items.reduce(
    (sum, obj) => obj.price * obj.count + sum,
    0,
  );

  state.amount = state.items.reduce((sum, obj) => obj.count + sum, 0);

  localStorageChange(state);
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItems = findItemsPizza(state, action);

      if (findItems) {
        findItems.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      allPriceCount(state);
    },

    removeItem(state, action: PayloadAction<CartItem>) {
      const findItems = state.items.findIndex(
        (obj) =>
          obj.id === action.payload.id &&
          obj.sizes === action.payload.sizes &&
          obj.type === action.payload.type,
      );

      if (findItems !== -1) {
        if (state.items[findItems].count <= 1) {
          state.items.splice(findItems, 1);
        } else {
          state.items[findItems].count--;
        }
      }

      allPriceCount(state);
    },
    clearLine(state, action: PayloadAction<CartItem>) {
      const findItems = state.items.findIndex(
        (obj) =>
          obj.id === action.payload.id &&
          obj.sizes === action.payload.sizes &&
          obj.type === action.payload.type,
      );

      state.items.splice(findItems, 1);

      allPriceCount(state);
    },
    clearItems(state) {
      state.items = [];
      state.allPrice = 0;
      state.amount = 0;

      localStorageChange(state);
    },
  },
});

export const { addItem, removeItem, clearLine, clearItems } = CartSlice.actions;

export default CartSlice.reducer;
