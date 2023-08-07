<script>
	import Error from '../../components/Error.svelte';
	import { page } from '$app/stores';

	let count = 0;
	const incrementBtn = () => {
		count++;
	};

	const load = (async () => {
		const res = await fetch(`https://${$page.params.pet}.ceo/api/breeds/image/random`);
		const result = await res.json();
		return result;
	})();
</script>

{#await load}
	<p>...waiting</p>
{:then data}
	<img src={data.message} alt="Dog" />

	<h1>Number: {count}</h1>
	<button on:click={incrementBtn}>Increment</button>
{:catch error}
	<!-- <p>An error occurred!</p> -->
	<Error />
{/await}

<style>
	img {
		width: 360px;
	}
	p {
		font-size: 2rem;
	}
</style>
