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

const initialState: CartSliceState = {
  allPrice: 0,
  amount: 0,
  items: [],
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

const allPriceCount = (
  state: CartSliceState,
  action: PayloadAction<CartItem>,
) => {
  state.allPrice = state.items.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);

  state.amount = state.items.reduce((sum, obj) => {
    return obj.count + sum;
  }, 0);
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

      allPriceCount(state, action);
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

      allPriceCount(state, action);
    },
    clearLine(state, action: PayloadAction<CartItem>) {
      const findItems = state.items.findIndex(
        (obj) =>
          obj.id === action.payload.id &&
          obj.sizes === action.payload.sizes &&
          obj.type === action.payload.type,
      );

      state.items.splice(findItems, 1);

      allPriceCount(state, action);
    },
    clearItems(state) {
      state.items = [];
      state.allPrice = 0;
      state.amount = 0;
    },
  },
});

export const { addItem, removeItem, clearLine, clearItems } = CartSlice.actions;

export default CartSlice.reducer;
