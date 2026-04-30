import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: "loading",
  pageId: 1,
};

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async ({ currentPage, category, sortBy, order, search }) => {
    const { data } = await axios.get(
      `https://68be220c227c48698f86132b.mockapi.io/items?page=${currentPage}${category}&sortBy=${sortBy}&order=${order}${search}`,
    );
    return data;
  },
);

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = "loading";
        state.items = [];
        state.loading = true;
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
        state.pageId = Math.ceil(action.payload.length / 12);
        state.loading = false;
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = "error";
        state.items = [];
        state.loading = false;
      });
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
