<script lang="ts">
	export let title: string;
	export let color = '#030303';
	export let background: string = '#030303';
	export let boxShadow: boolean = false;
	export let border = 'none';
</script>

<button
	class="button"
	style="background:{background};border:{border};box-shadow:{boxShadow
		? '0px 0px 10px #e6e5e3'
		: ''}"
>
	<a style="color:{color} " href="http://">{title}</a>
</button>

<style lang="scss">
	@import '../sass/variables';
	a {
		font-size: 16px;
		font-weight: bold;
	}
	.button {
		cursor: pointer;
		border-radius: 18px;
		padding: 15px;
		transition: all 0.5s ease;

		@media (max-width: 640px) {
			padding: 15px;
		}
		&:hover {
			transform: scale(1.1);
			transition: all 0.5s ease;
		}
	}
</style>
