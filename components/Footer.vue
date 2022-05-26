<template>
	<footer>
		<nav class="footer_nav">
			<div class="nav_contents_wrap flex border_h line_1">
				<h3 class="">ご利用案内</h3>
				<ul class="info_list border_h">
					<li>
						<NuxtLink class="circle_arrow flex flex-start align-start" to="/delivery">
							<h4>お届けについて</h4>
							<p class="text">送料・配送時間方法・配送時間帯などについてのご案内</p>
							<i></i>
						</NuxtLink>
					</li>
					<li class="border_h line_1">
						<NuxtLink class="circle_arrow flex flex-start align-start" to="/payment">
							<h4>お支払い方法</h4>
							<p class="text">カード払い、代金引換、コンビニ決済からお選びいただけます。</p>
							<i></i>
						</NuxtLink>
					</li>
					<li class="border_h line_1">
						<NuxtLink class="circle_arrow flex flex-start align-start" to="/gift">
							<h4>ギフトのお荷物について</h4>
							<p class="text">ご依頼主様とお届け先が別の場合は、金額がわかる明細などは一切同封しておりませんので、ご安心ください。</p>
							<i></i>
						</NuxtLink>
					</li>
				</ul>
			</div>
			<div class="nav_contents_wrap flex border_h line_1">
				<h3 class="">店舗案内</h3>
				<ul class="info_list border_h">
					<li>
						<a class="circle_arrow flex flex-start align-start" target="_blank" href="">
							<h4>住所</h4>
							<p class="text">985-0061<br>宮城県塩釜市清水沢2-26-13</p>
							<i></i>
						</a>
					</li>
					<li class="border_h line_1">
						<a class="circle_arrow flex flex-start align-start" target="_blank" href="tel:022-364-9725">
							<h4>お電話でのお問い合わせ</h4>
							<p class="text">022-364-9725<br>受付時間：平日9時〜17時</p>
							<i></i>
						</a>
					</li>
					<li class="border_h line_1">
						<NuxtLink class="circle_arrow flex flex-start align-start" to="/contact">
							<h4>お問い合わせ</h4>
							<p class="text">お問い合わせフォームへ</p>
							<i></i>
						</NuxtLink>
					</li>
				</ul>
			</div>
			<div class="nav_contents_wrap flex">
				<p class="copyright">© ABE MAMORU SHOTEN. All Rights Reserved.</p>
				<div class="nav_list_wrap flex flex-start">
					<ul class="nav_list">
						<li>
							<NuxtLink class="hover_red" to="/products">商品一覧</NuxtLink>
						</li>
						<li>
							<NuxtLink class="hover_red" to="/about">私たちについて</NuxtLink>
						</li>
						<li>
							<NuxtLink class="hover_red" to="/about#reason">おいしさの理由</NuxtLink>
						</li>
						<li>
							<NuxtLink class="hover_red" to="/recipe">おさかなレシピ</NuxtLink>
						</li>
					</ul>
					<ul class="nav_list">
						<li>
							<NuxtLink class="hover_red" to="/news">お知らせ・ブログ</NuxtLink>
						</li>
						<li>
							<NuxtLink class="hover_red" to="/qa">よくあるご質問</NuxtLink>
						</li>
						<li>
							<NuxtLink class="hover_red" to="/terms">特定商取引法に基づく記載</NuxtLink>
						</li>
						<li>
							<NuxtLink class="hover_red" to="/contact">お問い合わせ</NuxtLink>
						</li>
					</ul>
					<ul class="nav_list">
						<li>
							<NuxtLink class="hover_red" to="/terms">利用規約</NuxtLink>
						</li>
						<li>
							<NuxtLink class="hover_red" to="/privacy">プライバシーポリシー</NuxtLink>
						</li>
						<li class="flex flex-start align-center">
							<a class="" target="_blank" href="">
							</a>
							<a class="" target="_blank" href="">
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</footer>
</template>

<style lang="scss" scoped>

	footer {
		background-image: url('~/assets/img/item/bg_aqua.svg');
		background-repeat: repeat;
		.footer_nav {
			padding: 12rem 10vw 6rem 16vw;
			.border_h {
				&:before {
					top: 0;
				}
				&:after {
					content: none;
				}
			}
			.nav_contents_wrap {
				h3, h4, h5 {
					width: 30%;
				}
				h3 {
					padding: 1.6rem 0;
					line-height: 1.5;
				}
				.info_list {
					margin-bottom: 1.8rem;
					width: 70%;
					li {
						a {
							padding: 1.6rem 0;
							h4 {
								line-height: 1.5;
							}
							.text {
								width: 44%;
								font-size: 1.2rem;
								line-height: 1.75;
							}
							i {
								bottom: 0;
								border-color: #000000;
								&:before,
								&:after {
									background-image: url('~/assets/img/icon/arrow_black.svg');
								}
							}
							&:hover {
								background-color: rgba(0, 0, 0, 0.05);
							}
						}
					}
					&:last-of-type {
						margin-bottom: 0;
					}
				}
				.copyright {
					margin-top: auto;
					font-size: 1rem;
					line-height: 1.75;
					color: #818283;
				}
				.nav_list_wrap {
					margin-top: 9rem;
					width: 70%;
					.nav_list {
						width: 30%;
						li {
							margin-bottom: 0.8rem;
							a {
								font-size: 1.2rem;
								line-height: 1.5;
							}
							&:last-of-type {
								margin-bottom: 0;
							}
						}
					}
				}
			}
			@media only screen and (max-width: 980px) {
				padding: 6rem 6.4vw 2.4rem;
				.nav_contents_wrap {
					&:before {
						content: none;
					}
					&:not(&:first-of-type) {
						margin-top: 2rem;
					}
					h3, h4, h5 {
						width: 100%;
					}
					h3 {
						padding-top: 0;
						font-size: 1.5rem;
					}
					.info_list {
						width: 100%;
						li {
							a {
								.text {
									margin-top: 0.4rem;
									width: 90%;
									font-size: 1rem;
								}
							}
						}
					}
					.copyright {
						margin-top: 2.4rem;
						order: 2;
					}
					.nav_list_wrap {
						margin-top: 6rem;
						width: 100%;
						.nav_list {
							width: 50%;
							li {
								
							}
							&:last-of-type {
								margin-top: 0.8rem;
								width: 100%;
								li {
									width: 50%;
									&:first-of-type {
										margin-left: auto;
									}
									&:last-of-type {
										margin-top: 2.4rem;
										margin-right: auto;
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