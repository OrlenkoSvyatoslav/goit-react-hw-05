import { MutatingDots } from "react-loader-spinner";
import css from "../../components/Loading/Loading.module.css";

const Loading = () => {
  return (
    <div className={css.loading}>
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

export default Loading;
