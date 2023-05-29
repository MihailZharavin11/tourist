<script>
	import Spain from '../images/countries/es.png';
	import France from '../images/countries/fr.png';
	import Russia from '../images/countries/ru.png';
	import England from '../images/countries/en.png';
	import { clickOutside } from '../utils/clickOutside';

	const countries = [
		{
			value: Spain,
			img: Spain
		},
		{
			value: France,
			img: France
		},
		{
			value: Russia,
			img: Russia
		},
		{
			value: England,
			img: England
		}
	];
	let selectedCountry = England;
	let isListVisible = false;

	const handleCountriesList = () => {
		isListVisible = !isListVisible;
	};
</script>

<div on:click={handleCountriesList} class="country__button">
	<img src={selectedCountry} alt="" />
	<!-- transition:fade -->
	{#if isListVisible}
		<div
			use:clickOutside
			on:click_outside={() => {
				if (!isListVisible) {
					isListVisible = false;
				}
			}}
			style="height: {isListVisible ? '100%' : '0px'} ;"
			translate="yes"
			class="countries"
		>
			<ul class="countries__list">
				{#each countries as country}
					{#if country.value !== selectedCountry}
						<li>
							<img
								on:click={() => {
									selectedCountry = country.value;
								}}
								src={country.img}
								alt="country"
							/>
						</li>
					{/if}
				{/each}
			</ul>
		</div>
	{/if}
</div>

<style lang="scss">
	.country__button {
		@media (max-width: 1024px) {
			display: none;
		}
		position: relative;
		img {
			width: 50px;
			height: 50px;
		}
		.countries {
			position: absolute;
			left: -10px;
			top: 60px;
			min-height: 200px;
			z-index: 100;
			.countries__list {
				padding: 10px;
				display: flex;
				flex-direction: column;
				gap: 10px;
				background: transparent;
				-webkit-box-shadow: 1px 10px 39px 4px rgba(0, 0, 0, 0.54);
				-moz-box-shadow: 1px 10px 39px 4px rgba(0, 0, 0, 0.54);
				box-shadow: 1px 10px 39px 4px rgba(0, 0, 0, 0.54);
				li {
					width: 100%;
					z-index: 100;
				}
			}
			img {
				width: 50px;
				height: 40px;
				transition: all 0.5s ease;

				&:hover {
					transition: all 0.5s ease;
					transform: scale(1.2);
				}
			}
		}
	}
</style>
