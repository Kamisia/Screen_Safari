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
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToScroll: 5,
          slidesToShow: 5,
        },
      },

      {
        breakpoint: 1450,
        settings: {
          slidesToScroll: 4,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 780,
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

  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState([]);
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const fetchSearchData = async (event) => {
    try {
      const apiKey = import.meta.env.VITE_TMDB_API_KEY;
      const search = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      );
      return setSearchQuery(search.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleSearch = () => {
    fetchSearchData();
  };
  useEffect(() => {
    handleSearch();
  }, []);

  //obsługa modalu
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
    voteAverage: "",
    posterPath: "",
  });
  const openModal = (posterPath, voteAverage, title, description) => {
    setModalContent({
      title: title,
      description: description,
      voteAverage: voteAverage,
      posterPath: posterPath,
    });
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
    setModalContent({
      title: "",
      description: "",
      voteAverage: "",
      posterPath: "",
    });
    console.log(modalContent);
  };

  return (
    <AppContext.Provider
      value={{
        movies,
        settings,
        topRated,
        handleInputChange,
        searchQuery,
        query,
        handleSearch,
        modalContent,
        openModal,
        closeModal,
        isOpenModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
