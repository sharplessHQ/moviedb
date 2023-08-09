<script>
	import { page } from '$app/stores';
	let currPageFooter = '';
	page.subscribe((currentPage) => {
		// console.log(currentPage);
		currPageFooter =
			currentPage.params.pet === 'dog'
				? 'dog.ceo'
				: currentPage.params.pet === 'hamster' || currentPage.route.id === '/clock'
				? ''
				: 'api.themoviedb.org/';
	});
</script>

{#if currPageFooter !== ''}
	<footer>
		<p>data from <a href={`https://${currPageFooter}`}>{currPageFooter}</a></p>
	</footer>
{/if}

<style>
	p {
		padding: 2rem;
	}
</style>
