<template>
	<main class="guide template_mv">

		<section id="mv" class="mv">
			<div class="title_wrap">
				<span class="sub_title">ご利用案内</span>
				<h1 class="mincho">よくあるご質問</h1>
			</div>
			<div class="menu_wrap flex flex-start border_h line_gray">
				<h2 class="title">ご利用案内メニュー</h2>
				<ul id="guide_menu" class="mv_menu flex flex-start">
					<li>
						<NuxtLink class=" hover_red" to="/guide/delivery">配送・送料</NuxtLink>
					</li>
					<li>
						<NuxtLink class=" hover_red" to="/guide/payment">お支払い方法・返品</NuxtLink>
					</li>
					<li>
						<NuxtLink class=" hover_red" to="/guide/gift">梱包・ギフト包装</NuxtLink>
					</li>
					<li id="menu_qa">
						<NuxtLink class="now hover_red" to="/guide/qa">よくあるご質問</NuxtLink>
					</li>
					<li>
						<NuxtLink class=" hover_red" to="/guide/notation">特定商取引法に基づく記載</NuxtLink>
					</li>
				</ul>
			</div>
		</section>

		<section id="qa" class="qa contents">
			<div class="flex">
				<div class="nav_wrap">
					<ul class="nav_menu">
						<li>
							<button class=" hover_red" v-scroll-to="'#product'">商品について</button>
						</li>
						<li>
							<button class=" hover_red" v-scroll-to="'#order'">注文について</button>
						</li>
						<li>
							<button class=" hover_red" v-scroll-to="'#noshi'">のし、ギフトラッピングについて</button>
						</li>
