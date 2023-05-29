<script>
	import Button from './Button.svelte';
	import iTouristVideo from '../video/itourist.mp4';
	import iTouristPoster from '../images/videoPreview.png';
</script>

<div id="about" class="wrapper">
	<div class="inner">
		<div class="description">
			<h1 class="description__title">Introducing iTourist</h1>
			<p class="description__text">
				Watch the video to see how we can make easier your stay in Israel.
			</p>
			<Button title="Use the App" color="white" />
		</div>
		<div class="video">
			<video poster={iTouristPoster} src={iTouristVideo} controls>
				<source src={iTouristVideo} type="video/mp4" />
				<track src={iTouristVideo} kind="captions" srclang="en" label="english_captions" />
			</video>
		</div>
	</div>
</div>

<style lang="scss">
	@import '../sass/variables';

	.wrapper {
		display: flex;
		align-items: center;
		position: relative;
		margin-top: 100px;
		.inner {
			gap: 20px;
			border: 1px solid #f0f0f0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;
			width: 100%;
			padding: 80px;
			-webkit-box-shadow: 0px 50px 0px -30px #f0f0f0;
			-moz-box-shadow: 0px 50px 0px -30px #f0f0f0;
			box-shadow: 0px 50px 0px -30px #f0f0f0;
			border-radius: 50px;

			@media (max-width: 1280px) {
				display: flex;
				flex-direction: column;
				justify-content: center;
				gap: 70px;
			}
			@media (max-width: 1024px) {
				border: none;
				padding: 0px;
				box-shadow: none;
			}
			.description {
				display: flex;
				flex-direction: column;
				align-items: start;
				max-width: 381px;
				gap: 20px;
				.description__title {
					@include adaptive-FS(34, 68);
					font-weight: bold;
					line-height: 80px;
				}

				.description__text {
					@include adaptive-FS(18, 20);

					line-height: 30px;
				}
			}
			.video {
				video {
					max-width: 524px;
					max-height: 296px;
					@media (max-width: 768px) {
						min-height: 260px;
						width: 100%;
						object-fit: fill;
					}
				}
			}
		}
	}
</style>
