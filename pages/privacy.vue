<template>
	<main>

		<section id="mv" class="mv">
			<div class="title_wrap">
				<span class="sub_title">ご利用案内</span>
				<h1 class="mincho">よくあるご質問</h1>
			</div>
			<div class="menu_wrap flex flex-start border_h line_gray">
				<h2 class="title">ご利用案内メニュー</h2>
				<ul class="mv_menu">
					<li>
						<NuxtLink class=" hover_red" :class="{'now': this.$route.name == 'products'}" to="/products" @click.native="linkClick">お届けについて</NuxtLink>
					</li>
					<li>
						<NuxtLink class=" hover_red" :class="{'now': this.$route.name == 'secret'}" to="/secret" @click.native="linkClick">支払い方法</NuxtLink>
					</li>
					<li>
						<NuxtLink class=" hover_red" :class="{'now': this.$route.name == 'about'}" to="/about" @click.native="linkClick">ギフトのお荷物について</NuxtLink>
					</li>
					<li>
						<NuxtLink class=" hover_red" :class="{'now': this.$route.name == 'recipe'}" to="/recipe" @click.native="linkClick">よくあるご質問</NuxtLink>
					</li>
					<li>
						<NuxtLink class=" hover_red" :class="{'now': this.$route.name == 'recipe'}" to="/recipe" @click.native="linkClick">特定商取引法に基づく記載</NuxtLink>
					</li>
				</ul>
			</div>
		</section>

		<section id="concept" class="concept">
			<div class="title_wrap">
				<h2 class="vertical_text_wrap">
					<span class="mincho vertical_text">宮城塩竃の</span>
					<span class="mincho vertical_text">おさかなを</span>
					<span class="mincho vertical_text">食卓とつなぐ。</span>
				</h2>
			</div>
			<div class="sentence_wrap vertical_text_wrap flex flex-center">
				<p class="vertical_text_wrap">
					<span class="vertical_text">余すことなく。</span>
					<span class="vertical_text">余すことなく。</span>
					<span class="vertical_text">余すことなく。</span>
					<span class="vertical_text">余すことなく。</span>
					<span class="vertical_text">余すことなく。</span>
					<span class="vertical_text">余すことなく。</span>
				</p>
				<p class="vertical_text_wrap">
					<span class="vertical_text">余すことなく。</span>
					<span class="vertical_text">おさかなの</span>
					<span class="vertical_text">おさかなの</span>
					<span class="vertical_text">おさかなの</span>
					<span class="vertical_text">余すことなく。</span>
				</p>
				<p class="vertical_text_wrap">
					<span class="vertical_text">おさかなの</span>
					<span class="vertical_text">余すことなく。</span>
					<span class="vertical_text">おさかなの</span>
					<span class="vertical_text">おさかなの</span>
					<span class="vertical_text">余すことなく。</span>
				</p>
				<p class="vertical_text_wrap">
					<span class="vertical_text">おさかなの</span>
					<span class="vertical_text">余すことなく。</span>
					<span class="vertical_text">余すことなく。</span>
					<span class="vertical_text">おさかなの</span>
					<span class="vertical_text">おさかなの</span>
					<span class="vertical_text">余すことなく。</span>
				</p>
			</div>
			<div class="link_wrap">
				<NuxtLink class="circle_arrow vertical_link vertical_link_large" to="/about"><span class="link_text">阿部守商店について</span><i></i></NuxtLink>
			</div>
		</section>

		<section id="wave" class="wave">
			<img src="">
			<img src="">
			<img src="">
		</section>

		<section id="lineup" class="lineup">
			<div class="lineup_wrap flex flex-start">
				<div class="title_wrap vertical_text_wrap">
					<h2 class="mincho vertical_text">商品一覧<span class="mini vertical_text">ギフト対応・のし入れいたします</span></h2>
				</div>
				<div class="list_wrap">
					<ul class="lineup_list">
						<li id="chazuke" class="flex">
							<div class="text_wrap">
								<h3 class="mincho">お茶漬けセット</h3>
								<p class="description">商品説明文が入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。商品説明文が入ります。この文章はダミーです。</p>
								<ul class="product_list">
									<li class="flex flex-start">
										<div class="thumbnail_wrap">
											<div class="ratio-fixed">
												<img src="">
											</div>
										</div>
										<div class="detail_wrap">
											<span class="sub_title">おさかなの素 5種入り</span>
											<h4>お茶漬けセット</h4>
											<div class="price_wrap flex flex-start align-end">
												<h5>3,500円</h5>
												<span class="tax">税込・送料無料</span>
											</div>
											<NuxtLink class="circle_arrow" to="/products">商品詳細<i></i></NuxtLink>
										</div>
									</li>
								</ul>
							</div>
							<div class="img_wrap">
								<div class="ratio-fixed">
									<img src="~/assets/img/home/chazuke.jpg">
								</div>
							</div>
						</li>
						<li id="takikomi" class="flex">
							<div class="text_wrap">
								<h3 class="mincho">炊き込みご飯セット</h3>
								<p class="description">商品説明文が入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。商品説明文が入ります。この文章はダミーです。</p>
								<ul class="product_list">
									<li class="flex flex-start">
										<div class="thumbnail_wrap">
											<div class="ratio-fixed">
												<img src="">
											</div>
										</div>
										<div class="detail_wrap">
											<span class="sub_title">おさかなの素 3種入り</span>
											<h4>炊き込みご飯セット</h4>
											<div class="price_wrap flex flex-start align-end">
												<h5>3,500円</h5>
												<span class="tax">税込・送料無料</span>
											</div>
											<NuxtLink class="circle_arrow" to="/products">商品詳細<i></i></NuxtLink>
										</div>
									</li>
								</ul>
							</div>
							<div class="img_wrap">
								<div class="ratio-fixed">
									<img src="~/assets/img/home/takikomi.jpg">
								</div>
							</div>
						</li>
						<li id="set" class="flex">
							<div class="text_wrap">
								<h3 class="mincho">お楽しみセット</h3>
								<p class="description">商品説明文が入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。商品説明文が入ります。この文章はダミーです。</p>
								<ul class="product_list">
									<li class="flex flex-start">
										<div class="thumbnail_wrap">
											<div class="ratio-fixed">
												<img src="">
											</div>
										</div>
										<div class="detail_wrap">
											<span class="sub_title">お好きな魚種を詰め合わせ</span>
											<h4>選べる5袋お楽しみセット</h4>
											<div class="price_wrap flex flex-start align-end">
												<h5>3,500円</h5>
												<span class="tax">税込・送料無料</span>
											</div>
											<NuxtLink class="circle_arrow" to="/products">商品詳細<i></i></NuxtLink>
										</div>
									</li>
									<li class="flex flex-start">
										<div class="thumbnail_wrap">
											<div class="ratio-fixed">
												<img src="">
											</div>
										</div>
										<div class="detail_wrap">
											<span class="sub_title">贅沢に8袋をお好みで</span>
											<h4>選べる8袋お楽しみセット</h4>
											<div class="price_wrap flex flex-start align-end">
												<h5>3,500円</h5>
												<span class="tax">税込・送料無料</span>
											</div>
											<NuxtLink class="circle_arrow" to="/products">商品詳細<i></i></NuxtLink>
										</div>
									</li>
								</ul>
							</div>
							<div class="img_wrap">
								<div class="ratio-fixed">
									<img src="~/assets/img/home/set.jpg">
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>

		<section id="recipe" class="recipe">
			<div class="recipe_wrap flex">
				<div class="title_wrap vertical_text_wrap">
					<h2 class="mincho vertical_text">おさかなレシピ<span class="mini vertical_text">おさかなの素を使ったレシピ</span></h2>
				</div>
				<div class="list_wrap">
					<ul class="recipe_list">
						<li class="flex">
							<h3 class="mincho">オートミール茶漬け</h3>
							<div class="text_wrap">
								<p class="description">商品説明文が入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。商品説明文が入ります。この文章はダミーです。</p>
								<NuxtLink class="" to="/products">詳しく見る<i></i></NuxtLink>
							</div>
							<div class="img_wrap">
								<div class="ratio-fixed">
									<img src="">
								</div>
							</div>
						</li>
						<li class="flex">
							<h3 class="mincho">紅鮭のクリームパスタ</h3>
							<div class="text_wrap">
								<p class="description">商品説明文が入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。商品説明文が入ります。この文章はダミーです。</p>
								<NuxtLink class="" to="/products">詳しく見る<i></i></NuxtLink>
							</div>
							<div class="img_wrap">
								<div class="ratio-fixed">
									<img src="">
								</div>
							</div>
						</li>
						<li class="flex">
							<h3 class="mincho">さばの炊き込みご飯</h3>
							<div class="text_wrap">
								<p class="description">商品説明文が入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。商品説明文が入ります。この文章はダミーです。</p>
								<NuxtLink class="" to="/products">詳しく見る<i></i></NuxtLink>
							</div>
							<div class="img_wrap">
								<div class="ratio-fixed">
									<img src="">
								</div>
							</div>
						</li>
						<li class="flex">
							<h3 class="mincho">紅鮭いり卵焼き</h3>
							<div class="text_wrap">
								<p class="description">商品説明文が入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。商品説明文が入ります。この文章はダミーです。</p>
								<NuxtLink class="" to="/products">詳しく見る<i></i></NuxtLink>
							</div>
							<div class="img_wrap">
								<div class="ratio-fixed">
									<img src="">
								</div>
							</div>
						</li>
					</ul>
					<div class="link_wrap">
						<NuxtLink class="circle_arrow vertical_link vertical_link_large" to="/recipe">レシピをもっと見る<i></i></NuxtLink>
					</div>
				</div>
			</div>
		</section>

		<section id="secret" class="secret">
			<div class="secret_wrap flex">
				<div class="l_wrap parallax_wrap flex">
					<div class="img_wrap">
						<div class="ratio-fixed">
							<img src="">
						</div>
					</div>
					<div class="text_wrap">
						<h3 class="mincho">宮城塩竃の品質の高い<br>おさかなだけを使用。</h3>
						<p class="description">商品説明文が入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。商品説明文が入ります。この文章はダミーです。</p>
					</div>
				</div>
				<div class="title_wrap vertical_text_wrap">
					<h2 class="mincho vertical_text">おいしさの秘密</h2>
					<span class="sub_title vertical_text">こだわりの独自製法で<br>ふっくらしっとり仕上げ</span>
					<NuxtLink class="circle_arrow vertical_text" to="/recipe">詳しく見る<i></i></NuxtLink>
				</div>
				<div class="r_wrap parallax_wrap flex">
					<div class="text_wrap">
						<h3 class="mincho">こだわりの独自製法で<br>ふっくらしっとり。</h3>
						<p class="description">商品説明文が入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。商品説明文が入ります。この文章はダミーです。</p>
					</div>
					<div class="img_wrap">
						<div class="ratio-fixed">
							<img src="">
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="news" class="news">
			<div class="news_wrap flex">
				<h2>
					<span class="mincho">お知らせ /</span>
					<span class="blog_title mincho">ブログ</span>
				</h2>
				<div class="list_wrap">
					<ul class="news_list">
						<li>
							<p class="info">2022.03.30<span class="dot">・</span>お知らせ</p>
							<NuxtLink class="" to="/products">地震の影響による商品のお届けについてのご案内。</NuxtLink>
						</li>
						<li>
							<p class="info">2022.03.30<span class="dot">・</span>お知らせ</p>
							<NuxtLink class="" to="/products">地震の影響による商品のお届けについてのご案内。</NuxtLink>
						</li>
						<li>
							<p class="info">2022.03.30<span class="dot">・</span>お知らせ</p>
							<NuxtLink class="" to="/products">地震の影響による商品のお届けについてのご案内。</NuxtLink>
						</li>
						<li>
							<p class="info">2022.03.30<span class="dot">・</span>お知らせ</p>
							<NuxtLink class="" to="/products">地震の影響による商品のお届けについてのご案内。</NuxtLink>
						</li>
					</ul>
					<div class="link_wrap">
						<NuxtLink class="circle_arrow" to="/news">お知らせ・ブログ一覧<i></i></NuxtLink>
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
		const productList = [
			'#chazuke',
			'#takikomi',
			'#set'
		]
		const itemList = [
			'#chazuke .img_wrap',
			'#takikomi .img_wrap',
			'#set .img_wrap'
		]
		itemList.forEach((productItem, index) => {
			gsap.to(productItem, {
				y: '50%',
				scrollTrigger: {
					trigger: productList[index],
					start: 'top top',
					end: 'bottom top',
					scrub: true
				}
			})
		})
		
		const thumbnailList = [
			'#chazuke .img_wrap img',
			'#takikomi .img_wrap img',
			'#set .img_wrap img'
		]
		thumbnailList.forEach((thumbnailImg, index) => {
			gsap.to(thumbnailImg, {
				scale: 0.8,
				scrollTrigger: {
					trigger: productList[index],
					start: 'top bottom',
					end: 'bottom top',
					scrub: true
				}
			})
		})
	}
}
</script>

