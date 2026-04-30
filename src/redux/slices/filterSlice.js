import { createSlice } from "@reduxjs/toolkit";

//    1. initialState
const initialState = {
  searchValue: "",
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: "Популярности 🡇",
    sortProperty: "rating",
  },
};

//    2. сщздаём константу
const filterSlice = createSlice({
  name: "filterSlice", // название что бы он коректно сработал
  initialState, // по сути initialState: initialState,
  reducers: {
    // метод называется

    setSearch(state, action) {
      state.searchValue = action.payload;
    },

    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setPage(state, action) {
      state.currentPage = Number(action.payload);
    },
    setQuery(state, action) {
      state.categoryId = Number(action.payload.categoryId);
      state.currentPage = Number(action.payload.currentPage);
      state.sort = action.payload.sort;
    },
  },
});

// все методы будут хранится в actions не в reducers
export const { setSearch, setCategoryId, setSort, setPage, setQuery } =
  filterSlice.actions; // вытаскиваем свойства потом импортируем

export default filterSlice.reducer;
