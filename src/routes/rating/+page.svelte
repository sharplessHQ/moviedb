<script>
	import Bar from '../charts/Bar.svelte';
	export let data;
</script>

<div class="bar">
	<Bar data={data.data} title="Top 10 Popular Movies by Rating" />
</div>

<style>
	.bar {
		margin: 2rem 20%;
	}
</style>
