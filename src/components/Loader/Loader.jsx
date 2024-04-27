import css from "../../components/Loader/Loader.module.css";
import { MutatingDots } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className={css.loader}>
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#f6ff00"
        secondaryColor="#0d00ff"
        radius="11.5"
        ariaLabel="mutating-dots-loading"
      />
    </div>
  );
};

export default Loader;
