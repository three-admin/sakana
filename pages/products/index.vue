<template>
	<main>

		<section id="mv" class="mv">
			<ul class="mv_menu flex flex-center">
				<li>
					<h1 class="vertical_text_wrap" v-scroll-to="{ el: '', offset: -96 }">
						<span class="sub_title vertical_text">{{  }}</span>
						<NuxtLink class="mincho vertical_text circle_arrow vertical" to="#">{{  }}<i></i></NuxtLink>
					</h1>
				</li>
			</ul>
		</section>

		<section id="lineup" class="lineup">
			<ul class="lineup_list">
				<li :id="product.collection.nodes[0].handle" class="border_h" v-for="product in products">
					<h2 class="mincho vertical_text">{{ product.index_title.value }}</h2>
					<NuxtLink class="border_v flex align-end" :to="{ name: 'products-id', params: { id: product.handle } }">
						<div class="img_wrap border_v">
							<div class="ratio-fixed">
								<img :src="product.collection.nodes[0].image.url">
							</div>
						</div>
						<div class="text_wrap">
							<div class="content_wrap">
								<h3 class="">{{ product.sub_title.value }}<br>{{ product.title }}</h3>
								<div class="price_wrap flex flex-start align-end">
									<h4>{{ Number(product.variant.nodes[0].price).toLocaleString() }} 円</h4>
									<span class="tax">税込・送料無料</span>
								</div>
								<p class="description">{{ product.index_description.value }}</p>
								<span class="circle_arrow">詳しく見る<i></i></span>
							</div>
						</div>
					</NuxtLink>
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
	name: 'ProductIndexPage',
	async asyncData({ params }) {
		try {
			return Promise.all([
				axios.post(
					'https://abezuke.myshopify.com/api/2022-04/graphql.json',
					{
						query: 
							`query {     
								products(first: 5) {
									nodes {
										id
										title
										handle
										description
										featuredImage {
											url
										}
										variant: variants(first: 1) {
											nodes {
												id
												price
											}
										}
										collection: collections(first: 1) {
											nodes {
												handle
												image {
													url
												}
											}
										}
										sub_title: metafield(namespace: "my_fields" key: "sub_title") {
											value
										}
										set_detail: metafield(namespace: "my_fields" key: "set_detail") {
											value
										}
										index_title: metafield(namespace: "my_fields" key: "index_title") {
											value
										}
										index_description: metafield(namespace: "my_fields" key: "index_description") {
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
				const products = res[0].data.data.products.nodes
				return { products }
			})
		} catch(error) {
			console.log(error)
		}
	},
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
			.mv_menu {
				flex-direction: row-reverse;
				li {
					margin-left: 4.2rem;
					h1 {
						.circle_arrow {
							padding-bottom: 3.3rem;
							font-size: 3.5rem;
							line-height: 1.05;
							i {
								width: 2.4rem;
								height: 2.4rem;
								transform: scale(1, 1.087);
								&:before,
								&:after {
									background-image: url('~/assets/img/icon/toggle_red.svg');
								}
							}
							
						}
						.sub_title {
							margin-left: 1.2rem;
							font-size: 1.2rem;
							line-height: 1.12;
						}
					}
					&:last-of-type {
						margin-left: 0;
					}
				}
			}
			@media only screen and (max-width: 980px) {
				padding-top: 13rem;
				.mv_menu {
					li {
						margin-left: 2.2rem;
						h1 {
							.circle_arrow {
								padding-bottom: 2.4rem;
								font-size: 1.8rem;
								line-height: 1.05;
								i {
									width: 1.6rem;
									height: 1.6rem;
								}
							}
							.sub_title {
								margin-left: 0.6rem;
								font-size: 1rem;
							}
						}
					}
				}
			}
		}

		.lineup {
			padding: 15rem 0 18rem;
			.lineup_list {
				margin: auto;
				width: 69vw;
				li {
					position: relative;
					margin-bottom: 15rem;
					h2 {
						position: absolute;
						top: -6rem;
						right: -10rem;
						font-size: 12rem;
						line-height: 1;
					}
					a {
						position: relative;
						background-image: url('~/assets/img/item/bg_gray.svg');
						background-repeat: repeat;
						.text_wrap {
							width: 50%;
							.content_wrap {
								margin: auto 4% 2.4rem auto;
								width: 46%;
								h3 {
									font-size: 2rem;
									line-height: 1.5;
								}
								.price_wrap {
									margin-top: 0.4rem;
									h4 {
										font-size: 1.5rem;
										line-height: 1.5;
									}
									.tax {
										margin-left: 0.4rem;
										padding-bottom: 0.1rem;
										font-size: 1rem;
										line-height: 1.5;
									}
								}
								.description {
									margin-top: 1.2rem;
									font-size: 1.2rem;
								}
								.circle_arrow {
									display: inline-block;
									margin-top: 1.6rem;
									font-size: 1.2rem;
									line-height: 1;
									i {
										bottom: 0;
									}
								}
							}
						}
						.img_wrap {
							width: 50%;
							.ratio-fixed {
								padding-top: 100%;
								img {
									object-fit: cover;
								}
							}
						}
						&:hover {
							.text_wrap {
								&:before {
									content: '';
									position: absolute;
									top: 0;
									left: 0;
									width: 100%;
									height: 100%;
									background-color: rgba(0, 0, 0, 0.05);
								}
							}
							.img_wrap {
								.ratio-fixed {
									img {
										
									}
								}
							}
						}
					}
					&:nth-of-type(2n) {
						.text_wrap {
							order: -1;
							.content_wrap {
								margin: auto auto 2.4rem 4%;
							}
						}
						.img_wrap {
							&:before {
								width: 100%;
							}
							&:after {
								content: none;
							}
						}
					}
					&:nth-of-type(2n + 1) {
						.img_wrap {
							&:before {
								content: none;
							}
							&:after {
								width: 100%;
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
				.lineup_list {
					width: 61.9vw;
					li {
						margin-bottom: 7rem;
						h2 {
							top: -3rem;
							right: -4.8rem;
							font-size: 6rem;
						}
						a {
							&:before,
							&:after {
								width: 300%;
							}
							.text_wrap {
								width: 100%;
								.content_wrap {
									margin: 3.9rem auto 1.5rem;
									width: 87%;
									h3 {
										font-size: 1.5rem;
									}
									.price_wrap {
										margin-top: 0.2rem;
										h4 {
											font-size: 1.3rem;
										}
									}
									.description {
										margin-top: 0.8rem;
										font-size: 1rem;
									}
									.circle_arrow {
										margin-top: 1.2rem;
									}
								}
							}
							.img_wrap {
								width: 100%;
							}
						}
						&:nth-of-type(2n) {
							.text_wrap {
								order: 0;
								.content_wrap {
									margin: 3.9rem auto 1.5rem;
								}
							}
							.img_wrap {
								&:before {
									top: initial;
									left: initial;
									bottom: 1.5px;
									transform: initial;
								}
							}
						}
						&:nth-of-type(2n + 1) {
							.img_wrap {
								&:after {
									top: initial;
									right: initial;
									bottom: 1.5px;
									transform: initial;
								}
							}
						}
					}
				}
			}
		}

	}
</style>