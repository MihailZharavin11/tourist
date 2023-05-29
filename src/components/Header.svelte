<script>
	import Button from './Button.svelte';

	import { clickOutside } from '../utils/clickOutside';
	import { scrolltoElement } from '../utils/scrollToElement';
	import Languages from './Languages.svelte';

	let isOpenBurger = false;

	const handleBurgerMenu = () => {
		isOpenBurger = !isOpenBurger;
	};
</script>

<!-- <Menu {isOpenBurger} /> -->
<div id="header" class="header">
	<div class="links">
		<a class="links__logo" href="/">iTourist</a>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={() => {
				handleBurgerMenu();
			}}
			class="burgerWrapper"
		>
			<div class="burger">
				<span />
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					on:click={(e) => {
						e.stopPropagation();
					}}
					class="menuWrapper {isOpenBurger ? '' : 'hidden'}"
				>
					<ul class="menu">
						<li>
							<a class="link" on:click={() => scrolltoElement('home')}>Home</a>
						</li>
						<li>
							<a class="link" on:click={() => scrolltoElement('pricing')}>Pricing</a>
						</li>
						<li>
							<a class="link" on:click={() => scrolltoElement('about')}>About Us</a>
						</li>
						<li>
							<a class="link" on:click={() => scrolltoElement('contact')}>Contact</a>
						</li>
						<li>
							<Languages />
						</li>
					</ul>
				</div>
			</div>
		</div>
		<ul class="links__list">
			<li>
				<a class="link" on:click={() => scrolltoElement('home')}>Home</a>
			</li>
			<li>
				<a class="link" on:click={() => scrolltoElement('pricing')}>Pricing</a>
			</li>
			<li>
				<a class="link" on:click={() => scrolltoElement('about')}>About Us</a>
			</li>
			<li>
				<a class="link" on:click={() => scrolltoElement('contact')}>Contact</a>
			</li>
		</ul>
	</div>

	<div class="buttons">
		<!-- <Button title="Log In" background="none" /> -->
		<div class="languages">
			<Languages />
		</div>
		<Button title="Launch App" color="white" />
		<!-- svelte-ignore a11y-click-events-have-key-events -->
	</div>
</div>

<style lang="scss">
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #f0f0f0;
		position: sticky;
		top: 0;
		left: 0;
		background: white;
		width: 100%;
		z-index: 20;
		padding: 35px 144px 35px;

		@media (max-width: 768px) {
			padding: 50px;
		}

		@media (max-width: 640px) {
			padding: 20px 10px;
		}

		a {
			color: #030303;
		}

		.links {
			display: flex;
			gap: 80px;
			align-items: center;

			@media (max-width: 768px) {
				gap: 40px;
			}

			@media (max-width: 640px) {
				gap: 20px;
			}
			.links__list {
				@media (max-width: 1024px) {
					ul,
					li {
						display: none;
					}
				}
			}
			.links__logo {
				color: #030303;
				font-size: 28px;
				font-weight: bold;
			}

			.burger {
				display: none;
				width: 20px;
				height: 20px;
				position: relative;
				transition: all 0.5s ease;
				z-index: 0;
				cursor: pointer;
				span {
					transition: all 0.5s ease;

					position: absolute;
					top: 10px;
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

				@media (max-width: 1024px) {
					display: block;
				}
			}

			.links__list {
				display: flex;
				align-items: center;
				gap: 91px;

				.link {
					cursor: pointer;
				}

				@media (max-width: 1289px) {
					gap: 40px;
				}

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
			gap: 40px;
			position: relative;
			.languages {
				@media (max-width: 1024px) {
					display: none;
				}
			}
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
		}

		.burgerWrapper {
			position: relative;
			.menuWrapper {
				width: 200px;
				position: absolute;
				top: 30px;
				left: 0;
				padding: 10px 10px;
				background: white;
				.menu {
					display: flex;
					flex-direction: column;
					gap: 20px;
					opacity: 1;
					transition: all 0.5s ease;

					li {
						transition: all 0.5s ease;
						&:hover {
							transform: translateX(5px);
							transition: all 0.5s ease;
						}
					}
					.link {
						color: black;
						cursor: pointer;
						font-size: 20px;
					}
				}
				&.hidden {
					display: none;
				}
			}
		}
	}
</style>
