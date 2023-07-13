<script>
	import Button from './Button.svelte';

	import { scrolltoElement } from '../utils/scrollToElement';
	import Languages from './Languages.svelte';
	import { t } from '../lib/i18n/config';

	let isOpenBurger = false;

	const handleBurgerMenu = () => {
		isOpenBurger = !isOpenBurger;
	};
</script>

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
					<div on:click={()=>{handleBurgerMenu()}} class="blur"></div>
					<ul class="menu {isOpenBurger?'active':''}">
						<li>
							<a class="link" on:click={() => scrolltoElement('home')}
								>{$t('translations.header.links.home')}</a
							>
						</li>
						<li>
							<a class="link" on:click={() => scrolltoElement('pricing')}
								>{$t('translations.header.links.pricing')}</a
							>
						</li>
						<li>
							<a class="link" on:click={() => scrolltoElement('about')}
								>{$t('translations.header.links.aboutUs')}</a
							>
						</li>
						<li>
							<a class="link" on:click={() => scrolltoElement('contact')}
								>{$t('translations.header.links.contact')}</a
							>
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
				<a class="link" on:click={() => scrolltoElement('home')}
					>{$t('translations.header.links.home')}</a
				>
			</li>
			<li>
				<a class="link" on:click={() => scrolltoElement('pricing')}
					>{$t('translations.header.links.pricing')}</a
				>
			</li>
			<li>
				<a class="link" on:click={() => scrolltoElement('about')}
					>{$t('translations.header.links.aboutUs')}</a
				>
			</li>
			<li>
				<a class="link" on:click={() => scrolltoElement('contact')}
					>{$t('translations.header.links.contact')}</a
				>
			</li>
		</ul>
	</div>

	<div class="buttons">
		<div class="languages">
			<Languages />
		</div>
		<Button title={$t('translations.header.button')} color="white" />
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
		    z-index: -5;
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
			.menuWrapper {
			  opacity: 1;
			  .blur{
			    height: 100%;
			    width: 100%;
			    backdrop-filter: blur(2px);
			  }
			  position: fixed;
			  top:0;
			  z-index: 40;
			  right: 0;
			  width: 100%;
			  height: 100%;
				.menu {
				  position: fixed;
				  top:0;
				  right: -1000px;
				  height: 100%;
				  width: 50%;
				  z-index: 50;
                  box-shadow: 3px 10px 10px black;
				  background: white;
					display: flex;
					flex-direction: column;
				    align-items: center;
                    padding-top: 50px;
					gap: 70px;
					transition: all 0.5s ease;
					&.active{
					  right: 0;
					  transition: all 0.5s ease;
					}

					li {
						transition: all 0.5s ease;
						&:hover {
							transform: translateY(-5px);
							transition: all 0.5s ease;
						}
					}
					.link {
						color: black;
						cursor: pointer;
						font-size: 24px;
					    font-weight: 600;
					}
				}
				&.hidden {
					//display: none;
				  opacity: 0;
				  transition: all 0.5s ease;
				}
			}
		}
	}
</style>
