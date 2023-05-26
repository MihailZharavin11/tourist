<script>
	import Button from './Button.svelte';
	import Man from '../images/man.png';
</script>

<div class="wrapper">
	<div class="image">
		<img src={Man} alt="Man" />
	</div>
	<div class="description">
		<p class="description__subTitle">iTourist</p>
		<h1 class="description__title">All your data is safe with us</h1>
		<p class="description__text">
			We take your data security seriously, which is why we use advanced encryption protocols to
			protect your files in the cloud. Your data is safe and secure with us.
		</p>
		<Button
			boxShadow={true}
			title="Try now"
			color="black"
			background="#d9d8d4"
			border={'1px solid grey'}
		/>
	</div>
</div>

<style lang="scss">
	.wrapper {
		height: 100vh;
		display: grid;
		grid-template: 1fr/1fr 1fr;
		align-items: center;

		.image {
			max-width: 446px;
			max-height: 446px;
			img {
				max-width: 446px;
				max-height: 446px;
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
				font-size: 32px;
				font-weight: bold;
				font-weight: bold;
				line-height: 40px;
			}
			.description__text {
				font-size: 16px;
				line-height: 23px;
			}
		}
	}
</style>
