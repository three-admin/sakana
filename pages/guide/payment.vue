<template>
	<main class="guide template_mv">

		<section id="mv" class="mv">
			<div class="title_wrap">
				<span class="sub_title">ご利用案内</span>
				<h1 class="mincho">お支払い方法・返品について</h1>
			</div>
			<div class="menu_wrap flex flex-start border_h line_gray">
				<h2 class="title">ご利用案内メニュー</h2>
				<ul id="guide_menu" class="mv_menu flex flex-start">
					<li>
						<NuxtLink class=" hover_red" to="/guide/delivery">配送・送料</NuxtLink>
					</li>
					<li id="menu_payment">
						<NuxtLink class="now hover_red" to="/guide/payment">お支払い方法・返品</NuxtLink>
					</li>
					<li>
						<NuxtLink class=" hover_red" to="/guide/gift">梱包・ギフト包装</NuxtLink>
					</li>
					<li>
						<NuxtLink class=" hover_red" to="/guide/qa">よくあるご質問</NuxtLink>
					</li>
					<li>
						<NuxtLink class=" hover_red" to="/guide/notation">特定商取引法に基づく記載</NuxtLink>
					</li>
				</ul>
				
			</div>
		</section>

		<section id="terms" class="terms contents">
			<div class="contents_wrap">
				<h2 class="mincho">お支払い方法について</h2>
				<div class="inner_wrap">
					<h3>クレジットカード決済（VISA / MASTER / JCB / AMEX）</h3>
					<p class="sentence">
						お客様のカード番号は、SSLで暗号化されて送信されますので、安心してご利用ください。
					</p>
				</div>
			</div>
			<div class="contents_wrap border_h">
				<h2 class="mincho">返品について</h2>
				<div class="inner_wrap">
					<p class="sentence">
						開封済みの商品やお客様のご都合による返品、交換の受付は致しかねますので、予めご了承ください。
					</p>
				</div>
			</div>
			<div class="contents_wrap border_h">
				<h2 class="mincho">キャンセルについて</h2>
				<div class="inner_wrap">
					<p class="sentence">
						商品発送前のキャンセルは発送日前日まで承っております。<br>
						お問合わせフォームより、必要事項をご入力の上、お問い合わせください。あらためて当店よりご連絡させていただきます。<br>
						<br>
						商品発送後のキャンセルについては、商品開封前で、商品に異常や破損がある場合のみ返品・交換を承っております。商品到着後、なるべく早めにご連絡ください。
					</p>
				</div>
			</div>
			<div class="contents_wrap border_h">
				<h2 class="mincho">不良品・誤納品対応について</h2>
				<div class="inner_wrap">
					<p class="sentence">
						商品の品質には万全の注意を払っておりますが、出荷間違いや配達中の事故等で商品に破損・損傷等が生じた場合につきまして、新しい商品と交換又は返金させていただきます。その場合は、できるだけ到着日中にご連絡ください。速やかに交換又は返金手配をさせていただきます。
					</p>
				</div>
			</div>
		</section>

	</main>
</template>

<script>
export default {
	name: 'PaymentGuidePage',
	head() {
		return {
			title: 'お支払い方法について - 阿部守商店',
			meta: [
				{ hid: 'og:title', property: 'og:title', content: 'お支払い方法について - 阿部守商店' },
				{ hid: 'og:url', property: 'og:url', content: 'https://abemamoru-shouten.com/guide/payment' },
			],
		}
	},
	mounted() {
		this.$scrollTo("#menu_payment", { container: "#guide_menu", offset: -25, duration: 0, x: true, y: false })
	}
}
</script>

<style lang="scss" scoped>
	main {

		.contents {
			.contents_wrap {
				.inner_wrap {
					h3 {
						margin-bottom: 1.3rem;
						@media only screen and (max-width: 980px) {
							margin-bottom: 0.8rem;
						}
					}
				}
			}
		}


	}
</style>