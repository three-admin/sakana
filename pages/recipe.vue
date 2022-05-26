<template>
	<main>

		<section id="mv" class="mv">
			<div class="title_wrap">
				<span class="sub_title">おさかなのプロが考えた</span>
				<h1 class="mincho">おさかなレシピ</h1>
			</div>
			<ul class="mv_menu flex flex-center">
				<li>
					<button class="circle_arrow vertical flex" v-scroll-to="{ el: '#chazuke', offset: -60 }">
						<span class="mincho vertical_text">お茶漬けセット</span>
						<i></i>
					</button>
				</li>
				<li>
					<button class="circle_arrow vertical flex" v-scroll-to="{ el: '#chazuke', offset: -60 }">
						<span class="mincho vertical_text">お茶漬けお茶漬けセットセット</span>
						<i></i>
					</button>
				</li>
			</ul>
		</section>

		<section id="recipe" class="recipe">
			<ul class="recipe_list">
				<li id="chazuke" class="recipe_item border_h">
					<div class="title_wrap flex align-center">
						<div class="img_wrap border_h">
							<div class="ratio-fixed border_v">
								<img src="~/assets/img/home/chazuke.jpg">
							</div>
						</div>
						<div class="text_wrap">
							<h2 class="mincho">紅鮭のクリームパスタ</h2>
							<p class="description">商品説明文が入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。商品説明文が入ります。この文章はダミーです。</p>
						</div>
					</div>
					<div class="material_wrap border_h line_1">
						<div class="border_v line_1">
							<h3 class="">材料（1人前）</h3>
							<ul class="material_list">
								<li class="flex align-center">
									<span class="material">具材名が長い場合はこのように改行されますこの文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</span>
									<span class="line"></span>
									<span class="amount">お好みで</span>
								</li>
								<li class="flex align-center">
									<span class="material">お楽しみセット</span>
									<span class="line"></span>
									<span class="amount">お好みで</span>
								</li>
							</ul>
						</div>
					</div>
					<div class="howto_wrap">
						<h3 class="">紅鮭のクリームパスタの作り方</h3>
						<ul class="step_list">
							<li>
								<p class="description">商品説明文が入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。商品説明文が入ります。この文章はダミーです。</p>
							</li>
							<li>
								<p class="description">商品説明文が入ります。この文章はダミーです。</p>
							</li>
						</ul>
					</div>
				</li>
				<li id="chazuke" class="recipe_item border_h">
					<div class="title_wrap flex align-center">
						<div class="img_wrap border_h">
							<div class="ratio-fixed border_v">
								<img src="~/assets/img/home/chazuke.jpg">
							</div>
						</div>
						<div class="text_wrap">
							<h2 class="mincho">紅鮭のクリームパスタ</h2>
							<p class="description">商品説明文が入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。商品説明文が入ります。この文章はダミーです。</p>
						</div>
					</div>
					<div class="material_wrap border_h line_1">
						<div class="border_v line_1">
							<h3 class="">材料（1人前）</h3>
							<ul class="material_list">
								<li class="flex align-center">
									<span class="material">具材名が長い場合はこのように改行されますこの文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</span>
									<span class="line"></span>
									<span class="amount">お好みで</span>
								</li>
								<li class="flex align-center">
									<span class="material">お楽しみセット</span>
									<span class="line"></span>
									<span class="amount">お好みで</span>
								</li>
							</ul>
						</div>
					</div>
					<div class="howto_wrap">
						<h3 class="">紅鮭のクリームパスタの作り方</h3>
						<ul class="step_list">
							<li>
								<p class="description">商品説明文が入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。商品説明文が入ります。この文章はダミーです。</p>
							</li>
							<li>
								<p class="description">商品説明文が入ります。この文章はダミーです。</p>
							</li>
						</ul>
					</div>
				</li>
			</ul>
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
		const productList = [
			'#chazuke',
			'#takikomi',
			'#set'
		]
		// const itemList = [
		// 	'#chazuke .img_wrap',
		// 	'#takikomi .img_wrap',
		// 	'#set .img_wrap'
		// ]
		// itemList.forEach((productItem, index) => {
		// 	gsap.to(productItem, {
		// 		y: '50%',
		// 		scrollTrigger: {
		// 			trigger: productList[index],
		// 			start: 'top top',
		// 			end: 'bottom top',
		// 			scrub: true
		// 		}
		// 	})
		// })
		
		// const thumbnailList = [
		// 	'#chazuke .img_wrap img',
		// 	'#takikomi .img_wrap img',
		// 	'#set .img_wrap img'
		// ]
		// thumbnailList.forEach((thumbnailImg, index) => {
		// 	gsap.to(thumbnailImg, {
		// 		scale: 0.8,
		// 		scrollTrigger: {
		// 			trigger: productList[index],
		// 			start: 'top bottom',
		// 			end: 'bottom top',
		// 			scrub: true
		// 		}
		// 	})
		// })
	}
}
</script>

