<script lang="ts">
	import { afterUpdate } from 'svelte';
	import Contact from '../components/Contact.svelte';
	import Data from '../components/Data.svelte';
	import Explore from '../components/Explore.svelte';
	import Features from '../components/Features.svelte';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import Introducing from '../components/Introducing.svelte';
	import Pricing from '../components/Pricing.svelte';
	import Step from '../components/Step.svelte';
	import Testimonials from '../components/Testimonials.svelte';
	import '../reset.scss';
	import { onMount } from 'svelte';
	import { loadTranslations, locale, locales } from '../lib/i18n/config';

	onMount(async () => {
		await loadTranslations(locale.get() || 'en');
	});
</script>

<div class="wrapper">
	<Header />
	<div class="container">
		<Explore />
		<Introducing />
		<Data />
		<Features />
		<Step />
		<Testimonials />
		<Pricing />
		<Contact />
	</div>
	<Footer />
</div>

<style lang="scss">
	.wrapper {
		background-color: white;
		width: 100%;
		height: 100%;
		font-family: 'Roboto', sans-serif;
		.container {
			padding: 41px 144px 45px;
			@media (max-width: 768px) {
				padding: 50px;
			}
		}
	}
</style>
