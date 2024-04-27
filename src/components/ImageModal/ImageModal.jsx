import Modal from "react-modal";
import css from "../ImageModal/ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

const ImageModal = ({ imgModal, onModalClose, image }) => {
  return (
    <div>
      <Modal
        isOpen={imgModal}
        onRequestClose={onModalClose}
        style={customStyles}
      >
        <img className={css.modalImg} src={image} />
      </Modal>
    </div>
  );
};

export default ImageModal;
