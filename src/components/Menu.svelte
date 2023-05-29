<script lang="ts">
	import { scrolltoElement } from '../utils/scrollToElement';
	import Languages from './Languages.svelte';

	export let isOpenBurger: boolean;
</script>

<div class="wrapper {isOpenBurger ? 'active' : ''}">
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

<style lang="scss">
	@import '../sass/variables';

	.wrapper {
		position: fixed;
		height: 100vh;
		width: 40vw;
		top: 0px;
		left: -1000px;
		background: white;
		padding-top: 150px;
		padding-left: 30px;
		z-index: 20;
		transition: all 0.5s ease;
		&.active {
			left: 0;
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
			position: absolute;
			top: 47px;
			right: 20px;
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
		.menu {
			display: flex;
			flex-direction: column;
			gap: 40px;
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
				@include adaptive-FS(20, 25);
			}
		}

		.languages {
			width: 100px;
			height: 100px;
		}
	}
</style>