<!-- 						<li>
							<button class=" hover_red" v-scroll-to="'#fee'">送料について</button>
						</li> -->
						<li>
							<button class=" hover_red" v-scroll-to="'#delivery'">お届けについて</button>
						</li>
						<li>
							<button class=" hover_red" v-scroll-to="'#payment'">お支払いについて</button>
						</li>
						<li>
							<button class=" hover_red" v-scroll-to="'#cancel'">交換・キャンセルについて</button>
						</li>
					</ul>
				</div>
				<div class="contents_wrap">
					<ul class="qa_list">
						<li id="product" class="">
							<h2 class="mincho">商品について</h2>
							<div class="qa_wrap border_h line_1" @click="toggleStatus(0)">
								<div class="qa border_v line_1">
									<h4 class="question" :class="{'open' : statusList[0]}">おさかなの素に骨はありますか？</h4>
									<p v-show="statusList[0]" class="answer">
										基本的に骨はすべて取り除いていますが、手作業の為、ごくまれに骨が残存する場合がございます。
									</p>
								</div>
							</div>
							<div class="qa_wrap border_h line_1" @click="toggleStatus(1)">
								<div class="qa border_v line_1">
									<h4 class="question" :class="{'open' : statusList[1]}">おすすめの食べ方を教えてください。</h4>
									<p v-show="statusList[1]" class="answer">
										おさかなの素の代表的な食べ方、「お茶漬け」と「炊き込みご飯」については、下記の記事を是非ご覧ください。<br>
										<NuxtLink class="" to="/news/news-01">「お茶漬け」の食べ方</NuxtLink><br>
										<NuxtLink class="" to="/news/news-02">「炊き込みご飯」の食べ方</NuxtLink><br>
										<br>
										他にもおさかなの素は様々な料理に活用できます。レシピページでおさかなの素を使った料理をご紹介しておりますので、是非そちらもご覧ください。<br>
										<NuxtLink class="" to="/recipe">レシピページ</NuxtLink>
									</p>
								</div>
							</div>
							<div class="qa_wrap border_h line_1" @click="toggleStatus(21)">
								<div class="qa border_v line_1">
									<h4 class="question" :class="{'open' : statusList[21]}">解凍方法を教えてください。</h4>
									<p v-show="statusList[21]" class="answer">
										冷凍状態のおさかなの素は、自然解凍または流水解凍をおすすめします。冷蔵庫に移して解凍される場合は、1日半程度で自然解凍できます。<br>
										※真空パックのままの湯煎解凍はパックが溶けてしまう可能性がございますのでご遠慮ください。<br>
										※電子レンジで解凍される場合は、必ずお皿に移した後、弱加熱で短めの時間に設定して解凍してください。
									</p>
								</div>
							</div>
						</li>

						<li id="order" class="">
							<h2 class="mincho">注文について</h2>
							<div class="qa_wrap border_h line_1" @click="toggleStatus(2)">
								<div class="qa border_v line_1">
									<h4 class="question" :class="{'open' : statusList[2]}">セット内容をすべて同じ魚種にしてもらうことはできますか？</h4>
									<p v-show="statusList[2]" class="answer">
										セット商品となりますので、申し訳ありませんが変更はできません。<br>
										今後、セット内容をご自由にお選びいただける商品も販売予定ですので、今しばらくお待ちください。
									</p>
								</div>
							</div>
							<div class="qa_wrap border_h line_1" @click="toggleStatus(3)">
								<div class="qa border_v line_1">
									<h4 class="question" :class="{'open' : statusList[3]}">会員登録は必要ですか？</h4>
									<p v-show="statusList[3]" class="answer">
										会員登録をしなくてもご購入いただけますが、会員登録をしておくと次回以降のご購入がスムーズになり、おすすめです。
									</p>
								</div>
							</div>
						</li>
						<li id="noshi" class="border_h">
							<h2 class="mincho">のし、ギフトラッピングについて</h2>
							<div class="qa_wrap border_h line_1" @click="toggleStatus(4)">
								<div class="qa border_v line_1">
									<h4 class="question" :class="{'open' : statusList[4]}">のしは付けられますか？</h4>
									<p v-show="statusList[4]" class="answer">
										はい、のしは無料でお付けいたします。のしをご希望の方は、商品ページでのしの種類をご選択ください。
									</p>
								</div>
							</div>
							<div class="qa_wrap border_h line_1" @click="toggleStatus(5)">
								<div class="qa border_v line_1">
									<h4 class="question" :class="{'open' : statusList[5]}">のしはどんな種類のものがありますか？</h4>
									<p v-show="statusList[5]" class="answer">
										のしの種類と使い分けについては、ご利用案内「梱包・ギフト包装」をご覧ください。<br>
										<NuxtLink class="underline" to="/guide/gift">梱包・ギフト包装について</NuxtLink>
									</p>
								</div>
							</div>
							<div class="qa_wrap border_h line_1" @click="toggleStatus(6)">
								<div class="qa border_v line_1">
									<h4 class="question" :class="{'open' : statusList[6]}">ギフト用に包装はできますか？</h4>
									<p v-show="statusList[6]" class="answer">
										無料のギフトラッピングサービスがございます。<br>
										ギフト梱包をご利用の場合は、商品ページにてご選択ください。<br>
										複数商品まとめてギフト梱包をご希望の場合は、その旨をカート画面の備考欄にご記入ください。<br>
										<br>
										また、ギフトラッピングサービスをお申し込みの場合に限らず、全てのお荷物に納品書は同梱しておりません。<br>
										納品書をご希望の方は、その旨をショッピングカートページの備考欄にご記入ください。
									</p>
								</div>
							</div>
						</li>
						<!-- <li id="fee" class="border_h">
							<h2 class="mincho">送料について</h2>
							<div class="qa_wrap border_h line_1" @click="toggleStatus(5)">
								<div class="qa border_v line_1">
									<h4 class="question" :class="{'open' : statusList[5]}">送料はどれくらいかかりますか？</h4>
									<p v-show="statusList[5]" class="answer">
										送料については以下のページをご覧ください。<br>
										<NuxtLink class="underline" to="/guide/fee">送料について</NuxtLink>
									</p>
								</div>
							</div>
							<div class="qa_wrap border_h line_1" @click="toggleStatus(6)">
								<div class="qa border_v line_1">
									<h4 class="question" :class="{'open' : statusList[6]}">商品それぞれに送料がかかるのですか？</h4>
									<p v-show="statusList[6]" class="answer">
										1回のご注文につき送料がかかります。複数配送先がある場合は、配送先の数だけ配送料が加算されます。<br>
										※配送料無料の商品でも、沖縄は500円の離島料金がかかります。
									</p>
								</div>
							</div>
						</li> -->
						<li id="delivery" class="border_h">
							<h2 class="mincho">お届けについて</h2>
							<div class="qa_wrap border_h line_1" @click="toggleStatus(7)">
								<div class="qa border_v line_1">
									<h4 class="question" :class="{'open' : statusList[7]}">お届け日の指定、時間帯指定はできますか？</h4>
									<p v-show="statusList[7]" class="answer">
										配送日の指定は承っておりませんが、お届け時間帯の指定は可能です。ご希望の場合は、ショッピングカートページにて指定時間帯をご選択ください。
									</p>
								</div>
							</div>
							<div class="qa_wrap border_h line_1" @click="toggleStatus(8)">
								<div class="qa border_v line_1">
									<h4 class="question" :class="{'open' : statusList[8]}">配送先を自宅と異なる場所にすることはできますか？</h4>
									<p v-show="statusList[8]" class="answer">
										はい、可能です。<br>
										ショッピングカートページで備考欄に「お届け先がご自宅と異なる旨」と「お届け先の住所・名前」をご記入ください。
									</p>
								</div>
							</div>
							<div class="qa_wrap border_h line_1" @click="toggleStatus(9)">
								<div class="qa border_v line_1">
									<h4 class="question" :class="{'open' : statusList[9]}">1回の注文で複数の配送先を指定することはできますか？</h4>
									<p v-show="statusList[9]" class="answer">
										複数の配送先指定は現在、承っておりません。<br>
										お手数ですが、お届け先ごとに注文をしていただきますようお願いします。
									</p>
								</div>
							</div>
							<div class="qa_wrap border_h line_1" @click="toggleStatus(10)">
								<div class="qa border_v line_1">
									<h4 class="question" :class="{'open' : statusList[10]}">贈り物なので金額がわからないようにしたいです。</h4>
									<p v-show="statusList[10]" class="answer">
										当店では、全てのお荷物に領収書や納品書などの購入金額がわかるものを同梱しておりません。<br>
										納品書をご希望の方は、その旨をショッピングカートページの備考欄にご記入ください。
									</p>
								</div>
							</div>
							
							<div class="qa_wrap border_h line_1" @click="toggleStatus(11)">
								<div class="qa border_v line_1">
									<h4 class="question" :class="{'open' : statusList[11]}">海外への発送は行っていますか？</h4>
									<p v-show="statusList[11]" class="answer">
										現在海外への発送は対応しておりません。ご了承ください。
									</p>
								</div>
							</div>
							<div class="qa_wrap border_h line_1" @click="toggleStatus(12)">
								<div class="qa border_v line_1">
									<h4 class="question" :class="{'open' : statusList[12]}">いつ頃に届きますか？</h4>
									<p v-show="statusList[12]" class="answer">
										通常、ご注文日より3営業日以内に発送いたしております。<br>
										※交通事情などにより遅延が発生する場合もございます、ご了承ください。
									</p>
								</div>
							</div>
							<div class="qa_wrap border_h line_1" @click="toggleStatus(13)">
								<div class="qa border_v line_1">
									<h4 class="question" :class="{'open' : statusList[13]}">長期不在で商品が返品されてしまいました。</h4>
									<p v-show="statusList[13]" class="answer">
										不在票が入ってからお客様のご連絡が無い場合は、通常１週間程度で弊社に荷物が戻ります。その場合はご注文をキャンセルとさせて頂きますので、お早め運送会社の営業所へご連絡をお願いいたします。<br>
										不在票がない場合はお問合せ窓口までお問い合わせください。<br>
										<br>
										また、商品発送後の再発送は承っておりません。<br>
										大変お手数ですが、ご希望の商品を再度ご注文いただけますようお願いいたします。
									</p>
								</div>
							</div>
							<div class="qa_wrap border_h line_1" @click="toggleStatus(14)">
								<div class="qa border_v line_1">
									<h4 class="question" :class="{'open' : statusList[14]}">配送会社はどの会社ですか？</h4>
									<p v-show="statusList[14]" class="answer">
										ヤマト運輸、佐川急便にて配送いたします。<br>									関東・沖縄への配送はヤマト運輸、関東・沖縄以外への地域への配送は佐川急便にて配送いたします。
									</p>
								</div>
							</div>
						</li>
						<li id="payment" class="border_h">
							<h2 class="mincho">お支払いについて</h2>
							<div class="qa_wrap border_h line_1" @click="toggleStatus(15)">
								<div class="qa border_v line_1">
									<h4 class="question" :class="{'open' : statusList[15]}">支払いは、どんな方法がありますか？</h4>
									<p v-show="statusList[15]" class="answer">
										クレジットカードでのお支払いのみとなります。
									</p>
								</div>
							</div>
							<div class="qa_wrap border_h line_1" @click="toggleStatus(16)">
								<div class="qa border_v line_1">
									<h4 class="question" :class="{'open' : statusList[16]}">代引き決済は可能ですか？</h4>
									<p v-show="statusList[16]" class="answer">
										代引き決済には対応しておりません。予めご了承ください。
									</p>
								</div>
							</div>
							<div class="qa_wrap border_h line_1" @click="toggleStatus(17)">
								<div class="qa border_v line_1">
									<h4 class="question" :class="{'open' : statusList[17]}">使用できるクレジットカード会社を教えてください。</h4>
									<p v-show="statusList[17]" class="answer">
										Visa, MasterCard, AMEX, JCBがご利用いただけます。
									</p>
								</div>
							</div>
							<div class="qa_wrap border_h line_1" @click="toggleStatus(18)">
								<div class="qa border_v line_1">
									<h4 class="question" :class="{'open' : statusList[18]}">Shop Payとは何ですか？</h4>
									<p v-show="statusList[18]" class="answer">
										Shopify社が提供する決済サービスです。<br>
										メールアドレスと携帯電話番号を登録すると、次回ご購入頂く際に、メールアドレスと携帯電話番号宛てに送られる6桁のShop Payコード（SMS認証）を入力するだけで、配送先やクレジットカード情報が自動入力され、簡単にお支払い頂けるサービスです。<br>
										詳しくはShop Pay公式サイトをご確認ください。<br>
										<a href="https://help.shop.app/hc/ja/articles/360060762871-Shop-Pay">Shop Pay公式サイト</a>
									</p>
								</div>
							</div>
						</li>
						<li id="cancel" class="border_h">
							<h2 class="mincho">変更・交換・キャンセルについて</h2>
							<div class="qa_wrap border_h line_1" @click="toggleStatus(19)">
								<div class="qa border_v line_1">
									<h4 class="question" :class="{'open' : statusList[19]}">購入後の変更・キャンセルは可能ですか？</h4>
									<p v-show="statusList[19]" class="answer">
										発送日の前日まで可能です。それ以降の変更・キャンセルは申し訳ございませんが対応致しかねます。
									</p>
								</div>
							</div>
							<div class="qa_wrap border_h line_1" @click="toggleStatus(20)">
								<div class="qa border_v line_1">
									<h4 class="question" :class="{'open' : statusList[20]}">届いた商品の交換・キャンセルは可能ですか？</h4>
									<p v-show="statusList[20]" class="answer">
										商品開封前で、商品に異常や破損がある場合のみ返品・交換を承っております。商品到着後、なるべく早めにご連絡ください。<br>
										電話：022-364-9725（受付時間：平日9時〜17時）<br>
										<br>
										<b class="red">返品時のご注意</b><br>
										・返品商品の返送前に、必ず弊社までご連絡をお願い致します。<br>
										・ご連絡なく返品商品が届いた場合、返品をお断りする場合がございます。<br>
										・返品受付後2週間を経過しても返品の確認が取れない場合、返品をお断りさせていただく場合がございます。
										・返品商品は、お届けした商品の送り状記載の「発送元住所」までご返送ください。
									</p>
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
export default {
	name: 'QandAPage',
	head() {
		return {
			title: 'よくあるご質問 - 阿部守商店',
			meta: [
				{ hid: 'og:title', property: 'og:title', content: 'よくあるご質問 - 阿部守商店' },
				{ hid: 'og:url', property: 'og:url', content: 'https://abemamoru-shouten.com/guide/qa' },
			],
		}
	},
	data() {
		return {
			statusList: Array(22).fill(false)
		}
	},
	mounted() {
		this.$scrollTo("#menu_qa", { container: "#guide_menu", offset: -25, duration: 0, x: true, y: false })
	},
	methods: {
		toggleStatus: function(index) {
			this.statusList.splice(index, 1, !this.statusList[index])
		},
	}
}
</script>

