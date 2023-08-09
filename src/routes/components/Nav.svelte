<script>
	import { page } from '$app/stores';
	let currPage = '';
	page.subscribe((currentPage) => {
		// console.log(currentPage);
		currPage = currentPage.route.id;
	});
</script>

<nav>
	<div class="nav-btns">
		<a href="/" class={currPage === '/' ? 'currPage' : ''}>Movie Database</a>
		<a href="/rating" class={currPage === '/rating' ? 'currPage' : ''}>Movie Ratings</a>
		<a href="/demo/dog" class={currPage.includes('/demo') ? 'currPage' : ''}>Server Demo</a>
		<a href="/staging/hamster" class={currPage.includes('/staging') ? 'currPage' : ''}
			>Staging Demo</a
		>
		<a href="/clock" class={currPage === '/clock' ? 'currPage' : ''}>Clock</a>
	</div>
</nav>

<style>
	nav {
		display: flex;
		min-height: 10vh;
		align-items: center;
		justify-content: center;
	}
	a {
		font-size: 1rem;
		font-weight: bold;
		font-family: 'Poppins';
		color: powderblue;
		background-color: teal;
		text-decoration: none;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
	}
	.currPage {
		color: pink;
	}
	.nav-btns {
		display: grid;
		grid-template-columns: repeat(5, auto);
		grid-column-gap: 2rem;
	}
</style>
