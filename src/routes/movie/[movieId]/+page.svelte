<script>
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';
	export let data;
</script>

<a href="/" data-sveltekit-noscroll>Back</a>
<button on:click={() => goto('/', { noscroll: false })}>Back</button>
<div
	class="movie-details"
	in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ y: 0, duration: 500 }}
>
	<div class="img-container">
		<img src={`https://image.tmdb.org/t/p/w500/${data.movie.backdrop_path}`} alt="" />
	</div>
	<div class="txt-container">
		<h1>{data.movie.title}</h1>
		<p class="overview">{data.movie.overview}</p>
		<p>
			<span>Release Date: </span>{data.movie.release_date}<br />
			<span>Budget: $</span>{(data.movie.budget / 1000000).toFixed(1)}M<br />
			<span>Rating: </span>{data.movie.vote_average.toFixed(1)}<br />
			<span>Popularity: </span>{data.movie.popularity.toFixed(0)}<br />
			<span>Runtime: </span>{data.movie.runtime}mins<br />
		</p>
	</div>
</div>

<style>
	h1 {
		padding: 1rem 0 2rem;
	}
	p {
		padding: 1rem 0;
	}
	img {
		width: 100%;
		border-radius: 1rem;
	}
	.movie-details {
		margin: 2rem 20%;
	}
	span {
		font-weight: bold;
	}
	a {
		margin-left: 20%;
	}
</style>
