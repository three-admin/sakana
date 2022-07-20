<template>
	<main class="guide template_mv">

		<section id="mv" class="mv">
			<div class="title_wrap">
				<span class="sub_title">ご利用案内</span>
				<h1 class="mincho">配送・送料について</h1>
			</div>
			<div class="menu_wrap flex flex-start border_h line_gray">
				<h2 class="title">ご利用案内メニュー</h2>
				<ul id="guide_menu" class="mv_menu flex flex-start">
					<li class="now" id="menu_delivery">
						<NuxtLink class=" hover_red" to="/guide/delivery">配送・送料</NuxtLink>
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
						<NuxtLink class=" hover_red" to="/guide/notation">特定商取引法に基づく記載</NuxtLink>
					</li>
				</ul>
				
			</div>
		</section>

		<section id="delivery" class="delivery contents">
			<div class="contents_wrap">
				<h2 class="mincho">配送・お届け日指定について</h2>
				<div class="inner_wrap">
					<ul class="text_list">
						<li>
							<span class="text">配送はすべて、クール便での配送になります。</span>
						</li>
						<!-- <li>
							<span class="text">送料が含まれた送料込み商品と、送料が別途かかる商品がございます。</span>
						</li> -->
						<li>
							<span class="text">ご注文日より、<span class="text red">3営業日以内に宮城県塩竈市より発送</span>いたします。</span>
						</li>
						<li>
							<span class="text">ヤマト運輸または佐川急便で、適宜発送いたします。</span>
						</li>
						<li>
							<span class="text">商品の配送は日本国内に限らせていただきます。</span>
						</li>
						<li>
							<span class="text">自然災害等の影響により、配送の遅延等が発生する場合がございます。</span>
						</li>
						<li>
							<span class="text red">お届け日のご指定はできません。</span>
						</li>
						<li>
							<span class="text">お届け時間帯はご指定いただけます。ご希望の場合は、ショッピングカートページにて指定時間帯を選択してください。</span>
						</li>
						<li>
							<span class="text">自然災害等の影響により、配送の遅延等が発生する場合がございます。</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="contents_wrap border_h">
				<h2 class="mincho">発送からお届け日までの目安</h2>
				<div class="inner_wrap">
					<h3>1日～2日でお届け可能なエリア</h3>
					<ul class="text_list">
						<li>
							<span class="text">[東北] 青森、岩手、秋田、宮城、山形、福島</span>
						</li>
						<li>
							<span class="text">[関東] 茨城、栃木、群馬、埼玉、千葉、東京、神奈川</span>
						</li>
						<li>
							<span class="text">[中部] 新潟、富山、石川、福井、山梨、長野、岐阜、静岡、愛知</span>
						</li>
						<li>
							<span class="text">[近畿] 三重、滋賀、京都、大阪、兵庫、奈良、和歌山</span>
						</li>
						<li>
							<span class="text">[中国] 鳥取、島根、岡山、広島、山口</span>
						</li>
						<li>
							<span class="text">[四国] 徳島、香川、愛媛、高知</span>
						</li>
						<li>
							<span class="text">[九州] 福岡、佐賀、長崎、熊本、大分、宮崎、鹿児島</span>
						</li>
					</ul>
				</div>
				<div class="inner_wrap">
					<h3>2日～3日でお届け可能なエリア</h3>
					<ul class="text_list">
						<li>
							<span class="text">北海道、沖縄</span>
						</li>
					</ul>
				</div>
				<div class="inner_wrap">
					<h3 class="red">※ご注意</h3>
					<ul class="text_list">
						<li>
							<span class="text">離島など一部地域は、配達不可となる場合がございます。</span>
						</li>
						<li>
							<span class="text">住所やお名前に不備がございますと、発送できない場合がございます。よくお確かめの上、ご注文をお願いいたします。</span>
						</li>
						<li>
							<span class="text">イベント出店時・繁忙シーズンなど、ご注文が集中した場合は、発送が遅れる場合がございます。</span>
						</li>
						<li>
							<span class="text">天候、交通事情等やむを得ない事情により配送が遅れる場合がございます。</span>
						</li>
						<li>
							<span class="text">ご注文確定後の時間帯指定や登録内容の変更はお受け致しかねます。</span>
						</li>
						<li>
							<span class="text">再配達指定期間を過ぎた場合は、返送となりますのでご注意ください。</span>
						</li>
					</ul>
				</div>
			</div>
		</section>

		<section id="fee" class="fee contents">
			<div class="contents_wrap border_h">
				<h2 class="mincho">送料について</h2>
				<div class="inner_wrap">
					<p class="sentence">
						当店の商品は全て、送料が含まれた金額となっております。<br>
						<span class="text red">※送料込みの商品の場合も、沖縄県への配送の場合のみ別途500円の離島料金がかかります。</span>
					</p>
				</div>
			</div>
		</section>

	</main>
</template>

<script>
export default {
	name: 'DeliveryGuidePage',
	head() {
		return {
			title: '配送・送料について - 阿部守商店',
			meta: [
				{ hid: 'og:title', property: 'og:title', content: '配送・送料について - 阿部守商店' },
				{ hid: 'og:url', property: 'og:url', content: 'https://abemamoru-shouten.com/guide/delivery' },
			],
		}
	},
	mounted() {
		this.$scrollTo("#menu_delivery", { container: "#guide_menu", offset: -25, duration: 0, x: true, y: false })
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