import { useState } from "react";
const MovieCard = ({ posterPath, title, voteAverage }) => {
  const [isShow, setIsShow] = useState(false);
  if (!posterPath)
    return (
      <div
        className="single-movie"
        style={{
          backgroundImage:
            "url(" +
            "https://cdn.pixabay.com/photo/2018/01/05/00/20/test-image-3061864_1280.png" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    );
  return (
    <div
      className="single-movie"
      style={{
        backgroundImage:
          "url(" + `https://image.tmdb.org/t/p/w500${posterPath}` + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <div
        className="info"
        style={{
          visibility: isShow ? "visible" : "hidden",
        }}
      >
        <h1 className="vote">{voteAverage}/10</h1>
        <h1 className="title">{title}</h1>
      </div>
    </div>
  );
};
export default MovieCard;
