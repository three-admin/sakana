<template>
	<main>

		<section id="news" class="news">
			<div class="contents_wrap flex">
				<div class="title_wrap">
					<h1 class="mincho">地震の影響による商品のお届けについてのご案内。</h1>
					<p class="info">2022.03.30<span class="dot">・</span>お知らせ</p>
					<div class="copy_wrap border_h line_gray">
						<button class="link_copy" @click="copyClick('URLだよ')">
							<span v-show="copied" class="copied_text">リンクURLをコピーしました</span>
							この記事のリンクをコピー
						</button>
					</div>
				</div>
				<div class="contents">
					<div class="img_wrap border_h">
						<div class="ratio-fixed border_v">
							<img src="~/assets/img/home/chazuke.jpg">
						</div>
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
	data() {
		return {
			copied: false,
		}
	},
	methods: {
		copyClick: function(url) {
			this.copied = true
			setTimeout(() => {
				this.copied = false
			}, 1500)
		},
	},

}
</script>

<style lang="scss" scoped>
	main {

		.news {
			padding: 22rem 10vw 18rem 22vw;
			.contents_wrap {
				.title_wrap {
					width: 30vw;
					h1 {
						font-size: 3.3rem;
						line-height: 1.5;
					}
					.info {
						margin-top: 2.4rem;
						.dot {
							margin: 0 0.4rem;
						}
					}
					.copy_wrap {
						margin-top: 4.8rem;
						padding-top: 2.4rem;
						&:after {
							content: none;
						}
						.link_copy {
							position: relative;
							padding-left: 2.4rem;
							font-size: 1.3rem;
							line-height: 1;
							&:before {
								content: '';
								position: absolute;
								top: 0;
								left: 0;
								bottom: 0;
								display: block;
								margin: auto;
								width: 1.8rem;
								height: 1.8rem;
								background-image: url('~/assets/img/icon/link.svg');
								background-size: contain;
								background-repeat: no-repeat;
							}
							.copied_text {
								position: absolute;
								left: -0.4rem;
								bottom: 2.4rem;
								display: block;
								padding: 0.8rem;
								font-size: 1.1rem;
								line-height: 1;
								background-color: #ffffff;
								border: 1px solid #C4C4C4;
								z-index: 1;
								&:before,
								&:after {
									content: '';
									position: absolute;
									left: 8px;
									display: block;
									border: 6px solid transparent;
								}
								&:before {
									bottom: -12px;
									border-top: 6px solid #C4C4C4;
								}
								&:after {
									bottom: -10.5px;
									border-top: 6px solid #ffffff;
								}
							}
						}
					}
				}
				.contents {
					width: 35vw;
					.img_wrap {
						.ratio-fixed {
							padding-top: 100%;
						}
					}
					h2, h3, h4, h5, h6 {
						font-size: 2.7rem;
						line-height: 1.5;
					}
					p {
						font-feature-settings: initial;
						-webkit-font-feature-settings: initial;
					}
					a {
						color: #AA0813;
					}
				}
				
			}
			@media only screen and (max-width: 980px) {
				padding: 13rem 6.4vw 9.6rem;
				.contents_wrap {
					.title_wrap {
						width: 100%;
						h1 {
							font-size: 2.4rem;
						}
						.info {
							margin-top: 1.6rem;
						}
						.copy_wrap {
							margin-top: 2.4rem;
							.link_copy {
								
							}
						}
					}
					.contents {
						margin-top: 6rem;
						width: 100%;
						h2, h3, h4, h5, h6 {
							font-size: 2.1rem;
						}
					}
				}
			}
		}


	}
</style>