import css from "../LoadMoreBtn/LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={css.loadMoreBtnConteiner}>
      <button className={css.loadMoreBtn} onClick={onClick} type="button">
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
