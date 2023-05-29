<script>
	import Button from './Button.svelte';
	import Welcome from '../images/welcome.png';
	import { t } from '$lib/i18n/config';
</script>

<div class="wrapper">
	<div class="description">
		<p class="description__subtitle">{$t('translations.features.subTitle')}</p>
		<h1 class="description__title">{$t('translations.features.title')}</h1>
		<p class="description__text">
			{$t('translations.features.text')}
			<br />- {$t('translations.features.subText1')}
			<br />- {$t('translations.features.subText2')}
		</p>
		<Button
			boxShadow={true}
			title={$t('translations.features.button')}
			color="black"
			background="white"
			border={'1px solid black'}
		/>
	</div>
	<div class="images">
		<img src={Welcome} alt="welcome" />
	</div>
</div>

<style lang="scss">
	@import '../sass/variables';
	.wrapper {
		margin-top: 100px;
		display: grid;
		grid-template: 1fr/1fr 1fr;
		@media (max-width: 1024px) {
			grid-template: 1fr 2fr/1fr;
			justify-items: center;
			gap: 50px;
		}
		.description {
			display: flex;
			flex-direction: column;
			align-items: start;
			align-self: center;
			gap: 20px;

			.description__subTitle {
				font-size: 13px;
				font-weight: bold;
			}
			.description__title {
				@include adaptive-FS(24, 32);
				font-weight: bold;
				line-height: 40px;
				max-width: 341px;
			}
			.description__text {
				font-size: 16px;
				line-height: 23px;
				max-width: 430px;
				@media (max-width: 1024px) {
					max-width: 330px;
				}
			}
		}
		.images {
			justify-self: center;
			overflow: hidden;
			border-radius: 18px;
			img {
				max-width: 338px;
				max-height: 599px;
			}
		}
	}
</style>
