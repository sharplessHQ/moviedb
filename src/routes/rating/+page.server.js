import { API_KEY } from '$env/static/private'

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();

  // return {
  //   data: [
  //     { name: 'a', rating: 6.7 },
  //     { name: 'b', rating: 4.6 },
  //   ]
  // }

  return {
    data: data?.results.slice(0, 10)?.map(movie=>({
      name: movie?.title,
      rating: movie?.vote_average
    }))
  }
};