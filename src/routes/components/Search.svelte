<script>
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';
	let inputVal = '';
	let isSearchActive = false;

	const setIsSearchActive = () => {
		if (inputVal) {
			isSearchActive = true;
		} else {
			isSearchActive = false;
		}
	};

	const submitSearch = () => {
		console.log(inputVal);
		goto(`search/${inputVal}`);
	};
</script>

<form class="search" on:submit|preventDefault={submitSearch}>
	{#if !isSearchActive}
		<label for="search_movie" in:fly={{ y: -20, duration: 500 }} out:fly={{ y: -20, duration: 500 }}
			>Search Movie</label
		>
	{/if}
	<input
		type="text"
		name="search_movie"
		bind:value={inputVal}
		on:focus={() => (isSearchActive = true)}
		on:blur={setIsSearchActive}
		class={isSearchActive ? 'selected' : ''}
	/>
	{#if inputVal}
		<button in:fly={{ x: 20, duration: 500 }} out:fly={{ x: 20, duration: 500 }}>Search</button>
	{/if}
</form>

<style>
	.search {
		position: relative;
		width: 50%;
		margin: 1rem;
	}

	button {
		padding: 0 1rem;
		background: teal;
		color: powderblue;
		font-weight: bold;
		border: none;
		position: absolute;
		bottom: 50%;
		right: 0;
		transform: translate(0, 50%);
		height: 100%;
		border-top-right-radius: 10px;
		cursor: pointer;
	}
	input {
		width: 100%;
		border: none;
		font-size: 1rem;
		font-family: 'Poppins', sans-serif;
		outline: none;
		color: teal;
		padding: 0.5rem 0.1rem;
		transition: background 0.75s ease-out;
		font-weight: bold;
		background: lightslategray;
		border-radius: 10px;
		padding: 1rem;
	}
	label {
		position: absolute;
		font-size: 0.8rem;
		top: 50%;
		left: 0;
		transform: translate(0, -50%);
		pointer-events: none;
		color: powderblue;
		padding: 0 1rem;
	}
	input.selected {
		background-color: thistle;
	}
</style>
