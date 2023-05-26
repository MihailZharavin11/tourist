<script lang="ts">
	export let isOpenBurger: boolean;
	export let closeBurgerMenu: () => void;
</script>

<div class="wrapper {isOpenBurger ? 'active' : ''}">
	<div class="burger {isOpenBurger ? 'active' : ''}" on:click={closeBurgerMenu}>
		<span />
	</div>
	<ul class="menu">
		<li><a class="link" href="">Home</a></li>
		<li><a class="link" href="">Pricing</a></li>

		<li><a class="link" href="">About Us</a></li>

		<li><a class="link" href="">Contact</a></li>
	</ul>
</div>

<style lang="scss">
	.wrapper {
		position: fixed;
		height: 100vh;
		width: 25vw;
		left: -1000px;
		background: #f0f0f0;
		padding: 50px;
		z-index: 20;
		transition: all 1s ease;
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
			.link {
				color: black;
				font-size: 25px;
			}
		}
	}
</style>
