<template>
	
	<div class="">
		
		<Header></Header>
		<main>
			<section id="mv" class="mv">
				<div class="contents_wrap flex">
					<div class="contents">
						<h1 class="mincho border_h line_gray">404 ご指定のページが見つかりませんでした</h1>
						<p class="sentence">
							阿部守商店のサイトをご利用いただきありがとうございます。<br>
							<br>
							大変申し訳ありませんが、ご指定のページは削除または移動された可能性があり、見つかりませんでした。<br>
							<br>
							お困りの方は、お電話もしくはお問い合わせフォームよりお問い合わせください。
						</p>
						<a class="submit_button" href="/">
							<span class="submit_text circle_arrow">トップページへ<i></i></span>
						</a>
					</div>
					<div class="img_wrap border_h">
						<div class="ratio-fixed border_v">
							<nuxt-img src="/item/404.jpg" loading="lazy" />
						</div>
					</div>
				</div>
			</section>
		</main>
		<Footer></Footer>
		
	</div>

</template>


<script>

import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
	components: {
		Header,
		Footer
	},
}

</script>

<style lang="scss" scoped>
	main {
		.mv {
			.contents_wrap {
				position: relative;
				padding-left: 19vw;
				.contents {
					padding: 15rem 0;
					width: 24vw;
					h1 {
						padding-bottom: 2.4rem;
						font-size: 2.5rem;
						line-height: 1.5;
						&:before {
							content: none;
						}
					}
					.sentence {
						margin-top: 2.4rem;
					}
					.submit_button {
						margin-top: 2.4rem;
						padding: 2.4rem 0;
						width: 100%;
						text-align: center;
						background-color: #AA0813;
						.submit_text {
							display: inline-block;
							color: #ffffff;
							line-height: 1;
							i {
								border-color: #ffffff;
								&:before,
								&:after {
									background-image: url("~/assets/img/icon/arrow_white.svg");
								}
							}
						}
					}
				}
				.img_wrap {
					position: sticky;
					top: 0;
					left: 0;
					width: 50vw;
					height: 100vh;
					overflow: hidden;
					.ratio-fixed {
						padding-top: 110%;
					}
				}
				@media only screen and (max-width: 980px) {
					padding: 0 6.4vw;
					.contents {
						padding-bottom: 9.6rem;
						width: 100%;
						h1 {
							padding-bottom: 2rem;
							font-size: 2rem;
						}
					}
					.img_wrap {
						position: relative;
						display: none;
					}
				}
			}
		}
	}
</style>
