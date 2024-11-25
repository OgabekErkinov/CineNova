export const endpoint = {
    topRated: '/movie/top_rated',
    upComing: '/movie/upcoming',
    popular: '/movie/popular',
    singleMovie: (id) => `/movie/${id}`,
    similarMovies: (id) => `/movie/${id}/similar`,
    searched: (movie) => `/search/movie?query=${movie}`,
    generalId: (...params) => `/discover/movie?${params.map(param => `query=${param}`).join('&')}`
};
