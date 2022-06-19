<template>
	<main class="guide template_mv">

		<section id="mv" class="mv">
			<div class="title_wrap">
				<span class="sub_title">ご利用案内</span>
				<h1 class="mincho">特定商取引法に基づく記載</h1>
			</div>
			<div class="menu_wrap flex flex-start border_h line_gray">
				<h2 class="title">ご利用案内メニュー</h2>
				<ul class="mv_menu flex flex-start">
					<li>
						<NuxtLink class=" hover_red" to="/guide/delivery">配送</NuxtLink>
					</li>
					<li>
						<NuxtLink class=" hover_red" to="/guide/payment">お支払い方法・返品</NuxtLink>
					</li>
					<li>
						<NuxtLink class=" hover_red" to="/guide/gift">梱包・ギフト包装</NuxtLink>
					</li>
					<li>
						<NuxtLink class=" hover_red" to="/guide/qa">よくあるご質問</NuxtLink>
					</li>
					<li>
						<NuxtLink class="now hover_red" to="/guide/notation">特定商取引法に基づく記載</NuxtLink>
					</li>
				</ul>
				
			</div>
		</section>

		<section id="notation" class="notation contents">
			<div class="contents_wrap">
				<ul class="notation_list">
					<li class="flex flex-start border_h line_gray">
						<h3>販売業者</h3>
						<p class="text">有限会社 阿部守商店</p>
					</li>
					<li class="flex flex-start border_h line_gray">
						<h3>運営統括責任者</h3>
						<p class="text">阿部 久仁雄</p>
					</li>
					<li class="flex flex-start border_h line_gray">
						<h3>所在地</h3>
						<p class="text">985-0061<br>宮城県塩釜市清水沢2-26-13</p>
					</li>
					<li class="flex flex-start border_h line_gray">
						<h3>電話番号</h3>
						<p class="text">022-364-9725（平日9時〜17時）</p>
					</li>
					<li class="flex flex-start border_h line_gray">
						<h3>支払い方法</h3>
						<p class="text">クレジットカード決済（Shopify Payment）</p>
					</li>
					<li class="flex flex-start border_h line_gray">
						<h3>支払い時期</h3>
						<p class="text">ご注文時にご利用のカード会社へ承認手続き・請求処理を行います。（引き落とし日に関してはカード会社にお問い合わせ下さい）</p>
					</li>
					<li class="flex flex-start border_h line_gray">
						<h3>商品代金以外の必要料金</h3>
						<p class="text">消費税、送料（配送地域をもとに別途計算）、支払いに関する手数料など</p>
					</li>
					<li class="flex flex-start border_h line_gray">
						<h3>発送</h3>
						<p class="text">ヤマト運輸、佐川急便にて配送いたします。</p>
					</li>
					<li class="flex flex-start border_h line_gray">
						<h3>商品引渡し時期</h3>
						<p class="text">ご注文日より3営業日以内に宮城県塩竈市より発送いたします。</p>
					</li>
					<li class="flex flex-start border_h line_gray">
						<h3>キャンセル・変更</h3>
						<p class="text">発送日の前日まで可能です。それ以降の変更・キャンセルは対応致しかねます。</p>
					</li>
					<li class="flex flex-start border_h line_gray">
						<h3>返品</h3>
						<p class="text">
							生鮮食品のため、開封済みの商品やお客様のご都合による返品、交換の受付は致しかねます。<br>
							商品の品質には万全の注意を払っておりますが、万が一、出荷間違いや配達中の事故等で商品に破損・損傷等が生じた場合については、新しい商品と交換又は返金させていただきます。その場合は、できるだけ到着日中にご連絡ください。速やかに交換又は返金手配をさせていただきます。
						</p>
					</li>
					<li class="flex flex-start border_h line_gray">
						<h3>お問い合わせ</h3>
						<p class="text">
							フォームでの問い合わせ： <a href="//shop.abemamoru-shouten.com/pages/contact">問い合わせページ</a><br>
							お電話での問い合わせ： <a href="tel: 022-364-9725">022-364-9725</a>（受付時間：平日9時〜17時）
						</p>
					</li>
				</ul>
			</div>
		</section>

		


	</main>
</template>

<script>
export default {
	name: 'NotationPage',
	mounted() {
	}
}
</script>

<style lang="scss" scoped>
	main {

		.contents {
			.contents_wrap {
				.notation_list {
					li {
						padding: 2rem 0;
						&:before {
							content: none;
						}
						h3 {
							width: 33%;
							font-size: 1.5rem;
						}
						.text {
							width: 75%;
						}
						&:first-of-type {
							padding-top: 0;
						}
						@media only screen and (max-width: 980px) {
							padding: 1.6rem 0;
							h3 {
								width: 100%;
								padding-bottom: 0.6rem;
								// font-size: 1.3rem;
							}
							.text {
								width: 100%;
							}
						}
					}
				}
			}
		}


	}
</style>