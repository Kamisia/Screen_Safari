import { useGlobalContext } from "../Context";
import { IoMdClose } from "react-icons/io";

const ModalMovieCard = () => {
  const { isOpenModal, closeModal, modalContent } = useGlobalContext();
  const { title, description, posterPath, voteAverage } = modalContent;
  return isOpenModal ? (
    <div className="modal">
      <div
        className="modal-content"
        style={{
          backgroundImage: posterPath
            ? `url(https://image.tmdb.org/t/p/w500${posterPath})`
            : `url(https://cdn.pixabay.com/photo/2018/01/05/00/20/test-image-3061864_1280.png)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="description-content">
          <div className="btn">
            <button onClick={closeModal}>
              {" "}
              <IoMdClose />{" "}
            </button>
          </div>
          <h1>{title}</h1>
          <h3>{voteAverage}/10</h3>
          <div className="text">
            <p>{description} </p>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ModalMovieCard;
