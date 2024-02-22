//import { FaTimes } from "react-icons";
import { useGlobalContext } from "../Context";

const SingleMovie = () => {
  const { isOpen, closeModal } = useGlobalContext();
  return (
    <div>
      <div className={isOpen ? "modal-overlay show-modal" : "modal-overlay"}>
        <div className="modal-container">
          <h3>Modal Content</h3>
          <button className="close-modal-btn" onClick={closeModal}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
