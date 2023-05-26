<script>
	import Button from './Button.svelte';
	import Spain from '../images/countries/es.png';
	import France from '../images/countries/fr.png';
	import Russia from '../images/countries/ru.png';
	import England from '../images/countries/en.png';
	import { fade, fly } from 'svelte/transition';
	import { clickOutside } from '../utils/clickOutside';
	import Menu from './Menu.svelte';

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
	let isOpenBurger = false;

	const handleClickOutside = () => {
		isListVisible = false;
	};

	const closeBurgerMenu = () => {
		isOpenBurger = false;
	};
</script>

<Menu {isOpenBurger} {closeBurgerMenu} />
<div class="header">
	<div class="links">
		<a class="links__logo" href="/">iTourist</a>
		<!-- <div
			on:click={() => {
				isOpenBurger = true;
			}}
			class="burger {isOpenBurger ? 'active' : ''}"
		>
			<span />
		</div> -->
		<ul class="links__list">
			<li>
				<a href="http://">Home</a>
			</li>
			<li>
				<a href="http://">Pricing</a>
			</li>

			<li>
				<a href="http://">About Us</a>
			</li>
			<li>
				<a href="http://">Contact</a>
			</li>
		</ul>
	</div>

	<div class="buttons">
		<Button title="Log In" background="none" />
		<Button title="Launch App" color="white" />
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={() => {
				isListVisible = !isListVisible;
			}}
			class="country__button"
		>
			<img src={selectedCountry} alt="" />
			<!-- transition:fade -->
			{#if isListVisible}
				<div
					use:clickOutside
					on:click_outside={handleClickOutside}
					style="height: {isListVisible ? '100%' : '0px'} ;"
					translate="yes"
					class="country_lists"
				>
					{#each countries as country}
						{#if country.value !== selectedCountry}
							<img
								on:click={() => {
									selectedCountry = country.value;
								}}
								src={country.img}
								alt="country"
							/>
						{/if}
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #f0f0f0;
		padding: 41px 144px 45px;

		a {
			color: #030303;
		}

		.links {
			display: flex;
			gap: 80px;
			.links__logo {
				color: #030303;
				font-size: 28px;
				font-weight: bold;
			}

			.burger.active {
				transition: all 0.5s ease;

				span {
					transition: all 0.5s ease;
					height: 3px;
					transform: translateX(30px);
					opacity: 0;
				}

				&::before {
					height: 3px;

					transition: all 0.5s ease;
					top: 15px;
					transform: rotate(-45deg);
				}

				&::after {
					height: 3px;

					bottom: 12px;
					transform: rotate(45deg);
				}
			}

			.burger {
				width: 30px;
				height: 30px;
				position: relative;
				transition: all 0.5s ease;
				z-index: 0;
				cursor: pointer;
				span {
					transition: all 0.5s ease;

					position: absolute;
					top: 15px;
					width: 30px;
					border-radius: 18px;
					height: 2px;
					background-color: #030303;
				}
				&::before {
					transition: all 0.5s ease;

					content: '';
					position: absolute;
					border-radius: 18px;

					top: 0;
					width: 30px;
					background-color: #030303;
					height: 2px;
				}

				&::after {
					transition: all 0.5s ease;

					content: ' ';
					position: absolute;
					border-radius: 18px;

					bottom: 0;
					width: 30px;
					background-color: #030303;
					height: 2px;
				}
			}

			.links__list {
				display: flex;
				align-items: center;
				gap: 91px;

				> li {
					font-size: 16px;
					font-weight: bold;
					transition: all 0.5s ease;
					&:hover {
						transition: all 0.5s ease;

						transform: translateY(-5px);
					}
				}
			}
		}

		.buttons {
			display: flex;
			align-items: center;
			gap: 10px;
			position: relative;
			.country__button {
				position: relative;
				img {
					width: 50px;
					height: 50px;
				}
				.country_lists {
					position: absolute;
					top: 60px;
					min-height: 200px;
					display: flex;
					gap: 20px;
					flex-direction: column;
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
		}
	}
</style>
