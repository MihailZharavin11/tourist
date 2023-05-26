<script>
	import Button from './Button.svelte';
</script>

<div class="wrapper">
	<h1 class="title">Pricing</h1>
	<div class="cards">
		<div class="card">
			<div class="card__header">
				<h1 class="card__title">Top-up SIM-card</h1>
			</div>
			<div class="card__content">
				<div class="content__title">Package price + 5₪ fee</div>
				<div class="content__description">
					<p class="content__text">Stay connected 24/7</p>
				</div>
			</div>
			<Button color="white" title="Go to the App and orded" />
		</div>
		<div class="card">
			<div class="card__header">
				<h1 class="card__title">Basic medical package</h1>
			</div>
			<div class="card__content">
				<div class="content__title">250₪</div>
				<div class="content__description">
					<p class="content__text">
						Virtual appointment with a doctor in 15-30 minutes after the payment
					</p>
					<p class="content__text">Medical prescriptions</p>
					<p class="content__text">Laboratory test prescriptions</p>
				</div>
			</div>
			<Button color="white" title="Go to the App and orded" />
		</div>
		<div class="card">
			<div class="card__header">
				<h1 class="card__title">Extended medical package</h1>
			</div>
			<div class="card__content">
				<div class="content__title">400₪</div>
				<div class="content__description">
					<p class="content__text">
						2 virtual appointments with a doctor in 15-30 minutes after the payment*
					</p>
					<p class="content__text">Medical prescriptions</p>
					<p class="content__text">Laboratory test prescriptions</p>
				</div>
			</div>
			<Button color="white" title="Go to the App and orded" />
		</div>
	</div>
</div>

<style lang="scss">
	.wrapper {
		height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 50px;
		.title {
			font-size: 48px;
			font-weight: bold;
		}
		.cards {
			display: grid;
			grid-template: 1fr/1fr 1fr 1fr;
			width: 100%;
			.card {
				padding: 25px;
				display: grid;
				grid-template: 1fr 5fr 1fr/1fr;
				justify-content: space-between;
				border: 2px solid transparent;
				border-radius: 18px;
				transition: all 0.5s ease;

				&:hover {
					transition: all 0.5s ease;
					border: 2px solid #f0f0f0;
				}
				.card__header {
					position: relative;

					display: flex;
					justify-content: center;
					font-size: 19;
					font-weight: bold;
					::after {
						position: absolute;
						top: 100%;
						left: 0;
						content: '';
						display: block;
						border-radius: 18px;
						width: 100%;
						height: 4px;
						background-color: #f0f0f0;
					}
				}
				.card__content {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: start;
					gap: 30px;
					margin-top: 40px;
					.content__title {
						font-size: 19px;
						font-weight: bold;
					}
					.content__description {
						display: flex;
						flex-direction: column;
						gap: 10px;
						align-items: center;
						text-align: center;
						margin-bottom: 100px;
						max-width: 240px;
					}
				}
			}
		}
	}
</style>
