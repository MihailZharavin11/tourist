<script>
	import { t } from '$lib/i18n/config';
	import Button from './Button.svelte';
</script>

<div id="pricing" class="wrapper">
	<h1 class="title">{$t('translations.pricing.title')}</h1>
	<div class="cards">
		<div class="card">
			<div class="card__header">
				<h1 class="card__title">{$t('translations.pricing.card1.title')}</h1>
			</div>
			<div class="card__content">
				<div class="content__title">{$t('translations.pricing.card1.price')}</div>
				<ul class="content__description">
					<li class="content__text">{$t('translations.pricing.card1.description.description1')}</li>
				</ul>
			</div>
			<Button color="white" title={$t('translations.pricing.button')} />
		</div>
		<div class="card">
			<div class="card__header">
				<h1 class="card__title">{$t('translations.pricing.card2.title')}</h1>
			</div>
			<div class="card__content">
				<div class="content__title">{$t('translations.pricing.card1.price')}</div>
				<ul class="content__description">
					<li class="content__text">
						{$t('translations.pricing.card2.description.description1')}
					</li>
					<li class="content__text">{$t('translations.pricing.card2.description.description2')}</li>
					<li class="content__text">{$t('translations.pricing.card2.description.description3')}</li>
				</ul>
			</div>
			<Button color="white" title={$t('translations.pricing.button')} />
		</div>
		<div class="card">
			<div class="card__header">
				<h1 class="card__title">{$t('translations.pricing.card3.title')}</h1>
			</div>
			<div class="card__content">
				<div class="content__title">{$t('translations.pricing.card3.price')}</div>
				<ul class="content__description">
					<li class="content__text">
						{$t('translations.pricing.card3.description.description1')}
					</li>
					<li class="content__text">{$t('translations.pricing.card3.description.description2')}</li>
					<li class="content__text">{$t('translations.pricing.card3.description.description3')}</li>
				</ul>
			</div>
			<Button color="white" title={$t('translations.pricing.button')} />
		</div>
	</div>
</div>

<style lang="scss">
	@import '../sass/variables';

	.wrapper {
		margin-top: 100px;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 50px;
		.title {
			@include adaptive-FS(24, 48);
			font-weight: bold;
		}
		.cards {
			display: grid;
			grid-template: 1fr/1fr 1fr 1fr;
			width: 100%;
			@media (max-width: 1024px) {
				grid-template: 1fr 1fr 1fr/1fr;
				gap: 30px;
			}
			.card {
				padding: 25px;
				display: grid;
				grid-template: 1fr 5fr 1fr/1fr;
				justify-content: stretch;
				border: 2px solid transparent;
				border-radius: 18px;
				transition: all 0.5s ease;
				@media (max-width: 1024px) {
					grid-template: 1fr 2fr 1fr /1fr;
					align-items: center;
					padding: 10px;
				}

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

					@media (max-width: 1024px) {
						height: 100%;
						align-items: center;
						::after {
							top: 80%;
						}
					}
				}
				.card__content {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: start;
					gap: 30px;
					margin-top: 40px;
					@media (max-width: 1024px) {
						align-items: center;
						margin-top: 0px;
					}
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
						@media (max-width: 1024px) {
							margin-bottom: 0px;
						}
						@media (max-width: 1024px) {
							gap: 20px;
						}
					}
				}
			}
		}
	}
</style>
