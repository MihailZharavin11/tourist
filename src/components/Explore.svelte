<script lang="ts">
	import Button from './Button.svelte';
	import Itourist from '../images/Itourist.png';
	import Org1 from '../images/org1.png';
	import Org2 from '../images/org2.png';
	import Org3 from '../images/org3.png';
	import Org4 from '../images/org4.png';
</script>

<div id="home" class="wrapper">
	<div class="description__wrapper">
		<div class="description__content">
			<p class="description__assistant">- Explore Israel with virtual assistant</p>
			<h1 class="description__title">The best way to explore Israel safely</h1>
			<p class="description__text">
				Here you can find doctors, recharge SIM card, find the best attcations in Israel.
			</p>
			<div class="buttons">
				<Button title="Use the App" color="white" />
				<Button
					boxShadow={true}
					title="See how it works"
					color="black"
					background="white"
					border={'1px solid grey'}
				/>
			</div>
		</div>
		<div class="description__logo">
			<img src={Itourist} alt="Logo" />
		</div>
	</div>
	<div class="organizations">
		<p>Trusted by individuals and organizations around the world</p>
		<div class="organization__images">
			<img src={Org1} alt="Organization1" />
			<img src={Org2} alt="Organization2" />

			<img src={Org3} alt="Organization3" />

			<img src={Org4} alt="Organization4" />
		</div>
	</div>
</div>

<style lang="scss">
	@import '../sass/variables';
	.wrapper {
		margin-top: 100px;
		color: #030303;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 100px;
		@media (max-width: 1024px) {
			gap: 30px;
			margin-top: 0px;
		}

		.description__wrapper {
			display: grid;
			grid-template: 1fr/1fr 1fr;

			@media (max-width: 1024px) {
				grid-template: 1fr 1fr/1fr;
				align-self: center;
				justify-content: center;
			}
			.description__content {
				display: flex;
				flex-direction: column;
				gap: 20px;
				@media (max-width: 1024px) {
					align-items: start;
				}

				@media (max-width: 640px) {
					justify-content: center;
				}

				.description__assistant {
					font-size: 13px;
					font-weight: bold;
					@media (max-width: 1024px) {
						align-self: flex-start;
					}
				}

				.description__title {
					@include adaptive-FS(23, 55);
					max-width: 489px;
					font-weight: bold;
					line-height: 60px;
					@media (max-width: 640px) {
						line-height: 30px;
					}
				}

				.description__text {
					@include adaptive-FS(16, 20);
					line-height: 27px;
				}

				.buttons {
					display: grid;
					grid-template: 1fr/1fr 1fr;
					max-width: 400px;
					gap: 30px;
				}
			}
			.description__logo {
				display: flex;
				justify-content: center;
				align-items: center;
				img {
					max-height: 300px;
					max-width: 350px;
					width: 100%;
				}
			}
		}
		.organizations {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 16px;
			font-weight: bold;
			gap: 40px;
			.organization__images {
				display: flex;
				gap: 70px;
				@media (max-width: 768px) {
					gap: 20px;
				}
				@media (max-width: 640px) {
					display: grid;
					grid-template: 1fr 1fr/1fr 1fr;
					gap: 50px;
				}
			}
			img {
				width: 84px;
				height: 84px;
			}
		}
	}
</style>
