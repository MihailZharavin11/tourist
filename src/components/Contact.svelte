<script>
	import Button from './Button.svelte';
</script>

<div class="wrapper">
	<h1 class="title">Contact us</h1>
	<div class="description">
		<div class="contact">
			<form class="contact__form">
				<input placeholder="Name" class="contact__input" />
				<input placeholder="Email Adress" class="contact__input" />
				<input placeholder="Write your message" class="contact__input" />
				<Button title="Send" color="black" background="#f0f0f0" />
			</form>
		</div>
		<div class="info">
			<h1 class="info__title">Contact information</h1>
			<div class="info__content">
				<p class="text">Adress</p>
				<p class="sub__text">10 Carlebach St, Tel Aviv, Israel</p>
			</div>
			<div class="info__content">
				<p class="text">Phone number</p>
				<p class="sub__text">+972 3-123-4567</p>
			</div>
			<div class="info__content">
				<p class="text">Email</p>
				<p class="sub__text">info@itourist-il.com</p>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 50px;
		margin: 100px 0px;
		.title {
			font-size: 60px;
			font-weight: bold;
		}
		.description {
			display: grid;
			grid-template: 1fr / 1fr 1fr;
			.contact {
				.contact__form {
					display: flex;
					flex-direction: column;
					gap: 20px;
					max-width: 480px;

					.contact__input {
						padding: 20px 10px;
						border-radius: 18px;
						border: 1px solid #d1d1d1;
						&::placeholder {
							font-size: 16px;
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
				.info__title {
					font-size: 24px;
					font-weight: bold;
				}
				.info__content {
					font-size: 16px;
					display: flex;
					flex-direction: column;
					gap: 20px;
					.sub__text {
						font-weight: bold;
					}
				}
			}
		}
	}
</style>