<style lang="scss" scoped>
	main {

		.contents {
			position: relative;
			.nav_wrap {
				position: sticky;
				top: 12rem;
				height: fit-content;
				ul {
					li {
						button {
							font-size: 1.3rem;
						}
					}
				}
			}
			.contents_wrap {
				margin-top: 0;
				padding-top: 0;
				.qa_list {
					li {
						margin-top: 8.6rem;
						padding-top: 8.6rem;
						&:after {
							content: none;
						}
						h2 {
							padding-bottom: 3rem;
						}
						.qa_wrap {
							margin-top: 1.8rem;
							background-color: #ffffff;
							cursor: pointer;
							.qa {
								padding: 3rem 3.5rem;
								.question {
									position: relative;
									padding-right: 3rem;
									font-size: 1.8rem;
									line-height: 1.5;
									&:after {
										content: '';
										position: absolute;
										top: 0;
										right: 0;
										bottom: 0;
										display: block;
										margin: auto;
										width: 2.4rem;
										height: 2.4rem;
										background-image: url('~/assets/img/icon/plus.svg');
										background-size: contain;
										background-repeat: no-repeat;
									}
									&.open {
										&:after {
											background-image: url('~/assets/img/icon/minus.svg');
										}
									}
								}
								.answer {
									padding: 2rem 4.6rem 0;
									font-size: 1.4rem;
									a {
										font-size: 1.4rem;
										line-height: 1;
										color: #AA0813;
										&:after {
											background-color: #AA0813;
										}
									}
								}
							}
						}
						&:first-of-type {
							margin-top: 3.4rem;
						}
						@media only screen and (max-width: 980px) {
							margin-top: 4.8rem;
							padding-top: 4.8rem;
							h2 {
								padding-bottom: 0.6rem;
							}
							.qa_wrap {
								.qa {
									padding: 2rem 2.4rem;
									.question {
										font-size: 1.7rem;
										&:after {
											
										}
										&:before {
											
										}
										&.active {
											&:after {
												content: '';
											}
										}
									}
									.answer {
										padding: 2rem 3.5rem 0;
										font-size: 1.2rem;
									}
								}
							}
							&:first-of-type {
								margin-top: 0;
							}
						}
					}
				}
			}
		}

	}
</style>