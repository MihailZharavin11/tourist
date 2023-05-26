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
	a {
		font-size: 18px;
		font-weight: bold;
	}
	.button {
		cursor: pointer;
		border-radius: 18px;
		padding: 21px;
		transition: all 0.5s ease;
		&:hover {
			transform: scale(1.1);
			transition: all 0.5s ease;
		}
	}
</style>
