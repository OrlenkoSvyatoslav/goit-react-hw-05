import { BiSolidErrorAlt } from "react-icons/bi";

const ErrorMessage = () => {
  return (
    <div>
      <h2>
        <BiSolidErrorAlt />
        Whoops, something went wrong!
      </h2>
      <p> Please, try to reload this page!</p>
    </div>
  );
};

export default ErrorMessage;
