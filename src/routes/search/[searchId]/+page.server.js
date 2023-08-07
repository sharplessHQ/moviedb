import { API_KEY } from '$env/static/private'

/** @type {import('./$types').PageServerLoad} */
export const load = async ({params}) => {
  // console.log('params: ', params)
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${params.searchId}&page=1&include_adult=false`
  );
  const data = await res.json();
  // console.log('data???', data);
  // if (res.ok) {
    return {movies: data.results};
  // }
};