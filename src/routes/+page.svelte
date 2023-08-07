<script>
	export let data;
	// console.log(data);
	import Movies from './components/Movies.svelte';
	import Search from './components/Search.svelte';
	import { fly } from 'svelte/transition';
</script>

<section in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ y: 0, duration: 500 }}>
	<Search />
	<Movies movies={data.movies} />
</section>
