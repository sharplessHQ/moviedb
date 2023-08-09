<script>
	import DouDouPic from '$lib/images/DouDouPic.jpeg';
	export let data;

	let count = data.pet.count;
	const incrementBtn = () => {
		count++;
	};
</script>

<div class="demo-details">
	<img src={DouDouPic} alt="Hamster" width={360} />
	<h1>Name: DouDou</h1>
	<h1>Number: {count}</h1>
	<button on:click={incrementBtn}>Increment</button>
</div>

<style>
	.demo-details {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
