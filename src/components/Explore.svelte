<script>
	import Button from './Button.svelte';
	import Itourist from '../images/Itourist.png';
	import Org1 from '../images/org1.png';
	import Org2 from '../images/org2.png';
	import Org3 from '../images/org3.png';
	import Org4 from '../images/org4.png';
</script>

<div class="wrapper">
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
					background="#d9d8d4"
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
	.wrapper {
		margin-top: 100px;
		color: #030303;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 100px;
		height: 100vh;

		.description__wrapper {
			display: grid;
			grid-template: 1fr/1fr 1fr;
			.description__content {
				display: flex;
				flex-direction: column;
				max-width: 542px;
				gap: 20px;
				.description__assistant {
					font-size: 13px;
					font-weight: bold;
				}

				.description__title {
					font-size: 72px;
					max-width: 489px;
					font-weight: bold;
					line-height: 80px;
				}

				.description__text {
					font-size: 20px;
					line-height: 27px;
				}

				.buttons {
					display: flex;
					gap: 30px;
				}
			}
			.description__logo {
				display: flex;
				justify-content: center;
				align-items: center;
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
				gap: 50px;
			}
			img {
				width: 84px;
				height: 84px;
			}
		}
	}
</style>
