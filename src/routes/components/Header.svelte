<script>
	import { page } from '$app/stores';
	let currPageHeader = '';
	page.subscribe((currentPage) => {
		// console.log(currentPage);
		currPageHeader =
			currentPage.route.id === '/'
				? 'Popular Movies'
				: currentPage.route.id.includes('/movie')
				? 'Movie Details'
				: currentPage.route.id.includes('/search')
				? `Movies: ${currentPage.params.searchId}`
				: currentPage.route.id.includes('/staging')
				? 'Hamster Page'
				: currentPage.route.id === '/rating'
				? 'Movie Ratings'
				: 'Dog Page';
	});
</script>

<h1>Welcome to {currPageHeader}</h1>

<style>
	h1 {
		font-size: 3rem;
		margin: 2rem;
		text-align: center;
	}
</style>
