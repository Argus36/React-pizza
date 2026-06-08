import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type FetchPizzasProps = {
  currentPage: number;
  category: string;
  sortBy: string;
  order: string;
  search: string;
};

type PizzaItem = {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number[];
  rating: number;
  description: string;
  count: number;
};

interface PizzaSliceState {
  items: PizzaItem[];
  status: Status;
  pageId: number;
  loading: boolean;
}

enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING,
  pageId: 1,
  loading: true,
};

export const fetchPizzas = createAsyncThunk<PizzaItem[], FetchPizzasProps>(
  "pizza/fetchPizzasStatus",
  async ({ currentPage, category, sortBy, order, search }) => {
    const { data } = await axios.get<PizzaItem[]>(
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
        state.status = Status.LOADING;
        state.items = [];
        state.loading = true;
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.items = action.payload;
        state.pageId = Math.ceil(action.payload.length / 12);
        state.loading = false;
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
        state.loading = false;
      });
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
