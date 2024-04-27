import toast, { Toaster } from "react-hot-toast";
import { IoIosSearch } from "react-icons/io";
import css from "../SearchBar/SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const onSubmitBar = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const data = form.elements.search.value;
    if (data.trim() === "") {
      toast.error("Input is empty!");
      return;
    }
    onSubmit(data.trim());
    form.reset();
  };

  return (
    <header>
      <form className={css.formContainer} onSubmit={onSubmitBar}>
        <button className={css.searchBtn} type="submit">
          <IoIosSearch className={css.icon} />
        </button>
        <input
          className={css.inputSearch}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <Toaster position="top-right" reverseOrder={false} />
      </form>
    </header>
  );
};

export default SearchBar;
