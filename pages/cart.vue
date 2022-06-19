<template>
	<main :class="{'visible': loaded}">

		<section id="mv" class="mv" :class="">
			<div class="contents_wrap">
				<h1 class="title mincho">カート</h1>
				<div class="cart_wrap flex align-start" :class="">
					<NuxtLink to="/products" class="to_shopping circle_arrow">お買い物を続ける<i></i></NuxtLink>
					<div class="cart-items" id="main-cart-items" v-show="checkoutData.length != 0 && checkoutData.lineItems.length != 0">
						<table class="">
							<thead class="border_h">
								<tr>
									<th class="name" colspan="2" scope="col">商品</th>
									<th class="num" colspan="1" scope="col">数量	</th>
									<th class="sum" colspan="1" scope="col">小計</th>
								</tr>
							</thead>

							<tbody>
								<tr class="cart-item border_h line_1" id="CartItem" v-for="item in checkoutData.lineItems" :key="item.id">
									<td class="thumbnail">
										<a href="" class="ratio-fixed">
											<img class="" :src="item.variant.image.src">
										</a>
									</td>
									<td class="detail">
										<NuxtLink class="" :to="{ name: 'products-id', params: { id: item.product } }">{{ item.title }}</NuxtLink>
										<span class="original_price">{{ Number(item.variant.price).toLocaleString() }} 円</span>
										<span class="noshi">{{ item.customAttributes[0].value }}</span>
									</td>
									<td class="quantity">
										<div class="select_wrap">
											<select
												class=""
												@change="updateLineItem"
												id="Quantity"
												:data-id="item.id"
											>
												<option :value="num" v-for="num in 100" :selected="num == item.quantity">{{ num }}</option>
											</select>
										</div>
										<button id="remove" class="remove underline" @click="deleteLineItem(item.id)">削除</button>
									</td>
									<td class="totals">
										<span class="total_price">
											{{ Number(item.variant.price * item.quantity).toLocaleString() }} 円
										</span>
									</td>
								</tr>
							</tbody>
						</table>

						<div class="cart_note_wrap border_h line_gray">
							<h3>備考欄</h3>
							<textarea class="" rows="4" ref="note" id="Cart-note" placeholder="注文する方とお届け先が異なる場合などは、こちらにご記入ください。">{{ checkoutData.note }}</textarea>
						</div>

						<div class="total_wrap blocks border_h line_gray">
							<div class="totals flex subtotals">
								<h3 class="subtotal_title">商品合計</h3>
								<p class="subtotal value">{{ subtotalPrice }} 円</p>
							</div>
							<div class="tax-note totals flex">
								<h3 class="tax_title">送料</h3>
								<p class="tax value">購入手続き時に計算されます</p>
							</div>
							<div class="totals final flex align-center">
								<h3 class="total_title">合計</h3>
								<p class="total_price value">{{ totalPrice }} 円</p>
							</div>
						</div>
						<div class="delivery_date_wrap delivery_wrap blocks border_h line_gray">
							<h3 class="">配送希望日</h3>
							<p class="caution">本日より5日後以降、60日以前の日付をご指定ください。</p>
							<button id="not_scheduled" class="schedule_button scheduled" ref="not_scheduled" @click="notScheduledClick">
								<span class="submit_text circle_arrow">指定しない（最短発送）</span>
							</button>
							<button id="scheduled" class="schedule_button" ref="scheduled" @click="scheduledClick">
								<span class="submit_text circle_arrow">指定する</span>
							</button>
							<div id="calender_box" class="calender_wrap not_scheduled" ref="calender_box">
								<div class="calender_title flex align-center">
									<button id="previous_month" class="previous_month" ref="previous_month" @click="previousMonthClick"></button>
									<span id="this_month" class="this_month" ref="this_month"></span>
									<button id="next_month" class="next_month" ref="next_month" @click="nextMonthClick"></button>
								</div>
								<table id="calender" class="calender" ref="calender">
									<thead>
										<tr>
											<th>日</th>
											<th>月</th>
											<th>火</th>
											<th>水</th>
											<th>木</th>
											<th>金</th>
											<th>土</th>
										</tr>
									</thead>
									<tbody v-html="calenderContent" @click="calenderClick">
									</tbody>
								</table>
							</div>
						</div>
						<div class="delivery_time_wrap delivery_wrap blocks border_h line_gray">
							<h3 class="">希望時間帯</h3>
							<div class="select_wrap">
								<select class="delivery_time"
									type="number"
									name="updates[]"
									min="0"
									id="delivery_time"
									ref="delivery_time"
								>
									<option value="指定なし" selected>指定なし</option>
									<option value="午前中">午前中</option>
									<option value="14:00 ～ 16:00">14:00 ～ 16:00</option>
									<option value="16:00 ～ 18:00">16:00 ～ 18:00</option>
									<option value="18:00 ～ 20:00">18:00 ～ 20:00</option>
									<option value="19:00 ～ 21:00">19:00 ～ 21:00</option>
								</select>
							</div>
						</div>
						<div class="checkout_wrap blocks">
							<button type="submit" id="checkout" class="submit_button" :disabled="!checkoutData" @click="goToCheckout">
								<span class="submit_text circle_arrow">ご購入手続きへ<i></i></span>
							</button>
						</div>
					</div>
					<p class="cart__empty-text no_item" v-show="checkoutData.length == 0 || checkoutData.lineItems.length == 0">カートに商品が入っていません。</p>
				</div>
				<div class="collection featured-product">
					<div class="contents flex border_h line_1">
						<h2 class="mincho">おすすめ商品</h2>
						<ul class="flex flex-start">
							<li class="border_v" v-for="product in products">
								<NuxtLink class="product-card border_h" :to="{ name: 'products-id', params: { id: product.handle } }">
									<div class="card ratio-fixed">
										<img :src="product.featuredImage.url" loading="lazy">
									</div>
									<div class="information">
										<span class="product_title">{{ product.title }}</span>
										<div class="price_wrap flex flex-start">
											<span class="price">{{ Number(product.variant.nodes[0].price).toLocaleString() }} 円〜</span>
											<span class="tax">税込・送料無料</span>
										</div>
									</div>
								</NuxtLink>
							</li>
						</ul>
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
	name: 'CartPage',
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
										featuredImage {
											url
										}
										variant: variants(first: 1) {
											nodes {
												id
												price
											}
										}
										sub_title: metafield(namespace: "my_fields" key: "sub_title") {
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
				const date = new Date();
				var year = date.getFullYear();
				var month = date.getMonth();
				const thisYear = year;
				const thisMonth = month + 1;
				const today = date.getDate() + 5;
				var deliveryDate = year + '-' + thisMonth + '-' + today;
				var dateSelected = false;

				const products = res[0].data.data.products.nodes

				return 	{ year, month, thisYear, thisMonth, today, deliveryDate, dateSelected, products }
			})
		} catch(error) {
			console.log(error)
			console.log('error')
		}
	},
	data() {
		return {
			loaded: false,
			checkoutId: '',
			checkout: [],
			calenderContent: '',
		}
	},
	mounted() {
		const id = sessionStorage.getItem('CheckoutId')
		this.checkoutId = id
		if (id != '') {
			this.checkoutId = id
			this.getCheckout(id)
		} else {
			this.checkout['lineItems'] = []
		}

		this.makeTableCalender();
	},
	computed: {
		checkoutData: function() {
			return this.checkout
		},
		subtotalPrice: function() {
			return Number(this.checkout.subtotalPrice).toLocaleString()
		},
		totalPrice: function() {
			return Number(this.checkout.totalPrice).toLocaleString()
		}
	},
	methods: {

		async getCheckout(id) {
			try {
				this.checkout = await this.$shopify.checkout.fetch(id)
				console.log(this.checkout)
				this.loaded = true
			} catch(error) {
				console.log(error)
			}
		},

		goToCheckout: function() {
			try {
				const checkoutNote = this.$refs.note.value
				const timeSelect = this.$refs.delivery_time
				const deliveryTime = timeSelect.options[timeSelect.selectedIndex].value
				const attributes = {
					customAttributes: [
						{
							key: 'checkout-note', value: checkoutNote
						},
						{
							key: 'delivery-date', value: this.deliveryDate
						},
						{
							key: 'delivery-time', value: deliveryTime
						}
					]
				};
				this.$shopify.checkout.updateAttributes(this.checkoutId, attributes).then((finalCheckout) => {
					console.log(finalCheckout);
					location.href = finalCheckout.webUrl;
				});
			} catch(error) {
				console.log(error)
			}
		},

		updateLineItem: function(e) {
			console.log(e.target)
			const lineItemId = e.target.dataset.id;
			const value = Number(e.target.options[e.target.selectedIndex].value);
			console.log(lineItemId)
			try {
				const lineItemsToUpdate = [{ id: lineItemId, quantity: value }];

				this.$shopify.checkout.updateLineItems(this.checkoutId, lineItemsToUpdate).then((newCheckout) => {
					console.log(newCheckout.lineItems);
					this.checkout = newCheckout
					sessionStorage.setItem('CartItems', newCheckout.lineItems.length)
				});
			} catch(error) {
				console.log(error)
			}
		},
		deleteLineItem: function(lineItemId) {
			try {
				this.$shopify.checkout.removeLineItems(this.checkoutId, lineItemId).then((deletedCheckout) => {
					console.log(deletedCheckout.lineItems);
					this.checkout['lineItems'] = []
				});
			} catch(error) {
				console.log(error)
			}
		},

		

		notScheduledClick: function() {

			this.$refs.not_scheduled.classList.add('scheduled');
			this.$refs.scheduled.classList.remove('scheduled');
			this.$refs.calender_box.classList.add('not_scheduled');

		},
		scheduledClick: function() {

			this.$refs.not_scheduled.classList.remove('scheduled');
			this.$refs.scheduled.classList.add('scheduled');
			this.$refs.calender_box.classList.remove('not_scheduled');

		},
		makeTableCalender: function() {

			const firstDate = new Date(this.year, this.month, 1);
			const firstDayOfTheWeek = firstDate.getDay();
			const lastDate = new Date(this.year, this.month + 1, 0);
			const lastDay = lastDate.getDate();

			var calenderHTML = '';
			var day = 1;
			var isNextMonth = false;
			var monthData = this.month + 1;

			this.$refs.this_month.textContent = this.year + '年' + monthData + '月';

			if ( this.month + 1 == this.thisMonth ) {
				this.$refs.previous_month.classList.add('disable');
			} else {
				this.$refs.previous_month.classList.remove('disable');
				isNextMonth = true;
			}
			if ( (this.year == this.thisYear && this.thisMonth + 2 < this.month) ||
				 (this.year != this.thisYear && this.thisMonth - 10 < this.month) ) {
				this.$refs.next_month.classList.add('disable');
			} else {
				this.$refs.next_month.classList.remove('disable');
			}


			for(let w = 0; w < 6; w++) {
				calenderHTML += '<tr>';
				for(let d = 0; d < 7; d++) {
					if ( lastDay < day ) {
						day = 1;
						isNextMonth = true;
						monthData = monthData + 1;
					}
					if ( (w == 0 && d < firstDayOfTheWeek) ) {
						calenderHTML += '<td></td>';
					} else {
						const dateData = this.year + '-' + monthData + '-' + day;
						if ( dateData == this.deliveryDate ) {
							calenderHTML += '<td class="delivery">' + day + '</td>';
						} else if ( !isNextMonth && day < this.today ) {
							calenderHTML += '<td class="disable">' + day + '</td>';
						} else if ( !isNextMonth && !this.dateSelected && day == this.today ) {
							calenderHTML += '<td class="default">' + day + '</td>';
						} else {
						//                 const dateData = year + '-' + monthData + '-' + day;
							calenderHTML += '<td><button data-date="' + dateData + '">' + day + '</button></td>';
						}
						day++;
					}
				}
				calenderHTML += '</td>';
			}

			this.calenderContent = calenderHTML;

		},
		calenderClick: function(e) {

			if ( e.target.dataset.date ) {
				this.deliveryDate = e.target.dataset.date;
				this.dateSelected = true;

				this.makeTableCalender();
			}

		},
		nextMonthClick: function(e) {

			console.log(this.year)
			console.log(this.month)

			if ( (this.year == this.thisYear && this.thisMonth + 2 < this.month) ||
				 (this.year != this.thisYear && this.thisMonth - 10 < this.month) ) {
				return;
			}

			this.month = this.month + 1;
			if ( this.month == 12 ) {
				this.year = this.year + 1;
				this.month = 0;
			}

			this.makeTableCalender();

		},
		previousMonthClick: function(e) {

			if ( this.year == this.thisYear && this.month < this.thisMonth ) {
				return;
			}

			this.month = this.month - 1;  
			if ( this.month < 0 ) {
				this.year = this.year - 1;
				this.month = 11;
			}

			this.makeTableCalender();

		}
	}
}
</script>

