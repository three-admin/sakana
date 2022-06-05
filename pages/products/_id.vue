<template>
	<main>

		<div class="modal" :class="modalOpenStatus">
			<div class="modal_content">
				<button class="closeButton" @click="modalClose">
					<img src="~/assets/img/icon/cross.svg">
				</button>
				<div class="overview_wrap">
					<h4 class="mincho">商品概要</h4>
					<ul>
						<li class="flex border_h line_gray">
							<h5>内容量</h5>
							<p class="info">{{ product.capa ? product.capa.value : '' }}</p>
						</li>
						<li class="flex border_h line_gray">
							<h5>原材料</h5>
							<p class="info">{{ product.material ? product.material.value : '' }}</p>
						</li>
						<li class="flex border_h line_gray">
							<h5>保存方法</h5>
							<p class="info">{{ product.storage ? product.storage.value : '' }}</p>
						</li>
						<li class="flex border_h line_gray">
							<h5>賞味期限</h5>
							<p class="info">{{ product.expire_date ? product.expire_date.value : '' }}</p>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<section id="mv" class="mv">
			<div class="flex align-start nowrap">
				<div class="visual_wrap">
					<div class="visual_img_wrap">
						<div class="main_visual border_h">
							<div class="ratio-fixed border_v">
								<img :src="mainVisualImage.url">
							</div>
						</div>
						<ul class="visual_list flex flex-start">
							<li v-for="image in product.images" :key="image.id" v-bind:class="{'main_visualed' : image.id == mainVisualImage.id}">
								<div class="ratio-fixed" @click="visualListClick(image)">
									<img :src="image.url">
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div id="productInfo" ref="productInfo" class="info_wrap">
					<div class="title_wrap border_h line_gray">
						<h1 class="mincho">{{ product.title }}</h1>
						<h2 class="">{{ product.sub_title.value }}</h2>
						<div class="price_wrap flex flex-start align-end">
							<h5>3,500円</h5>
							<span class="tax">税込</span>
							<span class="devide">/</span>
							<span class="set">1セット（5袋・化粧箱入り）</span>
						</div>
					</div>
					<div class="cart_wrap border_h line_gray">
						<div class="noshi_wrap select_wrap">
							<select name="noshi">
								<option value="none" selected>のし不要</option>
								<option value="with">のしあり</option>
							</select>
						</div>
						<div class="choice_list_wrap border_h line_gray">
							<h5>魚種を選択</h5>
							<ul class="choice_list">
								<li class="flex align-center">
									<span class="title">1種目を選ぶ</span>
									<div class="choice_wrap select_wrap">
										<select name="choice">
											<option value="default" selected>選択してください</option>
											<option value="mackerel">さば</option>
											<option value="atka">ほっけ</option>
											<option value="sockeye">紅鮭</option>
											<option value="sablefish">銀たら</option>
											<option value="king">キングサーモン</option>
										</select>
									</div>
								</li>
								<li class="flex align-center">
									<span class="title">2種目を選ぶ</span>
									<div class="choice_wrap select_wrap">
										<select name="choice">
											<option value="default" selected>選択してください</option>
											<option value="mackerel">さば</option>
											<option value="atka">ほっけ</option>
											<option value="sockeye">紅鮭</option>
											<option value="sablefish">銀たら</option>
											<option value="king">キングサーモン</option>
										</select>
									</div>
								</li>
								<li class="flex align-center">
									<span class="title">3種目を選ぶ</span>
									<div class="choice_wrap select_wrap">
										<select name="choice">
											<option value="default" selected>選択してください</option>
											<option value="mackerel">さば</option>
											<option value="atka">ほっけ</option>
											<option value="sockeye">紅鮭</option>
											<option value="sablefish">銀たら</option>
											<option value="king">キングサーモン</option>
										</select>
									</div>
								</li>
								<li class="flex align-center">
									<span class="title">4種目を選ぶ</span>
									<div class="choice_wrap select_wrap">
										<select name="choice">
											<option value="default" selected>選択してください</option>
											<option value="mackerel">さば</option>
											<option value="atka">ほっけ</option>
											<option value="sockeye">紅鮭</option>
											<option value="sablefish">銀たら</option>
											<option value="king">キングサーモン</option>
										</select>
									</div>
								</li>
								<li class="flex align-center">
									<span class="title">5種目を選ぶ</span>
									<div class="choice_wrap select_wrap">
										<select name="choice">
											<option value="default" selected>選択してください</option>
											<option value="mackerel">さば</option>
											<option value="atka">ほっけ</option>
											<option value="sockeye">紅鮭</option>
											<option value="sablefish">銀たら</option>
											<option value="king">キングサーモン</option>
										</select>
									</div>
								</li>
							</ul>
						</div>
						<button class="cart_button" @click="addToCart()">
							<span class="text circle_arrow">カートに入れる<i></i></span>
						</button>
						<p class="description">{{ product.description }}</p>
					</div>
					<div class="detail_wrap border_h line_gray">
						<ul>
							<li class="flex">
								<span class="title">配送料</span>
								<p class="detail">無料</p>
							</li>
							<li class="flex">
								<span class="title">発送方法</span>
								<p class="detail">冷凍便（ヤマト運輸）<br>ご注文完了後、〇〇営業日までに発送いたします。</p>
							</li>
							<li class="flex">
								<span class="title">配送日指定</span>
								<p class="detail">ショッピングカート画面にて設定いただけます。</p>
							</li>
						</ul>
					</div>
					<div class="more_wrap">
						<button @click="modalOpen()">内容量・原材料・保村方法・賞味期限など</button>
					</div>
				</div>

				<div id="productList" class="package_wrap" ref="scrollThumbnail">
					<ul class="product_list">
						<li v-if="product">
							<div class="border_h">
								<div id="thumb_" class="ratio-fixed border_v">
									<img src="">
								</div>
							</div>
							<div class="text_wrap">
								<div class="title_wrap">
									<h3 class="mincho">さば</h3>
									<h4>特徴が見出しで入りますこの文章はダミーです。</h4>
								</div>
								<p class="description">商品説明文が入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。商品説明文が入ります。この文章はダミーです。</p>
							</div>
						</li>
						<li v-if="product">
							<div class="border_h">
								<div id="thumb_" class="ratio-fixed border_v">
									<img src="">
								</div>
							</div>
							<div class="text_wrap">
								<div class="title_wrap">
									<h3 class="mincho">ほっけ</h3>
									<h4>特徴が見出しで入りますこの文章はダミーです。</h4>
								</div>
								<p class="description">商品説明文が入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。商品説明文が入ります。この文章はダミーです。</p>
							</div>
						</li>
						<li v-if="product">
							<div class="border_h">
								<div id="thumb_" class="ratio-fixed border_v">
									<img src="">
								</div>
							</div>
							<div class="text_wrap">
								<div class="title_wrap">
									<h3 class="mincho">紅鮭</h3>
									<h4>特徴が見出しで入りますこの文章はダミーです。</h4>
								</div>
								<p class="description">商品説明文が入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。商品説明文が入ります。この文章はダミーです。</p>
							</div>
						</li>
						<li v-if="product">
							<div class="border_h">
								<div id="thumb_" class="ratio-fixed border_v">
									<img src="">
								</div>
							</div>
							<div class="text_wrap">
								<div class="title_wrap">
									<h3 class="mincho">銀たら</h3>
									<h4>特徴が見出しで入りますこの文章はダミーです。</h4>
								</div>
								<p class="description">商品説明文が入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。商品説明文が入ります。この文章はダミーです。</p>
							</div>
						</li>
						<li v-if="product">
							<div class="border_h">
								<div id="thumb_" class="ratio-fixed border_v">
									<img src="">
								</div>
							</div>
							<div class="text_wrap">
								<div class="title_wrap">
									<h3 class="mincho">キングサーモン</h3>
									<h4>特徴が見出しで入りますこの文章はダミーです。</h4>
								</div>
								<p class="description">商品説明文が入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。商品説明文が入ります。この文章はダミーです。</p>
							</div>
						</li>
					</ul>
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
	name: 'ProductPage',
	async asyncData({ $axios, $shopify, params }) {
		try {

			console.log(params)

			// const product = await $shopify.product.fetch("gid://shopify/Product/7661772046564")
			// console.log(product)
			// console.log(product.metafields)
			// console.log(product.metafield)

			return Promise.all([
				$axios.post(
					'https://abezuke.myshopify.com/api/2022-04/graphql.json',
					{
						query: 
							`query {     
								product(handle: "` + params.id + `") {
									id
									title
									description
									variants(first: 1) {
										edges {
											node {
												id
											}
										}
									}
									sub_title: metafield(namespace: "my_fields" key: "sub_title") {
										value
									}
									image_1: metafield(namespace: "my_fields" key: "image_1") {
										id
										reference {
											... on MediaImage {
												image {
													originalSrc
												}
											}
										}
									}
									image_2: metafield(namespace: "my_fields" key: "image_2") {
										id
										reference {
											... on MediaImage {
												image {
													originalSrc
												}
											}
										}
									}
									image_3: metafield(namespace: "my_fields" key: "image_3") {
										id
										reference {
											... on MediaImage {
												image {
													originalSrc
												}
											}
										}
									}
									image_4: metafield(namespace: "my_fields" key: "image_4") {
										id
										reference {
											... on MediaImage {
												image {
													originalSrc
												}
											}
										}
									}
									image_5: metafield(namespace: "my_fields" key: "image_5") {
										id
										reference {
											... on MediaImage {
												image {
													originalSrc
												}
											}
										}
									}
									image_6: metafield(namespace: "my_fields" key: "image_6") {
										id
										reference {
											... on MediaImage {
												image {
													originalSrc
												}
											}
										}
									}
									image_7: metafield(namespace: "my_fields" key: "image_7") {
										id
										reference {
											... on MediaImage {
												image {
													originalSrc
												}
											}
										}
									}
									image_8: metafield(namespace: "my_fields" key: "image_8") {
										id
										reference {
											... on MediaImage {
												image {
													originalSrc
												}
											}
										}
									}
									image_9: metafield(namespace: "my_fields" key: "image_9") {
										id
										reference {
											... on MediaImage {
												image {
													originalSrc
												}
											}
										}
									}
									image_10: metafield(namespace: "my_fields" key: "image_10") {
										id
										reference {
											... on MediaImage {
												image {
													originalSrc
												}
											}
										}
									}
									capa: metafield(namespace: "my_fields" key: "capa") {
										value
									}
									material: metafield(namespace: "my_fields" key: "material") {
										value
									}
									storage: metafield(namespace: "my_fields" key: "storage") {
										value
									}
									expire_date: metafield(namespace: "my_fields" key: "expire_date") {
										value
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
				var product = res[0].data.data.product
				product["variant_id"] = product.variants.edges[0].node.id
				product["images"] = []
				if (product.image_1) { product.images.push({ "id": product.image_1.id, "url": product.image_1.reference.image.originalSrc }) }
				if (product.image_2) { product.images.push({ "id": product.image_2.id, "url": product.image_2.reference.image.originalSrc }) }
				if (product.image_3) { product.images.push({ "id": product.image_3.id, "url": product.image_3.reference.image.originalSrc }) }
				if (product.image_4) { product.images.push({ "id": product.image_4.id, "url": product.image_4.reference.image.originalSrc }) }
				if (product.image_5) { product.images.push({ "id": product.image_5.id, "url": product.image_5.reference.image.originalSrc }) }
				if (product.image_6) { product.images.push({ "id": product.image_6.id, "url": product.image_6.reference.image.originalSrc }) }
				if (product.image_7) { product.images.push({ "id": product.image_7.id, "url": product.image_7.reference.image.originalSrc }) }
				if (product.image_8) { product.images.push({ "id": product.image_8.id, "url": product.image_8.reference.image.originalSrc }) }
				if (product.image_9) { product.images.push({ "id": product.image_9.id, "url": product.image_9.reference.image.originalSrc }) }
				if (product.image_10) { product.images.push({ "id": product.image_10.id, "url": product.image_10.reference.image.originalSrc }) }
				console.log(product)
				console.log(product.images)
				const mainVisual = product.images[0] ? product.images[0] : { "id": '', "url": '' }
				return { product, mainVisual }
			})

			// return { product }
		} catch(error) {
			console.log(params)
			console.log('error')
		}
	},
	head() {
		return {
			// title: this.product.title + ' | ',
			// meta: [
			// 	{ hid: 'og:title', property: 'og:title', content: this.product.title + ' | ' },
			// 	{ hid: 'og:image', property: 'og:image', content: this.product.images ? this.product.images[0] : 'https://abemamoru-shouten.com/no_img.jpg' },
			// 	{ hid: 'og:url', property: 'og:url', content: 'https://abemamoru-shouten.com/products/' + this.product.handle },
			// ],
			// bodyAttrs: {
			// 	class: this.modalStatus != '' ? 'body_fix' : ''
			// },
		}
	},
	data() {
		return {
			modalStatus: '',
			modalThumbnailUrl: '',
		}
	},
	mounted() {
		if (window.innerWidth > 980) {
			ScrollTrigger.create({
				trigger: '#productInfo',
				start: 'bottom bottom+=12rem',
				endTrigger: "#productList",
				end: 'bottom bottom',
				scrub: true,
				onEnter: () => {
					this.$refs.productInfo.classList.add('fix')
				},
				onEnterBack: () => {
					this.$refs.productInfo.classList.remove('absolute')
				},
				onLeave: () => {
					this.$refs.productInfo.classList.add('absolute')
				},
				onLeaveBack: () => {
					this.$refs.productInfo.classList.remove('fix')
				},
			})
		}
	},
	computed: {
		mainVisualImage() {
			return this.mainVisual
		},
		modalOpenStatus() {
			return this.modalStatus
		},
	},
	methods: {
		visualListClick: function(image) {
			this.mainVisual = image
		},
		modalOpen: function() {
			this.modalStatus = 'open'
		},
		modalClose: function() {
			this.modalStatus = ''
		},
		addToCart: function() {
			this.$shopify.checkout.create().then((checkout) => {
				console.log(checkout);
				const lineItemsToAdd = [
					{
						variantId: this.product.variant_id,
						quantity: 1,
					},
				];

				this.$shopify.checkout.addLineItems(checkout.id, lineItemsToAdd).then((checkout) => {
					console.log(checkout.lineItems);
					location.href = checkout.webUrl;
				});
			});
		},
	}
}
</script>

<style lang="scss" scoped>
	main {

		.modal {
			position: absolute;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			opacity: 0;
			z-index: -1;
			background-color: rgba(0, 0, 0, 0.5);
			.modal_content {
				position: relative;
				margin: 12.5vh auto;
				width: 60vw;
				height: 75vh;
				background-color: #ffffff;
				overflow: hidden;
				.closeButton {
					position: absolute;
					top: 2.4rem;
					right: 2.4rem;
					display: block;
					width: 4.8rem;
					height: 4.8rem;
					border: 1px solid #000000;
					border-radius: 50%;
					z-index: 1;
					img {
						display: block;
						margin: auto;
						width: 2.4rem;
						height: 2.4rem;
					}
				}
				.overview_wrap {
					margin: auto;
					padding: 8rem 0;
					width: 80%;
					height: calc(75vh - 16rem);
					overflow-y: scroll;
					scrollbar-width: none;
					-ms-overflow-style: none;
					&::-webkit-scrollbar {
						display: none;
					}
					h4 {
						font-size: 3.3rem;
						line-height: 1.5;
					}
					ul {
						margin-top: 1.6rem;
						li {
							padding: 2rem 0;
							&:before {
								content: none;
							}
							h5 {
								width: 22%;
							}
							.info {
								width: 75%;
							}
						}
					}
				}
			}
			&.open {
				position: fixed;
				opacity: 1;
				z-index: 15;
			}
			@media only screen and (max-width: 980px) {
				.modal_content {
					position: relative;
					margin: 12.5vh auto;
					width: 87vw;
					height: 83vh;
					.closeButton {
						top: 1.6rem;
						right: 1.6rem;
					}
					.overview_wrap {
						.ratio-fixed {
							width: 100%;
							img {
								width: 100%;
								height: auto;
							}
						}
					}
				}
				&.open {
					display: flex;
					align-items: center;
				}
			}
		}

		.mv {
			position: relative;
			padding: 0 0 4.8rem 16vw;
			.visual_wrap {
				margin-right: auto;
				padding-top: 15rem;
				width: 39vw;
				.visual_img_wrap {
					.main_visual {
						.ratio-fixed {
							padding-top: 100%;
						}
					}
					.visual_list {
						margin-top: 2.4rem;
						li {
							margin-right: 1.82%;
							width: 15.15%;
							opacity: 0.5;
							.ratio-fixed {
								padding-top: 100%;
								cursor: pointer;
								img {
									width: 100%;
									object-fit: cover;
								}
							}
							&:nth-of-type(6n) {
								margin-right: 0;
							}
							&:nth-of-type(n + 7) {
								margin-top: 1.82%;
							}
						}
						.main_visualed {
							opacity: 1;
						}
					}
				}
			}
			.info_wrap {
				position: absolute;
				top: 0;
				right: 0;
				padding: 15rem 10vw 4.8rem 0;
				width: 29vw;
				&.fix {
					position: fixed;
					top: initial;
					bottom: 0;
				}
				&.absolute {
					position: absolute;
					top: initial;
					bottom: 4.8rem;
				}
				.border_h {
					padding: 3.5rem 0 2.4rem;
					&:before {
						content: none;
					}
				}
				.title_wrap {
					h1 {
						font-size: 2.5rem;
						line-height: 1.5;
					}
					h2 {
						margin-top: 0.8rem;
						font-size: 1.3rem;
						line-height: 1.75;
					}
					.price_wrap {
						margin-top: 2.4rem;
						h5 {
							font-size: 1.8rem;
							line-height: 1.5;
						}
						span {
							display: inline-block;
							margin-left: 0.4rem;
							padding-bottom: 0.2rem;
							font-size: 1.2rem;
							line-height: 1.5;
						}
					}
				}
				.cart_wrap {
					.select_wrap {
						position: relative;
						border: 1px solid #000000;
						&:after {
							content: '';
							position: absolute;
							top: 0;
							right: 1.2rem;
							bottom: 0;
							display: block;
							margin: auto;
							width: 2.4rem;
							height: 2.4rem;
							background-image: url('~/assets/img/icon/toggle_black.svg');
							background-size: contain;
							background-repeat: no-repeat;
						}
						select {
							display: block;
							padding: 1.5rem 1.2rem;
							width: calc(100% - 2.6rem);
							font-size: 1.3rem;
							line-height: 1.5;
							option {
								display: block;
							}
						}
					}
					.noshi_wrap {
						
					}
					.choice_list_wrap {
						padding: 3.5rem 0;
						.choice_list {
							li {
								margin-top: 1.2rem;
								.title {
									font-size: 1.3rem;
									line-height: 1.5;
								}
								.choice_wrap {
									width: 70%;
								}
							}
						}
					}
					.cart_button {
						display: block;
						margin-top: 3.5rem;
						padding: 2.4rem 0;
						width: 100%;
						text-align: center;
						background-color: #AA0813;
						.text {
							display: inline-block;
							line-height: 1;
							color: #FFFFFF;
							i {
								border-color: #FFFFFF;
								&:before,
								&:after {
									background-image: url('~/assets/img/icon/arrow_white.svg');
								}
							}
						}
					}
					.description {
						margin-top: 3.5rem;
						font-size: 1.3rem;
						line-height: 1.75;
					}
				}
				.detail_wrap {
					padding-top: 2.4rem;
					ul {
						li {
							margin-bottom: 1.6rem;
							* {
								font-size: 1.2rem;
								line-height: 1.75;
							}
							.title {
								width: 20%;
							}
							.detail {
								width: 75%;
							}
							&:last-of-type {
								margin-bottom: 0;
							}
						}
					}
				}
				.more_wrap {
					padding-top: 2.4rem;
					button {
						position: relative;
						padding-left: 3rem;
						font-size: 1.3rem;
						line-height: 1.75;
						&:before {
							content: '';
							position: absolute;
							top: 0;
							left: 0;
							bottom: 0;
							display: block;
							margin: auto;
							width: 1.6rem;
							height: 1.6rem;
							background-image: url('~/assets/img/icon/plus.svg');
							background-size: contain;
							background-repeat: no-repeat;
						}
					}
				}
			}
			.package_wrap {
				margin-right: 39vw;
				padding: 7.2rem 0 4.8rem;
				width: 39vw;
				.product_list {
					li {
						margin-bottom: 4.8rem;
						.text_wrap {
							.title_wrap {
								margin-top: 3.5rem;
								text-align: center;
								h3 {
									font-size: 4.6rem;
									line-height: 1;
								}
								h4 {
									margin-top: 0.8rem;
									font-size: 1.6rem;
									line-height: 1.5;
								}
							}
							.description {
								margin-top: 3.5rem;
								font-size: 1.3rem;
								line-height: 1.75;
							}
						}
						&:last-of-type {
							margin-bottom: 0;
						}
					}
				}
			}
			@media only screen and (max-width: 980px) {
				padding: 0;
				.visual_wrap {
					padding-top: 10.8rem;
					width: 100vw;
					.visual_list {
						display: block;
						overflow-x: scroll;
						white-space: nowrap;
						scrollbar-width: none;
						-ms-overflow-style: none;
						&::-webkit-scrollbar {
							display: none;
						}
						li {
							display: inline-block;
							margin-right: 2.6vw;
							width: 20vw;
							.ratio-fixed {
								padding-top: 100%;
								cursor: pointer;
								img {
									width: 100%;
									object-fit: cover;
								}
							}
							&:first-of-type {
								margin-left: 6.4vw;
							}
							&:nth-of-type(6n) {
								margin-right: 2.6vw;
							}
							&:nth-of-type(n + 7) {
								margin-top: 0;
							}
							&:last-of-type {
								margin-right: 6.4vw;
							}

						}
					}
				}
				.info_wrap {
					position: relative;
					padding: 2.4rem 6.4vw 2.4rem;
					width: 87.2vw;
					.border_h {
						padding: 3rem 0 2rem;
					}
					.title_wrap {
						h1 {
							font-size: 2rem;
						}
						h2 {
							font-size: 1.2rem;
						}
						.price_wrap {
							margin-top: 2rem;
							h5 {
								font-size: 1.6rem;
								line-height: 1.5;
							}
							span {
								font-size: 1.1rem;
							}
						}
					}
					.cart_wrap {
						.select_wrap {
							select {
								font-size: 1.2rem;
							}
						}
						.noshi_wrap {

						}
						.choice_list_wrap {
							padding: 3rem 0;
							.choice_list {
								li {
									.title {
										font-size: 1.2rem;
									}
									.choice_wrap {
										width: 66%;
									}
								}
							}
						}
						.cart_button {
							margin-top: 3rem;
							padding: 2.4rem 0;
							.text {
								font-size: 1.4rem;
							}
						}
						.description {
							margin-top: 3rem;
							font-size: 1.2rem;
						}
					}
					.detail_wrap {
						padding-top: 2rem;
						ul {
							li {
								* {
									font-size: 1.2rem;
								}
								.title {
									width: 24%;
								}
								.detail {
									width: 69%;
								}
							}
						}
					}
					.more_wrap {
						padding-top: 2rem;
						button {
							font-size: 1.2rem;
						}
					}
				}
				.package_wrap {
					margin-right: 0;
					padding: 2.4rem 0 9.6rem;
					width: 100vw;
					.product_list {
						li {
							.text_wrap {
								padding: 0 6.4vw;
								.title_wrap {
									margin-top: 3rem;
									h3 {
										font-size: 3.5rem;
									}
									h4 {
										font-size: 1.4rem;
									}
								}
								.description {
									margin-top: 3rem;
									font-size: 1.2rem;
								}
							}
						}
					}
				}
			}
		}


	}
</style>