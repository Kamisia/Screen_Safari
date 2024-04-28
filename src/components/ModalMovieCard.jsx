import { useGlobalContext } from "../Context";

const ModalMovieCard = ({ title, description, posterPath }) => {
  return (
    <div className="modal">
      <div
        className="image-container"
        style={{
          backgroundImage: posterPath
            ? `url(https://image.tmdb.org/t/p/w500${posterPath})`
            : `url(https://cdn.pixabay.com/photo/2018/01/05/00/20/test-image-3061864_1280.png)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="description-content">
        <h1>{title}</h1>
        <h3>{voteAverage}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ModalMovieCard;
