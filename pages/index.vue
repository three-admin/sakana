<template>
	<main ref="index">

		<section id="mv" class="mv">
			<div class="desktop_contents">
				<h3>
					<span class="mincho">SHIOGAMA</span>
					<span class="mincho">MIYAGI</span>
					<span class="mincho">ABE MAMORU</span>
					<span class="mincho">SHOUTEN</span>
				</h3>
				<ul class="mv_menu">
					<li>
						<NuxtLink class="mincho hover_red" to="/products">商品紹介</NuxtLink>
					</li>
					<li>
						<NuxtLink class="mincho hover_red" to="/about">私たちについて</NuxtLink>
					</li>
					<li>
						<NuxtLink class="mincho hover_red" to="/recipe">おさかなレシピ</NuxtLink>
					</li>
					<li>
						<NuxtLink class="mincho hover_red" to="/news">お知らせ<span class="dot mincho">・</span>ブログ</NuxtLink>
					</li>
				</ul>				
			</div>
			<div class="title_wrap">
				<h1 class="vertical_text_wrap">
					<span class="vertical_text">おさかなの</span>
					<span class="vertical_text">美味しさを</span>
					<span class="vertical_text">余すことなく。</span>
				</h1>
				<h2>
					<img width="100%" height="100%" alt="宮城塩竃おさかなの素" src="~/assets/img/home/title.svg" loading="lazy">
				</h2>
			</div>
		</section>

		<div class="fish" ref="fish">
			<img width="100%" height="100%" id="mackerel" class="mackerel" alt="さば" src="~/assets/img/home/mackerel.svg">
			<img width="100%" height="100%" id="atka" class="atka" alt="ほっけ" src="~/assets/img/home/atka.svg">
			<img width="100%" height="100%" id="sockeye" class="sockeye" alt="紅鮭" src="~/assets/img/home/sockeye.svg">
			<img width="100%" height="100%" id="sablefish" class="sablefish" alt="銀たら" src="~/assets/img/home/sablefish.svg">
			<img width="100%" height="100%" id="king" class="king" alt="キングサーモン" src="~/assets/img/home/king.svg">
		</div>

		<section id="visual" ref="visual" class="visual border_h line_white">
			<div class="parallax_img ratio-fixed">
				<img width="100%" height="100%" class="" alt="メインビジュアル画像" src="~/assets/img/home/mv.jpg">
			</div>
		</section>

		<section id="concept" class="concept">
			<div class="title_wrap border_h">
				<h2 class="vertical_text_wrap border_v">
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
						<li :id="collection.handle" class="flex" v-for="collection in collections">
							<div class="text_wrap">
								<h3 class="mincho">{{ collection.title }}</h3>
								<p class="description">{{ collection.description }}</p>
								<ul class="product_list" v-if="collection.products.nodes[0]">
									<li class="border_h line_gray" v-for="product in collection.products.nodes">
										<NuxtLink class="flex flex-start" :to="{ name: 'products-id', params: { id: product.handle } }">
											<div class="thumbnail_wrap">
												<div class="ratio-fixed">
													<img width="100%" height="100%" :alt="product.featuredImage.altText" :src="product.featuredImage.url" loading="lazy">
												</div>
											</div>
											<div class="detail_wrap flex align-center">
												<div class="wrap">
													<h4>{{ product.title }}</h4>
													<div class="variant_wrap flex flex-start">
														<h5 v-for="variant in product.variants.nodes">{{ variant.title }} {{ variant.price }}円</h5>
													</div>
													<div class="circle_arrow border_link">
														<span class="link_text">商品詳細</span><i></i>
													</div>
												</div>
											</div>
										</NuxtLink>
									</li>
								</ul>
							</div>
							<div class="img_wrap">
								<div class="ratio-fixed">
									<img width="100%" height="100%" :alt="collection.image.altText" :src="collection.image.url" loading="lazy">
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
						<li class="border_h line_gray" v-for="recipe in recipes" :key="recipe.id">
							<NuxtLink class="flex" :to="'/recipe#recipe-' + recipe.handle">
								<h3 class="mincho">{{ recipe.title }}</h3>
								<div class="text_wrap">
									<p class="description">{{ recipe.content }}</p>
									<span class="more underline">詳しく見る<i></i></span>
								</div>
								<div class="img_wrap">
									<div class="ratio-fixed">
										<img width="100%" height="100%" :alt="recipe.image.altText" :src="recipe.image.url" loading="lazy">
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
					<div class="img_wrap border_h">
						<div class="ratio-fixed border_v">
							<img width="100%" height="100%" alt="世界中から魚を厳選" src="~/assets/img/home/fish.jpg" loading="lazy">
						</div>
					</div>
					<div class="text_wrap">
						<h3 class="mincho">漁師と魚屋の目で<br>世界中から魚を厳選</h3>
						<p class="description">地元の塩竈はもちろんのこと、世界中の海の魚を吟味。漁師と魚屋の経験をもとにした目利きで、自信を持っておすすめできる素材を厳選しています。</p>
					</div>
				</div>
				<div class="title_wrap vertical_text_wrap">
					<h2 class="mincho vertical_text">美味しさの理由</h2>
					<span class="sub_title vertical_text border_v line_gray">こだわりの独自製法で<br>ふっくら柔らか仕上げ</span>
					<NuxtLink class="circle_arrow vertical vertical_text" to="/about#reason">詳しく見る<i></i></NuxtLink>
				</div>
				<div class="r_wrap parallax_wrap flex">
					<div class="text_wrap">
						<h3 class="mincho">絶妙な焼き加減で、<br>ふっくら柔らか</h3>
						<p class="description">魚を美味しく味わっていただくために、火加減や焼き時間などの焼き方にも徹底的にこだわりました。旨みを閉じ込め、ふっくら柔らかに仕上げています。</p>
					</div>
					<div id="kodawariImg" class="img_wrap border_h">
						<div class="ratio-fixed border_v">
							<img width="100%" height="100%" id="kodawari_1" alt="しゃもじでご飯を - 1" src="~/assets/img/home/kodawari-1.jpg" loading="lazy">
							<img width="100%" height="100%" id="kodawari_2" alt="しゃもじでご飯を - 2" class="none" src="~/assets/img/home/kodawari-2.jpg" loading="lazy">
							<img width="100%" height="100%" id="kodawari_3" alt="しゃもじでご飯を - 3" class="none" src="~/assets/img/home/kodawari-3.jpg" loading="lazy">
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
						<li class="border_h line_gray" v-for="article in news" :key="article.id">
							<NuxtLink class="" :to="{ name: 'news-id', params: { id: article.handle, article: article } }">
								<p class="info">{{ $dateFns.format(article.publishedAt, 'yyyy.MM.dd') }}<span class="dot">・</span><span class="dot" v-for="tag in article.tags">{{ tag }}</span></p>
								<span class="title">{{ article.title }}</span>
							</NuxtLink>
						</li>
					</ul>
					<div class="link_wrap">
						<NuxtLink class="circle_arrow" to="/news">お知らせ・ブログ一覧<i></i></NuxtLink>
					</div>
				</div>
			</div>
		</section>

		<section id="footer_visual" class="footer_visual">
			<div class="ratio-fixed parallax_img border_h">
				<img width="100%" height="100%" alt="フッタービジュアル画像" src="~/assets/img/home/footer.jpg" loading="lazy">
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
	async asyncData({ params }) {
		try {

			return Promise.all([
				axios.post(
					'https://abezuke.myshopify.com/api/2022-04/graphql.json',
					{
						query: 
							`query {     
								collections(first: 2) {
									nodes {
										id
										title
										handle
										description
										image {
											url
											altText
										}
										products(first: 5) {
											nodes {
												id
												title
												handle
												featuredImage {
													url
													altText
												}
												variants(first: 5) {
													nodes {
														id
														title
														price
													}
												}
												sub_title: metafield(namespace: "my_fields" key: "sub_title") {
													value
												}
											}
										}
									}
								}
								recipe: blog(handle: "recipe") {
									articles(first: 4) {
										nodes {
											id
											title
											handle
											image {
												url
												altText
											}
											content
										}
									}
								}
								news: blog(handle: "news") {
									articles(first: 4 sortKey: PUBLISHED_AT reverse: true) {
										nodes {
											id
											title
											handle
											publishedAt
											tags
											image {
												src
												altText
											}
											content
											contentHtml
										}
									}
								}
							}`
					},
					{
						headers: {
							'X-Shopify-Storefront-Access-Token': 'c124498210fb26c72f01ce7e67b05c3d',
							'Content-Type': 'application/json'
						}
					}
				),
			])
			.then((res) => {
				const data = res[0].data.data
				const collections = data.collections.nodes
				const recipes = data.recipe.articles.nodes
				const news = data.news.articles.nodes
				return { collections, recipes, news }
			})
		} catch(error) {
			console.log(error)
		}
	},
	beforeCreate() {
		if (process.client) {
			if (!sessionStorage.getItem('LoadingAnimation')) {
				document.documentElement.classList.add('loading_animation')
			}
		}
	},
	mounted() {

		if (!sessionStorage.getItem('LoadingAnimation')) {

			const documentClass = document.documentElement.classList
			if (!documentClass.contains('contains')) {
				documentClass.add('loading_animation')
			}

			const index = this.$refs.index
			const visual = this.$refs.visual
			const fish = this.$refs.fish

			index.classList.add('loading')
			setTimeout(() => {
				visual.classList.add('loading')
				setTimeout(() => {
					index.classList.remove('loading')
					visual.classList.add('loaded')
					visual.classList.remove('loading')
					fish.classList.add('loading')
					setTimeout(() => {
						visual.classList.remove('loaded')
						fish.classList.remove('loading')

						setTimeout(() => {

							documentClass.remove('loading_animation')
							this.gsapSetting()

						}, 100)
					}, 1600)
				}, 1600)
			}, 100)

			sessionStorage.setItem('LoadingAnimation', true)

		} else {

			this.gsapSetting()

		}

		if ( 980 < window.innerWidth ) {

			const productList = [
				'#chazuke',
				'#takikomi',
				// '#various'
			]
			const itemList = [
				'#chazuke .img_wrap',
				'#takikomi .img_wrap',
				// '#various .img_wrap'
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
				// '#various .img_wrap img'
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

		gsap.to('#footer_visual .parallax_img img', {
			y: '5%',
			scrollTrigger: {
				trigger: '#footer_visual',
				start: 'top bottom',
				scrub: true
			}
		})

	},
	methods: {
		gsapSetting: function() {

			if (window.innerWidth < 980) {

				gsap.to('#mackerel', {
					y: '-24%',
					scrollTrigger: {
						id: 'mackerelSmart',
						trigger: '#mv',
						start: 'top top',
						endTrigger: '#concept',
						end: 'top bottom',
						scrub: true
					}
				})

				gsap.to('#atka', {
					y: '-70%',
					scrollTrigger: {
						id: 'atkaSmart',
						trigger: '#mv',
						start: 'top top',
						endTrigger: '#concept',
						end: 'top bottom',
						scrub: true
					}
				})

				gsap.to('#sockeye', {
					y: '-50%',
					scrollTrigger: {
						id: 'sockeyeSmart',
						trigger: '#mv',
						start: 'top top',
						endTrigger: '#concept',
						end: 'top bottom',
						scrub: true
					}
				})

				gsap.to('#sablefish', {
					y: '-35%',
					scrollTrigger: {
						id: 'sablefishSmart',
						trigger: '#mv',
						start: 'top top',
						endTrigger: '#concept',
						end: 'top bottom',
						scrub: true
					}
				})

				gsap.to('#king', {
					y: '-60%',
					scrollTrigger: {
						id: 'kingSmart',
						trigger: '#mv',
						start: 'top top',
						endTrigger: '#concept',
						end: 'top top',
						scrub: true
					}
				})

			} else {

				gsap.to('#mackerel', {
					y: '-70%',
					scrollTrigger: {
						id: 'mackerelDesktop',
						trigger: '#mv',
						start: 'top top',
						endTrigger: '#concept',
						end: 'top bottom',
						scrub: true
					}
				})

				gsap.to('#atka', {
					y: '-40%',
					scrollTrigger: {
						id: 'atkaDesktop',
						trigger: '#mv',
						start: 'top top',
						endTrigger: '#concept',
						end: 'top bottom',
						scrub: true
					}
				})

				gsap.to('#sockeye', {
					y: '-20%',
					scrollTrigger: {
						id: 'sockeyeDesktop',
						trigger: '#mv',
						start: 'top top',
						endTrigger: '#concept',
						end: 'top bottom',
						scrub: true
					}
				})

				gsap.to('#sablefish', {
					y: '-30%',
					scrollTrigger: {
						id: 'sablefishDesktop',
						trigger: '#mv',
						start: 'top top',
						endTrigger: '#concept',
						end: 'top bottom',
						scrub: true
					}
				})

				gsap.to('#king', {
					y: '-60%',
					scrollTrigger: {
						id: 'kingDesktop',
						trigger: '#mv',
						start: 'top top',
						endTrigger: '#concept',
						end: 'top top',
						scrub: true
					}
				})

			}

			gsap.to('#visual .parallax_img img', {
				y: '5%',
				scrollTrigger: {
					id: 'topVisual',
					trigger: '#visual',
					start: 'top 70%',
					scrub: true
				}
			})

		}
	}
}
</script>

<style lang="scss" scoped>
	main {

		&.loading {
			&:before {
				content: '';
				position: fixed;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				// display: block;
				// width: 100%;
				// height: 100%;
				background-color: #000000;
				z-index: 60;
				will-change: contents;
				animation: blackShadow 1.6s cubic-bezier(0.24, 0, 0, 1) forwards;
				@keyframes blackShadow {
					100% {
						background-color: transparent;
					}
				}
			}
			.mv {
				transform: translate3d(0, -10vh, 0);
			}
			.fish {
				// transform: translate3d(0, 10vh, 0);
				img {
					transform: translate3d(0, 5vh, 0);
					opacity: 0;
				}
			}
			.visual {
				transform: translate3d(0, -87vh, 0);
				transition: none;
				z-index: 50;
				.parallax_img {
					padding-top: 100vh;
					transition: none;
					z-index: 10;
					img {
						transform: scale(1.1) rotate(-5deg);
						transition: none;
					}
				}
				@media only screen and (max-width: 980px) {
					// transform: translate3d(0, -96vh, 0);
					transform: translate3d(0, -100vh, 0);
					.parallax_img {
						img {
							transform: scale(1.2) rotate(-5deg);
						}
					}
				}
			}
		}

		.title_wrap {
			h2, h2 * {
				font-size: 3.3rem;
				line-height: 1.05;
				&.vertical_text {
					width: calc(3.3rem * 1.05);
				}
				.mini {
					margin-top: 2.4rem;
					font-size: 1.3rem;
					line-height: 1.12;
					letter-spacing: 0.12em;
				}
				@media only screen and (max-width: 980px) {
					font-size: 2.4rem;
					&.vertical_text {
						width: calc(2.4rem * 1.05);
					}
					.mini {
						margin-top: 2rem;
						font-size: 1.2rem;
						line-height: 1.15;
					}
				}
			}
		}

		.mv {
			position: relative;
			padding: 0 4.2vw 0 16vw;
			height: 87vh;
			z-index: 10;
			will-change: transform;
			transition: transform 1.5s cubic-bezier(.39,0,0,.9);
			.desktop_contents {
				h3 {
					padding-top: 6rem;
					.mincho {
						display: block;
						font-size: 1.3rem;
						line-height: 1.5;
					}
				}
				.mv_menu {
					margin-top: 11rem;
					li {
						margin-bottom: 1.7rem;
						padding: 0 0.1rem;
						a {
							font-size: 2.5rem;
							line-height: 1.35;
							.dot {
								display: inline-block;
								margin: 0 0.2rem;
								font-size: 2.5rem;
								line-height: 1.35;
								transform: scale(1);
							}
						}
						&:last-of-type {
							margin-right: 0;
						}
					}
				}
			}
			.title_wrap {
				h1 {
					position: absolute;
					top: 24rem;
					left: 39vw;
					padding-top: 0.4rem;
					line-height: 1.15;
					z-index: 8;
					.vertical_text {
						letter-spacing: 0.12em;
					}
				}
				h2 {
					position: absolute;
					top: 6rem;
					right: 4.2vw;
					background-image: url('~/assets/img/item/bg_gray.svg');
					background-repeat: repeat;
					img {
						width: 12vw;
					}
				}
			}
			@media only screen and (max-width: 980px) {
				padding: 0;
				// height: 96vh;
				height: 100vh;
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
					display: -webkit-flex;
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

		.fish {
			position: absolute;
			top: 0;
			width: 100vw;
			height: calc(87vh + 49.6vw);
			overflow-x: hidden;
			z-index: 1;
			// will-change: transform;
			// transform: translate3d(0, 8vh, 0);
			// transition: all 1.5s ease-in-out;
			img {
				position: absolute;
				width: 16vw;
				z-index: 5;
				will-change: contents;
			}
			.mackerel {
				top: 39rem;
				left: -1rem;
			}
			.atka {
				top: 46rem;
				right: -1rem;
			}
			.sockeye {
				top: 49rem;
				left: 37vw;
			}
			.sablefish {
				top: -1rem;
				right: 24vw;
			}
			.king {
				top: 96rem;
				left: 11vw;
			}
			&.loading {
				z-index: 60;
				img {
					transition: all 0.8s 0.6s cubic-bezier(.39,0,0,.9);
				}
				.mackerel {
					transition-delay: 0.7s;
				}
				.atka {
					transition-delay: 0.8s;
				}
				.sockeye {
					transition-delay: 0.9s;
				}
				.sablefish,
				.king {
					
				}
			}
			@media only screen and (max-width: 980px) {
				height: calc(96vh + 133vw);
				img {
					width: 33vw;
				}
				.mackerel {
					top: 21rem;
					left: -2rem;
				}
				.atka {
					top: 30rem;
					right: -1rem;
				}
				.sockeye {
					top: 55rem;
					left: 30vw;
				}
				.sablefish {
					top: -2rem;
					right: 20vw;
				}
				.king {
					top: 88rem;
					left: 1rem;
				}
				&.loading {
					z-index: 1;
				}
			}
		}

		.visual {
			position: relative;
			will-change: transform;
			z-index: 0;
			.parallax_img {
				padding-top: 49.6vw;
				padding-top: 100vh;
				will-change: padding;
				img {
					transform: translate3d(0, -10%, 0);
					will-change: transform;
				}
				@media only screen and (max-width: 980px) {
					padding-top: 150vw;
					img {
						height: 100%;
					}
				}
			}
			&.loading {
				transition: none;
				// z-index: 150;
				.parallax_img {
					transition: none;
					img {
						transform: scale(1) rotate(0deg);
						transition: transform 0.8s cubic-bezier(0.24, 0, 0, 1);
					}
				}
			}
			&.loaded {
				transition: transform 1.5s cubic-bezier(.39,0,0,.9);
				z-index: 50;
				.parallax_img {
					transition: padding 0.5s 1s ease-out;
					z-index: 10;
					img {
						transition: transform 0.8s 0.5s ease-out;
					}
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
				z-index: 5;
				&:before {
					top: -1px;
					background-image: url('~/assets/img/home/line_white.svg');
				}
				&:after {
					content: none;
				}
				.vertical_text_wrap {
					padding: 1rem 1.5rem;
					background-color: #f2f2f2;
					overflow: initial;
					&:before,
					&:after {
						background-image: url('~/assets/img/home/line_white.svg');
					}
					&:before {
						left: 0;
					}
					&:after {
						right: 0;
					}
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
					.vertical_text {
						width: calc(1.6rem * 1.15);
					}
					&:last-of-type {
						margin-left: 0;
					}
				}
			}
			.link_wrap {
				margin-top: 6rem;
				margin-left: 20vw;
				.circle_arrow.vertical_link {
					i {
						width: 2.5rem;
						height: 2.5rem;
						&:before,
						&:after {
							background-image: url('~/assets/img/home/arrow_red.svg');
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
						padding: 0.8rem 1rem;
						.vertical_text {
							margin-left: 1.3rem;
							.vertical_text {
								width: calc(1.3rem * 1.15);
							}
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
							margin-bottom: 1.3rem;
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
					.circle_arrow.vertical_link {
						padding-right: 3.3rem;
						font-size: 1.3rem;
						i {
							width: 2.2rem;
							height: 2.2rem;
							&:before,
							&:after {
								background-image: url('~/assets/img/home/arrow_red_24.svg');
							}
						}
					}
				}
			}
		}

		.wave {
			margin: 0 auto 12rem;
			width: 80vw;
			overflow-x: hidden;
			.wave_wrap {
				flex-wrap: nowrap;
				margin-top: -2.5rem;
				width: 180vw;
				height: 7rem;
				// opacity: 0.1;
				filter: opacity(10%);
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
					margin-top: 0;
					.wave_line {
						&:nth-of-type(odd) {
							animation: endless 42s linear -21s infinite forwards;
						}
						&:nth-of-type(even) {
							animation: endless_2 42s linear infinite forwards;
						}
					}
				}
				&:nth-of-type(2) {
					// margin-left: -7.5rem;
					// opacity: 0.2;
					filter: opacity(20%);
					.wave_line {
						&:nth-of-type(odd) {
							animation: endless_re 30s linear -15s infinite forwards;
						}
						&:nth-of-type(even) {
							animation: endless_2_re 30s linear infinite forwards;
						}
					}
				}
				&:last-of-type {
					// margin-left: -15rem;
					// opacity: 0.3;
					filter: opacity(30%);
					.wave_line {
						&:nth-of-type(odd) {
							animation: endless 22s linear -11s infinite forwards;
						}
						&:nth-of-type(even) {
							animation: endless_2 22s linear infinite forwards;
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
				@keyframes endless_re {
					0% {
						transform: translateX(-100%);
					}
					100% {
						transform: translateX(100%);
					}
				}
				@keyframes endless_2_re {
					0% {
						transform: translateX(-200%);
					}
					100% {
						transform: translateX(0%);
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
									font-size: 1.3rem;
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
												width: calc(66% - 2.4rem);
												.wrap {
													width: 100%;
													h4 {
														margin-top: 0.2rem;
														font-size: 1.8rem;
														line-height: 1.5;
													}
													.variant_wrap {
														margin-top: 0.2rem;
														width: 100%;
														h5 {
															font-size: 1.1rem;
															line-height: 1.5;
															color: #696A6B;
															&:nth-of-type(even) {
																&:before {
																	content: '・';
																}
															}
														}
													}
												}
												.circle_arrow {
													display: inline-block;
													margin-top: 1.3rem;
													.link_text {
														font-size: 1.3rem;
														line-height: 1.5rem;
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
										width: 125%;
										height: 125%;
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
										font-size: 1.2rem;
									}
									.product_list {
										margin-top: 2rem;
										li {
											a {
												padding: 2rem 0;
												.detail_wrap {
													margin-left: 1.3rem;
													padding-top: 0;
													width: calc(66% - 1.3rem);
													.wrap {
														h4 {
															font-size: 1.6rem;
														}
														.variant_wrap {
															h5 {
																font-size: 1rem;
															}
														}
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
				margin-top: 8rem;
			}
			.recipe_wrap {
				justify-content: flex-end;
				margin-left: 16vw;
				.title_wrap {
					padding-top: 1.6rem;
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
										font-size: 1.3rem;
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
										padding-top: 69.9%;
										img {
											transition: transform 0.4s ease-in-out;
										}
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
								width: 2.6rem;
								height: 2.6rem;
								&:before,
								&:after {
									background-image: url('~/assets/img/home/arrow_red.svg');
								}
							}
						}
					}
				}
				@media only screen and (max-width: 980px) {
					margin: auto;
					padding: 0 6.4vw;
					.title_wrap {
						position: sticky;
						top: 3rem;
						left: 0;
						width: 12vw;
						height: fit-content;
						
					}
					.list_wrap {
						margin-left: auto;
						padding-top: 2rem;
						width: 70vw;
						.recipe_list {
							li {
								margin-bottom: 2.4rem;
								&:last-of-type {
									margin-bottom: 0;
								}
								a {
									h3 {
										margin-top: 1.7rem;
										width: 100%;
										font-size: 2rem;
										line-height: 1.5;
									}
									.text_wrap {
										margin-top: 1.3rem;
										width: 100%;
										.description {
											font-size: 1.2rem;
											line-clamp: 3;
											-webkit-line-clamp: 3;
										}
										.more {
											margin-top: 2rem;
											font-size: 1.2rem;
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
									width: 2.2rem;
									height: 2.2rem;
									&:before,
									&:after {
										background-image: url('~/assets/img/home/arrow_red_24.svg');
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
							font-size: 1.3rem;
						}
						&.sub_title {
							padding: 2.4rem 0.4rem 0;
							line-height: 1.8rem;
							letter-spacing: 0.12em;
							&:before,
							&:after {
								content: none;
							}
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
							font-size: 2.2rem;
							line-height: 1.5;
						}
						.description {
							margin-top: 1.3rem;
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
								font-size: 1.2rem;
							}
							&.sub_title {
								margin: 0.4rem 2.4rem;
								padding: 0 2.4rem;
								&:before,
								&:after {
									content: '';
									width: 3.5rem;
								}
							}
							&.circle_arrow {
								margin: 0.6rem auto;
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
								font-size: 1.3rem;
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
								.info,
								.info * {
									font-size: 1.3rem;
									color: #818283;
									
								}
								.dot {
									margin: 0 0.4rem;
								}
								&:hover {
									background-color: rgba(0, 0, 0, 0.05);
									* {
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
									.info,
									.info * {
										font-size: 1.2rem;
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

		.footer_visual {
			.ratio-fixed {
				padding-top: 35%;
				img {
					height: 150%;
				}
				@media only screen and (max-width: 980px) {
					padding-top: 55%;
				}
			}
		}


	}
</style>