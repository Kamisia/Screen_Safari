const Footer = () => {
  return (
    <div className="footer">
      <p>
        This website uses
        <spam className="tmdb">
          <a href="https://www.themoviedb.org"> TMDB </a>
        </spam>
        and the TMDB APIs but is not endorsed, certified, or otherwise approved
        by
        <spam className="tmdb">
          <a href="https://www.themoviedb.org"> TMDB</a>
        </spam>
        .
      </p>
    </div>
  );
};

export default Footer;
