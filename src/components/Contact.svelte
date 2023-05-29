<script>
	import { t } from '$lib/i18n/config';
	import Button from './Button.svelte';
</script>

<div id="contact" class="wrapper">
	<h1 class="title">{$t('translations.contact.title')}</h1>
	<div class="description">
		<div class="contact">
			<form class="contact__form">
				<input placeholder={$t('translations.contact.form.name')} class="contact__input" />
				<input placeholder={$t('translations.contact.form.email')} class="contact__input" />
				<input placeholder={$t('translations.contact.form.message')} class="contact__input" />
				<Button title="Send" color="black" border="1px solid black" background="white" />
			</form>
		</div>
		<div class="info">
			<h1 class="info__title">{$t('translations.contact.info.title')}</h1>
			<div class="info__content">
				<p class="text">{$t('translations.contact.info.adress')}</p>
				<p class="sub__text">{import.meta.env.VITE_ADRESS}</p>
			</div>
			<div class="info__content">
				<p class="text">{$t('translations.contact.info.phone')}</p>
				<p class="sub__text">{import.meta.env.VITE_PHONE}</p>
			</div>
			<div class="info__content">
				<p class="text">{$t('translations.contact.info.email')}</p>
				<p class="sub__text">{import.meta.env.VITE_EMAIL}</p>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@import '../sass/variables';

	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 50px;
		margin: 100px 0px;
		.title {
			@include adaptive-FS(30, 60);
			font-weight: bold;
		}
		.description {
			display: grid;
			grid-template: 1fr / 1fr 1fr;
			justify-content: space-between;
			gap: 70px;

			@media (max-width: 1024px) {
				grid-template: 1fr 1fr/1fr;
				gap: 50px;
			}
			.contact {
				@media (max-width: 1024px) {
					align-items: center;
				}
				.contact__form {
					display: flex;
					flex-direction: column;
					height: 100%;
					justify-content: space-between;

					max-width: 480px;
					@media (max-width: 1024px) {
						max-width: 100%;
					}
					.contact__input {
						padding: 20px 10px;
						border-radius: 18px;
						border: 1px solid #d1d1d1;
						&::placeholder {
							@include adaptive-FS(16, 18);
							font-weight: bold;
							color: #d1d1d1;
						}
					}
				}
			}
			.info {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				border-radius: 18px;
				background: #f0f0f0;
				padding: 40px 20px;
				gap: 30px;
				.info__title {
					@include adaptive-FS(18, 24);
					font-weight: bold;
				}
				.info__content {
					@include adaptive-FS(16, 18);
					display: flex;
					flex-direction: column;
					gap: 10px;
					.sub__text {
						font-weight: bold;
					}
				}
			}
		}
	}
</style>
