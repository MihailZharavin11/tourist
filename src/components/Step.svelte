<script>
	import Button from './Button.svelte';
	import Step from '../images/step.png';
	import { t } from '$lib/i18n/config';
</script>

<div class="wrapper">
	<div class="inner">
		<div class="description">
			<img class="description__img" src={Step} alt="Step" />
			<div class="description__content">
				<h1 class="description__title">{$t('translations.step.title')}</h1>
				<p class="description__text">{$t('translations.step.subTitle')}</p>
				<Button title={$t('translations.step.button')} color="white" />
			</div>
		</div>
		<div class="steps">
			<div class="step__item">
				<h1 class="item__title">{$t('translations.step.step1.title')}</h1>
				<p class="item__text">
					{$t('translations.step.step1.subTitle')}
				</p>
			</div>

			<div class="step__item">
				<h1 class="item__title">{$t('translations.step.step2.title')}</h1>
				<p class="item__text">
					{$t('translations.step.step2.subTitle')}
				</p>
			</div>

			<div class="step__item">
				<h1 class="item__title">{$t('translations.step.step3.title')}</h1>
				<p class="item__text">
					{$t('translations.step.step3.subTitle')}
				</p>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@import '../sass/variables';

	.wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 100px;
		.inner {
			width: 100%;
			background: #f0f0f0;
			display: grid;
			grid-template: 1fr/1fr 1fr;
			padding: 30px 30px 100px 30px;
			border-radius: 50px;
			-webkit-box-shadow: 0px 50px 0px -30px #f0f0f0;
			-moz-box-shadow: 0px 50px 0px -30px #f0f0f0;
			box-shadow: 0px 45px 0px -30px #f0f0f0;
			@media (max-width: 1280px) {
				grid-template: 1fr 1fr/1fr;
			}
			@media (max-width: 1024px) {
				box-shadow: none;
			}
			@media (max-width: 640px) {
				gap: 20px;
			}
			.description {
				display: flex;
				flex-direction: column;
				align-items: start;
				gap: 30px;
				.description__content {
					display: flex;
					flex-direction: column;
					gap: 30px;
					align-items: start;
					margin-left: 50px;
					@media (max-width: 640px) {
						margin-left: 0px;
					}
					.description__title {
						@include adaptive-FS(24, 48);
						font-weight: bold;
						max-width: 388px;
						line-height: 65px;
					}
					.description__text {
						@include adaptive-FS(18, 20);
						margin-bottom: 70px;
						@media (max-width: 640px) {
							margin-bottom: 0px;
						}
					}
				}

				.description__img {
					max-width: 610px;
					max-height: 291px;
					@media (max-width: 1024px) {
						min-height: 250px;
						width: 100%;
					}
				}
			}
			.steps {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding-left: 75px;
				padding-top: 75px;
				@media (max-width: 640px) {
					padding: 0px;
				}
				.step__item {
					display: flex;
					flex-direction: column;
					gap: 40px;
					padding-bottom: 30px;
					border-bottom: 1px solid #dedede;
					@media (max-width: 640px) {
						padding-top: 10px;
					}
					&:last-child {
						border-bottom: none;
						padding-bottom: 0px;
					}
					.item__title {
						@include adaptive-FS(20, 32);
						font-weight: bold;
					}
					.item__text {
						font-size: 16px;
						max-width: 280px;
						line-height: 23px;
					}
				}
			}
		}
	}
</style>
