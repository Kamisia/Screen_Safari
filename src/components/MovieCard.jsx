import { useState } from "react";

const MovieCard = ({ posterPath, voteAverage }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div
      className="single-movie"
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
      style={{
        backgroundImage: posterPath
          ? `url(https://image.tmdb.org/t/p/w500${posterPath})`
          : `url(https://cdn.pixabay.com/photo/2018/01/05/00/20/test-image-3061864_1280.png)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="average"
        style={{
          visibility: isShow ? "visible" : "hidden",
        }}
      >
        <h1 className="vote">{voteAverage}/10</h1>
      </div>
    </div>
  );
};
export default MovieCard;
