<script>
	import { scaleLinear } from 'd3-scale';
	export let data;
	export let title;

	const xTicks = data.map((item) => item.name);
	const yTicks = [0, 2, 4, 6, 8, 10];
	const padding = { top: 20, right: 15, bottom: 200, left: 25 };

	let width = 500;
	let height = 200;

	function formatMobile(tick) {
		return "'" + tick.toString().slice(-2);
	}

	$: xScale = scaleLinear()
		.domain([0, xTicks.length])
		.range([padding.left, width - padding.right]);

	$: yScale = scaleLinear()
		.domain([0, Math.max.apply(null, yTicks)])
		.range([height - padding.bottom, padding.top]);

	$: innerWidth = width - (padding.left + padding.right);
	$: barWidth = innerWidth / xTicks.length;
</script>

<h2>{title}</h2>

<div class="chart" bind:clientWidth={width} bind:clientHeight={height}>
	<svg>
		<!-- y axis -->
		<g class="axis y-axis">
			{#each yTicks as tick}
				<g class="tick tick-{tick}" transform="translate(0, {yScale(tick)})">
					<line x2="100%" />
					<text y="-4">{tick} {tick === 20 ? ' per 1,000 population' : ''}</text>
				</g>
			{/each}
		</g>

		<!-- x axis -->
		<g class="axis x-axis">
			{#each data as point, i}
				<g class="tick" transform="translate({xScale(i) + 380},{height}) rotate(-65)">
					<text x={barWidth / 2} y="-400"
						>{width > 380 ? point.name : formatMobile(point.name)}</text
					>
				</g>
			{/each}
		</g>

		<g class="bars">
			{#each data as point, i}
				<rect
					x={xScale(i) + 2}
					y={yScale(point.rating)}
					width={barWidth - 4}
					height={yScale(0) - yScale(point.rating)}
				/>
			{/each}
		</g>
	</svg>
</div>

<style>
	h2 {
		text-align: center;
	}

	.chart {
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
	}

	svg {
		position: relative;
		width: 100%;
		height: 400px;
	}

	.tick {
		font-family: Helvetica, Arial;
		font-size: 0.725em;
		font-weight: 200;
	}

	.tick line {
		stroke: pink;
		stroke-dasharray: 2;
	}

	.tick text {
		fill: teal;
		text-anchor: start;
	}

	.tick.tick-0 line {
		stroke-dasharray: 0;
	}

	.x-axis .tick text {
		text-anchor: end;
	}

	.bars rect {
		fill: teal;
		stroke: none;
		opacity: 0.65;
	}
</style>
