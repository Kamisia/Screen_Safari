import { useContext, createContext, useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1340,
        settings: {
          slidesToScroll: 6,
          slidesToShow: 6,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 1330,
        settings: {
          slidesToScroll: 4,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = import.meta.env.VITE_TMDB_API_KEY;
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
        );
        const resp = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
        );
        setMovies(response.data.results);
        setTopRated(resp.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ movies, settings, topRated }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
