<script>
	import { clickOutside } from '../utils/clickOutside';
    import * as Flag from 'svelte-flag-icons';




    const countryList = [
        {
            value: 'Gb',
	        locale:'en'
        },
        {
            value: 'Ru',
	        locale: 'ru'
        },
        {
            value: 'Fr',
	        locale: 'fr'
        },
        {
            value: 'Es',
	        locale: 'es'
        }

    ]
	let selectedCountry = 'Gb'


	let isListVisible = false;

	const handleCountriesList = () => {
		isListVisible = !isListVisible;
	};
</script>





<div on:click={handleCountriesList} class="country__button">
	<svelte:component  this="{Flag[selectedCountry]}" size="50" />
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
				{#each countryList as country}
					{#if country.value !== selectedCountry}
						<li>
							<svelte:component on:click={()=>{
                                selectedCountry = country.value;
							}}  this="{Flag[country.value]}" size="50" />
						</li>
					{/if}
				{/each}
			</ul>
		</div>
	{/if}
</div>

<style lang="scss">
	.country__button {

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
