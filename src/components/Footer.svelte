<script>
	import { t } from '$lib/i18n/config';
	import { scrolltoElement } from '../utils/scrollToElement';
</script>

<div class="wrapper">
	<div class="brand">
		<h1 class="brand__title">{$t('translations.footer.title')}</h1>
		<p class="brand__text">{$t('translations.footer.year')}</p>
	</div>
	<div class="links">
		<ul class="links__list">
			<li>
				<a
					class="link"
					on:click={() => {
						scrolltoElement('home');
					}}>{$t('translations.footer.links.home')}</a
				>
			</li>
			<li>
				<a
					class="link"
					on:click={() => {
						scrolltoElement('pricing');
					}}>{$t('translations.footer.links.pricing')}</a
				>
			</li>
			<li>
				<a
					class="link"
					on:click={() => {
						scrolltoElement('about');
					}}>{$t('translations.footer.links.aboutUs')}</a
				>
			</li>
			<li>
				<a
					class="link"
					on:click={() => {
						scrolltoElement('contact');
					}}>{$t('translations.footer.links.contact')}</a
				>
			</li>
		</ul>
	</div>
	<div class="links">
		<ul class="links__list">
			<li>
				<a class="link" href={import.meta.env.VITE_FACEBOOK}
					>{$t('translations.footer.socialMedia.facebook')}</a
				>
			</li>
			<li>
				<a class="link" href={import.meta.env.VITE_INSTAGRAM}
					>{$t('translations.footer.socialMedia.instagram')}</a
				>
			</li>
			<li>
				<a class="link" href={import.meta.env.VITE_TWITTER}
					>{$t('translations.footer.socialMedia.twitter')}</a
				>
			</li>
			<li>
				<a class="link" href={import.meta.env.VITE_LINKEDIN}
					>{$t('translations.footer.socialMedia.linkedIn')}</a
				>
			</li>
		</ul>
	</div>
	<div class="links">
		<ul class="links__list">
			<li>
				<a class="link" href={import.meta.env.VITE_PRIVACY}
					>{$t('translations.footer.options.privacyPolicy')}</a
				>
			</li>
			<li>
				<a class="link" href={import.meta.env.VITE_TERMS}
					>{$t('translations.footer.options.termsOfService')}</a
				>
			</li>
		</ul>
	</div>
</div>

<style lang="scss">
	@import '../sass/variables';

	.wrapper {
		display: flex;
		gap: 100px;
		padding: 41px 144px 45px;
		border-top: 1px solid #f0f0f0;

		@media (max-width: 768px) {
			padding: 50px;
			justify-content: space-between;
			gap: 20px;
		}
		@media (max-width: 640px) {
			padding: 20px 10px;
			gap: 20px;
		}

		.brand {
			display: flex;
			flex-direction: column;
			gap: 20px;
			max-width: 148px;
			.brand__title {
				@include adaptive-FS(20, 28);
				font-weight: bold;
			}
			.brand__text {
				@include adaptive-FS(14, 16);
			}
		}
		.links {
			.links__list {
				display: flex;
				flex-direction: column;
				gap: 20px;
				.link {
					font-size: 16px;
					font-weight: bold;
					color: black;
					cursor: pointer;
				}
			}
		}
	}
</style>
