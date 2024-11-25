export const toSinglePage = (movie) => `/chosenMoviePage/${movie?.title?.replaceAll(" ",'-').toLowerCase()}-${movie?.id}`
