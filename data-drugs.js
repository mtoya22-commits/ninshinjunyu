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
  d("tebipenem", "カルバペネム系", "carbapenem", "テビペネム", "tebipenem", ["オラペネム"], "有益性", "―", "本文参照", "使用可"),
  d("faropenem", "ペネム系", "penem", "ファロペネム", "faropenem", ["ファロム"], "有益性", "添文③", "本文参照", "使用可"),
  d("vancomycin", "グリコペプチド系", "glycopeptide", "バンコマイシン", "vancomycin", ["塩酸バンコマイシン"], "有益性", "添文②", "本文参照", "使用可"),
  d("fosfomycin-calcium", "ホスホマイシン系", "fosfomycin", "ホスホマイシンカルシウム", "fosfomycin calcium", ["ホスミシン"], "有益性", "添文③", "使用可", "使用可"),
  d("kanamycin", "アミノグリコシド系", "aminoglycoside", "カナマイシン", "kanamycin", ["カナマイシン", "硫酸カナマイシン"], "有益性", "添文③", "使用可", "使用可"),
  d("fradiomycin", "アミノグリコシド系", "aminoglycoside", "フラジオマイシン", "fradiomycin", ["ソフラチュール"], "有益性", "―", "使用可", "使用可"),
  d("erythromycin", "マクロライド系", "macrolide", "エリスロマイシン", "erythromycin", ["エリスロシン"], "有益性", "添文③", "使用可", "使用可"),
  d("clarithromycin", "マクロライド系", "macrolide", "クラリスロマイシン", "clarithromycin", ["クラリス", "クラリシッド"], "有益性", "添文③", "使用可", "使用可"),
  d("roxithromycin", "マクロライド系", "macrolide", "ロキシスロマイシン", "roxithromycin", ["ルリッド"], "有益性", "添文③", "使用可", "使用可"),
  d("azithromycin", "マクロライド系", "macrolide", "アジスロマイシン", "azithromycin", ["ジスロマック"], "有益性", "添文③", "使用可", "使用可"),
  d("josamycin", "マクロライド系", "macrolide", "ジョサマイシン", "josamycin", ["ジョサマイシン"], "有益性", "添文③", "使用可", "使用可"),
  d("fidaxomicin", "マクロライド系", "macrolide", "フィダキソマイシン", "fidaxomicin", ["ダフクリア"], "有益性", "添文③", "使用可", "使用可"),
  d("tetracycline", "テトラサイクリン系", "tetracycline", "テトラサイクリン", "tetracycline", ["アクロマイシン"], "有益性", "添文②", "本文参照", "使用可"),
  d("demeclocycline", "テトラサイクリン系", "tetracycline", "デメチルクロルテトラサイクリン", "demeclocycline", ["レダマイシン"], "有益性", "添文②", "本文参照", "使用可"),
  d("doxycycline", "テトラサイクリン系", "tetracycline", "ドキシサイクリン", "doxycycline", ["ビブラマイシン"], "有益性", "添文②", "本文参照", "使用可"),
  d("minocycline", "テトラサイクリン系", "tetracycline", "ミノサイクリン", "minocycline", ["ミノマイシン"], "有益性", "添文②", "本文参照", "使用可"),
  d("lincomycin", "リンコマイシン系", "lincomycin", "リンコマイシン", "lincomycin", ["リンコシン"], "有益性", "添文③", "使用可", "使用可"),
  d("clindamycin", "リンコマイシン系", "lincomycin", "クリンダマイシン", "clindamycin", ["ダラシン"], "有益性", "添文③", "使用可", "使用可"),
  d("linezolid", "オキサゾリジノン系", "oxazolidinone", "リネゾリド", "linezolid", ["ザイボックス"], "有益性", "添文③", "情報なし", "使用可"),
  d("tedizolid", "オキサゾリジノン系", "oxazolidinone", "テジゾリド", "tedizolid", ["シベクトロ"], "有益性", "添文③", "情報なし", "使用可"),
  d("chloramphenicol", "クロラムフェニコール系", "chloramphenicol", "クロラムフェニコール", "chloramphenicol", ["クロロマイセチン", "クロマイ"], "有益性", "添文②", "本文参照", "本文参照"),
  d("norfloxacin", "ニューキノロン系", "quinolone", "ノルフロキサシン", "norfloxacin", ["バクシダール"], "禁忌※", "添文③", "使用可", "使用可"),
  d("ofloxacin", "ニューキノロン系", "quinolone", "オフロキサシン", "ofloxacin", ["タリビッド"], "禁忌", "添文②", "使用可", "使用可"),
  d("levofloxacin", "ニューキノロン系", "quinolone", "レボフロキサシン", "levofloxacin", ["クラビット"], "禁忌※", "添文②", "使用可", "使用可"),
  d("ciprofloxacin", "ニューキノロン系", "quinolone", "シプロフロキサシン", "ciprofloxacin", ["シプロキサン"], "禁忌※", "添文②", "使用可", "使用可"),
  d("lomefloxacin", "ニューキノロン系", "quinolone", "ロメフロキサシン", "lomefloxacin", ["バレオン"], "禁忌", "添文②", "本文参照", "使用可"),
  d("tosufloxacin", "ニューキノロン系", "quinolone", "トスフロキサシン", "tosufloxacin", ["オゼックス", "トスキサシン"], "禁忌※", "添文②", "本文参照", "使用可"),
  d("prulifloxacin", "ニューキノロン系", "quinolone", "プルリフロキサシン", "prulifloxacin", ["スオード"], "禁忌", "添文②", "本文参照", "使用可"),
  d("moxifloxacin", "ニューキノロン系", "quinolone", "モキシフロキサシン", "moxifloxacin", ["アベロックス"], "禁忌", "添文②", "本文参照", "使用可"),
  d("garenoxacin", "ニューキノロン系", "quinolone", "ガレノキサシン", "garenoxacin", ["ジェニナック"], "禁忌", "添文②", "本文参照", "使用可"),
  d("sitafloxacin", "ニューキノロン系", "quinolone", "シタフロキサシン", "sitafloxacin", ["グレースビット"], "禁忌", "添文②", "本文参照", "使用可"),
  d("lascufloxacin", "ニューキノロン系", "quinolone", "ラスクフロキサシン", "lascufloxacin", ["ラスビック"], "禁忌", "添文②", "本文参照", "使用可"),
  d("sulfamethoxazole-trimethoprim", "ST合剤（サルファ剤）", "st", "スルファメトキサゾール・トリメトプリム", "sulfamethoxazole / trimethoprim", ["バクタ", "バクトラミン"], "禁忌", "添文③", "本文参照", "使用可"),
  d("isoniazid", "抗結核薬", "antitb", "イソニアジド", "isoniazid", ["イスコチン"], "有益性", "添文②", "使用可", "使用可"),
  d("isoniazid-methanesulfonate", "抗結核薬", "antitb", "イソニアジドメタンスルホン酸ナトリウム", "isoniazid sodium methanesulfonate", ["ネオイスコチン"], "有益性", "添文②", "使用可", "使用可"),
  d("ethambutol", "抗結核薬", "antitb", "エタンブトール", "ethambutol", ["エサンブトール", "エブトール"], "有益性", "添文③", "使用可", "使用可"),
  d("pyrazinamide", "抗結核薬", "antitb", "ピラジナミド", "pyrazinamide", ["ピラマイド"], "有益性", "添文②", "情報なし", "使用可"),
  d("rifabutin", "抗結核薬", "antitb", "リファブチン", "rifabutin", ["ミコブティン"], "有益性", "添文③", "本文参照", "使用可"),
  d("rifampicin", "抗結核薬", "antitb", "リファンピシン", "rifampicin", ["リファジン"], "有益性", "添文③", "本文参照", "使用可"),
  d("ethionamide", "抗結核薬", "antitb", "エチオナミド", "ethionamide", ["ツベルミン"], "有益性", "添文③", "情報なし", "使用可"),
  d("cycloserine", "抗結核薬", "antitb", "サイクロセリン", "cycloserine", ["サイクロセリン"], "有益性", "添文③", "情報なし", "使用可"),
  d("delamanid", "抗結核薬", "antitb", "デラマニド", "delamanid", ["デルティバ"], "禁忌", "添文②", "情報なし", "使用可"),
  d("bedaquiline", "抗結核薬", "antitb", "ベダキリン", "bedaquiline", ["サチュロ"], "有益性", "添文②", "情報なし", "使用可")
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
