var DRUGS = [
  d("amoxicillin", "ペニシリン系", "penicillin", "アモキシシリン", "amoxicillin", ["サワシリン"], "有益性", "添文③", "使用可", "使用可"),
  d("amoxicillin-clavulanate", "ペニシリン系", "penicillin", "アモキシシリン・クラブラン酸", "amoxicillin / clavulanate", ["オーグメンチン", "クラバモックス"], "有益性", "添文③", "使用可", "使用可"),
  d("ampicillin", "ペニシリン系", "penicillin", "アンピシリン", "ampicillin", ["ビクシリン"], "有益性", "添文③", "使用可", "使用可"),
  d("ampicillin-cloxacillin", "ペニシリン系", "penicillin", "アンピシリン・クロキサシリン", "ampicillin / cloxacillin", ["ビクシリンS"], "有益性", "添文③", "使用可", "使用可"),
  d("sultamicillin", "ペニシリン系", "penicillin", "スルタミシリン", "sultamicillin", ["ユナシン"], "有益性", "添文③", "使用可", "使用可"),
  d("bacampicillin", "ペニシリン系", "penicillin", "バカンピシリン", "bacampicillin", ["ペングッド"], "有益性", "添文③", "使用可", "使用可"),
  d("benzylpenicillin-benzathine", "ペニシリン系", "penicillin", "ベンジルペニシリンベンザチン", "benzylpenicillin benzathine", ["バイシリン", "ステルイズ"], "有益性", "添文③", "使用可", "使用可"),
  d("cefalexin", "セフェム系第一世代", "cephem", "セファレキシン", "cefalexin", ["ケフレックス", "ラリキシン"], "有益性", "添文③", "使用可", "使用可"),
  d("cefroxadine", "セフェム系第一世代", "cephem", "セフロキサジン", "cefroxadine", ["オラスボア"], "有益性", "添文③", "使用可", "使用可"),
  d("cefaclor", "セフェム系第一世代", "cephem", "セファクロル", "cefaclor", ["ケフラール"], "有益性", "添文③", "使用可", "使用可"),
  d("cefuroxime", "セフェム系第二世代", "cephem", "セフロキシム", "cefuroxime", ["オラセフ"], "有益性", "添文③", "使用可", "使用可"),
  d("cefdinir", "セフェム系第三世代", "cephem", "セフジニル", "cefdinir", ["セフゾン"], "有益性", "―", "使用可", "使用可"),
  d("cefditoren", "セフェム系第三世代", "cephem", "セフジトレン", "cefditoren", ["メイアクト"], "有益性", "―", "使用可", "使用可"),
  d("cefixime", "セフェム系第三世代", "cephem", "セフィキシム", "cefixime", ["セフスパン"], "有益性", "添文③", "使用可", "使用可"),
  d("cefteram", "セフェム系第三世代", "cephem", "セフテラム", "cefteram", ["トミロン"], "有益性", "添文③", "使用可", "使用可"),
  d("cefpodoxime", "セフェム系第三世代", "cephem", "セフポドキシム", "cefpodoxime", ["バナン"], "有益性", "添文③", "使用可", "使用可"),
  d("cefcapene", "セフェム系第三世代", "cephem", "セフカペン", "cefcapene", ["フロモックス"], "有益性", "―", "使用可", "使用可"),
  d("tebipenem", "カルバペネム系", "carbapenem", "テビペネム", "tebipenem", ["オラペネム"], "有益性", "―", "詳細参照", "使用可"),
  d("faropenem", "ペネム系", "penem", "ファロペネム", "faropenem", ["ファロム"], "有益性", "添文③", "詳細参照", "使用可"),
  d("vancomycin", "グリコペプチド系", "glycopeptide", "バンコマイシン", "vancomycin", ["塩酸バンコマイシン"], "有益性", "添文②", "詳細参照", "使用可"),
  d("fosfomycin-calcium", "ホスホマイシン系", "fosfomycin", "ホスホマイシンカルシウム", "fosfomycin calcium", ["ホスミシン"], "有益性", "添文③", "使用可", "使用可"),
  d("kanamycin", "アミノグリコシド系", "aminoglycoside", "カナマイシン", "kanamycin", ["カナマイシン", "硫酸カナマイシン"], "有益性", "添文③", "使用可", "使用可"),
  d("fradiomycin", "アミノグリコシド系", "aminoglycoside", "フラジオマイシン", "fradiomycin", ["ソフラチュール"], "有益性", "―", "使用可", "使用可"),
  d("erythromycin", "マクロライド系", "macrolide", "エリスロマイシン", "erythromycin", ["エリスロシン"], "有益性", "添文③", "使用可", "使用可"),
  d("clarithromycin", "マクロライド系", "macrolide", "クラリスロマイシン", "clarithromycin", ["クラリス", "クラリシッド"], "有益性", "添文③", "使用可", "使用可"),
  d("roxithromycin", "マクロライド系", "macrolide", "ロキシスロマイシン", "roxithromycin", ["ルリッド"], "有益性", "添文③", "使用可", "使用可"),
  d("azithromycin", "マクロライド系", "macrolide", "アジスロマイシン", "azithromycin", ["ジスロマック"], "有益性", "添文③", "使用可", "使用可"),
  d("josamycin", "マクロライド系", "macrolide", "ジョサマイシン", "josamycin", ["ジョサマイシン"], "有益性", "添文③", "使用可", "使用可"),
  d("fidaxomicin", "マクロライド系", "macrolide", "フィダキソマイシン", "fidaxomicin", ["ダフクリア"], "有益性", "添文③", "使用可", "使用可"),
  d("tetracycline", "テトラサイクリン系", "tetracycline", "テトラサイクリン", "tetracycline", ["アクロマイシン"], "有益性", "添文②", "詳細参照", "使用可"),
  d("demeclocycline", "テトラサイクリン系", "tetracycline", "デメチルクロルテトラサイクリン", "demeclocycline", ["レダマイシン"], "有益性", "添文②", "詳細参照", "使用可"),
  d("doxycycline", "テトラサイクリン系", "tetracycline", "ドキシサイクリン", "doxycycline", ["ビブラマイシン"], "有益性", "添文②", "詳細参照", "使用可"),
  d("minocycline", "テトラサイクリン系", "tetracycline", "ミノサイクリン", "minocycline", ["ミノマイシン"], "有益性", "添文②", "詳細参照", "使用可"),
  d("lincomycin", "リンコマイシン系", "lincomycin", "リンコマイシン", "lincomycin", ["リンコシン"], "有益性", "添文③", "使用可", "使用可"),
  d("clindamycin", "リンコマイシン系", "lincomycin", "クリンダマイシン", "clindamycin", ["ダラシン"], "有益性", "添文③", "使用可", "使用可"),
  d("linezolid", "オキサゾリジノン系", "oxazolidinone", "リネゾリド", "linezolid", ["ザイボックス"], "有益性", "添文③", "情報なし", "使用可"),
  d("tedizolid", "オキサゾリジノン系", "oxazolidinone", "テジゾリド", "tedizolid", ["シベクトロ"], "有益性", "添文③", "情報なし", "使用可"),
  d("chloramphenicol", "クロラムフェニコール系", "chloramphenicol", "クロラムフェニコール", "chloramphenicol", ["クロロマイセチン", "クロマイ"], "有益性", "添文②", "詳細参照", "詳細参照"),
  d("norfloxacin", "ニューキノロン系", "quinolone", "ノルフロキサシン", "norfloxacin", ["バクシダール"], "禁忌※", "添文③", "使用可", "使用可"),
  d("ofloxacin", "ニューキノロン系", "quinolone", "オフロキサシン", "ofloxacin", ["タリビッド"], "禁忌", "添文②", "使用可", "使用可"),
  d("levofloxacin", "ニューキノロン系", "quinolone", "レボフロキサシン", "levofloxacin", ["クラビット"], "禁忌※", "添文②", "使用可", "使用可"),
  d("ciprofloxacin", "ニューキノロン系", "quinolone", "シプロフロキサシン", "ciprofloxacin", ["シプロキサン"], "禁忌※", "添文②", "使用可", "使用可"),
  d("lomefloxacin", "ニューキノロン系", "quinolone", "ロメフロキサシン", "lomefloxacin", ["バレオン"], "禁忌", "添文②", "詳細参照", "使用可"),
  d("tosufloxacin", "ニューキノロン系", "quinolone", "トスフロキサシン", "tosufloxacin", ["オゼックス", "トスキサシン"], "禁忌※", "添文②", "詳細参照", "使用可"),
  d("prulifloxacin", "ニューキノロン系", "quinolone", "プルリフロキサシン", "prulifloxacin", ["スオード"], "禁忌", "添文②", "詳細参照", "使用可"),
  d("moxifloxacin", "ニューキノロン系", "quinolone", "モキシフロキサシン", "moxifloxacin", ["アベロックス"], "禁忌", "添文②", "詳細参照", "使用可"),
  d("garenoxacin", "ニューキノロン系", "quinolone", "ガレノキサシン", "garenoxacin", ["ジェニナック"], "禁忌", "添文②", "詳細参照", "使用可"),
  d("sitafloxacin", "ニューキノロン系", "quinolone", "シタフロキサシン", "sitafloxacin", ["グレースビット"], "禁忌", "添文②", "詳細参照", "使用可"),
  d("lascufloxacin", "ニューキノロン系", "quinolone", "ラスクフロキサシン", "lascufloxacin", ["ラスビック"], "禁忌", "添文②", "詳細参照", "使用可"),
  d("sulfamethoxazole-trimethoprim", "ST合剤（サルファ剤）", "st", "スルファメトキサゾール・トリメトプリム", "sulfamethoxazole / trimethoprim", ["バクタ", "バクトラミン"], "禁忌", "添文③", "詳細参照", "使用可"),
  d("isoniazid", "抗結核薬", "antitb", "イソニアジド", "isoniazid", ["イスコチン"], "有益性", "添文②", "使用可", "使用可"),
  d("isoniazid-methanesulfonate", "抗結核薬", "antitb", "イソニアジドメタンスルホン酸ナトリウム", "isoniazid sodium methanesulfonate", ["ネオイスコチン"], "有益性", "添文②", "使用可", "使用可"),
  d("ethambutol", "抗結核薬", "antitb", "エタンブトール", "ethambutol", ["エサンブトール", "エブトール"], "有益性", "添文③", "使用可", "使用可"),
  d("pyrazinamide", "抗結核薬", "antitb", "ピラジナミド", "pyrazinamide", ["ピラマイド"], "有益性", "添文②", "情報なし", "使用可"),
  d("rifabutin", "抗結核薬", "antitb", "リファブチン", "rifabutin", ["ミコブティン"], "有益性", "添文③", "詳細参照", "使用可"),
  d("rifampicin", "抗結核薬", "antitb", "リファンピシン", "rifampicin", ["リファジン"], "有益性", "添文③", "詳細参照", "使用可"),
  d("ethionamide", "抗結核薬", "antitb", "エチオナミド", "ethionamide", ["ツベルミン"], "有益性", "添文③", "情報なし", "使用可"),
  d("cycloserine", "抗結核薬", "antitb", "サイクロセリン", "cycloserine", ["サイクロセリン"], "有益性", "添文③", "情報なし", "使用可"),
  d("delamanid", "抗結核薬", "antitb", "デラマニド", "delamanid", ["デルティバ"], "禁忌", "添文②", "情報なし", "使用可"),
  d("bedaquiline", "抗結核薬", "antitb", "ベダキリン", "bedaquiline", ["サチュロ"], "有益性", "添文②", "情報なし", "使用可"),
  d("acyclovir", "抗ウイルス薬｜ヘルペス", "antiviral_herpes", "アシクロビル", "aciclovir", ["ゾビラックス", "アシクロビル"], "有益性", "添文③", "使用可", "使用可"),
  d("valaciclovir", "抗ウイルス薬｜ヘルペス", "antiviral_herpes", "バラシクロビル", "valaciclovir", ["バルトレックス", "バラシクロビル"], "有益性", "添文③", "使用可", "使用可"),
  d("famciclovir", "抗ウイルス薬｜ヘルペス", "antiviral_herpes", "ファムシクロビル", "famciclovir", ["ファムビル", "ファムシクロビル"], "有益性", "添文③", "詳細参照", "情報なし"),
  d("amenamevir", "抗ウイルス薬｜ヘルペス", "antiviral_herpes", "アメナメビル", "amenamevir", ["アメナリーフ"], "有益性", "添文③", "情報なし", "情報なし"),
  d("molnupiravir", "抗ウイルス薬｜COVID-19", "antiviral_covid", "モルヌピラビル", "molnupiravir", ["ラゲブリオ"], "禁忌", "添文③", "詳細参照", "情報なし"),
  d("nirmatrelvir-ritonavir", "抗ウイルス薬｜COVID-19", "antiviral_covid", "ニルマトレルビル・リトナビル", "nirmatrelvir / ritonavir", ["パキロビッド"], "有益性", "添文③", "詳細参照", "詳細参照"),
  d("ensitrelvir", "抗ウイルス薬｜COVID-19", "antiviral_covid", "エンシトレルビル", "ensitrelvir", ["ゾコーバ"], "禁忌", "添文②", "使用不可", "情報なし"),
  d("oseltamivir", "抗ウイルス薬｜インフルエンザ", "antiviral_flu", "オセルタミビル", "oseltamivir", ["タミフル", "オセルタミビル"], "有益性", "添文③", "使用可", "使用可"),
  d("zanamivir", "抗ウイルス薬｜インフルエンザ", "antiviral_flu", "ザナミビル", "zanamivir", ["リレンザ"], "有益性", "添文③", "使用可", "使用可"),
  d("laninamivir", "抗ウイルス薬｜インフルエンザ", "antiviral_flu", "ラニナミビル", "laninamivir", ["イナビル"], "有益性", "添文③", "使用可", "使用可"),
  d("baloxavir", "抗ウイルス薬｜インフルエンザ", "antiviral_flu", "バロキサビル", "baloxavir", ["ゾフルーザ"], "有益性", "添文③", "情報なし", "詳細参照"),
  d("favipiravir", "抗ウイルス薬｜インフルエンザ", "antiviral_flu", "ファビピラビル", "favipiravir", ["アビガン"], "禁忌", "添文③", "詳細参照", "詳細参照"),
  d("acetaminophen", "解熱鎮痛薬｜アセトアミノフェン", "analgesic_acetaminophen", "アセトアミノフェン", "acetaminophen", ["カロナール", "アセトアミノフェン"], "有益性", "添文③", "使用可", "使用可"),
  d("tiaramide", "解熱鎮痛薬｜塩基性NSAIDs", "analgesic_basic_nsaid", "チアラミド", "tiaramide", ["ソランタール"], "有益性", "添文③", "情報なし", "使用可"),
  d("aspirin", "解熱鎮痛薬｜NSAIDs内服", "analgesic_oral_nsaid", "アスピリン", "aspirin", ["バファリン", "アスピリン"], "禁忌", "添文①", "詳細参照", "使用可"),
  d("mefenamic-acid", "解熱鎮痛薬｜NSAIDs内服", "analgesic_oral_nsaid", "メフェナム酸", "mefenamic acid", ["ポンタール"], "禁忌", "添文③", "使用不可", "使用可"),
  d("indometacin", "解熱鎮痛薬｜NSAIDs内服", "analgesic_oral_nsaid", "インドメタシン", "indometacin", ["インテバン"], "禁忌", "添文②", "使用不可", "使用可"),
  d("diclofenac", "解熱鎮痛薬｜NSAIDs内服", "analgesic_oral_nsaid", "ジクロフェナク", "diclofenac", ["ボルタレン", "ナボール"], "禁忌", "添文③", "使用不可", "使用可"),
  d("etodolac", "解熱鎮痛薬｜NSAIDs内服", "analgesic_oral_nsaid", "エトドラク", "etodolac", ["ハイペン", "オステラック"], "禁忌", "添文③", "使用不可", "使用可"),
  d("loxoprofen", "解熱鎮痛薬｜NSAIDs内服", "analgesic_oral_nsaid", "ロキソプロフェン", "loxoprofen", ["ロキソニン"], "禁忌", "添文③", "使用不可", "使用可"),
  d("ibuprofen", "解熱鎮痛薬｜NSAIDs内服", "analgesic_oral_nsaid", "イブプロフェン", "ibuprofen", ["ブルフェン", "イブ"], "禁忌", "添文③", "使用不可", "使用可"),
  d("ketoprofen-oral", "解熱鎮痛薬｜NSAIDs内服", "analgesic_oral_nsaid", "ケトプロフェン", "ketoprofen", ["カピステン"], "禁忌", "—", "使用不可", "使用可"),
  d("celecoxib", "解熱鎮痛薬｜NSAIDs内服", "analgesic_oral_nsaid", "セレコキシブ", "celecoxib", ["セレコックス"], "禁忌", "添文③", "使用不可", "使用可"),
  d("ketoprofen-topical", "解熱鎮痛薬｜NSAIDs外用", "analgesic_topical_nsaid", "ケトプロフェン外用", "ketoprofen topical", ["モーラステープ", "モーラスパップ", "ケトプロフェンテープ"], "禁忌", "—", "使用不可", "使用可"),
  d("diclofenac-topical", "解熱鎮痛薬｜NSAIDs外用", "analgesic_topical_nsaid", "ジクロフェナク外用", "diclofenac topical", ["ボルタレンテープ", "ボルタレンゲル", "ナボールテープ", "ナボールゲル"], "禁忌", "添文③", "使用不可", "使用可"),
  d("indometacin-topical", "解熱鎮痛薬｜NSAIDs外用", "analgesic_topical_nsaid", "インドメタシン外用", "indometacin topical", ["インテバン外用", "インドメタシンパップ", "インドメタシンゲル"], "禁忌", "添文②", "使用不可", "使用可"),
  d("loxoprofen-topical", "解熱鎮痛薬｜NSAIDs外用", "analgesic_topical_nsaid", "ロキソプロフェン外用", "loxoprofen topical", ["ロキソニンテープ", "ロキソニンパップ", "ロキソプロフェンテープ"], "禁忌", "添文③", "使用不可", "使用可"),
  d("felbinac-topical", "解熱鎮痛薬｜NSAIDs外用", "analgesic_topical_nsaid", "フェルビナク外用", "felbinac topical", ["フェルビナクテープ", "フェルビナクパップ"], "禁忌", "—", "使用不可", "使用可"),
  d("buprenorphine-patch", "解熱鎮痛薬｜その他鎮痛薬", "analgesic_other_pain", "ブプレノルフィン貼付", "buprenorphine transdermal", ["ノルスパン"], "有益性", "添文①", "使用可", "詳細参照"),
  d("tramadol", "解熱鎮痛薬｜その他鎮痛薬", "analgesic_other_pain", "トラマドール", "tramadol", ["トラマール", "ワントラム", "トラムセット"], "有益性", "添文③", "詳細参照", "詳細参照"),
  d("neurotropin", "解熱鎮痛薬｜その他鎮痛薬", "analgesic_other_pain", "ワクシニアウイルス接種家兎炎症皮膚抽出液", "neurotropin", ["ノイロトロピン"], "有益性", "添文③", "情報なし", "情報なし"),
  d("pregabalin", "解熱鎮痛薬｜その他鎮痛薬", "analgesic_other_pain", "プレガバリン", "pregabalin", ["リリカ"], "有益性", "添文①", "詳細参照", "詳細参照"),
  d("gabapentin", "解熱鎮痛薬｜その他鎮痛薬", "analgesic_other_pain", "ガバペンチン", "gabapentin", ["ガバペン"], "有益性", "添文③", "詳細参照", "使用可"),
  d("mirogabalin", "解熱鎮痛薬｜その他鎮痛薬", "analgesic_other_pain", "ミロガバリン", "mirogabalin", ["タリージェ"], "有益性", "添文③", "情報なし", "情報なし"),
  d("tizanidine", "解熱鎮痛薬｜その他鎮痛薬", "analgesic_other_pain", "チザニジン", "tizanidine", ["テルネリン"], "有益性", "添文③", "詳細参照", "情報なし"),
  d("eperisone", "解熱鎮痛薬｜その他鎮痛薬", "analgesic_other_pain", "エペリゾン", "eperisone", ["ミオナール"], "有益性", "添文③", "詳細参照", "情報なし"),
  d("diphenhydramine", "抗アレルギー薬｜第1世代抗ヒスタミン薬", "antiallergy_h1_1st", "ジフェンヒドラミン", "diphenhydramine", ["レスタミンコーワ"], "有益性", "添文①", "使用可", "使用可"),
  d("clemastine", "抗アレルギー薬｜第1世代抗ヒスタミン薬", "antiallergy_h1_1st", "クレマスチン", "clemastine", ["タベジール"], "有益性", "添文①", "使用可", "使用可"),
  d("chlorpheniramine", "抗アレルギー薬｜第1世代抗ヒスタミン薬", "antiallergy_h1_1st", "クロルフェニラミン", "chlorpheniramine", ["アレルギン", "ポララミン"], "有益性", "添文③", "使用可", "使用可"),
  d("promethazine", "抗アレルギー薬｜第1世代抗ヒスタミン薬", "antiallergy_h1_1st", "プロメタジン", "promethazine", ["ピレチア", "ヒベルナ"], "有益性", "添文③", "使用可", "使用可"),
  d("alimemazine", "抗アレルギー薬｜第1世代抗ヒスタミン薬", "antiallergy_h1_1st", "アリメマジン", "alimemazine", ["アリメジン"], "有益性", "添文③", "使用可", "使用可"),
  d("cyproheptadine", "抗アレルギー薬｜第1世代抗ヒスタミン薬", "antiallergy_h1_1st", "シプロヘプタジン", "cyproheptadine", ["ペリアクチン"], "有益性", "添文③", "使用可", "使用可"),
  d("ketotifen", "抗アレルギー薬｜第2世代抗ヒスタミン薬", "antiallergy_h1_2nd", "ケトチフェン", "ketotifen", ["ザジテン"], "有益性", "添文③", "使用可", "使用可"),
  d("azelastine", "抗アレルギー薬｜第2世代抗ヒスタミン薬", "antiallergy_h1_2nd", "アゼラスチン", "azelastine", ["アゼプチン"], "有益性", "添文③", "使用可", "使用可"),
  d("mequitazine", "抗アレルギー薬｜第2世代抗ヒスタミン薬", "antiallergy_h1_2nd", "メキタジン", "mequitazine", ["ゼスラン", "ニポラジン"], "有益性", "添文③", "使用可", "使用可"),
  d("fexofenadine", "抗アレルギー薬｜第2世代抗ヒスタミン薬", "antiallergy_h1_2nd", "フェキソフェナジン", "fexofenadine", ["アレグラ"], "有益性", "添文③", "使用可", "使用可"),
  d("fexofenadine-pseudoephedrine", "抗アレルギー薬｜第2世代抗ヒスタミン薬", "antiallergy_h1_2nd", "フェキソフェナジン・プソイドエフェドリン", "fexofenadine / pseudoephedrine", ["ディレグラ"], "有益性", "添文①", "使用可", "使用可"),
  d("epinastine", "抗アレルギー薬｜第2世代抗ヒスタミン薬", "antiallergy_h1_2nd", "エピナスチン", "epinastine", ["アレジオン"], "有益性", "添文③", "使用可", "使用可"),
  d("ebastine", "抗アレルギー薬｜第2世代抗ヒスタミン薬", "antiallergy_h1_2nd", "エバスチン", "ebastine", ["エバステル"], "有益性", "添文③", "使用可", "使用可"),
  d("cetirizine", "抗アレルギー薬｜第2世代抗ヒスタミン薬", "antiallergy_h1_2nd", "セチリジン", "cetirizine", ["ジルテック"], "有益性", "添文③", "使用可", "使用可"),
  d("levocetirizine", "抗アレルギー薬｜第2世代抗ヒスタミン薬", "antiallergy_h1_2nd", "レボセチリジン", "levocetirizine", ["ザイザル"], "有益性", "添文③", "使用可", "使用可"),
  d("bepotastine", "抗アレルギー薬｜第2世代抗ヒスタミン薬", "antiallergy_h1_2nd", "ベポタスチン", "bepotastine", ["タリオン"], "有益性", "添文③", "使用可", "使用可"),
  d("emedastine", "抗アレルギー薬｜第2世代抗ヒスタミン薬", "antiallergy_h1_2nd", "エメダスチン", "emedastine", ["レミカット"], "有益性", "添文③", "使用可", "使用可"),
  d("olopatadine", "抗アレルギー薬｜第2世代抗ヒスタミン薬", "antiallergy_h1_2nd", "オロパタジン", "olopatadine", ["アレロック"], "有益性", "添文③", "使用可", "使用可"),
  d("loratadine", "抗アレルギー薬｜第2世代抗ヒスタミン薬", "antiallergy_h1_2nd", "ロラタジン", "loratadine", ["クラリチン"], "有益性", "添文③", "使用可", "使用可"),
  d("desloratadine", "抗アレルギー薬｜第2世代抗ヒスタミン薬", "antiallergy_h1_2nd", "デスロラタジン", "desloratadine", ["デザレックス"], "有益性", "添文③", "使用可", "使用可"),
  d("bilastine", "抗アレルギー薬｜第2世代抗ヒスタミン薬", "antiallergy_h1_2nd", "ビラスチン", "bilastine", ["ビラノア"], "有益性", "添文③", "使用可", "使用可"),
  d("rupatadine", "抗アレルギー薬｜第2世代抗ヒスタミン薬", "antiallergy_h1_2nd", "ルパタジン", "rupatadine", ["ルパフィン"], "有益性", "添文①", "使用可", "使用可"),
  d("sodium-cromoglicate", "抗アレルギー薬｜メディエーター遊離抑制薬", "antiallergy_mediator", "クロモグリク酸ナトリウム", "sodium cromoglicate", ["インタール"], "有益性", "—", "使用可", "使用可"),
  d("tranilast", "抗アレルギー薬｜メディエーター遊離抑制薬", "antiallergy_mediator", "トラニラスト", "tranilast", ["リザベン"], "禁忌", "添文③", "詳細参照", "使用可"),
  d("ibudilast", "抗アレルギー薬｜メディエーター遊離抑制薬", "antiallergy_mediator", "イブジラスト", "ibudilast", ["ケタス"], "有益性", "添文③", "使用可", "使用可"),
  d("pranlukast", "抗アレルギー薬｜ロイコトリエン受容体拮抗薬", "antiallergy_ltra", "プランルカスト", "pranlukast", ["オノン"], "有益性", "添文③", "使用可", "使用可"),
  d("montelukast", "抗アレルギー薬｜ロイコトリエン受容体拮抗薬", "antiallergy_ltra", "モンテルカスト", "montelukast", ["シングレア", "キプレス"], "有益性", "添文③", "使用可", "使用可"),
  d("ramatroban", "抗アレルギー薬｜その他抗アレルギー薬", "antiallergy_other", "ラマトロバン", "ramatroban", ["ラマトロバン"], "有益性", "添文③", "使用可", "使用可"),
  d("suplatast", "抗アレルギー薬｜その他抗アレルギー薬", "antiallergy_other", "スプラタスト", "suplatast", ["アイピーディ"], "有益性", "添文③", "使用可", "使用可"),
  d("insulin-human-regular", "糖尿病治療薬｜インスリン製剤", "diabetes_insulin", "インスリン ヒト", "insulin human", ["ノボリンR", "ヒューマリンR"], "詳細参照", "詳細参照", "使用可", "使用可"),
  d("insulin-lispro", "糖尿病治療薬｜インスリン製剤", "diabetes_insulin", "インスリン リスプロ", "insulin lispro", ["ヒューマログ", "ルムジェブ"], "詳細参照", "詳細参照", "使用可", "使用可"),
  d("insulin-aspart", "糖尿病治療薬｜インスリン製剤", "diabetes_insulin", "インスリン アスパルト", "insulin aspart", ["ノボラピッド", "フィアスプ"], "詳細参照", "詳細参照", "使用可", "使用可"),
  d("insulin-glulisine", "糖尿病治療薬｜インスリン製剤", "diabetes_insulin", "インスリン グルリジン", "insulin glulisine", ["アピドラ"], "有益性", "詳細参照", "使用可", "使用可"),
  d("insulin-isophane", "糖尿病治療薬｜インスリン製剤", "diabetes_insulin", "ヒトイソフェンインスリン", "isophane insulin human", ["ノボリンN", "ヒューマリンN"], "詳細参照", "詳細参照", "使用可", "使用可"),
  d("insulin-glargine", "糖尿病治療薬｜インスリン製剤", "diabetes_insulin", "インスリン グラルギン", "insulin glargine", ["ランタス"], "有益性", "詳細参照", "使用可", "使用可"),
  d("insulin-glargine-bs", "糖尿病治療薬｜インスリン製剤", "diabetes_insulin", "インスリン グラルギンBS", "insulin glargine biosimilar", ["インスリン グラルギンBS"], "有益性", "詳細参照", "使用可", "使用可"),
  d("insulin-detemir", "糖尿病治療薬｜インスリン製剤", "diabetes_insulin", "インスリン デテミル", "insulin detemir", ["レベミル"], "詳細参照", "詳細参照", "使用可", "使用可"),
  d("insulin-degludec", "糖尿病治療薬｜インスリン製剤", "diabetes_insulin", "インスリン デグルデク", "insulin degludec", ["トレシーバ"], "詳細参照", "詳細参照", "使用可", "使用可"),

  d("metformin", "糖尿病治療薬｜ビグアナイド薬", "diabetes_biguanide", "メトホルミン", "metformin", ["グリコラン", "メトグルコ"], "禁忌", "添文③", "詳細参照", "使用可"),
  d("imeglimin", "糖尿病治療薬｜ミトコンドリア機能改善薬", "diabetes_imeglimin", "イメグリミン", "imeglimin", ["ツイミーグ"], "詳細参照", "添文③", "情報なし", "情報なし"),
  d("pioglitazone", "糖尿病治療薬｜チアゾリジン誘導体", "diabetes_thiazolidine", "ピオグリタゾン", "pioglitazone", ["アクトス"], "禁忌", "添文③", "詳細参照", "詳細参照"),

  d("glibenclamide", "糖尿病治療薬｜スルホニルウレア薬", "diabetes_su", "グリベンクラミド", "glibenclamide", ["オイグルコン"], "禁忌", "添文③", "詳細参照", "使用可"),
  d("gliclazide", "糖尿病治療薬｜スルホニルウレア薬", "diabetes_su", "グリクラジド", "gliclazide", ["グリミクロン"], "禁忌", "添文③", "詳細参照", "情報なし"),
  d("glimepiride", "糖尿病治療薬｜スルホニルウレア薬", "diabetes_su", "グリメピリド", "glimepiride", ["アマリール"], "禁忌", "添文③", "詳細参照", "情報なし"),

  d("nateglinide", "糖尿病治療薬｜速効型インスリン分泌促進薬", "diabetes_glinide", "ナテグリニド", "nateglinide", ["ファスティック", "スターシス"], "禁忌", "添文③", "情報なし", "情報なし"),
  d("mitiglinide", "糖尿病治療薬｜速効型インスリン分泌促進薬", "diabetes_glinide", "ミチグリニド", "mitiglinide", ["グルファスト"], "禁忌", "添文③", "情報なし", "情報なし"),
  d("repaglinide", "糖尿病治療薬｜速効型インスリン分泌促進薬", "diabetes_glinide", "レパグリニド", "repaglinide", ["シュアポスト"], "禁忌", "添文③", "詳細参照", "情報なし"),

  d("voglibose", "糖尿病治療薬｜α-グルコシダーゼ阻害薬", "diabetes_alpha_gi", "ボグリボース", "voglibose", ["ベイスン"], "有益性", "添文③", "使用可", "使用可"),
  d("acarbose", "糖尿病治療薬｜α-グルコシダーゼ阻害薬", "diabetes_alpha_gi", "アカルボース", "acarbose", ["アカルボース"], "禁忌", "添文③", "使用可", "使用可"),
  d("miglitol", "糖尿病治療薬｜α-グルコシダーゼ阻害薬", "diabetes_alpha_gi", "ミグリトール", "miglitol", ["セイブル"], "禁忌", "添文③", "詳細参照", "使用可"),

  d("ipragliflozin", "糖尿病治療薬｜SGLT2阻害薬", "diabetes_sglt2", "イプラグリフロジン", "ipragliflozin", ["スーグラ"], "詳細参照", "添文②", "情報なし", "情報なし"),
  d("dapagliflozin", "糖尿病治療薬｜SGLT2阻害薬", "diabetes_sglt2", "ダパグリフロジン", "dapagliflozin", ["フォシーガ"], "詳細参照", "添文②", "詳細参照", "情報なし"),
  d("empagliflozin", "糖尿病治療薬｜SGLT2阻害薬", "diabetes_sglt2", "エンパグリフロジン", "empagliflozin", ["ジャディアンス"], "詳細参照", "添文②", "詳細参照", "情報なし"),
  d("luseogliflozin", "糖尿病治療薬｜SGLT2阻害薬", "diabetes_sglt2", "ルセオグリフロジン", "luseogliflozin", ["ルセフィ"], "詳細参照", "添文②", "情報なし", "情報なし"),
  d("tofogliflozin", "糖尿病治療薬｜SGLT2阻害薬", "diabetes_sglt2", "トホグリフロジン", "tofogliflozin", ["デベルザ"], "詳細参照", "添文②", "情報なし", "情報なし"),
  d("canagliflozin", "糖尿病治療薬｜SGLT2阻害薬", "diabetes_sglt2", "カナグリフロジン", "canagliflozin", ["カナグル"], "詳細参照", "添文②", "情報なし", "情報なし"),

  d("sitagliptin", "糖尿病治療薬｜DPP-4阻害薬", "diabetes_dpp4", "シタグリプチン", "sitagliptin", ["ジャヌビア", "グラクティブ"], "有益性", "添文③", "詳細参照", "情報なし"),
  d("vildagliptin", "糖尿病治療薬｜DPP-4阻害薬", "diabetes_dpp4", "ビルダグリプチン", "vildagliptin", ["エクア"], "有益性", "添文③", "詳細参照", "情報なし"),
  d("alogliptin", "糖尿病治療薬｜DPP-4阻害薬", "diabetes_dpp4", "アログリプチン", "alogliptin", ["ネシーナ"], "有益性", "添文③", "情報なし", "情報なし"),
  d("linagliptin", "糖尿病治療薬｜DPP-4阻害薬", "diabetes_dpp4", "リナグリプチン", "linagliptin", ["トラゼンタ"], "有益性", "添文③", "情報なし", "情報なし"),
  d("teneligliptin", "糖尿病治療薬｜DPP-4阻害薬", "diabetes_dpp4", "テネリグリプチン", "teneligliptin", ["テネリア"], "有益性", "添文③", "情報なし", "情報なし"),
  d("anagliptin", "糖尿病治療薬｜DPP-4阻害薬", "diabetes_dpp4", "アナグリプチン", "anagliptin", ["スイニー"], "有益性", "添文③", "情報なし", "情報なし"),
  d("saxagliptin", "糖尿病治療薬｜DPP-4阻害薬", "diabetes_dpp4", "サキサグリプチン", "saxagliptin", ["オングリザ"], "有益性", "添文③", "情報なし", "情報なし"),
  d("trelagliptin", "糖尿病治療薬｜DPP-4阻害薬", "diabetes_dpp4", "トレラグリプチン", "trelagliptin", ["ザファテック"], "有益性", "添文③", "情報なし", "情報なし"),
  d("omarigliptin", "糖尿病治療薬｜DPP-4阻害薬", "diabetes_dpp4", "オマリグリプチン", "omarigliptin", ["マリゼブ"], "有益性", "添文③", "情報なし", "情報なし"),

  d("liraglutide", "糖尿病治療薬｜GLP-1受容体作動薬", "diabetes_glp1", "リラグルチド", "liraglutide", ["ビクトーザ"], "詳細参照", "添文③", "詳細参照", "詳細参照"),
  d("exenatide", "糖尿病治療薬｜GLP-1受容体作動薬", "diabetes_glp1", "エキセナチド", "exenatide", ["バイエッタ"], "詳細参照", "添文③", "詳細参照", "詳細参照"),
  d("lixisenatide", "糖尿病治療薬｜GLP-1受容体作動薬", "diabetes_glp1", "リキシセナチド", "lixisenatide", ["リキスミア"], "詳細参照", "添文③", "情報なし", "詳細参照"),
  d("dulaglutide", "糖尿病治療薬｜GLP-1受容体作動薬", "diabetes_glp1", "デュラグルチド", "dulaglutide", ["トルリシティ"], "詳細参照", "添文③", "詳細参照", "詳細参照"),
  d("semaglutide", "糖尿病治療薬｜GLP-1受容体作動薬", "diabetes_glp1", "セマグルチド", "semaglutide", ["オゼンピック", "リベルサス", "ウゴービ"], "詳細参照", "添文③", "詳細参照", "詳細参照"),
  d("tirzepatide", "糖尿病治療薬｜GIP/GLP-1受容体作動薬", "diabetes_gip_glp1", "チルゼパチド", "tirzepatide", ["マンジャロ"], "詳細参照", "添文③", "情報なし", "詳細参照"),
  d("pravastatin", "脂質異常症治療薬｜スタチン系薬剤", "lipid_statin", "プラバスタチン", "pravastatin", ["メバロチン"], "禁忌", "禁忌", "詳細参照", "詳細参照"),
  d("simvastatin", "脂質異常症治療薬｜スタチン系薬剤", "lipid_statin", "シンバスタチン", "simvastatin", ["リポバス"], "禁忌", "禁忌", "詳細参照", "詳細参照"),
  d("fluvastatin", "脂質異常症治療薬｜スタチン系薬剤", "lipid_statin", "フルバスタチン", "fluvastatin", ["ローコール"], "禁忌", "禁忌", "詳細参照", "詳細参照"),
  d("atorvastatin", "脂質異常症治療薬｜スタチン系薬剤", "lipid_statin", "アトルバスタチン", "atorvastatin", ["リピトール"], "禁忌", "禁忌", "詳細参照", "詳細参照"),
  d("pitavastatin", "脂質異常症治療薬｜スタチン系薬剤", "lipid_statin", "ピタバスタチン", "pitavastatin", ["リバロ"], "禁忌", "禁忌", "詳細参照", "詳細参照"),
  d("rosuvastatin", "脂質異常症治療薬｜スタチン系薬剤", "lipid_statin", "ロスバスタチン", "rosuvastatin", ["クレストール"], "禁忌", "禁忌", "詳細参照", "詳細参照"),

  d("ezetimibe", "脂質異常症治療薬｜小腸コレステロールトランスポーター阻害薬", "lipid_ezetimibe", "エゼチミブ", "ezetimibe", ["ゼチーア"], "有益性", "添文③", "詳細参照", "情報なし"),

  d("bezafibrate", "脂質異常症治療薬｜フィブラート系薬剤", "lipid_fibrate", "ベザフィブラート", "bezafibrate", ["ベザトール"], "禁忌", "添文③", "使用不可", "使用不可"),
  d("fenofibrate", "脂質異常症治療薬｜フィブラート系薬剤", "lipid_fibrate", "フェノフィブラート", "fenofibrate", ["リピディル", "トライコア"], "禁忌", "禁忌", "使用不可", "使用不可"),

  d("tocopherol-nicotinate", "脂質異常症治療薬｜ニコチン酸系薬剤", "lipid_nicotinic", "トコフェロールニコチン酸エステル", "tocopherol nicotinate", ["ユベラN"], "有益性", "添文③", "使用可", "使用可"),

  d("ethyl-icosapentate", "脂質異常症治療薬｜多価不飽和脂肪酸", "lipid_pufa", "イコサペント酸エチル", "ethyl icosapentate", ["エパデール"], "有益性", "添文③", "使用可", "使用可"),
  d("omega-3-acid-ethyl-esters", "脂質異常症治療薬｜多価不飽和脂肪酸", "lipid_pufa", "オメガ-3脂肪酸エチル", "omega-3-acid ethyl esters", ["ロトリガ"], "有益性", "添文③", "使用可", "使用可"),
  d("levothyroxine", "甲状腺疾患治療薬｜甲状腺ホルモン製剤", "thyroid_hormone", "レボチロキシン", "levothyroxine", ["チラーヂン"], "有益性", "添文③", "使用可", "使用可"),
  d("thiamazole", "甲状腺疾患治療薬｜抗甲状腺薬", "thyroid_antithyroid", "チアマゾール", "thiamazole", ["メルカゾール"], "有益性", "添文①", "詳細参照", "使用可"),
  d("propylthiouracil", "甲状腺疾患治療薬｜抗甲状腺薬", "thyroid_antithyroid", "プロピルチオウラシル", "propylthiouracil", ["チウラジール", "プロパジール"], "有益性", "添文③", "詳細参照", "使用可"),
  d("potassium-iodide", "甲状腺疾患治療薬｜無機ヨウ素", "thyroid_iodide", "ヨウ化カリウム", "potassium iodide", ["ヨウ化カリウム"], "有益性", "添文①", "詳細参照", "詳細参照"),
  d("alfacalcidol", "骨・カルシウム代謝薬｜活性型ビタミンD3製剤", "bone_vitamin_d", "アルファカルシドール", "alfacalcidol", ["ワンアルファ", "アルファロール"], "有益性", "添文③", "使用可", "詳細参照"),
  d("eldecalcitol", "骨・カルシウム代謝薬｜活性型ビタミンD3製剤", "bone_vitamin_d", "エルデカルシトール", "eldecalcitol", ["エディロール"], "禁忌", "禁忌", "詳細参照", "詳細参照"),
  d("calcitriol", "骨・カルシウム代謝薬｜活性型ビタミンD3製剤", "bone_vitamin_d", "カルシトリオール", "calcitriol", ["ロカルトロール"], "有益性", "添文③", "使用可", "詳細参照"),
  d("falecalcitriol", "骨・カルシウム代謝薬｜活性型ビタミンD3製剤", "bone_vitamin_d", "ファレカルシトリオール", "falecalcitriol", ["ホーネル", "フルスタン"], "有益性", "添文③", "使用可", "詳細参照"),
  d("maxacalcitol", "骨・カルシウム代謝薬｜活性型ビタミンD3製剤", "bone_vitamin_d", "マキサカルシトール", "maxacalcitol", ["オキサロール"], "有益性", "添文③", "使用可", "詳細参照"),

  d("etidronate", "骨・カルシウム代謝薬｜ビスホスホネート製剤", "bone_bisphosphonate", "エチドロン酸二ナトリウム", "etidronate disodium", ["ダイドロネル"], "禁忌", "添文③", "詳細参照", "使用可"),
  d("alendronate", "骨・カルシウム代謝薬｜ビスホスホネート製剤", "bone_bisphosphonate", "アレンドロン酸ナトリウム", "alendronate sodium", ["フォサマック", "ボナロン"], "有益性", "添文③", "詳細参照", "使用可"),
  d("risedronate", "骨・カルシウム代謝薬｜ビスホスホネート製剤", "bone_bisphosphonate", "リセドロン酸ナトリウム", "risedronate sodium", ["ベネット", "アクトネル"], "禁忌", "添文③", "詳細参照", "使用可"),
  d("ibandronate", "骨・カルシウム代謝薬｜ビスホスホネート製剤", "bone_bisphosphonate", "イバンドロン酸ナトリウム", "ibandronate sodium", ["ボンビバ"], "禁忌", "添文③", "詳細参照", "使用可"),
  d("minodronate", "骨・カルシウム代謝薬｜ビスホスホネート製剤", "bone_bisphosphonate", "ミノドロン酸", "minodronic acid", ["ボノテオ", "リカルボン"], "禁忌", "添文③", "詳細参照", "使用可"),

  d("menatetrenone", "骨・カルシウム代謝薬｜ビタミンK2製剤", "bone_vitamin_k", "メナテトレノン", "menatetrenone", ["グラケー"], "有益性", "添文③", "使用可", "使用可"),

  d("calcium-lactate", "骨・カルシウム代謝薬｜カルシウム製剤", "bone_calcium", "乳酸カルシウム", "calcium lactate", ["乳酸カルシウム"], "記載なし", "記載なし", "使用可", "使用可"),
  d("enalapril", "循環器｜降圧薬｜ACE阻害薬", "cv_ace", "エナラプリル", "enalapril", ["レニベース"], "禁忌", "添文③", "使用不可", "使用可"),
  d("perindopril", "循環器｜降圧薬｜ACE阻害薬", "cv_ace", "ペリンドプリルエルブミン", "perindopril erbumine", ["コバシル"], "禁忌", "添文③", "使用不可", "使用可"),
  d("imidapril", "循環器｜降圧薬｜ACE阻害薬", "cv_ace", "イミダプリル", "imidapril", ["タナトリル"], "禁忌", "添文③", "使用不可", "使用可"),

  d("losartan", "循環器｜降圧薬｜ARB", "cv_arb", "ロサルタン", "losartan", ["ニューロタン"], "禁忌", "添文②", "使用不可", "使用可"),
  d("candesartan", "循環器｜降圧薬｜ARB", "cv_arb", "カンデサルタン", "candesartan", ["ブロプレス"], "禁忌", "添文②", "使用不可", "使用可"),
  d("valsartan", "循環器｜降圧薬｜ARB", "cv_arb", "バルサルタン", "valsartan", ["ディオバン"], "禁忌", "添文②", "使用不可", "使用可"),
  d("telmisartan", "循環器｜降圧薬｜ARB", "cv_arb", "テルミサルタン", "telmisartan", ["ミカルディス"], "禁忌", "添文②", "使用不可", "使用可"),
  d("olmesartan", "循環器｜降圧薬｜ARB", "cv_arb", "オルメサルタン メドキソミル", "olmesartan medoxomil", ["オルメテック"], "禁忌", "添文②", "使用不可", "使用可"),
  d("irbesartan", "循環器｜降圧薬｜ARB", "cv_arb", "イルベサルタン", "irbesartan", ["イルベタン", "アバプロ"], "禁忌", "添文②", "使用不可", "使用可"),
  d("azilsartan", "循環器｜降圧薬｜ARB", "cv_arb", "アジルサルタン", "azilsartan", ["アジルバ"], "禁忌", "添文②", "使用不可", "使用可"),

  d("aliskiren", "循環器｜降圧薬｜直接的レニン阻害薬", "cv_renin", "アリスキレン", "aliskiren", ["ラジレス"], "禁忌", "添文③", "使用不可", "使用可"),

  d("spironolactone", "循環器｜降圧薬｜ミネラルコルチコイド受容体拮抗薬", "cv_mra", "スピロノラクトン", "spironolactone", ["アルダクトン"], "有益性", "添文③", "詳細参照", "使用可"),
  d("eplerenone", "循環器｜降圧薬｜ミネラルコルチコイド受容体拮抗薬", "cv_mra", "エプレレノン", "eplerenone", ["セララ"], "有益性", "添文③", "記載なし", "使用可"),
  d("esaxerenone", "循環器｜降圧薬｜ミネラルコルチコイド受容体拮抗薬", "cv_mra", "エサキセレノン", "esaxerenone", ["ミネブロ"], "有益性", "添文③", "記載なし", "使用可"),

  d("amlodipine", "循環器｜降圧薬｜Ca拮抗薬", "cv_ca", "アムロジピン", "amlodipine", ["アムロジン", "ノルバスク"], "有益性", "添文③", "使用可", "使用可"),
  d("nifedipine", "循環器｜降圧薬｜Ca拮抗薬", "cv_ca", "ニフェジピン", "nifedipine", ["アダラート", "セパミット"], "有益性", "添文②", "使用可", "使用可"),
  d("nicardipine-oral", "循環器｜降圧薬｜Ca拮抗薬", "cv_ca", "ニカルジピン（経口）", "nicardipine", ["ペルジピン"], "禁忌", "添文③", "使用可", "使用可"),
  d("nicardipine-inj", "循環器｜降圧薬｜Ca拮抗薬", "cv_ca", "ニカルジピン（注射）", "nicardipine", ["ペルジピン注"], "有益性", "添文③", "使用可", "使用可"),
  d("nilvadipine", "循環器｜降圧薬｜Ca拮抗薬", "cv_ca", "ニルバジピン", "nilvadipine", ["ニバジール"], "禁忌", "添文③", "使用可", "使用可"),
  d("azelnidipine", "循環器｜降圧薬｜Ca拮抗薬", "cv_ca", "アゼルニジピン", "azelnidipine", ["カルブロック"], "禁忌", "添文③", "使用可", "使用可"),
  d("manidipine", "循環器｜降圧薬｜Ca拮抗薬", "cv_ca", "マニジピン", "manidipine", ["カルスロット"], "禁忌", "添文③", "使用可", "使用可"),
  d("efonidipine", "循環器｜降圧薬｜Ca拮抗薬", "cv_ca", "エホニジピン", "efonidipine", ["ランデル"], "禁忌", "添文③", "使用可", "使用可"),
  d("cilnidipine", "循環器｜降圧薬｜Ca拮抗薬", "cv_ca", "シルニジピン", "cilnidipine", ["アテレック"], "禁忌", "添文③", "使用可", "使用可"),
  d("diltiazem", "循環器｜降圧薬｜Ca拮抗薬", "cv_ca", "ジルチアゼム", "diltiazem", ["ヘルベッサー"], "禁忌", "添文③", "使用可", "使用可"),

  d("atenolol", "循環器｜降圧薬｜β遮断薬", "cv_beta", "アテノロール", "atenolol", ["テノーミン"], "有益性", "添文④", "詳細参照", "詳細参照"),
  d("metoprolol", "循環器｜降圧薬｜β遮断薬", "cv_beta", "メトプロロール", "metoprolol", ["ロプレソール", "セロケン"], "禁忌", "添文③", "詳細参照", "使用可"),
  d("bisoprolol", "循環器｜降圧薬｜β遮断薬", "cv_beta", "ビソプロロール", "bisoprolol", ["メインテート"], "有益性", "添文③", "詳細参照", "使用可"),
  d("celiprolol", "循環器｜降圧薬｜β遮断薬", "cv_beta", "セリプロロール", "celiprolol", ["セレクトール"], "禁忌", "添文②", "詳細参照", "使用可"),
  d("betaxolol", "循環器｜降圧薬｜β遮断薬", "cv_beta", "ベタキソロール", "betaxolol", ["ケルロング"], "禁忌", "添文③", "詳細参照", "使用可"),
  d("propranolol", "循環器｜降圧薬｜β遮断薬", "cv_beta", "プロプラノロール", "propranolol", ["インデラル"], "有益性", "添文③", "詳細参照", "使用可"),

  d("labetalol", "循環器｜降圧薬｜αβ遮断薬", "cv_alpha_beta", "ラベタロール", "labetalol", ["トランデート"], "有益性", "添文③", "使用可", "使用可"),
  d("carvedilol", "循環器｜降圧薬｜αβ遮断薬", "cv_alpha_beta", "カルベジロール", "carvedilol", ["アーチスト"], "有益性", "添文③", "使用可", "使用可"),

  d("doxazosin", "循環器｜降圧薬｜α遮断薬", "cv_alpha", "ドキサゾシン", "doxazosin", ["カルデナリン"], "有益性", "添文③", "記載なし", "使用可"),
  d("bunazosin", "循環器｜降圧薬｜α遮断薬", "cv_alpha", "ブナゾシン", "bunazosin", ["デタントール"], "有益性", "添文③", "記載なし", "使用可"),
  d("terazosin", "循環器｜降圧薬｜α遮断薬", "cv_alpha", "テラゾシン", "terazosin", ["バソメット"], "有益性", "添文②", "記載なし", "使用可"),
  d("prazosin", "循環器｜降圧薬｜α遮断薬", "cv_alpha", "プラゾシン", "prazosin", ["ミニプレス"], "有益性", "添文③", "記載なし", "使用可"),
  d("urapidil", "循環器｜降圧薬｜α遮断薬", "cv_alpha", "ウラピジル", "urapidil", ["エブランチル"], "有益性", "添文③", "記載なし", "使用可"),

  d("methyldopa", "循環器｜降圧薬｜中枢性交感神経抑制薬", "cv_central", "メチルドパ", "methyldopa", ["アルドメット"], "有益性", "添文③", "使用可", "使用可"),
  d("hydralazine", "循環器｜降圧薬｜血管拡張薬", "cv_vasodilator", "ヒドララジン", "hydralazine", ["アプレゾリン"], "有益性", "添文③", "使用可", "使用可"),

  d("furosemide", "循環器｜利尿剤｜ループ利尿薬", "cv_diuretic_loop", "フロセミド", "furosemide", ["ラシックス"], "有益性", "添文②", "詳細参照", "使用可"),
  d("azosemide", "循環器｜利尿剤｜ループ利尿薬", "cv_diuretic_loop", "アゾセミド", "azosemide", ["ダイアート"], "有益性", "添文③", "詳細参照", "詳細参照"),
  d("hydrochlorothiazide", "循環器｜利尿剤｜サイアザイド系利尿薬", "cv_diuretic_thiazide", "ヒドロクロロチアジド", "hydrochlorothiazide", ["ヒドロクロロチアジド"], "有益性", "添文②", "詳細参照", "使用可"),
  d("trichlormethiazide", "循環器｜利尿剤｜サイアザイド系利尿薬", "cv_diuretic_thiazide", "トリクロルメチアジド", "trichlormethiazide", ["フルイトラン"], "有益性", "添文②", "詳細参照", "詳細参照"),

  d("codeine-phosphate", "呼吸器｜鎮咳去痰｜中枢性麻薬性鎮咳薬", "resp_cough", "コデインリン酸塩水和物", "codeine phosphate hydrate", ["コデインリン酸塩", "コデイン"], "有益性", "添文①", "詳細参照", "詳細参照"),
  d("dihydrocodeine-phosphate", "呼吸器｜鎮咳去痰｜中枢性麻薬性鎮咳薬", "resp_cough", "ジヒドロコデインリン酸塩", "dihydrocodeine phosphate", ["ジヒドロコデインリン酸塩", "ジヒドロコデイン"], "有益性", "添文①", "詳細参照", "詳細参照"),
  d("tipepidine-hibenzate", "呼吸器｜鎮咳去痰｜中枢性非麻薬性鎮咳薬", "resp_cough", "チペピジンヒベンズ酸塩", "tipepidine hibenzate", ["アスベリン"], "有益性", "添文③", "使用可", "情報なし"),
  d("dextromethorphan-hydrobromide", "呼吸器｜鎮咳去痰｜中枢性非麻薬性鎮咳薬", "resp_cough", "デキストロメトルファン臭化水素酸塩水和物", "dextromethorphan hydrobromide hydrate", ["メジコン"], "有益性", "添文③", "使用可", "使用可"),
  d("dimemorfan-phosphate", "呼吸器｜鎮咳去痰｜中枢性非麻薬性鎮咳薬", "resp_cough", "ジメモルファンリン酸塩", "dimemorfan phosphate", ["アストミン"], "有益性", "添文③", "使用可", "情報なし"),
  d("eprazinone-hydrochloride", "呼吸器｜鎮咳去痰｜中枢性非麻薬性鎮咳薬", "resp_cough", "エプラジノン塩酸塩", "eprazinone hydrochloride", ["レスプレン"], "有益性", "添文③", "使用可", "情報なし"),
  d("cloperastine-hydrochloride", "呼吸器｜鎮咳去痰｜中枢性非麻薬性鎮咳薬", "resp_cough", "クロペラスチン塩酸塩", "cloperastine hydrochloride", ["フスタゾール"], "有益性", "添文③", "使用可", "情報なし"),
  d("clofedanol-hydrochloride", "呼吸器｜鎮咳去痰｜中枢性非麻薬性鎮咳薬", "resp_cough", "クロフェダノール塩酸塩", "clofedanol hydrochloride", ["コルドリン"], "有益性", "添文③", "使用可", "情報なし"),
  d("bromhexine-hydrochloride", "呼吸器｜鎮咳去痰｜気道粘液溶解薬", "resp_cough", "ブロムヘキシン塩酸塩", "bromhexine hydrochloride", ["ビソルボン"], "有益性", "添文③", "使用可", "情報なし"),
  d("l-carbocisteine", "呼吸器｜鎮咳去痰｜気道粘液修復薬", "resp_cough", "L-カルボシステイン", "L-carbocisteine", ["ムコダイン"], "有益性", "添文③", "使用可", "情報なし"),
  d("ambroxol-hydrochloride", "呼吸器｜鎮咳去痰｜気道潤滑薬", "resp_cough", "アンブロキソール塩酸塩", "ambroxol hydrochloride", ["ムコソルバン", "ムコサール"], "有益性", "添文③", "使用可", "情報なし"),

  d("cimetidine", "消化器｜上部消化管｜ヒスタミンH2受容体拮抗薬", "gi_upper", "シメチジン", "cimetidine", ["タガメット", "カイロック"], "有益性", "添文③", "使用可", "使用可"),
  d("nizatidine", "消化器｜上部消化管｜ヒスタミンH2受容体拮抗薬", "gi_upper", "ニザチジン", "nizatidine", ["アシノン"], "有益性", "添文③", "使用可", "使用可"),
  d("famotidine", "消化器｜上部消化管｜ヒスタミンH2受容体拮抗薬", "gi_upper", "ファモチジン", "famotidine", ["ガスター"], "有益性", "添文③", "使用可", "使用可"),
  d("lafutidine", "消化器｜上部消化管｜ヒスタミンH2受容体拮抗薬", "gi_upper", "ラフチジン", "lafutidine", ["プロテカジン"], "有益性", "添文③", "使用可", "使用可"),
  d("roxatidine", "消化器｜上部消化管｜ヒスタミンH2受容体拮抗薬", "gi_upper", "ロキサチジン酢酸エステル塩酸塩", "roxatidine acetate hydrochloride", ["アルタット"], "有益性", "添文③", "使用可", "使用可"),
  d("omeprazole", "消化器｜上部消化管｜プロトンポンプ阻害薬（PPI）", "gi_upper", "オメプラゾール", "omeprazole", ["オメプラール", "オメプラゾン"], "有益性", "添文③", "使用可", "使用可"),
  d("rabeprazole", "消化器｜上部消化管｜プロトンポンプ阻害薬（PPI）", "gi_upper", "ラベプラゾール", "rabeprazole", ["パリエット"], "有益性", "添文③", "使用可", "使用可"),
  d("lansoprazole", "消化器｜上部消化管｜プロトンポンプ阻害薬（PPI）", "gi_upper", "ランソプラゾール", "lansoprazole", ["タケプロン"], "有益性", "添文③", "使用可", "使用可"),
  d("esomeprazole", "消化器｜上部消化管｜プロトンポンプ阻害薬（PPI）", "gi_upper", "エソメプラゾール", "esomeprazole", ["ネキシウム"], "有益性", "添文③", "使用可", "使用可"),
  d("vonoprazan", "消化器｜上部消化管｜プロトンポンプ阻害薬（PPI）", "gi_upper", "ボノプラザン", "vonoprazan", ["タケキャブ"], "有益性", "添文③", "使用可", "使用可"),
  d("misoprostol", "消化器｜上部消化管｜プロスタグランジンE1誘導体", "gi_upper", "ミソプロストール", "misoprostol", ["サイトテック"], "禁忌", "添文③", "使用不可", "使用可"),
  d("scopolamine-butylbromide", "消化器｜上部消化管｜四級アンモニウム塩合成抗コリン薬", "gi_upper", "ブチルスコポラミン臭化物", "scopolamine butylbromide", ["ブスコパン"], "有益性", "添文③", "使用可", "使用可"),
  d("metoclopramide", "消化器｜上部消化管｜ドパミン受容体拮抗薬", "gi_upper", "メトクロプラミド", "metoclopramide", ["プリンペラン"], "有益性", "添文③", "使用可", "使用可"),
  d("domperidone", "消化器｜上部消化管｜ドパミン受容体拮抗薬", "gi_upper", "ドンペリドン", "domperidone", ["ナウゼリン"], "禁忌", "添文③", "詳細参照", "使用可"),
  d("itopride", "消化器｜上部消化管｜ドパミン受容体拮抗薬", "gi_upper", "イトプリド", "itopride", ["ガナトン"], "有益性", "添文③", "詳細参照", "使用可"),
  d("trimebutine", "消化器｜上部消化管｜オピアト作動薬", "gi_upper", "トリメブチン", "trimebutine", ["セレキノン"], "記載なし", "添文③", "使用可", "使用可"),
  d("mosapride", "消化器｜上部消化管｜セロトニン受容体作動薬", "gi_upper", "モサプリドクエン酸塩水和物", "mosapride citrate hydrate", ["ガスモチン"], "有益性", "添文③", "使用可", "使用可"),
  d("teprenone", "消化器｜上部消化管｜その他", "gi_upper", "テプレノン", "teprenone", ["セルベックス"], "有益性", "添文③", "使用可", "使用可"),
  d("rebamipide", "消化器｜上部消化管｜その他", "gi_upper", "レバミピド", "rebamipide", ["ムコスタ"], "有益性", "添文③", "使用可", "使用可"),
  d("sucralfate", "消化器｜上部消化管｜その他", "gi_upper", "スクラルファート水和物", "sucralfate hydrate", ["アルサルミン"], "有益性", "添文③", "使用可", "使用可"),
  d("polaprezinc", "消化器｜上部消化管｜その他", "gi_upper", "ポラプレジンク", "polaprezinc", ["プロマック"], "有益性", "添文③", "使用可", "使用可"),

  d("polycarbophil-calcium", "消化器｜下部消化管｜過敏性腸症候群治療薬", "gi_lower", "ポリカルボフィルカルシウム", "polycarbophil calcium", ["コロネル", "ポリフル"], "有益性", "—", "使用可", "使用可"),
  d("mepenzolate", "消化器｜下部消化管｜過敏性腸症候群治療薬", "gi_lower", "メペンゾラート臭化物", "mepenzolate bromide", ["メペンゾラート"], "有益性", "添文③", "使用可", "詳細参照"),
  d("ramosetron", "消化器｜下部消化管｜過敏性腸症候群治療薬", "gi_lower", "ラモセトロン", "ramosetron", ["イリボー"], "有益性", "添文③", "使用可", "情報なし"),
  d("linaclotide", "消化器｜下部消化管｜過敏性腸症候群治療薬", "gi_lower", "リナクロチド", "linaclotide", ["リンゼス"], "有益性", "添文③", "使用可", "使用可"),
  d("lubiprostone", "消化器｜下部消化管｜上皮機能変容薬", "gi_lower", "ルビプロストン", "lubiprostone", ["アミティーザ"], "禁忌", "添文③", "使用可", "使用可"),
  d("magnesium-oxide", "消化器｜下部消化管｜浸透圧性下剤", "gi_lower", "酸化マグネシウム", "magnesium oxide", ["酸化マグネシウム", "マグミット"], "有益性", "添文③", "使用可", "使用可"),
  d("macrogol-electrolytes", "消化器｜下部消化管｜浸透圧性下剤", "gi_lower", "マクロゴール・塩化ナトリウム・炭酸水素ナトリウム・塩化カリウム", "macrogol / sodium chloride / sodium bicarbonate / potassium chloride", ["モビコール"], "有益性", "添文③", "使用可", "使用可"),
  d("senna", "消化器｜下部消化管｜大腸刺激性下剤", "gi_lower", "センナ", "senna", ["アローゼン", "アジャスト", "ヨーデル"], "有益性", "添文③", "使用可", "使用可"),
  d("sennoside", "消化器｜下部消化管｜大腸刺激性下剤", "gi_lower", "センノシド", "sennoside", ["プルゼニド"], "有益性※", "添文③", "使用可", "使用可"),
  d("picosulfate", "消化器｜下部消化管｜大腸刺激性下剤", "gi_lower", "ピコスルファートナトリウム水和物", "picosulfate sodium hydrate", ["ラキソベロン", "スナイリン"], "有益性", "—", "使用可", "使用可"),
  d("bisacodyl", "消化器｜下部消化管｜大腸刺激性下剤", "gi_lower", "ビサコジル", "bisacodyl", ["テレミンソフト"], "有益性※", "添文③", "使用可", "使用可"),
  d("elobixibat", "消化器｜下部消化管｜胆汁酸トランスポーター阻害薬", "gi_lower", "エロビキシバット水和物", "elobixibat hydrate", ["グーフィス"], "有益性", "添文③", "使用可", "使用可"),
  d("dimethicone", "消化器｜下部消化管｜消化管ガス駆除薬", "gi_lower", "ジメチコン", "dimethicone", ["ガスコン"], "—", "—", "使用可", "使用可"),
  d("loperamide", "消化器｜下部消化管｜腸運動抑制薬", "gi_lower", "ロペラミド塩酸塩", "loperamide hydrochloride", ["ロペミン"], "有益性", "添文①", "使用可", "使用可")

];

    function d(id, className, detailKey, ingredientJa, ingredientEn, brands, pregnancyInsert, lactationInsert, pregnancySummary, lactationSummary) {
      const searchTerms = [ingredientJa, ingredientEn, className, ...brands];
      return { id, className, detailKey, ingredientJa, ingredientEn, brands, pregnancyInsert, lactationInsert, pregnancySummary, lactationSummary, searchTerms };
    }

    const input = document.getElementById("searchInput");
    const suggestionsEl = document.getElementById("suggestions");
    const resultEl = document.getElementById("result");
    const clearBtn = document.getElementById("clearBtn");
    const classButtonsEl = document.getElementById("classButtons");
    const selectedChipsEl = document.getElementById("selectedChips");
    const selectedCountEl = document.getElementById("selectedCount");
    const auditBtn = document.getElementById("auditBtn");
    const clearSelectedBtn = document.getElementById("clearSelectedBtn");
    const searchStatusEl = document.getElementById("searchStatus");
    const bottomAuditBtn = document.getElementById("bottomAuditBtn");
    const bottomSelectedCountEl = document.getElementById("bottomSelectedCount");
    const collapseSearchBtn = document.getElementById("collapseSearchBtn");
    const searchBody = document.getElementById("searchBody");
    const modePregnancyBtn = document.getElementById("modePregnancyBtn");
    const modeLactationBtn = document.getElementById("modeLactationBtn");
    const openBulkBtn = document.getElementById("openBulkBtn");
    const bulkModal = document.getElementById("bulkModal");
    const closeBulkBtn = document.getElementById("closeBulkBtn");
    const cancelBulkBtn = document.getElementById("cancelBulkBtn");
    const bulkInput = document.getElementById("bulkInput");
    const bulkStatus = document.getElementById("bulkStatus");
    const bulkPreview = document.getElementById("bulkPreview");
    const addBulkBtn = document.getElementById("addBulkBtn");
    const recentDrugsEl = document.getElementById("recentDrugs");
    const antibioticCategoryBtn = document.getElementById("antibioticCategoryBtn");
    const antibioticCount = document.getElementById("antibioticCount");
    const antibioticSubPanel = document.getElementById("antibioticSubPanel");
    const closeSubPanelBtn = document.getElementById("closeSubPanelBtn");
    const antibioticSubButtons = document.getElementById("antibioticSubButtons");
    const antiviralCategoryBtn = document.getElementById("antiviralCategoryBtn");
    const antiviralCount = document.getElementById("antiviralCount");
    const antiviralSubPanel = document.getElementById("antiviralSubPanel");
    const closeAntiviralSubPanelBtn = document.getElementById("closeAntiviralSubPanelBtn");
    const antiviralSubButtons = document.getElementById("antiviralSubButtons");
    const compareModal = document.getElementById("compareModal");
    const closeCompareBtn = document.getElementById("closeCompareBtn");
    const compareTitle = document.getElementById("compareTitle");
    const comparisonScroll = document.getElementById("comparisonScroll");
    const compareDetail = document.getElementById("compareDetail");
    const drugDetailModal = document.getElementById("drugDetailModal");
    const closeDrugDetailBtn = document.getElementById("closeDrugDetailBtn");
    const drugDetailTitle = document.getElementById("drugDetailTitle");
    const drugDetailBody = document.getElementById("drugDetailBody");
    const historyBtn = document.getElementById("historyBtn");
    const themeBtn = document.getElementById("themeBtn");
    const themeToast = document.getElementById("themeToast");
    const historyModal = document.getElementById("historyModal");
    const closeHistoryBtn = document.getElementById("closeHistoryBtn");
    const clearHistoryBtn = document.getElementById("clearHistoryBtn");
    const historyTotalViews = document.getElementById("historyTotalViews");
    const historyDrugCount = document.getElementById("historyDrugCount");
    const historyDays = document.getElementById("historyDays");
    const historyList = document.getElementById("historyList");

    let selectedDrugs = [];
    let currentMode = "pregnancy";
    let bulkChosen = new Map();

    function kataToHira(str) {
      return str.replace(/[\u30a1-\u30f6]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0x60));
    }
