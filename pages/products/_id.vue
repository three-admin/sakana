<template>
	<main>

		<div class="modal" :class="modalOpenStatus">
			<div class="modal_content">
				<button class="closeButton" @click="modalClose">
					<img src="~/assets/img/icon/cross.svg">
				</button>
				<div class="overview_wrap">
					<h4 class="">原材料</h4>
					<ul>
						<li class="flex border_h line_gray" v-for="option in jsonList(product.materials)">
							<h5>{{ option.title }}</h5>
							<p class="info" v-text="option.value">{{ option.value }}</p>
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
							<li v-for="image in product.images.nodes" :key="image.id" v-bind:class="{'main_visualed' : image.id == mainVisualImage.id}">
								<div class="ratio-fixed" @click="visualListClick(image)">
									<img :src="image.url">
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div id="productInfo" ref="productInfo" class="info_wrap">
					<div class="title_wrap">
						<h1 class="mincho">{{ product.title }}</h1>
						<h2 class="">{{ product.collection.nodes.description }}</h2>
						<div class="variant_title flex flex-start align-end">
							<h4>{{ variant.title }}</h4>
							<h5>{{ Number(variant.price).toLocaleString() }} 円</h5>
							<span class="tax">税込</span>
							<p class="set" v-if="variant.delivery_fee"><span class="devide">・</span>{{ variant.delivery_fee.value }}</p>
						</div>
					</div>
					<div class="variant_wrap border_h line_gray">
						<ul class="variant_list flex flex-start">
							<li v-for="item, index in product.variants.nodes" :key="">
								<button class="flex" :class="{'selected': item.id == variant.id }" @click="variantSelect(index)">
								<!-- <NuxtLink class="flex" to=""> -->
									<div class="img_wrap">
										<img :src="item.image.url">
									</div>
									<div class="text_wrap">
										<div class="variant_title flex flex-start align-end">
											<h4>{{ item.title }}</h4>
											<h5>{{ Number(item.price).toLocaleString() }} 円</h5>
											<span class="tax">税込</span>
											<p class="set" v-if="item.delivery_fee">
												<span class="devide">・</span>{{ item.delivery_fee.value }}
											</p>
										</div>
										<h4 class="variant_content">{{ item.set_detail.value }}</h4>
									</div>
								<!-- </NuxtLink> -->
								</button>
							</li>
						</ul>
					</div>
					<div class="cart_wrap">
						<div class="choice_list_wrap border_h line_gray" v-if="isVarious">
							<h5>魚種を選択</h5>
							<ul class="choice_list">
								<li class="flex align-center">
									<span class="title">1種目を選ぶ</span>
									<div class="choice_wrap select_wrap">
										<select ref="set_1" @change="variousSelected">
											<option value="選択してください" selected>選択してください</option>
											<option value="さば">さば</option>
											<option value="ほっけ">ほっけ</option>
											<option value="紅鮭">紅鮭</option>
											<option value="銀たら">銀たら</option>
											<option value="キングサーモン">キングサーモン</option>
										</select>
									</div>
								</li>
								<li class="flex align-center">
									<span class="title">2種目を選ぶ</span>
									<div class="choice_wrap select_wrap">
										<select ref="set_2" @change="variousSelected">
											<option value="選択してください" selected>選択してください</option>
											<option value="さば">さば</option>
											<option value="ほっけ">ほっけ</option>
											<option value="紅鮭">紅鮭</option>
											<option value="銀たら">銀たら</option>
											<option value="キングサーモン">キングサーモン</option>
										</select>
									</div>
								</li>
								<li class="flex align-center">
									<span class="title">3種目を選ぶ</span>
									<div class="choice_wrap select_wrap">
										<select ref="set_3" @change="variousSelected">
											<option value="選択してください" selected>選択してください</option>
											<option value="さば">さば</option>
											<option value="ほっけ">ほっけ</option>
											<option value="紅鮭">紅鮭</option>
											<option value="銀たら">銀たら</option>
											<option value="キングサーモン">キングサーモン</option>
										</select>
									</div>
								</li>
								<li class="flex align-center">
									<span class="title">4種目を選ぶ</span>
									<div class="choice_wrap select_wrap">
										<select ref="set_4" @change="variousSelected">
											<option value="選択してください" selected>選択してください</option>
											<option value="さば">さば</option>
											<option value="ほっけ">ほっけ</option>
											<option value="紅鮭">紅鮭</option>
											<option value="銀たら">銀たら</option>
											<option value="キングサーモン">キングサーモン</option>
										</select>
									</div>
								</li>
								<li class="flex align-center">
									<span class="title">5種目を選ぶ</span>
									<div class="choice_wrap select_wrap">
										<select ref="set_5" @change="variousSelected">
											<option value="選択してください" selected>選択してください</option>
											<option value="さば">さば</option>
											<option value="ほっけ">ほっけ</option>
											<option value="紅鮭">紅鮭</option>
											<option value="銀たら">銀たら</option>
											<option value="キングサーモン">キングサーモン</option>
										</select>
									</div>
								</li>
								<!-- <li class="flex align-center">
									<span class="title">6種目を選ぶ</span>
									<div class="choice_wrap select_wrap">
										<select ref="set_6">
											<option value="選択してください" selected>選択してください</option>
											<option value="さば">さば</option>
											<option value="ほっけ">ほっけ</option>
											<option value="紅鮭">紅鮭</option>
											<option value="銀たら">銀たら</option>
											<option value="キングサーモン">キングサーモン</option>
										</select>
									</div>
								</li>
								<li class="flex align-center">
									<span class="title">7種目を選ぶ</span>
									<div class="choice_wrap select_wrap">
										<select ref="set_7">
											<option value="選択してください" selected>選択してください</option>
											<option value="さば">さば</option>
											<option value="ほっけ">ほっけ</option>
											<option value="紅鮭">紅鮭</option>
											<option value="銀たら">銀たら</option>
											<option value="キングサーモン">キングサーモン</option>
										</select>
									</div>
								</li>
								<li class="flex align-center">
									<span class="title">8種目を選ぶ</span>
									<div class="choice_wrap select_wrap">
										<select ref="set_8">
											<option value="選択してください" selected>選択してください</option>
											<option value="さば">さば</option>
											<option value="ほっけ">ほっけ</option>
											<option value="紅鮭">紅鮭</option>
											<option value="銀たら">銀たら</option>
											<option value="キングサーモン">キングサーモン</option>
										</select>
									</div>
								</li> -->
							</ul>
						</div>
						<div class="quantity_wrap default_select">
							<h5>数量</h5>
							<div class="select_wrap">
								<select ref="quantity" @change="updateLineItem">
									<option :value="num" v-for="num in Number(variant.sku)" :selected="num == quantity">{{ num }}</option>
								</select>
							</div>
						</div>
						<div class="noshi_wrap default_select">
							<h5>のし・ギフトラッピング（無料）</h5>
							<div class="select_wrap">
								<select ref="noshi">
									<option value="なし" selected>不要</option>
									<option value="ギフトラッピング">ギフトラッピング</option>
									<option value="「紅白無地のし」紅白蝶結び">「紅白無地のし」紅白蝶結び</option>
									<option value="「粗品」紅白蝶結び">「粗品」紅白蝶結び</option>
									<option value="「御礼」紅白蝶結び">「御礼」紅白蝶結び</option>
									<option value="「御祝」紅白蝶結び">「御祝」紅白蝶結び</option>
									<option value="「内祝（出産）」紅白蝶結び">「内祝（出産）」紅白蝶結び</option>
									<option value="「内祝（婚礼）」紅白結び切り">「内祝（婚礼）」紅白結び切り</option>
									<option value="「内祝（その他）」紅白蝶結び">「内祝（その他）」紅白蝶結び</option>
									<option value="「快気祝」紅白結び切り">「快気祝」紅白結び切り</option>
									<option value="「御見舞」紅白結び切り">「御見舞」紅白結び切り</option>
									<option value="「御挨拶」紅白蝶結び">「御挨拶」紅白蝶結び</option>
									<option value="「御年賀」紅白蝶結び">「御年賀」紅白蝶結び</option>
									<option value="「御年始」紅白蝶結び">「御年始」紅白蝶結び</option>
									<option value="「御中元」紅白蝶結び">「御中元」紅白蝶結び</option>
									<option value="「御歳暮」紅白蝶結び">「御歳暮」紅白蝶結び</option>
									<option value="「暑中御見舞」紅白蝶結び">「暑中御見舞」紅白蝶結び</option>
									<option value="「残暑御見舞」紅白蝶結び">「残暑御見舞」紅白蝶結び</option>
									<option value="「寒中御見舞」紅白蝶結び">「寒中御見舞」紅白蝶結び</option>
									<option value="「誕生祝」紅白蝶結び">「誕生祝」紅白蝶結び</option>
									<option value="「寿」紅白結び切り">「寿」紅白結び切り</option>
									<option value="「出産祝」紅白蝶結び">「出産祝」紅白蝶結び</option>
									<option value="「母の日」紅白蝶結び">「母の日」紅白蝶結び</option>
									<option value="「父の日」紅白蝶結び">「父の日」紅白蝶結び</option>
									<option value="その他（備考欄に記入）">その他（カート画面で備考欄にご記入ください）</option>
								</select>
							</div>
						</div>
						<div class="bag_wrap default_select">
							<h5>手提げ袋（1枚110円）</h5>
							<div class="select_wrap">
								<select ref="bag">
									<option value="none" selected>不要</option>
									<option value="with" v-for="num in quantity" :selected="num == bag">{{ num }}</option>
								</select>
							</div>
						</div>
						<button class="cart_button" :class="{'various_not_full': isVarious && !variousAllSelected }" @click="addToCart()">
							<span class="text circle_arrow" v-if="!isVarious || (isVarious && variousAllSelected)">カートに入れる<i></i></span>
							<span class="text circle_arrow" v-else-if="isVarious && !variousAllSelected">魚種を選択してください</span>
						</button>
						<p class="description">{{ product.description }}</p>
					</div>
					<div class="option_wrap border_h line_gray">
						<ul>
							<li class="flex" v-for="option in jsonList(product.options)">
								<span class="title">{{ option.title }}</span>
								<p class="option" v-text="option.value"></p>
							</li>
						</ul>
					</div>
					<div class="more_wrap">
						<button @click="modalOpen()">原材料を見る</button>
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
									variants(first: 5) {
										nodes {
											id
											title
											price
											sku
											image {
												url
											}
											delivery_fee: metafield(namespace: "my_fields" key: "delivery_fee") {
												value
											}
											set_detail: metafield(namespace: "my_fields" key: "set_detail") {
												value
											}
										}
									}
									collection: collections(first: 1) {
										nodes {
											id
											title
											handle
											description
										}
									}
									options: metafield(namespace: "my_fields" key: "options") {
										value
									}
									materials: metafield(namespace: "my_fields" key: "materials") {
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
				const product = res[0].data.data.product
				const variant = product.variants.nodes[0]
				const mainVisual = product.featuredImage
				console.log(product.variants)
				return { product, variant, mainVisual }
			})

		} catch(error) {
			console.log('error')
		}
	},
	head() {
		return {
			title: this.product.title + ' - 阿部守商店',
			meta: [
				{ hid: 'og:title', property: 'og:title', content: this.product.title + ' - 阿部守商店' },
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
			bag: 0,
			variousSelectedAll: false
		}
	},
	mounted() {

		const cookieItems = this.$cookies.get('CartItems') ? this.$cookies.get('CartItems') : 0
		this.$store.commit('update', cookieItems)

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
		isVarious: function() {
			return this.product.collection.nodes[0].handle == 'various'
		},
		variousAllSelected: function() {
			return this.variousSelectedAll
		}
	},
	methods: {
		visualListClick: function(image) {
			this.mainVisual = image
		},
		jsonList: function(json) {
			const array = JSON.parse(json.value)
			return array
		},
		modalOpen: function() {
			this.modalStatus = 'open'
		},
		modalClose: function() {
			this.modalStatus = ''
		},
		variantSelect: function(index) {
			this.variant = this.product.variants.nodes[index]
		},
		variousOption: function(index) {
			const setList = [
				this.$refs.set_1,
				this.$refs.set_2,
				this.$refs.set_3,
				this.$refs.set_4,
				this.$refs.set_5,
				// this.$refs.set_6,
				// this.$refs.set_7,
				// this.$refs.set_8
			]
			const variousSelect = setList[index - 1]
			return variousSelect.options[variousSelect.selectedIndex].value
		},
		variousSelected: function(index) {
			const set_1_is_selected = this.variousOption(1) != '選択してください'
			const set_2_is_selected = this.variousOption(2) != '選択してください'
			const set_3_is_selected = this.variousOption(3) != '選択してください'
			const set_4_is_selected = this.variousOption(4) != '選択してください'
			const set_5_is_selected = this.variousOption(5) != '選択してください'
			// if (this.product.variant.handle != 'eight') {
			// 	const set_6_is_selected = this.variousOption(6) != '選択してください'
			// 	const set_7_is_selected = this.variousOption(7) != '選択してください'
			// 	const set_8_is_selected = this.variousOption(8) != '選択してください'
			// 	return set_1_is_selected && set_2_is_selected && set_3_is_selected && set_4_is_selected && set_5_is_selected && set_6_is_selected && set_7_is_selected && set_8_is_selected
			// } else {
				this.variousSelectedAll = set_1_is_selected && set_2_is_selected && set_3_is_selected && set_4_is_selected && set_5_is_selected
			// }
		},
		updateLineItem: function(e) {
			this.quantity = Number(e.target.options[e.target.selectedIndex].value);
		},
		async addToCart() {

			const variantId = this.variant.id
			const noshiSelect = this.$refs.noshi
			const noshiOption = noshiSelect.options[noshiSelect.selectedIndex].value
			const bagSelect = this.$refs.bag
			const bagOption = noshiSelect.options[bagSelect.selectedIndex].value
			const attributes = [
				{
					key: 'noshi', value: noshiOption,
					key: 'bag', value: bagOption
				}
			]
			if ( this.product.collection.nodes[0].handle == 'various' ) {
				attributes['set_1'] = variousOption(1)
				attributes['set_2'] = variousOption(2)
				attributes['set_3'] = variousOption(3)
				attributes['set_4'] = variousOption(4)
				attributes['set_5'] = variousOption(5)
				// if (this.product.variant.handle != 'eight') {
				// 	attributes['set_6'] = variousOption(6)
				// 	attributes['set_7'] = variousOption(7)
				// 	attributes['set_8'] = variousOption(8)
				// }
			}
			try {
				const checkoutId = this.$cookies.get('CheckoutId')
				const lineItemsToAdd = [
					{
						variantId: variantId,
						quantity: 1,
						customAttributes: attributes,
					},
				];
				const newC = await this.$shopify.checkout.create()
				console.log(checkoutId)
				if (checkoutId == '' || checkoutId === null || checkoutId === undefined) {
					console.log('こっち');
					console.log(checkoutId);
					this.$shopify.checkout.create().then((checkout) => {
						console.log(checkout);

						this.$shopify.checkout.addLineItems(checkout.id, lineItemsToAdd).then((updatedCheckout) => {
							console.log(updatedCheckout)
							console.log(updatedCheckout.lineItems)
							// location.href = checkout.webUrl;
							this.$store.commit('add')
							this.$cookies.set('CheckoutId', updatedCheckout.id, { path: '/', maxAge: 60 * 60 * 24 * 15 })
							this.$cookies.set('CartItems', updatedCheckout.lineItems.length, { path: '/', maxAge: 60 * 60 * 24 * 15 })
							location.href = '/cart';
						});

					});
				} else {
					console.log('here');
					
					this.$shopify.checkout.addLineItems(checkoutId, lineItemsToAdd).then((updatedCheckout) => {
						console.log(updatedCheckout)
						console.log(updatedCheckout.lineItems)
						// location.href = checkout.webUrl;
						var items = 0
						updatedCheckout.lineItems.forEach((item, index) => {
							items += item.quantity
						})
						this.$store.commit('update', items)
						this.$cookies.set('CartItems', items, { path: '/', maxAge: 60 * 60 * 24 * 15 })
						location.href = '/cart';
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
						margin-top: 1.7rem;
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
						top: 1.7rem;
						right: 1.7rem;
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
					h1 {
						font-size: 3.3rem;
						line-height: 1.5;
					}
					h2 {
						margin-top: 0.8rem;
						font-size: 1.3rem;
						line-height: 1.75;
					}
					.variant_title {
						margin-top: 2.4rem;
						h4 {
							font-size: 1.6rem;
							line-height: 1.5;
						}
						h5 {
							margin-left: 0.6rem;
							margin-right: 0.4rem;
							font-size: 2rem;
							line-height: 1.5;
						}
						.tax,
						.set,
						.devide {
							padding-bottom: 0.2rem;
							font-size: 1.3rem;
							line-height: 1.5;
						}
					}
				}
				.variant_wrap {
					padding-bottom: 3.5rem;
					&:before {
						content: none;
					}
					.variant_list {
						li {
							margin-bottom: 1.5rem;
							a, button {
								// width: calc(100% - 2px);
								border: 1px solid rgba(0, 0, 0, 0.2);
								.img_wrap {
									width: 23%;
									img {
										height: 100%;
										object-fit: cover;
									}
								}
								.text_wrap {
									padding: 1.2rem;
									width: calc(77% - 2.4rem);
									.variant_title {
										h4 {
											font-size: 1.3rem;
											line-height: 1.5;
										}
										h5 {
											margin-left: 0.6rem;
											margin-right: 0.4rem;
											font-size: 1.6rem;
											line-height: 1.5;
										}
										.tax,
										.set,
										.devide {
											padding-bottom: 0.2rem;
											font-size: 1.1rem;
											line-height: 1.5;
										}
									}
									.variant_content {
										margin-top: 0.6rem;
										font-size: 1.2rem;
										line-height: 1.5;
										color: #696A6B;
									}
								}
								&.selected,
								&:hover {
									background-color: #FFFFFF;
									border-color: #000000;
								}
							}
							&:last-of-type {
								margin-bottom: 0;
							}
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
							right: 1.3rem;
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
							padding: 1.5rem 1.3rem;
							width: calc(100% - 2.6rem);
							font-size: 1.4rem;
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
								margin-top: 1.3rem;
								.title {
									font-size: 1.4rem;
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
							margin-top: 1.3rem;
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
						&.various_not_full {
							background-color: #818283;
						}
					}
					.description {
						margin: 3.5rem auto 2.4rem;
						font-size: 1.4rem;
						line-height: 1.75;
					}
				}
				.option_wrap {
					padding: 2.4rem 0;
					ul {
						li {
							margin-bottom: 1.7rem;
							* {
								font-size: 1.3rem;
								line-height: 1.75;
							}
							.title {
								width: 20%;
							}
							.option {
								width: 75%;
								white-space: pre-wrap;
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
						font-size: 1.4rem;
						line-height: 1.75;
						&:before {
							content: '';
							position: absolute;
							top: 0;
							left: 0;
							bottom: 0;
							display: block;
							margin: auto;
							width: 1.7rem;
							height: 1.7rem;
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
							padding: 2.4rem 1.7rem;
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
									font-size: 1.7rem;
									line-height: 1.5;
								}
								.description {
									margin-top: 1.7rem;
									font-size: 1.4rem;
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
						padding: 3rem 0 0;
						h1 {
							font-size: 2.4rem;
						}
						h2 {
							font-size: 1.3rem;
						}
						.price_wrap {
							margin-top: 2rem;
							h4 {
								font-size: 1.3rem;
							}
							h5 {
								font-size: 1.8rem;
							}
							.tax,
							.set,
							.devide {
								font-size: 1.2rem;
							}
						}
					}
					.variant_wrap {
						padding-bottom: 3rem;
						.variant_list {
							li {
								margin-bottom: 1.2rem;
								a, button {
									.text_wrap {
										padding: 1rem;
										width: calc(75% - 2rem);
										.variant_title {
											h4 {
												display: block;
												width: 100%;
												font-size: 1.2rem;
											}
											h5 {
												margin-left: 0;
											}
											.tax,
											.set,
											.devide {
												font-size: 1rem;
											}
										}
										.variant_content {
											margin-top: 0.4rem;
											font-size: 1rem;
										}
									}
								}
							}
						}
					}
					.cart_wrap {
						.select_wrap {
							select {
								font-size: 1.3rem;
							}
						}
						.noshi_wrap {

						}
						.choice_list_wrap {
							padding: 3rem 0;
							.choice_list {
								li {
									.title {
										font-size: 1.3rem;
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
								font-size: 1.5rem;
							}
						}
						.description {
							margin-top: 3rem;
							font-size: 1.3rem;
						}
					}
					.option_wrap {
						padding-top: 2rem;
						ul {
							li {
								* {
									font-size: 1.3rem;
								}
								.title {
									width: 24%;
								}
								.option {
									width: 69%;
								}
							}
						}
					}
					.more_wrap {
						padding-top: 2rem;
						button {
							font-size: 1.3rem;
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
								padding: 1.6rem 1.3rem;
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
										margin-top: 1.3rem;
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