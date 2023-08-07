<nav>
	<div class="nav-btns">
		<a href="/">Movie Database</a>
		<a href="/demo/dog">Server Demo</a>
		<a href="/staging/hamster">Staging Demo</a>
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
	.nav-btns {
		display: grid;
		grid-template-columns: repeat(3, auto);
		grid-column-gap: 2rem;
	}
</style>
