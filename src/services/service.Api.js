import { endpoint } from "./endpoints";
import { privateApi } from "./Axios";


export const getPopularData = async () => {
    try {
        const  data  = await privateApi.get(endpoint.popular);
        return data?.results; 
    } catch (error) {
        console.error("Error fetching popular movies:", error.message);
        throw new Error("Failed to fetch popular movies.");
    }
};
export const getNewMovies = async () => {
    try {
        const data  = await privateApi.get(endpoint.upComing);
        return data?.results; 
    } catch (error) {
        console.error("Error fetching new movies:", error.message);
        throw new Error("Failed to fetch new movies.");
    }
};

export const getTopData = async () => {
    try {
        const  data  = await privateApi.get(endpoint.topRated);
        return data.results; 
    } catch (error) {
        console.error("Error fetching top rated movies:", error.message);
        throw new Error("Failed to fetch top rated movies.");
    }
};


export const getSingleMovie = async (movieId) => {
    try {
        const  data  = await privateApi.get(endpoint.singleMovie(movieId));
        return data; 
    } catch (error) {
        console.error("Error fetching single movie:", error.message);
        throw new Error("Failed to fetch the movie details.");
    }
};

export const getSearchedMovie = async (movie) => {
    try {
        const  data  = await privateApi.get(endpoint.searched(movie));
        return data.results; 
    } catch (error) {
        console.error("Error fetching searched movie:", error.message);
        throw new Error("Failed to fetch searched movies.");
    }
};

export const getMoviebyGenre = async (genreId) => {
    try {
        const  data  = await privateApi.get(endpoint.generalId(genreId));
        return data.results; 
    } catch (error) {
        console.error("Error fetching movies by genre:", error.message);
        throw new Error("Failed to fetch movies by genre.");
    }
};

export const getSimilarMovies = async (id) => {
    try {
    //   `/movie/${id}/similar?language=en-US&page=1`
      const  data  = await privateApi.get(endpoint.similarMovies(id));
     
      if (!data) {
        console.error("No results found.");
        return [];  
      }
      return data.results;
    } catch (error) {
      console.error("O'xshash filmlarni olishda xato:", error.message);
      return [];  
    }
  };
  
  
