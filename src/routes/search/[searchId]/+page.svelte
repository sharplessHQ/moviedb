<script>
	import Movies from '../../components/Movies.svelte';
	export let data;
</script>

<Movies movies={data.movies} />
