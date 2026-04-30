import { useRef, useState, useMemo } from "react";
import style from "./Search.module.scss";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";

import { setSearch } from "../../redux/slices/filterSlice";

export function Search() {
  const dispatch = useDispatch();

  const [focused, setFocused] = useState(false);
  const [localSearch, setLocalSearch] = useState("");

  const inputRef = useRef();

  const call = useMemo(
    () =>
      debounce((val) => {
        dispatch(setSearch(val));
      }, 400),
    [dispatch],
  );

  return (
    <div className={style.Search}>
      <svg
        onClick={() => inputRef.current.focus()}
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill={focused ? "#ff9600" : "#8f8f8f"}>
        <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
      </svg>
      <input
        type="text"
        placeholder="Поиск"
        ref={inputRef}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        onChange={(val) => {
          setLocalSearch(val.target.value);
          call(val.target.value);
        }}
        value={localSearch}
      />
      {localSearch && (
        <svg
          onClick={() => {
            setLocalSearch("");
            call("");
            inputRef.current.focus();
          }}
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill={focused ? "#ff9600" : "#8f8f8f"}>
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      )}
    </div>
  );
}
