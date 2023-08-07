<script>
	import DouDouPic from '$lib/images/DouDouPic.jpeg';
	export let data;

	let count = data.pet.count;
	const incrementBtn = () => {
		count++;
	};
</script>

<img src={DouDouPic} alt="Hamster" width={360} />
<h1>Name: DouDou</h1>
<h1>Number: {count}</h1>
<button on:click={incrementBtn}>Increment</button>
