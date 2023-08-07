<script>
	import Footer from './components/Footer.svelte';
	import Header from './components/Header.svelte';
	import Nav from './components/Nav.svelte';
	import './styles.css';
</script>

<div class="app">
	<Nav />
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