<style lang="scss" scoped>
	main {

		.title_wrap {
			h2, h2 * {
				font-size: 3.3rem;
				line-height: 1.05;
				.mini {
					margin-top: 2.4rem;
					font-size: 1.2rem;
					line-height: 1.12;
				}
				@media only screen and (max-width: 980px) {
					font-size: 2.4rem;
					.mini {
						margin-top: 2rem;
						font-size: 1.1rem;
						line-height: 1.15;
					}
				}
			}
		}

		.mv {
			position: relative;
			padding: 0 4.2vw 0 16vw;
			height: 87vh;
			h3 {
				padding-top: 6rem;
				.mincho {
					display: block;
					font-size: 1.2rem;
					line-height: 1.5;
				}
			}
			.contents {
				margin-top: 11rem;
				.mv_menu {
					li {
						margin-bottom: 1.6rem;
						padding: 0.5rem 0.1rem;
						a {
							font-size: 2.5rem;
							line-height: 1.35;
						}
						&:last-of-type {
							margin-right: 0;
						}
					}
				}
				h1 {
					margin-top: 0.4rem;
					margin-left: 11vw;
					line-height: 1.15;
				}
			}
			h2 {
				position: absolute;
				top: 6rem;
				right: 4.2vw;
				img {
					width: 12vw;
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

		.visual {
			.parallax_img {
				padding-top: 49.6vw;
				@media only screen and (max-width: 980px) {
					padding-top: 133vw;
				}
			}
		}

		.concept {
			position: relative;
			padding: 8.7rem 0 12rem;
			.title_wrap {
				position: absolute;
				top: -6rem;
				right: 4.2vw;
				.vertical_text_wrap {
					padding: 0.8rem 1.2rem;
					background-color: #f2f2f2;
					.vertical_text {
						margin-left: 2.4rem;
						&:last-of-type {
							margin-left: 0;
						}
					}
				}
			}
			.sentence_wrap {
				.vertical_text_wrap {
					margin-left: 3.5rem;
					&:last-of-type {
						margin-left: 0;
					}
				}
			}
			.link_wrap {
				margin-top: 6rem;
				margin-left: 22vw;
				.circle_arrow.vertical_link {
					i {
						width: 2.9rem;
						height: 2.9rem;
						&:before,
						&:after {
							width: 2.9rem;
							height: 2.9rem;
						}
					}
				}
			}
			@media only screen and (max-width: 980px) {
				padding: 5rem 0 6rem 8vw;
				.title_wrap {
					position: absolute;
					top: -4rem;
					right: 6.9vw;
					.vertical_text_wrap {
						padding: 0.8rem 1.2rem;
						.vertical_text {
							margin-left: 1.2rem;
							&:last-of-type {
								margin-left: 0;
							}
						}
					}
				}
				.sentence_wrap {
					flex-wrap: wrap;
					.vertical_text_wrap {
						flex-wrap: wrap;
						justify-content: space-between;
						margin-left: initial;
						width: 100%;
						.vertical_text {
							display: block;
							margin-left: 0;
							margin-bottom: 1.2rem;
							width: 100%;
							writing-mode: initial;
							-webkit-writing-mode: initial;
							font-feature-settings: 'palt';
							-webkit-font-feature-settings: 'palt';
							&:last-of-type {
								margin-bottom: 3rem;
							}
						}
					}
				}
				.link_wrap {
					margin-top: 3.5rem;
					margin-left: 0;
					.circle_arrow {
						padding-right: 3rem;
						font-size: 1.2rem;
						i {
							width: 2.4rem;
							height: 2.4rem;
							&:before,
							&:after {
								width: 2.4rem;
								height: 2.4rem;
							}
						}
					}
				}
			}
		}

		.wave {
			margin: 12rem auto;
			@media only screen and (max-width: 980px) {
				margin: 6rem auto;
			}
		}

		.lineup {
			.lineup_wrap {
				position: relative;
				flex-direction: row-reverse;
				.title_wrap {
					position: sticky;
					top: 0;
					right: 0;
					width: 15vw;
					height: 87vh;
					h2 {
						margin-top: 6rem;
					}
					@media only screen and (max-width: 980px) {
						width: 25vw;
						h2 {
							margin-top: -1rem;
						}
					}
				}
				.list_wrap {
					width: 70vw;
					.lineup_list {
						li {
							overflow: hidden;
							.text_wrap {
								padding: 7rem 7.5%;
								width: 35%;
								h3 {
									font-size: 3.3rem;
									line-height: 1.1;
								}
								.description {
									margin-top: 2.4rem;
									font-size: 1.2rem;
								}
								.product_list {
									margin-top: 2.4rem;
									li {
										padding: 2.4rem 0;
										.thumbnail_wrap {
											width: 30%;
											.ratio-fixed {
												padding-top: 100%;
											}
										}
										.detail_wrap {
											margin-left: 2.4rem;
											padding-top: 0.4rem;
											.sub_title {
												font-size: 1.1rem;
												line-height: 1.5;
											}
											h4 {
												margin-top: 0.2rem;
												font-size: 1.8rem;
												line-height: 1.5;
											}
											.price_wrap {
												margin-top: 0.2rem;
												h5 {
													font-size: 1.3rem;
													line-height: 1.5;
												}
												.tax {
													margin-left: 0.4rem;
													padding-bottom: 0.1rem;
													font-size: 1rem;
													line-height: 1.5;
												}
											}
											.circle_arrow {
												margin-top: 1.2rem;
											}
										}
									}
								}
							}
							.img_wrap {
								width: 50%;
								.ratio-fixed {
									padding-top: 87vh;
									img {
										top: -25%;
										left: -25%;
										right: -25%;
										bottom: -25%;
										width: 150%;
										height: 150%;
									}
								}
							}
							@media only screen and (max-width: 980px) {
								.text_wrap {
									padding: 3.5rem 0;
									width: 100%;
									h3 {
										font-size: 2.4rem;
									}
									.description {
										margin-top: 2rem;
										font-size: 1.1rem;
									}
									.product_list {
										margin-top: 2rem;
										li {
											padding: 2rem 0;
											.detail_wrap {
												margin-left: 1.2rem;
												padding-top: 0;
												h4 {
													font-size: 1.5rem;
												}
											}
										}
									}
								}
								.img_wrap {
									width: 100%;
									order: -1;
									.ratio-fixed {
										padding-top: 133%;
									}
								}
							}
						}
					}
				}
			}
		}

		.recipe {
			margin-top: 14.6rem;
			@media only screen and (max-width: 980px) {
				margin-top: 13.5rem;
			}
			.recipe_wrap {
				justify-content: flex-end;
				margin-left: 16vw;
				.title_wrap {
					padding-top: 1.5rem;
					width: 6vw;
				}
				.list_wrap {
					margin-left: auto;
					padding-top: 3.5rem;
					width: 70vw;
					.recipe_list {
						li {
							h3 {
								margin-top: 3rem;
								width: 26%;
								font-size: 2rem;
								line-height: 1.5;
							}
							.text_wrap {
								margin-top: 3rem;
								width: 37%;
								.description {
									display: -webkit-box;
									-webkit-box-orient: vertical;
									font-size: 1.2rem;
									line-clamp: 2;
									-webkit-line-clamp: 2;
									overflow: hidden;
								}
								a {
									margin-top: 3rem;
									padding-bottom: 1.2rem;
									font-size: 1.2rem;
									line-height: 1;
								}
							}
							.img_wrap {
								width: 20%;
								.ratio-fixed {
									padding-top: 66.9%;
								}
							}
						}
					}
					.link_wrap {
						margin-top: 6rem;
						.circle_arrow {
							padding-right: 3.5rem;
							i {
								width: 2.9rem;
								height: 2.9rem;
								&:before,
								&:after {
									width: 2.9rem;
									height: 2.9rem;
								}
							}
						}
					}
				}
				@media only screen and (max-width: 980px) {
					margin: auto;
					padding: 0 6.4vw;
					.title_wrap {
						padding-top: 1.5rem;
						width: 12vw;
					}
					.list_wrap {
						margin-left: auto;
						padding-top: 3.5rem;
						width: 70vw;
						.recipe_list {
							li {
								margin-bottom: 2.4rem;
								&:last-of-type {
									margin-bottom: 0;
								}
								h3 {
									margin-top: 1.6rem;
									width: 100%;
									font-size: 2rem;
									line-height: 1.5;
								}
								.text_wrap {
									margin-top: 1.2rem;
									width: 100%;
									.description {
										font-size: 1.1rem;
										line-clamp: 3;
										-webkit-line-clamp: 3;
									}
									a {
										margin-top: 2rem;
										font-size: 1.1rem;
									}
								}
								.img_wrap {
									width: 100%;
									order: -1;
									.ratio-fixed {
										padding-top: 66.9%;
									}
								}
							}
						}
						.link_wrap {
							margin-top: 3rem;
							.circle_arrow {
								padding-right: 3rem;
								i {
									width: 2.4rem;
									height: 2.4rem;
									&:before,
									&:after {
										width: 2.4rem;
										height: 2.4rem;
									}
								}
							}
						}
					}
				}
			}
		}

		.secret {
			margin: 24rem auto 20.4rem;
			.secret_wrap {
				.title_wrap {
					flex-wrap: wrap;
					width: 5.5rem;
					.vertical_text {
						&:not(:first-child) {
							margin: 2.4rem auto 0;
							font-size: 1.2rem;
						}
						&.sub_title {
							padding: 2.4rem 0.4rem 0;
							line-height: 1.8rem;
						}
						&.circle_arrow {
							padding: 2.4rem 0 2.2rem;
							line-height: 1.12;
							i {
								top: initial;
								left: 0;
								bottom: 0;
							}

						}
					}
				}
				.parallax_wrap {
					padding-top: 3.5rem;
					width: 39vw;
					.text_wrap {
						width: 60%;
						h3 {
							font-size: 2rem;
							line-height: 1.5;
						}
						.description {
							margin-top: 1.2rem;
							font-size: 1.3rem;
							line-height: 1.75;
						}
					}
					.img_wrap {
						width: 100%;
						.ratio-fixed {
							padding-top: 66.9%;
						}
					}
				}
				.l_wrap {
					.text_wrap {
						margin-top: 7rem;
						margin-left: auto;
					}
				}
				.r_wrap {
					.text_wrap {
						margin-left: auto;
						margin-right: 27%;
					}
					.img_wrap {
						margin-top: 7rem;
					}
				}
			}
			@media only screen and (max-width: 980px) {
				margin: 12rem auto 10.8rem;
				.secret_wrap {
					.title_wrap {
						flex-wrap: nowrap;
						margin: 0 auto;
						width: auto;
						order: -1;
						.vertical_text {
							&:not(:first-child) {
								font-size: 1.1rem;
							}
							&.sub_title {
								margin: 1rem 2.4rem;
								padding: 0 2.4rem;
							}
							&.circle_arrow {
								margin: 1.1rem auto;
								padding-top: 0;
								line-height: 1.12;
								i {
									top: initial;
									left: 0;
									bottom: 0;
								}
							}
						}
					}
					.parallax_wrap {
						margin-top: 6rem;
						padding: 0 6.4vw;
						width: auto;
						.text_wrap {
							margin: 2.4rem auto;
							width: 100%;
							h3 {
								font-size: 1.8rem;
							}
							.description {
								font-size: 1.2rem;
							}
						}
					}
					.r_wrap {
						.img_wrap {
							margin-top: 0;
							order: -1;
						}
					}
				}
			}
		}

		.news {
			padding: 12rem 16vw;
			background-color: rgba(0, 0, 0, 0.05);
			.news_wrap {
				h2 {
					* {
						font-size: 3.3rem;
						line-height: 1.1;
					}
					.mincho {
						display: block;
					}
					.blog_title {
						margin-left: 8rem;
					}
				}
				.list_wrap {
					width: 46vw;
					.news_list {
						li {
							padding: 1.6rem 0;
							&:first-of-type {
								padding-top: 0;
							}
							.info {
								font-size: 1.2rem;
								color: #818283;
								.dot {
									margin: 0 0.4rem;
									font-size: 1.2rem;
									color: #818283;
								}
							}
						}
					}
					.link_wrap {
						margin-top: 3.5rem;
						text-align: right;
					}
				}
			}
			@media only screen and (max-width: 980px) {
				padding: 6rem 6.4vw;
				.news_wrap {
					h2 {
						* {
							font-size: 2.4rem;
						}
						.mincho {
							display: inline-block;
						}
						.blog_title {
							margin-left: 0;
						}
					}
					.list_wrap {
						margin-top: 5.1rem;
						width: 100%;
						.news_list {
							li {
								padding: 1.6rem 0;
								&:first-of-type {
									padding-top: 0;
								}
								.info {
									font-size: 1.2rem;
									color: #818283;
									.dot {
										margin: 0 0.4rem;
										font-size: 1.2rem;
										color: #818283;
									}
								}
							}
						}
						.link_wrap {
							margin-top: 3rem;
							text-align: right;
						}
					}
				}
			}
		}


	}
</style>