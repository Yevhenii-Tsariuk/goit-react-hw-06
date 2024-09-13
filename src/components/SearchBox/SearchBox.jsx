import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";
import { getFilter } from "../../redux/selectors";
import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const inputId = useId();
  const onChange = (evt) => {
    dispatch(setFilter(evt.target.value));
  };
  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        id={inputId}
        onChange={onChange}
      />
    </div>
  );
}
