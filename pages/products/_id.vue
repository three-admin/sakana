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
							<h5>{{ Number(product.price).toLocaleString() }} 円</h5>
							<span class="tax">税込</span>
							<span class="devide">/</span>
							<span class="set">{{ product.set_detail.value }}</span>
						</div>
					</div>
					<div class="cart_wrap">
						<div class="choice_list_wrap border_h line_gray" v-if="product.collection == 'various'">
							<h5>魚種を選択</h5>
							<ul class="choice_list">
								<li class="flex align-center">
									<span class="title">1種目を選ぶ</span>
									<div class="choice_wrap select_wrap">
										<select ref="set_1">
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
										<select ref="set_2">
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
										<select ref="set_3">
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
										<select ref="set_4">
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
										<select ref="set_5">
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
									<span class="title">6種目を選ぶ</span>
									<div class="choice_wrap select_wrap">
										<select ref="set_6">
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
									<span class="title">7種目を選ぶ</span>
									<div class="choice_wrap select_wrap">
										<select ref="set_7">
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
									<span class="title">8種目を選ぶ</span>
									<div class="choice_wrap select_wrap">
										<select ref="set_8">
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
						<div class="noshi_wrap default_select">
							<h5>のしを選択（無料）</h5>
							<div class="select_wrap">
								<select ref="noshi">
									<option value="none" selected>のし不要</option>
									<option value="with">のしあり</option>
								</select>
							</div>
						</div>
						<div class="quantity_wrap default_select">
							<h5>数量</h5>
							<div class="select_wrap">
								<select ref="quantity">
									<option :value="num" v-for="num in 100" :selected="num == quantity">{{ num }}</option>
								</select>
							</div>
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
						<li id="" v-if="product" class="border_h">
							<div class="border_v">
								<div class="img_wrap">
									<div class="ratio-fixed border_h">
										<img src="~/assets/img/about/about.jpg">
									</div>
								</div>
								<div class="detail_wrap flex border_v">
									<div class="title_wrap">
										<img class="mackerel" src="~/assets/img/product/mackerel.svg">
									</div>
									<div class="text_wrap">
										<h4>味は極上、栄養価の高さも魅力</h4>
										<p class="description">広範囲の海を移動して暮らすさばは、運動量の多さが美味しさにつながります。ノルウェー海産は特に上質。透き通るほどきれいな冷たい海で育った最高のさばが、おさかなの素の材料になります。オメガ3脂肪酸の栄養価が高くなる9〜11月の産卵期に獲れたもので、脂ののりもよく絶品です。</p>
									</div>
								</div>
							</div>
						</li>
						<li id="" v-if="product" class="border_h">
							<<div class="border_v">
								<div class="img_wrap">
									<div class="ratio-fixed border_h">
										<img src="~/assets/img/home/title.svg">
									</div>
								</div>
								<div class="detail_wrap flex border_v">
									<div class="title_wrap">
										<img class="atka" src="~/assets/img/product/atka.svg">
									</div>
									<div class="text_wrap">
										<h4>脂がのった濃厚な旨味が特徴</h4>
										<p class="description">日本でとれるほっけの多くが真ほっけ。おさかなの素には、真ほっけよりも旨味が詰まったアメリカ産のしまほっけを使用しています。7〜12月の縞ほっけは、産卵に備えて栄養を蓄えるため、脂ののりが最高。急速冷凍で鮮度を閉じ込めることで、最も美味しい時期の濃厚な旨味を一年中味わうことができます。</p>
									</div>
								</div>
							</div>
						</li>
						<li id="" v-if="product" class="border_h">
							<div class="border_v">
								<div class="img_wrap">
									<div class="ratio-fixed border_h">
										<img src="~/assets/img/home/title.svg">
									</div>
								</div>
								<div class="detail_wrap flex border_v">
									<div class="title_wrap">
										<img class="sockeye" src="~/assets/img/product/sockeye.svg">
									</div>
									<div class="text_wrap">
										<h4>色づいた赤身は、美味しさの証</h4>
										<p class="description">繁殖期になると身が真っ赤になる紅鮭。同時にもっとも美味しい時期を迎えます。おさかなの素で使用しているのは、カムチャッカ水域などの北洋でとれたトップクラスの品質の紅鮭のみ。水揚げしてすぐに急速冷凍し、鮮度を保ったまま日本に届けられます。コクのある旨味とほんのりとした甘さが特徴です。</p>
									</div>
								</div>
							</div>
						</li>
						<li id="" v-if="product" class="border_h">
							<div class="border_v">
								<div class="img_wrap">
									<div class="ratio-fixed border_h">
										<img src="~/assets/img/home/title.svg">
									</div>
								</div>
								<div class="detail_wrap flex border_v">
									<div class="title_wrap">
										<img class="sablefish" src="~/assets/img/product/sablefish.svg">
									</div>
									<div class="text_wrap">
										<h4>最上品を、ひと切れずつ厳選</h4>
										<p class="description">アラスカ産・カナダ産の銀たらを使用。身が柔らかく、脂のりも良い大きな魚を厳選。徹底された鮮度管理のもとで輸入し、阿部守商店が手作業で切り分けています。銀たらは特に品質にばらつきが出やすいため、切ったときの感触や見た目をひと切れずつチェック。自信を持って提供できるものを選んでいます。</p>
									</div>
								</div>
							</div>
						</li>
						<li id="" v-if="product" class="border_h">
							<div class="border_v">
								<div class="img_wrap">
									<div class="ratio-fixed border_h">
										<img src="~/assets/img/home/title.svg">
									</div>
								</div>
								<div class="detail_wrap flex border_v">
									<div class="title_wrap">
										<img class="king" src="~/assets/img/product/king.svg">
									</div>
									<div class="text_wrap">
										<h4>旨味と満足感は、まさに王者</h4>
										<p class="description">カナダで養殖されたキングサーモンを使用。水質や温度がコントロールされ、病気や寄生虫などの心配もない最高の環境で育った魚は、天然物よりも遥かに美味。食感は柔らかく、旨味もたっぷりで、生でも食べられるほど上質です。その名の通り、数ある鮭やマスの中でも別格の味わいを堪能できます。</p>
									</div>
								</div>
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
									featuredImage {
										id
										url
									}
									images(first: 10) {
										nodes {
											id
											url
										}
									}
									variant: variants(first: 1) {
										nodes {
											id
											price
										}
									}
									collection: collections(first: 1) {
										nodes {
											id
											title
											handle
										}
									}
									sub_title: metafield(namespace: "my_fields" key: "sub_title") {
										value
									}
									set_detail: metafield(namespace: "my_fields" key: "set_detail") {
										value
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
				product["variant_id"] = product.variant.nodes[0].id
				product["price"] = product.variant.nodes[0].price
				product["collection"] = product.collection.nodes[0].handle
				product.images = product.images.nodes
				const mainVisual = product.featuredImage
				console.log(product)
				return { product, mainVisual }
			})

		} catch(error) {
			console.log('error')
		}
	},
	head() {
		return {
			title: this.product.title + ' | ',
			meta: [
				{ hid: 'og:title', property: 'og:title', content: this.product.title + ' | ' },
				{ hid: 'og:image', property: 'og:image', content: this.product.images ? this.product.images[0] : 'https://abemamoru-shouten.com/no_img.jpg' },
				{ hid: 'og:url', property: 'og:url', content: 'https://abemamoru-shouten.com/products/' + this.product.handle },
			],
			bodyAttrs: {
				class: this.modalStatus != '' ? 'body_fix' : ''
			},
		}
	},
	data() {
		return {
			modalStatus: '',
			quantity: 0,
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
		async addToCart() {

			const variantId = this.product.variant_id
			const noshiSelect = this.$refs.noshi
			const noshi = noshiSelect.options[noshiSelect.selectedIndex].value
			const attributes = [{ key: 'noshi', value: noshi }]
			if (this.product.collection.indexOf('set') != -1) {
				const set1Select = this.$refs.set_1
				attributes['set_1'] = set1Select.options[set1Select.selectedIndex].value
				const set2Select = this.$refs.set_2
				attributes['set_2'] = set2Select.options[set2Select.selectedIndex].value
				const set3Select = this.$refs.set_3
				attributes['set_3'] = set3Select.options[set3Select.selectedIndex].value
				const set4Select = this.$refs.set_4
				attributes['set_4'] = set4Select.options[set4Select.selectedIndex].value
				const set5Select = this.$refs.set_5
				attributes['set_5'] = set5Select.options[set5Select.selectedIndex].value
				if (this.product.collection != '') {
					const set6Select = this.$refs.set_6
					attributes['set_6'] = set6Select.options[set6Select.selectedIndex].value
					const set7Select = this.$refs.set_7
					attributes['set_7'] = set7Select.options[set7Select.selectedIndex].value
					const set8Select = this.$refs.set_8
					attributes['set_8'] = set8Select.options[set8Select.selectedIndex].value
				}
			}
			try {
				const checkoutId = sessionStorage.getItem('CheckoutId')
				const lineItemsToAdd = [
					{
						variantId: variantId,
						quantity: 1,
						customAttributes: attributes,
					},
				];
				const newC = await this.$shopify.checkout.create()
				console.log(newC)
				if (checkoutId == '' || checkoutId === null) {
					console.log('こっち');
					console.log(checkoutId);
					this.$shopify.checkout.create().then((checkout) => {
						console.log(checkout);

						this.$shopify.checkout.addLineItems(checkout.id, lineItemsToAdd).then((updatedCheckout) => {
							console.log(updatedCheckout)
							console.log(updatedCheckout.lineItems)
							// location.href = checkout.webUrl;
							location.href = '/cart';
							sessionStorage.setItem('CheckoutId', updatedCheckout.id)
							sessionStorage.setItem('CartItems', updatedCheckout.lineItems.length)
						});

					});
				} else {
					console.log('here');
					
					this.$shopify.checkout.addLineItems(checkoutId, lineItemsToAdd).then((updatedCheckout) => {
						console.log(updatedCheckout)
						console.log(updatedCheckout.lineItems)
						// location.href = checkout.webUrl;
						location.href = '/cart';
						sessionStorage.setItem('CartItems', updatedCheckout.lineItems.length)
					});
				}
			} catch(error) {
				console.log(error)
			}
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
				.title_wrap {
					padding: 3.5rem 0;
					&:before {
						content: none;
					}
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
					h5 {
						font-size: 1.8rem;
						line-height: 1.5;
					}
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
					.choice_list_wrap {
						padding: 3.5rem 0;
						&:before {
							content: none;
						}
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
					.default_select {
						padding-top: 3.5rem;
						.select_wrap {
							margin-top: 1.2rem;
						}
					}
					.noshi_wrap {
						
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
						margin: 3.5rem auto 2.4rem;
						font-size: 1.3rem;
						line-height: 1.75;
					}
				}
				.detail_wrap {
					padding: 2.4rem 0;
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
						.img_wrap {
							.ratio-fixed {
								padding-top: 66%;
								&:before {
									content: none;
								}
							}
						}
						.detail_wrap {
							padding: 2.4rem 1.6rem;
							.title_wrap {
								width: 42%;
								img {
									width: 11.5rem;
								}
								img {
									width: 12.5rem;
								}
								img {
									width: 15rem;
								}
							}
							.text_wrap {
								margin-top: 10rem;
								width: 44%;
								order: -1;
								h4 {
									font-size: 1.6rem;
									line-height: 1.5;
								}
								.description {
									margin-top: 1.6rem;
									font-size: 1.3rem;
									line-height: 1.75;
								}
							}
						}
						&:nth-of-type(even) {
							.detail_wrap {
								.text_wrap {
									order: 1;
								}
							}
						}
						&:nth-of-type(odd) {
							.detail_wrap {
								.title_wrap {
									text-align: right;
								}
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
					padding: 2.4rem 6.4vw 9.6rem;
					width: 100vw;
					.product_list {
						li {
							margin-bottom: 2.4rem;
							.detail_wrap {
								padding: 1.6rem 1.2rem;
								.title_wrap {
									width: 20%;
								}
								.text_wrap {
									margin-top: 0;
									width: 66%;
									h4 {
										font-size: 1.4rem;
									}
									.description {
										margin-top: 1.2rem;
										font-size: 1.1rem;
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