<style lang="scss" scoped>
	main {

		.circle_arrow.vertical {
			i {
				&:before {
					transform: translateY(-100%);
				}
				&:after {
					transform: translateY(0);
				}
			}
			&:hover {
				i {
					&:before {
						transform: translateY(0);
					}
					&:after {
						transform: translateY(100%);
					}
				}
			}
		}

		.mv {
			position: relative;
			padding-top: 15rem;
			.title_wrap {
				text-align: center;
				.sub_title {
					line-height: 1.12;
				}
				h1 {
					margin-top: 1.6rem;
					font-size: 4.4rem;
					line-height: 1;
				}
			}
			.mv_menu {
				margin: 6rem auto;
				width: 42rem;
				flex-direction: row-reverse;
				li {
					margin-left: 2rem;
					button {
						position: relative;
						padding: 0;
						height: 27rem;
						&:before {
							content: '';
							position: absolute;
							top: 0;
							left: 0;
							right: 0;
							display: block;
							margin: auto;
							width: 1px;
							height: 24.2rem;
							background-color: #000;
								// background-image: url('~/assets/img/item/line_1_v.svg');
						}
						.mincho {
							padding: 0 0.2rem 1.2rem;
							font-size: 1.4rem;
							line-height: 1.05;
							background-image: url('~/assets/img/item/bg_gray.svg');
							background-repeat: repeat;
						}
						i {
							border-color: #000000;
							&:before,
							&:after {
								background-image: url('~/assets/img/icon/arrow_black.svg');
							}
							&:before {
								transform: translateY(-100%) rotate(90deg);
							}
							&:after {
								transform: translateY(0) rotate(90deg);
							}
						}
						&:hover {
							i {
								&:before {
									transform: translateY(0) rotate(90deg);
								}
								&:after {
									transform: translateY(100%) rotate(90deg);
								}
							}
						}
					}
					&:nth-of-type(11n) {
						margin-left: 0;
					}
					&:nth-of-type(n+12) {
						margin-top: 3.5rem;
					}
					&:last-of-type {
						margin-left: 0;
					}
				}
			}
			@media only screen and (max-width: 980px) {
				padding-top: 13rem;
				.title_wrap {
					.sub_title {
						font-size: 1.1rem;
					}
					h1 {
						margin-top: 0.8rem;
						font-size: 2.4rem;
					}
				}
				.mv_menu {
					margin-top: 4.2rem;
					width: 19rem;
					li {
						margin-left: 1.6rem;
						button {
							height: 24rem;
							&:before {
								height: 21.2rem;
							}
							.mincho {
								font-size: 1.2rem;
							}
						}
						&:nth-of-type(11n) {
							margin-left: 1.6rem;
						}
						&:nth-of-type(6n) {
							margin-left: 0;
						}
						&:nth-of-type(n+7) {
							margin-top: 3.5rem;
						}
						&:last-of-type {
							margin-left: 0;
						}
					}
				}
			}
		}

		.recipe {
			padding: 15rem 0 18rem;
			.recipe_list {
				margin: auto;
				width: 58vw;
				.recipe_item {
					position: relative;
					margin-bottom: 8rem;
					padding-bottom: 8rem;
					&:before {
						content: none;
					}
					.title_wrap {
						.text_wrap {
							width: 50%;
							h2 {
								font-size: 2.5rem;
								line-height: 1.5;
							}
							.description {
								margin-top: 0.8rem;
								font-size: 1.3rem;
							}
						}
						.img_wrap {
							width: 40%;
							.ratio-fixed {
								padding-top: 100%;
								img {
									object-fit: cover;
								}
							}
						}
					}
					h3 {
						font-size: 1.8rem;
						line-height: 1.5;
					}
					ul {
						li {
							position: relative;
							padding-left: 2rem;
							&:before {
								position: absolute;
								top: 0;
								left: 0;
								font-family: shippori-antique, '游明朝 Medium', 'YuMincho', 'Yu Mincho', 'Helvetica Neue', serif, san-serif;
							}
						}
					}
					.material_wrap {
						margin-top: 4.8rem;
						background-color: #ffffff;
						h3 {
							margin: 3rem auto auto 3.5rem;
						}
						.material_list {
							margin: 2rem auto 3.5rem;
							width: 80%;
							li {
								margin-bottom: 1.2rem;
								&:before {
									content: '・';
									font-size: 1.3rem;
									line-height: 1.5;
								}
								* {
									font-size: 1.3rem;
									line-height: 1.5;
								}
								.material {
									max-width: calc(75% - 2rem);
								}
								.line {
									flex-grow: 1;
									margin: auto 2.4rem;
									height: 1px;
									background-image: url('~/assets/img/item/line_gray.svg');
								}
							}
						}
					}
					.howto_wrap {
						margin-top: 4.8rem;
						.step_list {
							margin-top: 2rem;
							counter-reset: num;
							li {
								counter-increment: num;
								&:before {
									content: counter(num) '.';
									font-size: 1.5rem;
									line-height: 2;
								}
							}
						}
					}
					&:last-of-type {
						margin-bottom: 0;
					}
				}
			}
			@media only screen and (max-width: 980px) {
				padding: 7rem 0 9.6rem;
				.recipe_list {
					width: 87vw;
					.recipe_item {
						margin-bottom: 4.8rem;
						padding-bottom: 4.8rem;
						.title_wrap {
							.text_wrap {
								width: 60%;
								h2 {
									font-size: 1.8rem;
								}
								.description {
									margin-top: 0.6rem;
									font-size: 1.1rem;
								}
							}
							.img_wrap {
								width: 35%;
							}
						}
						h3 {
							font-size: 1.6rem;
						}
						ul {
							li {
								padding-left: 1.6rem;

							}
						}
						.material_wrap {
							margin-top: 2.4rem;
							h3 {
								margin: 2rem auto auto 2rem;
							}
							.material_list {
								margin: 2rem auto;
								width: 87%;
								li {
									margin-bottom: 0.8rem;
									&:before {
										font-size: 1.1rem;
										line-height: 1.5;
									}
									* {
										font-size: 1.1rem;
									}
									.material {
										max-width: calc(64% - 1.6rem);
									}
									.line {
										margin: auto 1.2rem;
									}
								}
							}
						}
						.howto_wrap {
							margin-top: 2.4rem;
							.step_list {
								margin-top: 1.2rem;
								li {
									&:before {
										font-size: 1.3rem;
									}
								}
							}
						}
					}
				}
			}
		}

	}
</style>