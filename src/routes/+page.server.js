
import { API_KEY } from '$env/static/private'

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
		process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
		
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
		);
		const data = await res.json();
		// console.log('data" ', data);
		// console.log('res" ', res);
		// if (res.ok) {
			return {movies: data.results};
		// }
};
