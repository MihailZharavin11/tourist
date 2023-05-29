<script>
	import Button from './Button.svelte';
	import Man from '../images/man.png';
	import { t } from '$lib/i18n/config';
</script>

<div class="wrapper">
	<div class="image">
		<img src={Man} alt="Man" />
	</div>
	<div class="description">
		<p class="description__subTitle">{$t('translations.data.subTitle')}</p>
		<h1 class="description__title">{$t('translations.data.title')}</h1>
		<p class="description__text">
			{$t('translations.data.text')}
		</p>
		<Button
			boxShadow={true}
			title={$t('translations.data.button')}
			color="black"
			background="white"
			border={'1px solid black'}
		/>
	</div>
</div>

<style lang="scss">
	@import '../sass/variables';

	.wrapper {
		margin-top: 100px;
		display: grid;
		grid-template: 1fr/1fr 1fr;
		gap: 15px;
		align-items: center;

		@media (max-width: 1024px) {
			justify-content: center;
		}

		@media (max-width: 1024px) {
			grid-template: 1fr 1fr/1fr;
			align-items: center;
			justify-items: center;
		}

		.image {
			@media (max-width: 1028px) {
				width: 100%;
				display: flex;
				justify-content: center;
			}
			img {
				max-width: 446px;
				max-height: 446px;
				@media (max-width: 1024px) {
					width: 100%;
				}
			}
		}
		.description {
			justify-self: center;
			display: flex;
			flex-direction: column;
			align-items: start;
			max-width: 341px;
			gap: 20px;
			.description__subTitle {
				font-size: 13px;
				font-weight: bold;
			}
			.description__title {
				@include adaptive-FS(25, 32);
				font-weight: bold;
				font-weight: bold;
				line-height: 40px;
			}
			.description__text {
				@include adaptive-FS(16, 18);
				line-height: 23px;
			}
		}
	}
</style>
