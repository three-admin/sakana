<template>
	<main>

		<section id="mv" class="mv">
			<div class="title_wrap">
				<span class="sub_title">おさかなのプロが考えた</span>
				<h1 class="mincho">おさかなレシピ</h1>
			</div>
			<ul class="mv_menu flex flex-center">
				<li>
					<button class="circle_arrow vertical flex" v-scroll-to="{ el: '#recipe-ochazuke', offset: -60 }">
						<span class="mincho vertical_text">{{ ochazuke.title }}</span>
						<i></i>
					</button>
				</li>
				<li>
					<button class="circle_arrow vertical flex" v-scroll-to="{ el: '#recipe-takikomi', offset: -60 }">
						<span class="mincho vertical_text">{{ takikomi.title }}</span>
						<i></i>
					</button>
				</li>
				<li v-for="recipe in recipes" :key="recipe.id">
					<button class="circle_arrow vertical flex" v-scroll-to="{ el: '#recipe-' + recipe.handle, offset: -60 }">
						<span class="mincho vertical_text">{{ recipe.title }}</span>
						<i></i>
					</button>
				</li>
			</ul>
		</section>

		<div id="to_top" ref="toTop" class="to_top border_h">
			<button class="circle_arrow vertical flex border_v" v-scroll-to="{ el: '#mv' }">
				<i></i>
				<span class="mincho vertical_text">ページトップへ</span>
			</button>
		</div>

		<section id="recipe" class="recipe">
			<ul class="recipe_list">
				<li id="recipe-ochazuke" class="recipe_item border_h">
					<div class="title_wrap flex align-center">
						<div class="img_wrap border_h" v-if="ochazuke.image">
							<div class="ratio-fixed border_v">
								<img :src="ochazuke.image.url">
							</div>
						</div>
						<div class="text_wrap">
							<h2 class="mincho">{{ ochazuke.title }}</h2>
							<p class="description">{{ ochazuke.content }}</p>
						</div>
					</div>
					<div class="ingredients_wrap border_h line_1">
						<div class="border_v line_1">
							<h3 class="">材料（{{ JSON.parse(ochazuke.recipe_json.value).ingredient_title }}）</h3>
							<ul class="ingredients_list">
								<li class="flex align-center" v-for="ingredient in jsonList(ochazuke, 'ingredients')">
									<span class="ingredient">{{ ingredient.title }}</span>
									<span class="line"></span>
									<span class="amount">{{ ingredient.value }}</span>
								</li>
							</ul>
						</div>
					</div>
					<div class="howto_wrap">
						<h3 class="">{{ ochazuke.title }}の作り方</h3>
						<ul class="step_list">
							<li v-for="sentence in jsonList(ochazuke, 'howto')">
								<p class="description">{{ sentence }}</p>
							</li>
						</ul>
					</div>
				</li>
				<li id="recipe-takikomi" class="recipe_item border_h">
					<div class="title_wrap flex align-center">
						<div class="img_wrap border_h" v-if="takikomi.image">
							<div class="ratio-fixed border_v">
								<img :src="takikomi.image.url">
							</div>
						</div>
						<div class="text_wrap">
							<h2 class="mincho">{{ takikomi.title }}</h2>
							<p class="description">{{ takikomi.content }}</p>
						</div>
					</div>
					<div class="ingredients_wrap border_h line_1">
						<div class="border_v line_1">
							<h3 class="">材料（{{ JSON.parse(takikomi.recipe_json.value).ingredient_title }}）</h3>
							<ul class="ingredients_list">
								<li class="flex align-center" v-for="ingredient in jsonList(takikomi, 'ingredients')">
									<span class="ingredient">{{ ingredient.title }}</span>
									<span class="line"></span>
									<span class="amount">{{ ingredient.value }}</span>
								</li>
							</ul>
						</div>
					</div>
					<div class="howto_wrap">
						<h3 class="">{{ takikomi.title }}の作り方</h3>
						<ul class="step_list">
							<li v-for="sentence in jsonList(takikomi, 'howto')">
								<p class="description">{{ sentence }}</p>
							</li>
						</ul>
					</div>
				</li>
				<li :id="'recipe-' + recipe.handle" class="recipe_item border_h" v-for="recipe in recipes" :key="recipe.id">
					<div class="title_wrap flex align-center">
						<div class="img_wrap border_h" v-if="recipe.image">
							<div class="ratio-fixed border_v">
								<img :src="recipe.image.url">
							</div>
						</div>
						<div class="text_wrap">
							<h2 class="mincho">{{ recipe.title }}</h2>
							<p class="description">{{ recipe.content }}</p>
						</div>
					</div>
					<div class="ingredients_wrap border_h line_1">
						<div class="border_v line_1">
							<h3 class="">材料（{{ JSON.parse(recipe.recipe_json.value).ingredient_title }}）</h3>
							<ul class="ingredients_list">
								<li class="flex align-center" v-for="ingredient in jsonList(recipe, 'ingredients')">
									<span class="ingredient">{{ ingredient.title }}</span>
									<span class="line"></span>
									<span class="amount">{{ ingredient.value }}</span>
								</li>
							</ul>
						</div>
					</div>
					<div class="howto_wrap">
						<h3 class="">{{ recipe.title }}の作り方</h3>
						<ul class="step_list">
							<li v-for="sentence in jsonList(recipe, 'howto')">
								<p class="description">{{ sentence }}</p>
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
	name: 'RecipePage',
	async asyncData({ params }) {
		try {
			return Promise.all([
				axios.post(
					'https://abezuke.myshopify.com/api/2022-04/graphql.json',
					{
						query: 
							`query {     
								recipe: blog(handle: "recipe") {
									articles(first: 100, query: "(tag_not:お茶漬けレシピ) AND (tag_not:炊き込みレシピ)") {
										nodes {
											id
											title
											handle
											image {
												url
											}
											content
											recipe_json: metafield(namespace: "my_fields" key: "recipe_json") {
												value
											}
										}
									}
								}
								ochazuke: articles(first: 1, query: "tag:お茶漬けレシピ") {
									nodes {
										id
										title
										handle
										image {
											url
										}
										content
										recipe_json: metafield(namespace: "my_fields" key: "recipe_json") {
											value
										}
									}
								}
								takikomi: articles(first: 1, query: "tag:炊き込みレシピ") {
									nodes {
										id
										title
										handle
										image {
											url
										}
										content
										recipe_json: metafield(namespace: "my_fields" key: "recipe_json") {
											value
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
				const recipes = res[0].data.data.recipe.articles.nodes
				const ochazuke = res[0].data.data.ochazuke.nodes[0]
				const takikomi = res[0].data.data.takikomi.nodes[0]
				console.log(res[0].data.data)
				return { recipes, ochazuke, takikomi }
			})
		} catch(error) {
			console.log(error)
		}
	},
	head() {
		return {
			title: 'おさかなレシピ - 阿部守商店',
			meta: [
				{ hid: 'og:title', property: 'og:title', content: 'おさかなレシピ - 阿部守商店' },
				{ hid: 'og:url', property: 'og:url', content: 'https://abemamoru-shouten.com/recipe/' },
			],
		}
	},
	mounted() {
		const toTop = this.$refs.toTop
		gsap.to('#to_top', {
			scrollTrigger: {
				id: 'recipeToTop',
				trigger: '#mv',
				start: 'bottom center',
				endTrigger: 'main',
				end: 'bottom bottom',
				scrub: true,
				onEnter: () => {
					toTop.classList.add('fix')
				},
				onEnterBack: () => {
					toTop.classList.add('fix')
				},
				onLeave: () => {
					toTop.classList.remove('fix')
				},
				onLeaveBack: () => {
					toTop.classList.remove('fix')
				},
			}
		})
	},
	methods: {
		jsonList: function(recipe, target) {
			const value = JSON.parse(recipe.recipe_json.value)
			if (target == 'ingredients') {
				return value.ingredients
			} else if (target == 'howto') {
				return value.howto
			}
		}
	}
}
</script>

<style lang="scss" scoped>
	main {

		position: relative;

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
					margin-top: 1.7rem;
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
							padding: 0 0.2rem 1.3rem;
							font-size: 1.5rem;
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
						font-size: 1.2rem;
					}
					h1 {
						margin-top: 0.8rem;
						font-size: 2.4rem;
					}
				}
				.mv_menu {
					margin-top: 4.2rem;
					width: 20rem;
					li {
						margin-left: 1.7rem;
						button {
							height: 24rem;
							&:before {
								height: 21.2rem;
							}
							.mincho {
								font-size: 1.3rem;
							}
						}
						&:nth-of-type(11n) {
							margin-left: 1.7rem;
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

		.to_top {
			position: absolute;
			right: 4.2vw;
			bottom: 6rem;
			z-index: 5;
			&.fix {
				position: fixed;
			}
			&:before,
			&:after {
				content: none;
			}
			.circle_arrow {
				padding: 2.2rem 0 0.2rem 0;
				&:before,
				&:after {
					content: none;
				}
				i {
					top: 0;
					bottom: initial;
					border-color: #000000;
					&:before,
					&:after {
						background-image: url('~/assets/img/icon/arrow_black.svg');
					}
					&:before {
						transform: translateY(-100%) rotate(-90deg);
					}
					&:after {
						transform: translateY(0) rotate(-90deg);
					}
				}
				.vertical_text {

				}
				&:hover {
					i {
						&:before {
							transform: translateY(0) rotate(-90deg);
						}
						&:after {
							transform: translateY(100%) rotate(-90deg);
						}
					}
				}
			}
			@media only screen and (max-width: 980px) {
				right: 0;
				bottom: 4rem;
				background-image: url('~/assets/img/item/bg_gray.svg');
				background-repeat: repeat;
				&:before,
				&:after {
					content: '';
				}
				.circle_arrow {
					padding: 3.7rem 1.2rem 1rem;
					&:before,
					&:after {
						content: '';
						top: -1.3rem;
						width: 300%;
					}
					i {
						top: 1.6rem;
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
						.img_wrap {
							width: 40%;
							.ratio-fixed {
								padding-top: 100%;
								img {
									object-fit: cover;
								}
							}
						}
						.text_wrap {
							width: 50%;
							h2 {
								font-size: 2.5rem;
								line-height: 1.5;
							}
							.description {
								margin-top: 0.8rem;
								font-size: 1.4rem;
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
								font-feature-settings: 'palt' 0;
								-webkit-font-feature-settings: 'palt' 0;
							}
						}
					}
					.ingredients_wrap {
						margin-top: 4.8rem;
						background-color: #ffffff;
						h3 {
							margin: 3rem auto auto 3.5rem;
						}
						.ingredients_list {
							margin: 2rem auto 3.5rem;
							width: 80%;
							li {
								margin-bottom: 1.3rem;
								&:before {
									content: '・';
									font-size: 1.4rem;
									line-height: 1.5;
								}
								* {
									font-size: 1.4rem;
									line-height: 1.5;
								}
								.ingredient {
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
									font-size: 1.6rem;
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
							font-size: 1.7rem;
						}
						ul {
							li {
								padding-left: 1.7rem;

							}
						}
						.ingredients_wrap {
							margin-top: 2.4rem;
							h3 {
								margin: 2rem auto auto 2rem;
							}
							.ingredients_list {
								margin: 2rem auto;
								width: 87%;
								li {
									margin-bottom: 0.8rem;
									&:before {
										font-size: 1.2rem;
										line-height: 1.5;
									}
									* {
										font-size: 1.2rem;
									}
									.ingredient {
										max-width: calc(64% - 1.6rem);
									}
									.line {
										margin: auto 1.3rem;
									}
								}
							}
						}
						.howto_wrap {
							margin-top: 2.4rem;
							.step_list {
								margin-top: 1.3rem;
								li {
									&:before {
										font-size: 1.4rem;
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