<style lang="scss" scoped>
	main {

		visibility: hidden;

		&.visible {
			visibility: visible;
		}

		.mv {
			position: relative;
			.contents_wrap {
				position: relative;
				padding: 15rem 10vw 0 22vw;
				h1,
				h2 {
					font-size: 2.5rem;
					line-height: 1.5;
				}
				.cart_wrap {
					margin-top: 2.4rem;
					.to_shopping {
						padding: 0.2rem 0.2rem 0 2.2rem;
						i {
							left: 0;
							right: initial;
							transform: rotate(180deg);
						}
					}
					.no_item {
						margin-top: 0.24rem;
						width: 75%;
						font-size: 1.4rem;
						line-height: 1;
					}
					.cart-items {
						width: 75%;
						table {
							display: table;
							width: 100%;
							.border_h:before {
								content: none;
							}
							thead {
								th {
									padding-bottom: 1.3rem;
									line-height: 1;
									text-align: left;
								}
								.name {
									width: 55%;
								}
								.num {
									width: 24%;
								}
								.sum {
									/*     width: 20%; */
									text-align: right;
								}
							}
							tbody {
								td {
									padding: 1.6rem 0;
									vertical-align: middle;
									&.thumbnail {
										width: 12%;
										a {
											display: block;
											padding-top: 100%;
											background-image: url('~/assets/img/item/no_image.svg');
											background-size: contain;
											background-repeat: no-repeat;
										}
									}
									&.detail {
										padding-left: 2rem;
										width: 42%;
										a {
											line-height: 1;
										}
										.original_price,
										.noshi {
											display: block;
											font-size: 1.4rem;
											line-height: 1.1;
										}
										.original_price {
											margin-top: 0.4rem;
										}
										.noshi {
											margin-top: 0.6rem;
											color: #818283;
										}
									}
									&.quantity {
										.select_wrap {
											position: relative;
											display: inline-block;
											background-color: #ffffff;
											select {
												position: relative;
												padding: 1.5rem 1.3rem;
												width: 8rem;
												font-size: 1.4rem;
												line-height: 1.5;
												z-index: 1;
											}
											&:after {
												content: '';
												position: absolute;
												top: 1.3rem;
												right: 1.3rem;
												display: block;
												width: 2.4rem;
												height: 2.4rem;
												background-image: url("~/assets/img/icon/toggle_black.svg");
												background-size: contain;
												background-repeat: no-repeat;
											}
										}
										.remove {
											margin: 0.6rem 0 0 1.6rem;
											line-height: 1;
										}
									}
									&.totals {
										font-size: 1.3rem;
										line-height: 1.5;
										text-align: right;
									}
								}
							}
						}
					}
					.cart_note_wrap {
						margin-top: 1.6rem;
						padding-bottom: 1.6rem;
						&:before {
							content: none;
						}
						h3 {
							line-height: 1;
						}
						textarea {
							margin-top: 1.6rem;
							padding: 2rem;
							width: calc(100% - 4rem);
						}
					}
					.blocks {
						margin-left: auto;
						padding: 1.6rem 0;
						width: 44%;
						&.border_h {
							&:before {
								content: none;
							}
						}
						h3,
						.value {
							font-size: 1.4rem;
							line-height: 1;
						}
					}
					.total_wrap {
						.tax-note {
							margin-top: 1.2rem;
						}
						.final {
							margin-top: 1.6rem;
							.total_price {
								font-size: 2.2rem;
								line-height: 1.5;
							}
						}
					}
					.delivery_wrap {
						.caution {
							margin-top: 1.2rem;
							font-size: 1.3rem;
							line-height: 1;
						}
					}
					.delivery_date_wrap {
						.schedule_button {
							margin-top: 1.3rem;
							padding: 1.2rem 0;
							width: 100%;
							border: 1px solid #000000;
							background-color: #ffffff;
							.circle_arrow {
								margin-left: 1.3rem;
								padding: 0 0.2rem 0 2.2rem;
								font-size: 1.4rem;
								line-height: 1.5;
								&:before,
								&:after {
									content: '';
									position: absolute;
									top: 0;
									bottom: 0;
									display: block;
									margin: auto;
									border-radius: 50%;
								}
								&:before {
									left: 0;
									width: 1.6rem;
									height: 1.6rem;
									border: 1px solid rgba(0, 0, 0, 0.3);
								}
							}
							&.scheduled {
								.circle_arrow {
									&:after {
										left: 0.5rem;
										width: 0.8rem;
										height: 0.8rem;
										background-color: #AA0813;
									}
								}
							}
						}
						.calender_wrap {
							position: relative;
							margin-top: 3.5rem;
							padding: 2rem 1rem;
							background-color: #FFFFFF;
							&.not_scheduled {
								display: none;
							}
							&:before {
								content: '';
								position: absolute;
								top: -1.8rem;
								left: 1.7rem;
								display: block;
								margin: auto;
								border-style: solid;
								border-color: transparent transparent #ffffff transparent;
								border-width: 0 2rem 2rem 2rem;
							}
							.calender_title {
								padding: 0 1rem;
								button {
									width: 2.4rem;
									height: 2.4rem;
									background-image: url("~/assets/img/icon/arrow_black.svg");
									background-size: contain;
									background-repeat: no-repeat;
								}
								.previous_month {
									transform: rotate(180deg);
								}
								.next_month {
									/*       transform: rotate(270deg); */
								}
								.disable {
									opacity: 0.2;
								}
							}
							.calender {
								margin-top: 2rem;
								width: 100%;
								border-spacing: 0 1rem;
								&::v-deep {
									th,
									td {
										width: 2.4rem;
										height: 2.4rem;
										text-align: center;
									}
									th {
										font-size: 1.3rem;
										line-height: 1.75;
										color: #818283;
									}
									td,
									td button {
										font-size: 1.4rem;
										line-height: 1.5;
										vertical-align: middle;
									}
									.disable {
										color: rgba(0, 0, 0, 0.2);
									}
									.default,
									.delivery {
										position: relative;
										color: #FFFFFF;
										z-index: 1;
										&:before {
											content: '';
											position: absolute;
											top: 0;
											left: 0;
											right: 0;
											bottom: 0;
											display: block;
											margin: auto;
											width: inherit;
											height: inherit;
											z-index: -1;
											border-radius: 50%;
											background-color: #AA0813;
										}
									}
								}
							}
						}
					}
					.delivery_time_wrap {
						.select_wrap {
							position: relative;
							margin-top: 1.3rem;
							border: 1px solid #000000;
							background-color: #ffffff;
							&:after {
								content: '';
								position: absolute;
								top: 0;
								right: 1.3rem;
								bottom: 0;
								margin: auto;
								display: block;
								width: 2.4rem;
								height: 2.4rem;
								background-image: url("~/assets/img/icon/toggle_black.svg");
								background-size: contain;
								background-repeat: no-repeat;
							}
							select {
								padding: 1.6rem 1.2rem;
								width: calc(100% - 2.4rem);
								font-size: 1.4rem;
								line-height: 1.5;
								z-index: 1;
							}
						}
					}
					.checkout_wrap {
						padding-bottom: 0;
						.submit_button {
							padding: 2.4rem 0;
							width: 100%;
							text-align: center;
							background-color: #AA0813;
							.submit_text {
								display: inline-block;
								color: #ffffff;
								line-height: 1;
								i {
									border-color: #ffffff;
									&:before,
									&:after {
										background-image: url("~/assets/img/icon/arrow_white.svg");
									}
								}
							}
						}
					}
				}
				.featured-product {
					margin-top: 6rem;
					.contents {
						padding: 6rem 0 12rem;
						&:after {
							content: none;
						}
					}
					ul {
						// margin-top: 2.5rem;
						width: 75%;
						li {
							width: 33.33%;
							&:not(:first-of-type) {
								&:before {
									content: none;
								}
							}
							.product-card {
								width: 100%;
								.card {
									padding-top: 100%;
									background-image: url("~/assets/img/item/no_image.svg");
									background-size: contain;
									background-repeat: no-repeat;
								}
								.information {
									padding: 1.6rem;
									.product_title {
										display: block;
										line-height: 1.5;
									}
									.price_wrap {
										margin-top: 0.8rem;
										& * {
											display: inline-block;
											font-size: 1.3rem;
										}
										.tax {
											margin-left: 0.8rem;
										}
									}
								}
							}
						}
					}
				}
				@media only screen and (max-width: 980px) {
					padding: 15rem 6.4vw 0;
					h1,
					h2 {
						font-size: 2rem;
					}
					.cart_wrap {
						margin-top: 1.5rem;
						.to_shopping {
						}
						.no_item {
							margin-top: 3.5rem;
							width: 100%;
							font-size: 1.2rem;
						}
						.cart-items {
							margin-top: 3.5rem;
							width: 100%;
							table {
								thead {
									display: none;
								}
								tbody {
									td {
										padding: 2.4rem 0;
										&.thumbnail {
											width: 27%;
										}
										&.detail {
											padding-left: 1.2rem;
											width: 46%;
											.original_price,
											.noshi {
												font-size: 1.1rem;
											}
											.original_price {
												margin-top: 0.2rem;
											}
											.noshi {
												margin-top: 0.4rem;
											}
										}
										&.quantity {
											width: 27%;
											text-align: right;
											.select_wrap {
												margin-top: 3.5rem;
												select {
													padding: 0.8rem 0.6rem;
													width: 6rem;
													font-size: 1.1rem;
												}
												&:after {
													top: 0.6rem;
													right: 0.6rem;
													width: 2rem;
													height: 2rem;
												}
											}
											.remove {
												font-size: 1rem;
											}
										}
										&.totals {
											position: absolute;
											top: 1rem;
											right: 0;
											.total_price {
												font-size: 1.1rem;
											}
										}
									}
								}
							}
						}
						.cart_note_wrap {
							textarea {
								margin-top: 1rem;
								padding: 1.2rem;
								width: calc(100% - 2.4rem);
							}
						}
						.blocks {
							width: 100%;
							h3,
							.value {
								font-size: 1.2rem;
							}
						}
						.total_wrap {
							.tax-note {
								margin-top: 1rem;
							}
							.final {
								margin-top: 1.2rem;
								.total_price {
									font-size: 1.6rem;
								}
							}
						}
						.delivery_wrap {
							.caution {
								font-size: 1.1rem;
							}
						}
						.delivery_date_wrap {
							.schedule_button {
								.circle_arrow {
									font-size: 1.1rem;
								}
							}
							.calender_wrap {
								margin-top: 3rem;
							}
						}
						.delivery_time_wrap {
							.select_wrap {
								&:after {
									content: '';
									position: absolute;
									top: 0;
									right: 1.3rem;
									bottom: 0;
									margin: auto;
									display: block;
									width: 2.4rem;
									height: 2.4rem;
									background-image: url("~/assets/img/icon/toggle_black.svg");
									background-size: contain;
									background-repeat: no-repeat;
								}
								select {
									font-size: 1.1rem;
								}
							}
						}
						.checkout_wrap {
						}
					}
					.featured-product {
						margin-top: 3.5rem;
						.contents {
							padding: 3.5rem 0 6rem;
						}
						ul {
							margin-top: 1.6rem;
							width: 100%;
							li {
								width: 50%;
								&:not(:first-of-type) {
									&:before {
										content: '';
									}
								}
								&:nth-of-type(even) {
									&:before {
										content: none;
									}
								}
								.product-card {
									.information {
										padding: 1.2rem;
										.product_title {
											display: block;
											line-height: 1.5;
										}
										.price_wrap {
											margin-top: 0.6rem;
											& * {
												font-size: 1.1rem;
											}
											.tax {
												margin-left: 0.6rem;
											}
										}
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