import { useGlobalContext } from "../Context";
import { IoMdClose } from "react-icons/io";

const ModalMovieCard = ({
  title,
  description,
  posterPath,
  voteAverage,
  releaseDate,
}) => {
  const {} = useGlobalContext();
  return (
    <div className="modal">
      <div className="modal-content">
        <button>
          {" "}
          <IoMdClose />{" "}
        </button>
        <div
          className="image-container"
          style={{
            backgroundImage:
              /*posterPath
            ? `url(https://image.tmdb.org/t/p/w500${posterPath})`
        : */
              `url(https://cdn.pixabay.com/photo/2018/01/05/00/20/test-image-3061864_1280.png)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="description-content">
          <h1>{title} Title</h1>
          <h3>{voteAverage} 6.67/10</h3>
          <p>{description} blablablablabalabalabla</p>
          <p id="data">{releaseDate} data </p>
        </div>
      </div>
    </div>
  );
};

export default ModalMovieCard;
