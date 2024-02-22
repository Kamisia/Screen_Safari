const FooterPage = () => {
  return (
    <div className="footer">
      <p>
        This website uses
        <a className="tmdb" href="https://www.themoviedb.org">
          {" "}
          TMDB{" "}
        </a>
        and the TMDB APIs but is not endorsed, certified, or otherwise approved
        by
        <a className="tmdb" href="https://www.themoviedb.org">
          {" "}
          TMDB
        </a>
        .
      </p>
    </div>
  );
};

export default FooterPage;
