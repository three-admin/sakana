<template>
	<main>

		<section id="mv" class="mv">
			<div class="contents_wrap flex">
				<div class="contents">
					<h1 class="mincho border_h line_gray">お問い合わせ</h1>
					<form>
						<div class="separated flex align-end">
						<label>
							<span class="title required">お名前</span>
							<input type="" name="">
						</label>
						<label>
							<span class="title required">メールアドレス</span>
							<input type="" name="">
						</label>
						</div>
						<label>
							<span class="title">電話番号</span>
							<input type="" name="">
						</label>
						<label>
							<span class="title">お問い合わせ内容</span>
							<textarea rows="5"></textarea>
						</label>
						<div class="forget_wrap">
						<a class="underline" href="#recover">
          パスワードをお忘れの方はこちら
        </a>
        </div>
						<button>
							<span class="submit_text circle_arrow">送信する<i></i></span>
						</button>
						<a class="account_link border_h circle_arrow" href="">すでに会員の方はこちら<i></i></a>
						<a class="cancel underline" href="#recover">
          キャンセル
        </a>
					</form>
				</div>
				<div class="img_wrap">
					<div class="ratio-fixed">
						<img src="~/assets/img/home/chazuke.jpg">
					</div>
				</div>
			</div>
		</section>

	</main>
</template>

<script>
import axios from 'axios'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
if (process.client) {
	gsap.registerPlugin(ScrollTrigger)
	gsap.registerPlugin(ScrollToPlugin)
}
export default {
	name: 'IndexPage',
	mounted() {

	}
}
</script>

<style lang="scss" scoped>
	main {

		.mv {
			position: relative;
			.contents_wrap {
				position: relative;
				padding-left: 19vw;
				.contents {
					padding: 15rem 0;
					width: 24vw;
					h1 {
						font-size: 2.5rem;
						line-height: 1.5;
					}
					.border_h {
						padding-bottom: 2.4rem;
						&:before {
							content: none;
						}
					}
					form {
						label {
							display: block;
							margin-top: 1.6rem;
							.title {
								display: inline-block;
								font-size: 1.4rem;
								line-height: 1.75;
							}
							input,
							textarea {
								margin-top: 0.8rem;
								padding: 1.2rem;
								width: calc(100% - 2.4rem - 2px);
								font-family: shippori-antique, '游明朝 Medium', 'YuMincho', 'Yu Mincho', 'Helvetica Neue', serif, san-serif;
								font-weight: 400;
								font-size: 1.3rem;
								line-height: 1.5;
								border: 1px solid #000000;
							}
							&:first-of-type {
								margin-top: 2.4rem;
							}
						}
						.separated {
							label {
								width: 48%;
							}
						}
						button {
							margin-top: 2.4rem;
							padding: 2.4rem 0;
							width: 100%;
							text-align: center;
							background-color: #AA0813;
							.submit_text {
								display: inline-block;
								color: #ffffff;
								line-height: 1;
							}
						}
						.underline {
								display: inline-block;
								margin-top: 1.6rem;
								font-size: 1.2rem;
								line-height: 1;
							}
						.forget_wrap {
							text-align: right;
							
						}
						.account_link {
							margin-top: 2.4rem;
							padding-bottom: 1.2rem;
							font-size: 1.2rem;
							line-height: 1;
							&:before {
								content: none;
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
						padding-top: 133%;
					}
				}
			}
			@media only screen and (max-width: 980px) {
				padding: 0;
				height: 87vh;
				h3 {
					display: none;
				}
				.contents {
					margin-top: 0;
					.mv_menu {
						display: none;
					}
					h1 {
						margin: 0.4rem auto;
						.vertical_text {

						}
					}
				}
			}
		}


	}
</style>