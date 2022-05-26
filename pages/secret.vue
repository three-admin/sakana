<template>
	<main>

		<cart-items class=" {% if cart == empty %} is-empty{% endif %}">
			<div class=""><!--     title-wrapper-with-link -->
				<h1 class="title title--primary">カート</h1>
				<div class="flex">
					<a href="" class="continue_shopping">お買い物を続ける</a>
					<!-- <form action="" class="cart__contents critical-hidden" method="post" id="cart">
						<div class="cart__items" id="main-cart-items" data-id="">
							<div class="js-contents">
								<table class="cart-items">
									<thead>
										<tr>
											<th class="caption-with-letter-spacing" colspan="2" scope="col">{{ 'sections.cart.headings.product' | t }}</th>
											<th class="medium-hide large-up-hide right caption-with-letter-spacing" colspan="1" scope="col">{{ 'sections.cart.headings.total' | t }}</th>
											<th class="cart-items__heading--wide small-hide caption-with-letter-spacing" colspan="1" scope="col">{{ 'sections.cart.headings.quantity' | t }}</th>
											<th class="small-hide right caption-with-letter-spacing" colspan="1" scope="col">{{ 'sections.cart.headings.total' | t }}</th>
										</tr>
									</thead>

									<tbody>
										<tr class="cart-item" id="CartItem-">
											<td class="cart-item__media">
												<a href="" class="cart-item__link" aria-hidden="true" tabindex="-1"> </a>
												<img class="cart-item__image"
												src=""
												alt=""
												loading="lazy"
												width="150"
												height=""
												>
											</td>

											<td class="cart-item__details">
												<p class="caption-with-letter-spacing light">{{ item.product.vendor }}</p>

												<a href="" class="cart-item__name h4 break">{{ item.product.title | escape }}</a>

												<dl>
													<div class="product-option">
														<dt>{{ option.name }}: </dt>
														<dd>{{ option.value }}</dd>
													</div>
													<div class="product-option">
														<dt>{{ property.first }}: </dt>
														<dd>
															<a href="" target="_blank">
																{{ property.last | split: '/' | last }}
															</a>
															{{ property.last }}
														</dd>
													</div>
												</dl>

												<p class="product-option">{{ item.selling_plan_allocation.selling_plan.name }}</p>

												<ul class="discounts list-unstyled" role="list" aria-label="">
													<li class="discounts__discount">
														{{ discount.title }}
													</li>
												</ul>

												<div class="cart-item__error" id="Line-item-error-" role="alert">
													<small class="cart-item__error-text"></small>
													<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-error" viewBox="0 0 13 13">
														<circle cx="6.5" cy="6.50049" r="5.5" stroke="white" stroke-width="2"/>
														<circle cx="6.5" cy="6.5" r="5.5" fill="#EB001B" stroke="#EB001B" stroke-width="0.7"/>
														<path d="M5.87413 3.52832L5.97439 7.57216H7.02713L7.12739 3.52832H5.87413ZM6.50076 9.66091C6.88091 9.66091 7.18169 9.37267 7.18169 9.00504C7.18169 8.63742 6.88091 8.34917 6.50076 8.34917C6.12061 8.34917 5.81982 8.63742 5.81982 9.00504C5.81982 9.37267 6.12061 9.66091 6.50076 9.66091Z" fill="white"/>
														<path d="M5.87413 3.17832H5.51535L5.52424 3.537L5.6245 7.58083L5.63296 7.92216H5.97439H7.02713H7.36856L7.37702 7.58083L7.47728 3.537L7.48617 3.17832H7.12739H5.87413ZM6.50076 10.0109C7.06121 10.0109 7.5317 9.57872 7.5317 9.00504C7.5317 8.43137 7.06121 7.99918 6.50076 7.99918C5.94031 7.99918 5.46982 8.43137 5.46982 9.00504C5.46982 9.57872 5.94031 10.0109 6.50076 10.0109Z" fill="white" stroke="#EB001B" stroke-width="0.7"/>
													</svg>
												</div>
											</td>

											<td class="cart-item__totals right medium-hide large-up-hide">
												<div class="loading-overlay hidden">
													<div class="loading-overlay__spinner">
														<svg aria-hidden="true" focusable="false" role="presentation" class="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
															<circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
														</svg>
													</div>
												</div>
												<div class="cart-item__price-wrapper">
													<dl class="cart-item__discounted-prices">
														<dt class="visually-hidden">
															{{ 'products.product.price.regular_price' | t }}
														</dt>
														<dd>
															<s class="cart-item__old-price price price--end">
																{{ item.original_line_price | money }}
															</s>
														</dd>
														<dt class="visually-hidden">
															{{ 'products.product.price.sale_price' | t }}
														</dt>
														<dd class="price price--end">
															{{ item.final_line_price | money }}
														</dd>
													</dl>
													<span class="price price--end">
														{{ item.original_line_price | money }}
													</span>

													<div class="unit-price caption">
														<span class="visually-hidden">{{ 'products.product.price.unit_price' | t }}</span>
														{{ item.variant.unit_price | money }}
														<span aria-hidden="true">/</span>
														<span class="visually-hidden">&nbsp;{{ 'accessibility.unit_price_separator' | t }}&nbsp;</span>
													</div>
												</div>
											</td>

											<td class="cart-item__quantity">
												<label class="visually-hidden" for="Quantity-">
													{{ 'products.product.quantity.label' | t }}
												</label>
												<quantity-input class="quantity">
													<button class="quantity__button no-js-hidden" name="minus" type="button">
														<span class="visually-hidden">{{ 'products.product.quantity.decrease' | t: product: item.product.title | escape }}</span>
													</button>
													<input class="quantity__input"
													type="number"
													name="updates[]"
													value=""
													min="0"
													>
													<button class="quantity__button no-js-hidden" name="plus" type="button">
														<span class="visually-hidden">{{ 'products.product.quantity.increase' | t: product: item.product.title | escape }}</span>
													</button>
												</quantity-input>

												<cart-remove-button id="Remove-" data-index="">
													<a href="" class="button button--tertiary" aria-label="">
													</a>
												</cart-remove-button>
											</td>

											<td class="cart-item__totals right small-hide">
												<div class="loading-overlay hidden">
													<div class="loading-overlay__spinner">
														<svg aria-hidden="true" focusable="false" role="presentation" class="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
															<circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
														</svg>
													</div>
												</div>

												<div class="cart-item__price-wrapper">
													<dl class="cart-item__discounted-prices">
														<dt class="visually-hidden">
															{{ 'products.product.price.regular_price' | t }}
														</dt>
														<dd>
															<s class="cart-item__old-price price price--end">
																{{ item.original_line_price | money }}
															</s>
														</dd>
														<dt class="visually-hidden">
															{{ 'products.product.price.sale_price' | t }}
														</dt>
														<dd class="price price--end">
															{{ item.final_line_price | money }}
														</dd>
													</dl>
													<span class="price price--end">
														{{ item.original_line_price | money }}
													</span>

													<div class="unit-price caption">
														<span class="visually-hidden">{{ 'products.product.price.unit_price' | t }}</span>
														{{ item.variant.unit_price | money }}
														<span aria-hidden="true">/</span>
														<span class="visually-hidden">&nbsp;{{ 'accessibility.unit_price_separator' | t }}&nbsp;</span>
													</div>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<p class="visually-hidden" id="cart-live-region-text" aria-live="polite" role="status"></p>
						<p class="visually-hidden" id="shopping-cart-line-item-status" aria-live="polite" aria-hidden="true" role="status">{{ 'accessibility.loading' | t }}</p>
					</form> -->
					
					<p class="cart__empty-text">カートに商品が入っていません。</p>
				</div>
			</div>
		</cart-items>		


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