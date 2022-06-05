<template>
	<main>

		<section id="mv" class="mv">
			<div class="desktop_contents">
				<h3>
					<span class="mincho">SHIOGAMA</span>
					<span class="mincho">MIYAGI</span>
					<span class="mincho">ABE MAMORU</span>
					<span class="mincho">SHOTEN</span>
				</h3>
				<ul class="mv_menu">
					<li>
						<NuxtLink class="mincho hover_red" :class="{'now': this.$route.name == 'products'}" to="/products" @click.native="linkClick">商品紹介</NuxtLink>
					</li>
					<li>
						<NuxtLink class="mincho hover_red" :class="{'now': this.$route.name == 'about'}" to="/about" @click.native="linkClick">私たちについて</NuxtLink>
					</li>
					<li>
						<NuxtLink class="mincho hover_red" :class="{'now': this.$route.name == 'secret'}" to="/about#reason" @click.native="linkClick">おいしさの理由</NuxtLink>
					</li>
					<li>
						<NuxtLink class="mincho hover_red" :class="{'now': this.$route.name == 'recipe'}" to="/recipe" @click.native="linkClick">おさかなレシピ</NuxtLink>
					</li>
				</ul>				
			</div>
			<div class="title_wrap">
				<h1 class="vertical_text_wrap">
					<span class="vertical_text">おさかなの</span>
					<span class="vertical_text">美味しいを</span>
					<span class="vertical_text">余すことなく。</span>
				</h1>
				<h2>
					<img alt="宮城塩竃おさかなの素" src="~/assets/img/home/title.svg">
				</h2>
			</div>
		</section>

		<section id="visual" class="visual">
			<div class="parallax_img ratio-fixed">
				<img src="~/assets/img/home/mv.jpg">
			</div>
		</section>

		<section id="concept" class="concept">
			<div class="title_wrap">
				<h2 class="vertical_text_wrap">
					<span class="mincho vertical_text">毎日の食卓の</span>
					<span class="mincho vertical_text">主役にも、</span>
					<span class="mincho vertical_text">脇役にも。</span>
				</h2>
			</div>
			<div class="sentence_wrap vertical_text_wrap flex flex-center">
				<p class="vertical_text_wrap">
					<span class="vertical_text">魚をもっと美味しく、</span>
					<span class="vertical_text">食べやすく。</span>
					<span class="vertical_text">そんな想いから生まれた、</span>
					<span class="vertical_text">「おさかなの素」。</span>
				</p>
				<p class="vertical_text_wrap">
					<span class="vertical_text">脂がのった新鮮な魚を</span>
					<span class="vertical_text">ふっくら柔らかく焼き上げて、</span>
					<span class="vertical_text">上品な味わいに。</span>
					<span class="vertical_text">手軽に食べられるように、</span>
					<span class="vertical_text">もうひと手間。</span>
					<span class="vertical_text">骨を取り、ほぐし身にして、</span>
					<span class="vertical_text">真空パックにしています。</span>
				</p>
				<p class="vertical_text_wrap">
					<span class="vertical_text">そのままで美味しいのはもちろん、</span>
					<span class="vertical_text">料理の具材としても大活躍。</span>
					<span class="vertical_text">食卓のメインを担う主役にも。</span>
					<span class="vertical_text">レシピの幅を広げる脇役にも。</span>
					<span class="vertical_text">毎日の食卓を美味しく彩ります。</span>
				</p>
				<p class="vertical_text_wrap">
					<span class="vertical_text">魚にまつわる食文化と</span>
					<span class="vertical_text">半世紀向き合ってきた</span>
					<span class="vertical_text">阿部守商店の自信作。</span>
				</p>
				<p class="vertical_text_wrap">
					<span class="vertical_text">魚の美味しさを</span>
					<span class="vertical_text">今まで以上に</span>
					<span class="vertical_text">楽しんでください。</span>
				</p>
			</div>
			<div class="link_wrap">
				<NuxtLink class="circle_arrow vertical_link vertical_link_large" to="/about">
					<span class="link_text">阿部守商店について</span><i></i>
				</NuxtLink>
			</div>
		</section>

		<section id="wave" class="wave">
			<div class="wave_wrap flex flex-start">
				<span class="wave_line"></span>
				<span class="wave_line"></span>
			</div>
			<div class="wave_wrap flex flex-start">
				<span class="wave_line"></span>
				<span class="wave_line"></span>
			</div>
			<div class="wave_wrap flex flex-start">
				<span class="wave_line"></span>
				<span class="wave_line"></span>
			</div>
		</section>

		<section id="lineup" class="lineup">
			<div class="lineup_wrap flex flex-start">
				<div class="title_wrap vertical_text_wrap">
					<h2 class="mincho vertical_text">商品一覧<span class="mini vertical_text">ギフト対応・のし入れいたします</span></h2>
				</div>
				<div class="list_wrap">
					<ul class="lineup_list">
						<li id="chazuke" class="flex" v-for="collection in collections">
							<div class="text_wrap">
								<h3 class="mincho">{{ collection.title }}</h3>
								<p class="description">{{ collection.description }}</p>
								<ul class="product_list">
									<li class="border_h line_gray" v-for="product in collection.products">
										<NuxtLink class="flex flex-start" :to="{ name: 'products-id', params: { id: product.handle } }">
											<div class="thumbnail_wrap">
												<div class="ratio-fixed">
													<img src="">
												</div>
											</div>
											<div class="detail_wrap">
												<span class="sub_title">おさかなの素 5種入り</span>
												<h4>{{ product.title }}</h4>
												<div class="price_wrap flex flex-start align-end">
													<h5>{{ Number(product.variants[0].price).toLocaleString() }}円</h5>
													<span class="tax">税込・送料無料</span>
												</div>
												<div class="circle_arrow border_link" to="/about">
													<span class="link_text">商品詳細</span><i></i>
												</div>
											</div>
										</NuxtLink>
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
									<li class="border_h line_gray">
										<NuxtLink class="flex flex-start" to="/products">
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
												<div class="circle_arrow border_link" to="/about">
													<span class="link_text">商品詳細</span><i></i>
												</div>
											</div>
										</NuxtLink>
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
									<li class="border_h line_gray">
										<NuxtLink class="flex flex-start" to="/products">
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
												<div class="circle_arrow border_link" to="/about">
													<span class="link_text">商品詳細</span><i></i>
												</div>
											</div>
										</NuxtLink>
									</li>
									<li class="border_h line_gray">
										<NuxtLink class="flex flex-start" to="/products">
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
												<div class="circle_arrow border_link" to="/about">
													<span class="link_text">商品詳細</span><i></i>
												</div>
											</div>
										</NuxtLink>
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
						<li class="border_h line_gray" v-for="recipe in recipes" :key="recipe[0].id">
							<NuxtLink class="flex" to="/recipe">
								<h3 class="mincho">{{ recipe[0].title }}</h3>
								<div class="text_wrap">
									<p class="description">{{ recipe[0].body_html.replace(/<([^>]+)>/g, '') }}</p>
									<span class="more underline">詳しく見る<i></i></span>
								</div>
								<div class="img_wrap">
									<div class="ratio-fixed">
										<img src="">
									</div>
								</div>
							</NuxtLink>
						</li>
					</ul>
					<div class="link_wrap">
						<NuxtLink class="circle_arrow vertical_link vertical_link_large" to="/recipe">
							<span class="link_text">レシピをもっと見る</span><i></i>
						</NuxtLink>
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
						<h3 class="mincho">漁師と魚屋の目で<br>世界中から魚を厳選</h3>
						<p class="description">地元の塩竈はもちろんのこと、世界中の海の魚を吟味。漁師と魚屋の経験をもとにした目利きで、自信を持っておすすめできる素材を厳選しています。</p>
					</div>
				</div>
				<div class="title_wrap vertical_text_wrap">
					<h2 class="mincho vertical_text">おいしさの理由</h2>
					<span class="sub_title vertical_text">こだわりの独自製法で<br>ふっくら柔らか仕上げ</span>
					<NuxtLink class="circle_arrow vertical vertical_text" to="/about#reason">詳しく見る<i></i></NuxtLink>
				</div>
				<div class="r_wrap parallax_wrap flex">
					<div class="text_wrap">
						<h3 class="mincho">絶妙な焼き加減で、<br>ふっくら柔らか</h3>
						<p class="description">魚を美味しく味わっていただくために、火加減や焼き時間などの焼き方にも徹底的にこだわりました。旨みを閉じ込め、ふっくら柔らかに仕上げています。</p>
					</div>
					<div id="kodawariImg" class="img_wrap">
						<div class="ratio-fixed">
							<img id="kodawari_1" src="~/assets/img/home/kodawari-1.jpg">
							<img id="kodawari_2" class="none" src="~/assets/img/home/kodawari-2.jpg">
							<img id="kodawari_3" class="none" src="~/assets/img/home/kodawari-3.jpg">
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
						<li class="border_h line_gray" v-for="article in news" :key="article[0].id">
							<NuxtLink class="" :to="{ name: 'news-id', params: { id: article[0].handle, article: article[0] } }">
								<p class="info">{{ $dateFns.format(article[0].published_at, 'yyyy.MM.dd') }}<span class="dot">・</span>{{ article[0].tags }}</p>
								<span class="title">{{ article[0].title }}</span>
							</NuxtLink>
						</li>
					</ul>
					<div class="link_wrap">
						<NuxtLink class="circle_arrow" to="/news">お知らせ・ブログ一覧<i></i></NuxtLink>
					</div>
				</div>
			</div>
		</section>

		<section id="footer" class="footer">
			<div class="parallax_img border_h">
				<img src="~/assets/img/home/footer.jpg">
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
	async asyncData({ $axios, $shopify, params }) {
		try {
			const collections = await $shopify.collection.fetchAllWithProducts()

			const config = {
				headers: {
					'X-Shopify-Access-Token': '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',
					'Content-Type': 'application/json'
				}
			}

			return Promise.all([
				$axios.get('https://abezuke.myshopify.com/admin/api/2022-04/blogs/87154065636/articles.json', config),
				$axios.get('https://abezuke.myshopify.com/admin/api/2022-04/blogs/82775212260/articles.json', config),
			])
			.then((res) => {
				const recipes = res[0].data
				const news = res[1].data
				return { collections, recipes, news }
			})
		} catch(error) {
			console.log(error)
		}
	},
	mounted() {
		if (window.innerWidth > 980) {
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

		const kodawariList = [
			'#kodawari_2',
			'#kodawari_3'
		]
		const startList = [
			55,
			20
		]
		kodawariList.forEach((kodawariImg, index) => {
			gsap.to(kodawariImg, {
				opacity: 1,
				scrollTrigger: {
					trigger: '#kodawariImg',
					start: 'top ' + String(startList[index]) + '%',
					end: 'top ' + String(startList[index] - 10) + '%',
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
			.desktop_contents {
				h3 {
					padding-top: 6rem;
					.mincho {
						display: block;
						font-size: 1.2rem;
						line-height: 1.5;
					}
				}
				.mv_menu {
					margin-top: 11rem;
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
			}
			h1 {
				position: absolute;
				top: 24rem;
				left: 39vw;
				padding-top: 0.4rem;
				line-height: 1.15;
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
				height: 96vh;
				.desktop_contents {
					display: none;
				}
				.title_wrap {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					display: flex;
					flex-wrap: wrap;
					margin: auto;
					width: 22vw;
					height: 81vw;
					h1 {
						position: relative;
						top: initial;
						left: 0;
						right: 0;
						margin: 0 auto;
						.vertical_text {

						}
					}
					h2 {
						position: relative;
						top: initial;
						left: 0;
						right: 0;
						display: block;
						margin: auto;
						width: 100%;
						order: -1;
						img {
							width: 22vw;
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
					margin-left: -0.6rem;
					.circle_arrow.vertical_link {
						padding-right: 3.3rem;
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
			margin: 0 auto 12rem;
			width: 80vw;
			overflow: hidden;
			.wave_wrap {
				flex-wrap: nowrap;
				width: 180vw;
				height: 7rem;
				opacity: 0.1;
				.wave_line {
					display: block;
					width: 87vw;
					height: 7rem;
					will-change: transform;
					background-image: url('~/assets/img/item/wave_large.svg');
					background-size: contain;
					background-repeat: repeat;
				}
				&:first-of-type {
					.wave_line {
						&:nth-of-type(odd) {
							animation: endless 16s linear -8s infinite forwards;
						}
						&:nth-of-type(even) {
							animation: endless_2 16s linear infinite forwards;
						}
					}
				}
				&:not(&:first-of-type) {
					margin-top: -2.5rem;
				}
				&:nth-of-type(2) {
					// margin-left: -7.5rem;
					opacity: 0.2;
					.wave_line {
						&:nth-of-type(odd) {
							animation: endless 12s linear -6s infinite forwards;
						}
						&:nth-of-type(even) {
							animation: endless_2 12s linear infinite forwards;
						}
					}
				}
				&:last-of-type {
					// margin-left: -15rem;
					opacity: 0.3;
					.wave_line {
						&:nth-of-type(odd) {
							animation: endless 18s linear -9s infinite forwards;
						}
						&:nth-of-type(even) {
							animation: endless_2 18s linear infinite forwards;
						}
					}
				}
				@keyframes endless {
					0% {
						transform: translateX(100%);
					}
					100% {
						transform: translateX(-100%);
					}
				}
				@keyframes endless_2 {
					0% {
						transform: translateX(0%);
					}
					100% {
						transform: translateX(-200%);
					}
				}
			}
			@media only screen and (max-width: 980px) {
				margin: 0 auto 6rem;
				width: 88vw;
				.wave_wrap {
					width: 300vw;
					height: 5.1rem;
					.wave_line {
						width: 150vw;
						height: 5.1rem;
						background-image: url('~/assets/img/item/wave_mini.svg');
					}
				}
			}
		}

		.lineup {
			.lineup_wrap {
				position: relative;
				flex-direction: row-reverse;
				.title_wrap {
					position: sticky;
					top: 7rem;
					right: 0;
					width: 15vw;
					height: 87vh;
					h2 {
						margin-top: 6rem;
					}
					@media only screen and (max-width: 980px) {
						top: 10.8rem;
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
										&:after {
											content: none;
										}
										a {
											padding: 2.4rem 0;
											.thumbnail_wrap {
												width: 33%;
												.ratio-fixed {
													padding-top: 100%;
												}
											}
											.detail_wrap {
												margin-left: 2.4rem;
												padding-top: 0.4rem;
												.sub_title {
													display: block;
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
													display: inline-block;
													margin-top: 1.2rem;
													.link_text {
														font-size: 1.2rem;
														line-height: 1;
													}
												}
											}
											&:hover {
												
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
											a {
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
							&:before {
								content: none;
							}
							a {
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
									.more {
										display: inline-block;
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
								&:hover {
									background-color: rgba(0, 0, 0, 0.05);
									.text_wrap {
										.more {
											color: #AA0813;
										}
									}
									.img_wrap {
										.ratio-fixed {
											img {
												transform: scale(1.1);
											}
										}
									}
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
								a {
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
										.more {
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
						}
						.link_wrap {
							margin-top: 3rem;
							.circle_arrow {
								padding-right: 3.3rem;
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
							padding-top: 2.4rem;
							line-height: 1.12;
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
						.ratio-fixed {
							.none {
								opacity: 0;
							}
						}
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
							&:before {
								content: none;
							}
							a {
								display: block;
								padding: 1.6rem 0;
								.info {
									font-size: 1.2rem;
									color: #818283;
									.dot {
										margin: 0 0.4rem;
										font-size: 1.2rem;
										color: #818283;
									}
								}
								&:hover {
									background-color: rgba(0, 0, 0, 0.05);
									*, .dot {
										color: #AA0813;
									}
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
								a {
									padding: 1.6rem 0;
									.info {
										font-size: 1.1rem;
										color: #818283;
										.dot {
											font-size: 1.1rem;
										}
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