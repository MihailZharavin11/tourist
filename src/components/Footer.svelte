<div class="wrapper">
	<div class="brand">
		<h1 class="brand__title">iTourist</h1>
		<p class="brand__text">2023 © iTourist All rights reserved.</p>
	</div>
	<div class="links">
		<ul class="links__list">
			<li><a class="link" href="#">Home</a></li>
			<li><a class="link" href="#">Pricing</a></li>
			<li><a class="link" href="#">About Us</a></li>
			<li><a class="link" href="#">Contact</a></li>
		</ul>
	</div>
	<div class="links">
		<ul class="links__list">
			<li><a class="link" href="#">Facebook</a></li>
			<li><a class="link" href="#">Instagram</a></li>
			<li><a class="link" href="#">Twitter</a></li>
			<li><a class="link" href="#">LinkedIn</a></li>
		</ul>
	</div>
	<div class="links">
		<ul class="links__list">
			<li><a class="link" href="#">Privacy Policy</a></li>
			<li><a class="link" href="#">Terms Of Service</a></li>
		</ul>
	</div>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		gap: 100px;
		padding: 41px 144px 45px;
		border-top: 1px solid #f0f0f0;

		.brand {
			display: flex;
			flex-direction: column;
			gap: 20px;
			max-width: 148px;
			.brand__title {
				font-size: 28px;
				font-weight: bold;
			}
			.brand__text {
				font-size: 16px;
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
				}
			}
		}
	}
</style>
