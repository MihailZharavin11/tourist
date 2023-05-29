import i18n from 'sveltekit-i18n';
import lang from './lang.json';

/** @type {import('sveltekit-i18n').Config} */
const config = {
	translations: {
		en: { lang },
		ru: { lang }
	},
	loaders: [
		{
			locale: 'en',
			key: 'translations',
			loader: async () => (await import('./en/en.json')).default
		},
		{
			locale: 'ru',
			key: 'translations',
			loader: async () => (await import('./ru/ru.json')).default
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));
