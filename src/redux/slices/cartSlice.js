import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPrice: 0,
  amount: 0,
  items: [],
};

const findItemsPizza = (state, action) => {
  const isSamePizza = (obj1, obj2) => {
    const { count: _, ...o1 } = obj1;
    const { count: __, ...o2 } = obj2;
    return JSON.stringify(o1) === JSON.stringify(o2);
  };

  const findItems = state.items.find((obj) => isSamePizza(obj, action.payload));

  return findItems;
};

const allPriceCount = (state, action) => {
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
    addItem(state, action) {
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

    removeItem(state, action) {
      const findItems = findItemsPizza(state, action);

      if (findItems.count <= 1) {
        state.items = state.items.filter((obj) => obj.id !== findItems.id);
      } else {
        findItems.count--;
      }

      allPriceCount(state, action);
    },
    clearLine(state, action) {
      const findItems = findItemsPizza(state, action);

      state.items = state.items.filter((obj) => obj.id !== findItems.id);

      allPriceCount(state, action);
    },
    clearItems(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearLine, clearItems } = CartSlice.actions;

export default CartSlice.reducer;
