const tabData = {
  undergrad: {
    title: "本科申请重点",
    body:
      "优先确认目标学校是否要求EJU、JLPT或英语成绩，再倒排考试时间。校内考和面试通常决定最终录取质量。",
    rows: [
      ["核心材料", "成绩证明、毕业证明、志望理由书、语言成绩、护照、照片"],
      ["常见考试", "EJU、校内考、面试、英语成绩"],
      ["准备建议", "先按专业锁定20所候选，再分为冲刺、稳妥、保底"],
    ],
  },
  grad: {
    title: "大学院申请重点",
    body:
      "研究方向和导师匹配是主轴。研究计划书要说明问题意识、先行研究、方法、预期贡献，并和研究科资源对应。",
    rows: [
      ["核心材料", "研究计划书、成绩单、毕业证明、推荐信、语言成绩"],
      ["常见审查", "书类审查、笔试、口试、教授面谈"],
      ["准备建议", "先读导师论文，再写邮件和计划书，避免泛泛表达"],
    ],
  },
  vocational: {
    title: "专门学校申请重点",
    body:
      "重点看学习动机、日语能力、职业目标和经费能力。设计、动画、音乐等方向要尽早准备作品集。",
    rows: [
      ["核心材料", "入学愿书、学历证明、日语证明、经费材料、作品集"],
      ["常见审查", "书类审查、面试、作文、实技或作品说明"],
      ["准备建议", "确认毕业资格、就业支持、可申请的在留路径"],
    ],
  },
  language: {
    title: "语言学校申请重点",
    body:
      "语言学校适合把日语、升学辅导和生活适应放在日本完成。选择时要看课程、升学实绩、所在地和学生管理。",
    rows: [
      ["核心材料", "最终学历证明、日语学习证明、经费支付材料、履历"],
      ["常见入学期", "1月、4月、7月、10月，学校不同会有差异"],
      ["准备建议", "把语言学校当作过渡，不要推迟本科或大学院的长期规划"],
    ],
  },
};

const languageLabels = {
  zh: {
    htmlLang: "zh-Hans",
    ariaHome: "ISJ 首页",
    navAria: "主要导航",
    metaDescription:
      "ISJ - International Study in Japan。面向中国学生的日本留学信息导航，涵盖学校类型、申请流程、EJU、JLPT、签证、奖学金与来日生活准备。",
    selectors: {
      ".nav-direct[href='#top']": "首页",
      ".nav-direct[href='#eju-planner']": "EJU日程",
      ".nav-direct[href='#universities']": "查大学",
      ".nav-direct[href='#score-tool']": "成绩诊断",
      ".nav-direct[href='#life']": "来日生活",
      ".nav-direct[href='#announcements']": "公告栏",
      ".nav-direct[href='#about']": "关于本站",
      ".nav-menu summary": "全部菜单",
      "#hero-title": "日本留学信息导航",
      ".hero-lede": "EJU出願、候选大学、来日生活手续を一つの画面で確認。",
      ".hero-actions a[href='#eju-planner']": "EJU出願管理",
      ".hero-actions a[href='#score-tool']": "成绩看候选校",
      ".hero-actions a[href='#exam-guide']": "JLPT报名入口",
      ".hero-actions a[href='#life']": "来日生活工具",
      ".site-search label": "站内快速搜索",
      "#site-search-clear": "清空",
      "#home-exam-title": "EJU / JLPT重要节点",
      "#exam-entry-title": "报名入口",
      ".exam-entry-more": "EJU时间割と流れマニュアルを見る",
      "#intro-title": "快速入口",
      "#announcements-title": "公告栏",
      "#score-title": "预测成绩から候选大学を探す",
      "#paths-title": "常见升学路径",
      "#compare-title": "按目标快速比较",
      "#graduate-title": "大学院申请导航",
      "#universities-title": "大学资料・出愿参考带・官方链接",
      "#contact-title": "整理你的个人申请路线",
      "#about-title": "关于本站",
      ".site-footer p:first-child": "ISJ · International Study in Japan © 2026",
      ".site-footer p:last-child": "信息会随制度与学校募集要项变化，申请前请以官方与学校最新公告为准。",
    },
    placeholders: {
      "#site-search-input": "例：JLPT报名 / 南山大学 / 银行开户 / 志望理由书",
      "#university-search": "例：明治学院 / GMARCH / 関関同立 / 东京 / EJU",
      "#report-university": "例：南山大学 / Meiji University",
    },
    labels: {
      scoreForm: [
        "目标方向",
        "希望地区",
        "学校类型",
        "EJU日语（0-400）",
        "EJU记述（0-50）",
        "综合科目 / 理科（0-200）",
        "数学（0-200）",
        "英语分数（TOEFL iBT换算）",
        "JLPT",
        "志望理由书准备度",
      ],
      universityToolbar: ["搜索大学・地区・项目", "学校类型"],
      planForm: ["目标", "目前日语水平", "希望入学时间"],
    },
    buttons: {
      scoreSubmit: "候选大学を表示",
      saveScore: "保存当前成绩",
      saved: "已保存",
      planSubmit: "生成准备清单",
    },
    search: {
      noResult: "没有找到。可以试试：EJU、JLPT、明治、南山、GMARCH、银行、签证、奖学金。",
      functionType: "功能",
      universityType: "大学",
    },
    staticText: {},
  },
  en: {
    htmlLang: "en",
    ariaHome: "ISJ Home",
    navAria: "Main navigation",
    metaDescription:
      "ISJ - International Study in Japan. A practical guide for studying in Japan, covering EJU, JLPT, university search, applications, visas, scholarships and life in Japan.",
    selectors: {
      ".nav-direct[href='#top']": "Home",
      ".nav-direct[href='#eju-planner']": "EJU Dates",
      ".nav-direct[href='#universities']": "Universities",
      ".nav-direct[href='#score-tool']": "Score Match",
      ".nav-direct[href='#life']": "Life in Japan",
      ".nav-direct[href='#announcements']": "Updates",
      ".nav-direct[href='#about']": "About",
      ".nav-menu summary": "All Menu",
      "#hero-title": "Japan Study Information Guide",
      ".hero-lede": "Check EJU applications, university choices, and life procedures in Japan from one screen.",
      ".hero-actions a[href='#eju-planner']": "EJU Application Planner",
      ".hero-actions a[href='#score-tool']": "Find Universities by Score",
      ".hero-actions a[href='#exam-guide']": "JLPT Application Links",
      ".hero-actions a[href='#life']": "Life Tools",
      ".site-search label": "Quick Site Search",
      "#site-search-clear": "Clear",
      "#home-exam-title": "Key EJU / JLPT Dates",
      "#exam-entry-title": "Official Application Links",
      ".exam-entry-more": "View EJU timetable and step-by-step manual",
      "#intro-title": "Quick Entry",
      "#announcements-title": "Updates",
      "#score-title": "Find Candidate Universities from Predicted Scores",
      "#paths-title": "Common Study Routes",
      "#compare-title": "Compare by Goal",
      "#graduate-title": "Graduate School Guide",
      "#universities-title": "University Data, Application Ranges, Official Links",
      "#contact-title": "Create Your Personal Application Plan",
      "#about-title": "About This Site",
      ".site-footer p:first-child": "ISJ · International Study in Japan © 2026",
      ".site-footer p:last-child": "Information changes by system and university guidelines. Always confirm with official and university announcements before applying.",
    },
    placeholders: {
      "#site-search-input": "Example: JLPT application / Nanzan University / bank account / statement of purpose",
      "#university-search": "Example: Meiji Gakuin / GMARCH / Kankandoritsu / Tokyo / EJU",
      "#report-university": "Example: Nanzan University / Meiji University",
    },
    labels: {
      scoreForm: [
        "Target Field",
        "Preferred Region",
        "School Type",
        "EJU Japanese (0-400)",
        "EJU Writing (0-50)",
        "Japan and the World / Science (0-200)",
        "Mathematics (0-200)",
        "English Score (TOEFL iBT equivalent)",
        "JLPT",
        "Statement of Purpose Readiness",
      ],
      universityToolbar: ["Search by university, region, or program", "School Type"],
      planForm: ["Goal", "Current Japanese Level", "Preferred Enrollment"],
    },
    buttons: {
      scoreSubmit: "Show Candidate Universities",
      saveScore: "Save Current Scores",
      saved: "Saved",
      planSubmit: "Generate Checklist",
    },
    search: {
      noResult: "No results. Try: EJU, JLPT, Meiji, Nanzan, GMARCH, bank, visa, scholarship.",
      functionType: "Tool",
      universityType: "University",
    },
    staticText: {
      "申请入口总览": "Application Overview",
      "考试": "Exams",
      "选校": "School Search",
      "出愿": "Application",
      "来日": "Arrival",
      "公式出願": "Official Application",
      "EJU Online・日程・出願方法": "EJU Online, Schedule, Application Guide",
      "确认报名入口、考试时间、成绩发表和自己的备考时间表。":
        "Check the application portal, exam dates, score release, and your own study timetable.",
      "学校筛选": "University Screening",
      "预测成绩から候选大学を探す": "Find Candidate Universities from Predicted Scores",
      "输入EJU、英语、JLPT和志望理由书准备度，查看合适的候选校。":
        "Enter EJU, English, JLPT, and statement-of-purpose readiness to view suitable candidate universities.",
      "JLPT备考": "JLPT Preparation",
      "报名入口・问题例・N1/N2准备": "Application Links, Sample Questions, N1/N2 Prep",
      "整理EJU、JLPT、文综和参考书/免费课程入口。":
        "Organize EJU, JLPT, Japan and the World, reference books, and free course links.",
      "来日后": "After Arrival",
      "电话・银行卡・租房の办理顺序": "Phone, Bank Card, Housing Setup Order",
      "来日后在留卡、住民票、国保、手机、银行和租房手续。":
        "Check residence card, resident registration, national health insurance, phone, bank, and housing procedures.",
      "第2回出願": "2nd Session Application",
      "試験日": "Exam Date",
      "成績公表": "Score Release",
      "EJU第2回": "EJU 2nd Session",
      "11/8試験": "Exam 11/8",
      "出願締切": "Application Deadline",
      "首页只放最近必须确认的时间点，点击即可进入官方日文入口。正式日期以官方公告为准。":
        "The home page only shows the nearest dates you must check. Click to open the official Japanese pages. Official announcements take priority.",
      "EJU和JLPT分开确认。日本国内、海外报名入口不同，不要只看一个链接。":
        "Check EJU and JLPT separately. Domestic and overseas application portals differ, so do not rely on only one link.",
      "出願・受験票・成績確認": "Application, Exam Voucher, Score Check",
      "出願方法": "Application Method",
      "国内17:00締切に注意": "Domestic deadline is 17:00 JST",
      "JLPT 国内": "JLPT Japan",
      "日本国内受験の申込": "Application for taking JLPT in Japan",
      "JLPT 海外": "JLPT Overseas",
      "海外実施機関": "Overseas Host Institutions",
      "中国等は各実施機関を確認": "Check each local host institution, including China",
      "EJU出願管理": "EJU Application Planner",
      "出願入口、試験時間、重要日程、自分の時間割。":
        "Application portal, exam times, key dates, and your own schedule.",
      "成绩看候选校": "Find Schools by Score",
      "EJU、英語、JLPT、志望理由書で候选大学を確認。":
        "Check candidate universities using EJU, English, JLPT, and your statement of purpose.",
      "EJU / JLPT备考指南": "EJU / JLPT Prep Guide",
      "過去問、参考書、报名入口、N1/N2准备路线。":
        "Past questions, reference books, application links, and N1/N2 prep routes.",
      "来日生活工具": "Life Tools in Japan",
      "在留、住民票、手机、银行、租房、水电煤。":
        "Residence status, resident registration, phone, bank, housing, utilities.",
      "大学院导航": "Graduate School",
      "研究计划书、教授联系、院试": "Research plan, professor contact, entrance exam",
      "大学院申请导航": "Graduate School Guide",
      "研究计划书、导师匹配、教授邮件、院试与出愿确认。":
        "Research plan, supervisor matching, professor emails, entrance exams, and application checks.",
      "大学院和学部申请逻辑不一样。这里先按官方募集要項、研究科页面和导师研究室信息来整理，不把未经确认的经验帖当作录取保证。":
        "Graduate admissions work differently from undergraduate admissions. This guide prioritizes official guidelines, graduate school pages, and lab information, not unverified anecdotes.",
      "先做方向，再找学校": "Define your research direction first",
      "大学院不是单纯看分数，而是看研究主题是否对得上。":
        "Graduate admissions are not just about scores; research fit matters.",
      "先确定研究领域、关键词、想解决的问题，再查研究科和教授。EJU通常不是主轴，更多学校会看研究计划书、语言成绩、专业基础、书类审查、笔试和口试。":
        "Start with your field, keywords, and research question, then check graduate schools and faculty. EJU is usually not the main axis; many programs focus on research plans, language scores, academic background, document screening, written exams, and interviews.",
      "最先确认的4件事": "Check These 4 Things First",
      "研究计划书骨架": "Research Plan Structure",
      "教授邮件不要写成套话": "Do Not Send Template-like Professor Emails",
      "常见材料": "Common Materials",
      "官方入口": "Official Links",
      "网站更新、募集要項抽取进度、重要考试节点会集中放在这里。":
        "Site updates, admissions guideline extraction progress, and important exam dates are collected here.",
      "输入成绩后，系统会按照EJU、英语、JLPT和志望理由书准备度做初步匹配。":
        "After entering your scores, the system makes an initial match using EJU, English, JLPT, and statement readiness.",
      "成绩と大学データを照合中...": "Matching your scores with university data...",
      "最高匹配度": "Highest Match",
    },
  },
  ja: {
    htmlLang: "ja",
    ariaHome: "ISJ ホーム",
    navAria: "メインナビゲーション",
    metaDescription:
      "ISJ - International Study in Japan。日本留学を目指す人のための情報ナビ。EJU、JLPT、大学検索、出願、ビザ、奨学金、来日後の生活手続きを整理しています。",
    selectors: {
      ".nav-direct[href='#top']": "ホーム",
      ".nav-direct[href='#eju-planner']": "EJU日程",
      ".nav-direct[href='#universities']": "大学検索",
      ".nav-direct[href='#score-tool']": "成績診断",
      ".nav-direct[href='#life']": "来日生活",
      ".nav-direct[href='#announcements']": "公告",
      ".nav-direct[href='#about']": "このサイトについて",
      ".nav-menu summary": "全メニュー",
      "#hero-title": "日本留学情報ナビ",
      ".hero-lede": "EJU出願、候補大学、来日後の手続きを一つの画面で確認できます。",
      ".hero-actions a[href='#eju-planner']": "EJU出願管理",
      ".hero-actions a[href='#score-tool']": "成績から候補校を探す",
      ".hero-actions a[href='#exam-guide']": "JLPT申込入口",
      ".hero-actions a[href='#life']": "来日生活ツール",
      ".site-search label": "サイト内検索",
      "#site-search-clear": "クリア",
      "#home-exam-title": "EJU / JLPT 重要日程",
      "#exam-entry-title": "公式申込入口",
      ".exam-entry-more": "EJU時間割と流れマニュアルを見る",
      "#intro-title": "クイック入口",
      "#announcements-title": "公告",
      "#score-title": "予測成績から候補大学を探す",
      "#paths-title": "主な進学ルート",
      "#compare-title": "目的別に比較",
      "#graduate-title": "大学院申請ナビ",
      "#universities-title": "大学資料・出願参考帯・公式リンク",
      "#contact-title": "自分の出願ルートを整理",
      "#about-title": "このサイトについて",
      ".site-footer p:first-child": "ISJ · International Study in Japan © 2026",
      ".site-footer p:last-child": "制度や各大学の募集要項は変更されます。出願前に必ず公式サイトと大学の最新公告を確認してください。",
    },
    placeholders: {
      "#site-search-input": "例：JLPT申込 / 南山大学 / 銀行口座 / 志望理由書",
      "#university-search": "例：明治学院 / GMARCH / 関関同立 / 東京 / EJU",
      "#report-university": "例：南山大学 / 明治大学",
    },
    labels: {
      scoreForm: [
        "志望分野",
        "希望地域",
        "学校タイプ",
        "EJU日本語（0-400）",
        "EJU記述（0-50）",
        "総合科目 / 理科（0-200）",
        "数学（0-200）",
        "英語スコア（TOEFL iBT換算）",
        "JLPT",
        "志望理由書の準備度",
      ],
      universityToolbar: ["大学・地域・項目を検索", "学校タイプ"],
      planForm: ["目標", "現在の日本語レベル", "希望入学時期"],
    },
    buttons: {
      scoreSubmit: "候補大学を表示",
      saveScore: "現在の成績を保存",
      saved: "保存しました",
      planSubmit: "準備リストを作成",
    },
    search: {
      noResult: "見つかりませんでした。EJU、JLPT、明治、南山、GMARCH、銀行、ビザ、奨学金などで検索できます。",
      functionType: "機能",
      universityType: "大学",
    },
    staticText: {
      "申请入口总览": "申込入口一覧",
      "考试": "試験",
      "选校": "大学選び",
      "出愿": "出願",
      "来日": "来日",
      "公式出願": "公式出願",
      "EJU Online・日程・出願方法": "EJU Online・日程・出願方法",
      "确认报名入口、考试时间、成绩发表和自己的备考时间表。":
        "申込入口、試験時間、成績発表日、自分の学習スケジュールを確認できます。",
      "学校筛选": "大学検索",
      "预测成绩から候选大学を探す": "予測成績から候補大学を探す",
      "输入EJU、英语、JLPT和志望理由书准备度，查看合适的候选校。":
        "EJU、英語、JLPT、志望理由書の準備度を入力して、候補大学を確認します。",
      "JLPT备考": "JLPT対策",
      "报名入口・问题例・N1/N2准备": "申込入口・問題例・N1/N2対策",
      "整理EJU、JLPT、文综和参考书/免费课程入口。":
        "EJU、JLPT、総合科目、参考書、無料講座の入口を整理します。",
      "来日后": "来日後",
      "电话・银行卡・租房の办理顺序": "携帯・銀行カード・住まいの手続き順",
      "来日后在留卡、住民票、国保、手机、银行和租房手续。":
        "来日後の在留カード、住民票、国民健康保険、携帯、銀行、住まいの手続きを確認します。",
      "第2回出願": "第2回出願",
      "試験日": "試験日",
      "成績公表": "成績公表",
      "EJU第2回": "EJU第2回",
      "11/8試験": "11/8試験",
      "出願締切": "出願締切",
      "首页只放最近必须确认的时间点，点击即可进入官方日文入口。正式日期以官方公告为准。":
        "ホームには直近で確認すべき日程だけを表示します。クリックすると公式日本語ページを開きます。正式な日程は公式発表を優先してください。",
      "EJU和JLPT分开确认。日本国内、海外报名入口不同，不要只看一个链接。":
        "EJUとJLPTは別々に確認してください。日本国内受験と海外受験では申込入口が異なります。",
      "出願・受験票・成績確認": "出願・受験票・成績確認",
      "出願方法": "出願方法",
      "国内17:00締切に注意": "国内出願は17:00締切に注意",
      "JLPT 国内": "JLPT 国内",
      "日本国内受験の申込": "日本国内受験の申込",
      "JLPT 海外": "JLPT 海外",
      "海外実施機関": "海外実施機関",
      "中国等は各実施機関を確認": "中国などは各実施機関を確認",
      "EJU出願管理": "EJU出願管理",
      "出願入口、試験時間、重要日程、自分の時間割。":
        "出願入口、試験時間、重要日程、自分の時間割を確認します。",
      "成绩看候选校": "成績から候補校を探す",
      "EJU、英語、JLPT、志望理由書で候选大学を確認。":
        "EJU、英語、JLPT、志望理由書から候補大学を確認します。",
      "EJU / JLPT备考指南": "EJU / JLPT対策ガイド",
      "過去問、参考書、报名入口、N1/N2准备路线。":
        "過去問、参考書、申込入口、N1/N2対策ルートを整理します。",
      "来日生活工具": "来日生活ツール",
      "在留、住民票、手机、银行、租房、水电煤。":
        "在留、住民票、携帯、銀行、住まい、電気・ガス・水道を確認します。",
      "大学院导航": "大学院",
      "研究计划书、教授联系、院试": "研究計画書、教授連絡、院試",
      "大学院申请导航": "大学院申請ナビ",
      "研究计划书、导师匹配、教授邮件、院试与出愿确认。":
        "研究計画書、指導教員との適合、教授へのメール、院試、出願確認を整理します。",
      "大学院和学部申请逻辑不一样。这里先按官方募集要項、研究科页面和导师研究室信息来整理，不把未经确认的经验帖当作录取保证。":
        "大学院入試は学部入試と考え方が異なります。ここでは公式募集要項、研究科ページ、研究室情報を優先し、未確認の体験談を合格保証として扱いません。",
      "先做方向，再找学校": "先に研究方向を決める",
      "大学院不是单纯看分数，而是看研究主题是否对得上。":
        "大学院は点数だけではなく、研究テーマの適合が重要です。",
      "先确定研究领域、关键词、想解决的问题，再查研究科和教授。EJU通常不是主轴，更多学校会看研究计划书、语言成绩、专业基础、书类审查、笔试和口试。":
        "研究分野、キーワード、解きたい問いを先に決めてから研究科と教員を調べます。EJUが主軸ではない場合が多く、研究計画書、語学成績、専門基礎、書類審査、筆記試験、口述試験が重視されます。",
      "最先确认的4件事": "最初に確認する4項目",
      "研究计划书骨架": "研究計画書の骨組み",
      "教授邮件不要写成套话": "教授メールは定型文にしない",
      "常见材料": "よくある提出書類",
      "官方入口": "公式入口",
      "网站更新、募集要項抽取进度、重要考试节点会集中放在这里。":
        "サイト更新、募集要項の抽出状況、重要な試験日程をここにまとめます。",
      "输入成绩后，系统会按照EJU、英语、JLPT和志望理由书准备度做初步匹配。":
        "成績を入力すると、EJU、英語、JLPT、志望理由書の準備度をもとに初期マッチングします。",
      "成绩と大学データを照合中...": "成績と大学データを照合中...",
      "最高匹配度": "最高マッチ度",
    },
  },
  ko: {
    htmlLang: "ko",
    ariaHome: "ISJ 홈",
    navAria: "주요 내비게이션",
    metaDescription:
      "ISJ - International Study in Japan. 일본 유학 준비자를 위한 EJU, JLPT, 대학 검색, 출원, 비자, 장학금, 일본 생활 정보 안내.",
    selectors: {
      ".nav-direct[href='#top']": "홈",
      ".nav-direct[href='#eju-planner']": "EJU 일정",
      ".nav-direct[href='#universities']": "대학 찾기",
      ".nav-direct[href='#score-tool']": "성적 진단",
      ".nav-direct[href='#life']": "일본 생활",
      ".nav-direct[href='#announcements']": "공지",
      ".nav-direct[href='#about']": "사이트 소개",
      ".nav-menu summary": "전체 메뉴",
      "#hero-title": "일본 유학 정보 내비게이션",
      ".hero-lede": "EJU 출원, 후보 대학, 일본 생활 절차를 한 화면에서 확인하세요.",
      ".hero-actions a[href='#eju-planner']": "EJU 출원 관리",
      ".hero-actions a[href='#score-tool']": "성적으로 대학 찾기",
      ".hero-actions a[href='#exam-guide']": "JLPT 신청 링크",
      ".hero-actions a[href='#life']": "생활 도구",
      ".site-search label": "사이트 빠른 검색",
      "#site-search-clear": "지우기",
      "#home-exam-title": "EJU / JLPT 중요 일정",
      "#exam-entry-title": "공식 신청 링크",
      ".exam-entry-more": "EJU 시간표와 진행 매뉴얼 보기",
      "#intro-title": "빠른 입구",
      "#announcements-title": "공지",
      "#score-title": "예상 성적으로 후보 대학 찾기",
      "#paths-title": "주요 진학 경로",
      "#compare-title": "목표별 비교",
      "#graduate-title": "대학원 지원 가이드",
      "#universities-title": "대학 자료・출원 참고 범위・공식 링크",
      "#contact-title": "개인 출원 계획 정리",
      "#about-title": "사이트 소개",
      ".site-footer p:first-child": "ISJ · International Study in Japan © 2026",
      ".site-footer p:last-child": "제도와 대학 모집요강은 바뀔 수 있으므로, 출원 전 반드시 공식 및 대학 최신 공지를 확인하세요.",
    },
    placeholders: {
      "#site-search-input": "예: JLPT 신청 / 난잔대학 / 은행 계좌 / 지원이유서",
      "#university-search": "예: 메이지가쿠인 / GMARCH / 간칸도리쓰 / 도쿄 / EJU",
      "#report-university": "예: 난잔대학 / Meiji University",
    },
    labels: {
      scoreForm: [
        "목표 분야",
        "희망 지역",
        "학교 유형",
        "EJU 일본어 (0-400)",
        "EJU 기술 (0-50)",
        "종합과목 / 이과 (0-200)",
        "수학 (0-200)",
        "영어 점수 (TOEFL iBT 환산)",
        "JLPT",
        "지원이유서 준비도",
      ],
      universityToolbar: ["대학・지역・프로그램 검색", "학교 유형"],
      planForm: ["목표", "현재 일본어 수준", "희망 입학 시기"],
    },
    buttons: {
      scoreSubmit: "후보 대학 표시",
      saveScore: "현재 성적 저장",
      saved: "저장됨",
      planSubmit: "준비 체크리스트 생성",
    },
    search: {
      noResult: "검색 결과가 없습니다. EJU, JLPT, Meiji, Nanzan, GMARCH, 은행, 비자, 장학금을 시도해 보세요.",
      functionType: "기능",
      universityType: "대학",
    },
    staticText: {
      "申请入口总览": "신청 입구 총정리",
      "考试": "시험",
      "选校": "대학 선택",
      "出愿": "출원",
      "来日": "일본 입국",
      "公式出願": "공식 출원",
      "EJU Online・日程・出願方法": "EJU Online・일정・출원 방법",
      "确认报名入口、考试时间、成绩发表和自己的备考时间表。":
        "신청 입구, 시험 시간, 성적 발표일, 나의 학습 시간표를 확인합니다.",
      "学校筛选": "대학 선별",
      "预测成绩から候选大学を探す": "예상 성적으로 후보 대학 찾기",
      "输入EJU、英语、JLPT和志望理由书准备度，查看合适的候选校。":
        "EJU, 영어, JLPT, 지원이유서 준비도를 입력해 맞는 후보 대학을 확인합니다.",
      "JLPT备考": "JLPT 준비",
      "报名入口・问题例・N1/N2准备": "신청 링크・문제 예시・N1/N2 준비",
      "整理EJU、JLPT、文综和参考书/免费课程入口。":
        "EJU, JLPT, 종합과목, 참고서와 무료 강의 링크를 정리합니다.",
      "来日后": "입국 후",
      "电话・银行卡・租房の办理顺序": "전화・은행카드・집 구하기 순서",
      "来日后在留卡、住民票、国保、手机、银行和租房手续。":
        "입국 후 재류카드, 주민표, 국민건강보험, 휴대폰, 은행, 집 관련 절차를 확인합니다.",
      "第2回出願": "제2회 출원",
      "試験日": "시험일",
      "成績公表": "성적 발표",
      "EJU第2回": "EJU 제2회",
      "11/8試験": "11/8 시험",
      "出願締切": "출원 마감",
      "首页只放最近必须确认的时间点，点击即可进入官方日文入口。正式日期以官方公告为准。":
        "홈에는 가까운 중요 일정만 표시합니다. 클릭하면 공식 일본어 페이지로 이동하며, 최종 날짜는 공식 공지를 기준으로 합니다.",
      "EJU和JLPT分开确认。日本国内、海外报名入口不同，不要只看一个链接。":
        "EJU와 JLPT는 따로 확인하세요. 일본 국내와 해외 신청 입구가 다르므로 링크 하나만 보지 마세요.",
      "出願・受験票・成績確認": "출원・수험표・성적 확인",
      "出願方法": "출원 방법",
      "国内17:00締切に注意": "일본 국내 마감은 17:00 JST",
      "JLPT 国内": "JLPT 일본 국내",
      "日本国内受験の申込": "일본 국내 JLPT 신청",
      "JLPT 海外": "JLPT 해외",
      "海外実施機関": "해외 실시 기관",
      "中国等は各実施機関を確認": "중국 등은 각 실시 기관 확인",
      "EJU出願管理": "EJU 출원 관리",
      "出願入口、試験時間、重要日程、自分の時間割。":
        "출원 입구, 시험 시간, 중요 일정, 나의 시간표.",
      "成绩看候选校": "성적으로 후보 대학 찾기",
      "EJU、英語、JLPT、志望理由書で候选大学を確認。":
        "EJU, 영어, JLPT, 지원이유서로 후보 대학을 확인합니다.",
      "EJU / JLPT备考指南": "EJU / JLPT 준비 가이드",
      "過去問、参考書、报名入口、N1/N2准备路线。":
        "기출문제, 참고서, 신청 링크, N1/N2 준비 루트.",
      "来日生活工具": "일본 생활 도구",
      "在留、住民票、手机、银行、租房、水电煤。":
        "재류, 주민표, 휴대폰, 은행, 집, 전기・가스・수도.",
      "大学院导航": "대학원",
      "研究计划书、教授联系、院试": "연구계획서, 교수 연락, 대학원 입시",
      "大学院申请导航": "대학원 지원 가이드",
      "研究计划书、导师匹配、教授邮件、院试与出愿确认。":
        "연구계획서, 지도교수 매칭, 교수 메일, 대학원 입시와 출원 확인.",
      "大学院和学部申请逻辑不一样。这里先按官方募集要項、研究科页面和导师研究室信息来整理，不把未经确认的经验帖当作录取保证。":
        "대학원 지원은 학부 지원과 논리가 다릅니다. 공식 모집요강, 연구과 페이지, 연구실 정보를 우선하며 확인되지 않은 경험담을 합격 보장처럼 다루지 않습니다.",
      "先做方向，再找学校": "먼저 연구 방향 정하기",
      "大学院不是单纯看分数，而是看研究主题是否对得上。":
        "대학원은 점수만이 아니라 연구 주제의 적합성이 중요합니다.",
      "先确定研究领域、关键词、想解决的问题，再查研究科和教授。EJU通常不是主轴，更多学校会看研究计划书、语言成绩、专业基础、书类审查、笔试和口试。":
        "연구 분야, 키워드, 풀고 싶은 질문을 정한 뒤 연구과와 교원을 확인합니다. EJU가 중심이 아닌 경우가 많고, 연구계획서, 어학 성적, 전공 기초, 서류 심사, 필기시험, 구술시험이 중요합니다.",
      "最先确认的4件事": "먼저 확인할 4가지",
      "研究计划书骨架": "연구계획서 구조",
      "教授邮件不要写成套话": "교수 메일은 템플릿처럼 쓰지 않기",
      "常见材料": "자주 필요한 서류",
      "官方入口": "공식 링크",
      "网站更新、募集要項抽取进度、重要考试节点会集中放在这里。":
        "사이트 업데이트, 모집요강 추출 진행 상황, 중요 시험 일정은 여기에 모입니다.",
      "输入成绩后，系统会按照EJU、英语、JLPT和志望理由书准备度做初步匹配。":
        "성적을 입력하면 EJU, 영어, JLPT, 지원이유서 준비도를 바탕으로 1차 매칭합니다.",
      "成绩と大学データを照合中...": "성적과 대학 데이터를 대조하는 중...",
      "最高匹配度": "최고 매칭도",
    },
  },
};

let currentLanguage = localStorage.getItem("isj-language") || "zh";

function getLanguagePack() {
  return languageLabels[currentLanguage] || languageLabels.zh;
}

function setElementText(selector, text) {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = text;
  });
}

function setLeadingLabelText(label, text) {
  const textNode = [...label.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
  if (textNode) {
    textNode.textContent = `\n              ${text}\n              `;
  }
}

function getStaticTextReverseMap() {
  const reverse = new Map();
  Object.values(languageLabels).forEach((pack) => {
    Object.entries(pack.staticText || {}).forEach(([source, translated]) => {
      reverse.set(translated, source);
    });
  });
  return reverse;
}

function replaceTrimmedText(original, replacement) {
  const prefix = original.match(/^\s*/)?.[0] || "";
  const suffix = original.match(/\s*$/)?.[0] || "";
  return `${prefix}${replacement}${suffix}`;
}

function applyStaticTextTranslations(pack) {
  const reverse = getStaticTextReverseMap();
  const sourceKeys = new Set([
    ...Object.keys(languageLabels.en.staticText || {}),
    ...Object.keys(languageLabels.ja.staticText || {}),
    ...Object.keys(languageLabels.ko.staticText || {}),
  ]);
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const parent = node.parentElement;
    if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) return;
    const trimmed = node.textContent.trim();
    if (!trimmed) return;
    const source = sourceKeys.has(trimmed) ? trimmed : reverse.get(trimmed);
    if (!source) return;
    const translated = currentLanguage === "zh" ? source : pack.staticText?.[source];
    if (!translated || translated === trimmed) return;
    node.textContent = replaceTrimmedText(node.textContent, translated);
  });
}

function applyLanguage(lang = currentLanguage) {
  currentLanguage = languageLabels[lang] ? lang : "zh";
  localStorage.setItem("isj-language", currentLanguage);
  const pack = getLanguagePack();
  document.documentElement.lang = pack.htmlLang;
  document.querySelector("meta[name='description']")?.setAttribute("content", pack.metaDescription);
  document.querySelector(".brand")?.setAttribute("aria-label", pack.ariaHome);
  document.querySelector(".site-nav")?.setAttribute("aria-label", pack.navAria);

  Object.entries(pack.selectors).forEach(([selector, text]) => setElementText(selector, text));
  Object.entries(pack.placeholders).forEach(([selector, text]) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute("placeholder", text);
    });
  });

  document.querySelectorAll(".score-form label").forEach((label, index) => {
    if (pack.labels.scoreForm[index]) setLeadingLabelText(label, pack.labels.scoreForm[index]);
  });
  document.querySelectorAll(".university-toolbar label").forEach((label, index) => {
    if (pack.labels.universityToolbar[index]) setLeadingLabelText(label, pack.labels.universityToolbar[index]);
  });
  document.querySelectorAll(".contact-form label").forEach((label, index) => {
    if (pack.labels.planForm[index]) setLeadingLabelText(label, pack.labels.planForm[index]);
  });

  document.querySelector(".score-form button[type='submit']") && (document.querySelector(".score-form button[type='submit']").textContent = pack.buttons.scoreSubmit);
  document.querySelector("#save-score-profile") && (document.querySelector("#save-score-profile").textContent = pack.buttons.saveScore);
  document.querySelector(".contact-form button[type='submit']") && (document.querySelector(".contact-form button[type='submit']").textContent = pack.buttons.planSubmit);
  applyStaticTextTranslations(pack);

  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    const active = button.dataset.langSwitch === currentLanguage;
    button.setAttribute("aria-pressed", String(active));
    button.classList.toggle("is-active", active);
  });

  renderSiteSearch(document.querySelector("#site-search-input")?.value || "");
}

const featuredUniversities = [
  {
    name: "东京大学 PEAK / GSC",
    region: "kanto",
    fields: ["english", "science", "humanities"],
    route: "英语项目",
    line: "EJU通常不是主轴。重点看英语材料、学校成绩、标准化考试和Essay。",
    target: { japanese: 0, subject: 0, math: 0, english: 105, jlpt: 0, essay: 5 },
    official: "https://www.u-tokyo.ac.jp/ja/admissions/index.html",
    requirement:
      "PEAK 2026秋入学后将停止招生，GSC为理科转入项目。必须看官方最新说明。",
  },
  {
    name: "早稻田大学 国际招生",
    region: "kanto",
    fields: ["english", "humanities", "science"],
    route: "日语项目 / 英语项目",
    line: "高难度。日语项目常需要强EJU与校内审查；英语项目重视英语、Essay和成绩。",
    target: { japanese: 330, subject: 165, math: 160, english: 90, jlpt: 2, essay: 4 },
    official: "https://www.waseda.jp/inst/admission/undergraduate/",
    requirement:
      "学部差异很大，政治经济、商学、理工、SILS等必须分别查募集要项。",
  },
  {
    name: "上智大学 English-taught Programs",
    region: "kanto",
    fields: ["english", "humanities"],
    route: "英语项目",
    line: "EJU不是主要判断轴。英语成绩、Essay、成绩单和活动经历更重要。",
    target: { japanese: 0, subject: 0, math: 0, english: 90, jlpt: 0, essay: 4 },
    official: "https://adm.sophia.ac.jp/jpn/",
    requirement: "适合英语强、想走国际教养/社会科学方向的学生。",
  },
  {
    name: "筑波大学 Global Issues / English Programs",
    region: "kanto",
    fields: ["english", "humanities", "science"],
    route: "英语项目 / 综合选拔",
    line: "英语项目重视英语、成绩单、Essay和面试。日语项目需按学群确认EJU与校内考。",
    target: { japanese: 260, subject: 140, math: 135, english: 85, jlpt: 2, essay: 4 },
    official: "https://www.tsukuba.ac.jp/admission/",
    requirement: "适合想在关东但不只看东京市区、并希望综合研究型大学环境的学生。",
  },
  {
    name: "北海道大学 MJSP / ISP",
    region: "hokkaido",
    fields: ["english", "science", "humanities"],
    route: "英语项目 / 国际本科",
    line: "英语项目看英语、成绩、Essay和面试。理科方向要确认数学与科学背景。",
    target: { japanese: 230, subject: 135, math: 140, english: 82, jlpt: 3, essay: 4 },
    official: "https://www.hokudai.ac.jp/admission/",
    requirement: "适合想在札幌学习、重视自然科学或日本研究方向的学生。",
  },
  {
    name: "东北大学 Gateway College / 国际本科",
    region: "tohoku",
    fields: ["english", "science", "humanities"],
    route: "英语项目 / 综合选拔",
    line: "FGL本科招生已结束，2027起关注Gateway College。英语、学术背景和申请材料很重要。",
    target: { japanese: 230, subject: 145, math: 150, english: 88, jlpt: 3, essay: 4 },
    official: "https://www.tohoku.ac.jp/japanese/admissions/",
    requirement: "官方说明2027起启动Gateway College，申请前必须看最新招生通知。",
  },
  {
    name: "名古屋大学 G30",
    region: "chubu",
    fields: ["english", "science", "humanities"],
    route: "英语项目",
    line: "G30提供理工、社会科学、人文等英语学位项目。英语、成绩和专业适配度是重点。",
    target: { japanese: 220, subject: 150, math: 155, english: 88, jlpt: 0, essay: 4 },
    official: "https://www.nagoya-u.ac.jp/admissions/",
    requirement: "适合英语较强、想在中部地区读研究型国立大学的学生。",
  },
  {
    name: "南山大学 Nanzan University",
    aliases: ["Nanzan University"],
    region: "chubu",
    type: "private",
    fields: ["humanities", "science"],
    route: "EJU / 私费外国人留学生入试",
    line: "中部地区代表性的私立大学。文科・社会科学方向建议EJU日语、综合科目和志望理由书都保持较强水平。",
    target: { japanese: 300, subject: 155, math: 80, english: 60, jlpt: 2, essay: 4 },
    official: "https://www.nanzan-u.ac.jp/",
    requirement:
      "适合想在名古屋读私立文科、外语、经济、经营、法学、综合政策等方向的学生。具体科目和出愿资格必须看当年募集要项。",
  },
  {
    name: "京都大学 Kyoto iUP",
    region: "kansai",
    fields: ["english", "science"],
    route: "国际本科 / 日语过渡",
    line: "高难度。前期重视英语、成绩、Essay，入学后需要逐步进入日语专业课程。",
    target: { japanese: 230, subject: 160, math: 160, english: 95, jlpt: 0, essay: 5 },
    official: "https://www.kyoto-u.ac.jp/ja/admissions",
    requirement: "适合学术能力强、愿意通过预备课程提高日语后进入京都大学本科课程的学生。",
  },
  {
    name: "立命馆大学 English-medium Undergraduate",
    region: "kansai",
    fields: ["english", "science", "humanities"],
    route: "英语项目",
    line: "英语项目看英语、成绩、申请材料。部分项目与校区要求不同。",
    target: { japanese: 0, subject: 0, math: 0, english: 80, jlpt: 0, essay: 4 },
    official: "https://www.ritsumei.ac.jp/admission/",
    requirement:
      "有Global Studies、Policy Science、Information Systems等英语本科项目。",
  },
  {
    name: "大阪大学 私费外国人留学生入试",
    region: "kansai",
    fields: ["humanities", "science"],
    route: "EJU + 校内考",
    line: "难度高。通常需要强EJU、英语和校内考表现，学部要求差异很大。",
    target: { japanese: 330, subject: 165, math: 165, english: 78, jlpt: 2, essay: 4 },
    official: "https://www.osaka-u.ac.jp/ja/admissions",
    requirement: "适合EJU高分、想挑战关西顶尖国立大学的学生。务必查对应学部募集要项。",
  },
  {
    name: "冈山大学 Discovery Program",
    region: "chugoku_shikoku",
    fields: ["english", "humanities", "science"],
    route: "英语 / 双语项目",
    line: "重视申请材料、英语能力、学习计划和面试。适合跨学科方向。",
    target: { japanese: 220, subject: 125, math: 125, english: 78, jlpt: 3, essay: 4 },
    official: "https://www.okayama-u.ac.jp/tp/admission/index.html",
    requirement: "适合想在中国地区读国立大学、并选择英语或双语学习路径的学生。",
  },
  {
    name: "广岛大学 国际招生",
    region: "chugoku_shikoku",
    fields: ["english", "humanities", "science"],
    route: "EJU / 英语项目 / 学部别选拔",
    line: "根据学部不同，可能重视EJU、英语、面试和书类审查。先确认学部招生页面。",
    target: { japanese: 285, subject: 145, math: 140, english: 72, jlpt: 2, essay: 3 },
    official: "https://www.hiroshima-u.ac.jp/nyushi",
    requirement: "适合想在中国地区读综合国立大学的学生，需按学院确认科目。",
  },
  {
    name: "立命馆亚洲太平洋大学 APU",
    region: "kyushu",
    fields: ["english", "humanities"],
    route: "英语 / 日语基准",
    line: "国际学生比例高，申请材料和面试准备很重要。日语或英语均可作为入学语言。",
    target: { japanese: 230, subject: 120, math: 110, english: 75, jlpt: 3, essay: 4 },
    official: "https://www.apu.ac.jp/home/",
    requirement:
      "适合想在多文化环境学习经营、亚洲太平洋研究、可持续发展方向的学生。",
  },
  {
    name: "九州大学 国际本科 / 学部入试",
    region: "kyushu",
    fields: ["english", "science", "humanities"],
    route: "英语项目 / EJU + 学部选拔",
    line: "研究型国立大学，理工和共创等方向竞争较强。英语项目和日语项目要求不同。",
    target: { japanese: 300, subject: 155, math: 160, english: 82, jlpt: 2, essay: 4 },
    official: "https://www.kyushu-u.ac.jp/ja/admission/",
    requirement: "适合想在福冈读国立综合大学的学生。学部、项目和语言基准要分别确认。",
  },
  {
    name: "国公立大学 EJU利用校",
    region: "any",
    fields: ["humanities", "science"],
    route: "EJU + 校内考",
    line: "中上位国公立建议EJU总分稳在高段，且校内考不能弱。具体分数必须看各校募集要项。",
    target: { japanese: 330, subject: 165, math: 165, english: 80, jlpt: 2, essay: 4 },
    official: "https://www.jasso.go.jp/ryugaku/eju/examinee/use/uni_national.html",
    requirement:
      "先用JASSO列表确认是否使用EJU，再去每所大学官网确认科目和日期。",
  },
  {
    name: "私立大学 EJU利用校",
    region: "any",
    fields: ["humanities", "science"],
    route: "EJU / JLPT / 书类审查",
    line: "私立大学差异很大，部分学校重视EJU，部分学校更看日语、面试和志望理由书。",
    target: { japanese: 285, subject: 145, math: 135, english: 60, jlpt: 2, essay: 3 },
    official: "https://www.jasso.go.jp/ryugaku/eju/examinee/use/uni_private.html",
    requirement: "适合做保底和稳妥校池，但也要确认学费减免与专业质量。",
  },
];

const regionLabels = {
  any: "全国",
  hokkaido: "北海道",
  tohoku: "东北",
  kanto: "关东 / 东京圈",
  chubu: "中部",
  kansai: "关西",
  chugoku_shikoku: "中国・四国",
  kyushu: "九州・冲绳",
};

const prefectureLabels = {
  Hokkaido: "北海道",
  Aomori: "青森県",
  Iwate: "岩手県",
  Miyagi: "宮城県",
  Akita: "秋田県",
  Yamagata: "山形県",
  Fukushima: "福島県",
  Ibaraki: "茨城県",
  Tochigi: "栃木県",
  Gunma: "群馬県",
  Saitama: "埼玉県",
  Chiba: "千葉県",
  Tokyo: "東京都",
  Kanagawa: "神奈川県",
  Niigata: "新潟県",
  Toyama: "富山県",
  Ishikawa: "石川県",
  Fukui: "福井県",
  Yamanashi: "山梨県",
  Nagano: "長野県",
  Gifu: "岐阜県",
  Shizuoka: "静岡県",
  Aichi: "愛知県",
  Mie: "三重県",
  Shiga: "滋賀県",
  Kyoto: "京都府",
  Osaka: "大阪府",
  Hyogo: "兵庫県",
  Nara: "奈良県",
  Wakayama: "和歌山県",
  Tottori: "鳥取県",
  Shimane: "島根県",
  Okayama: "岡山県",
  Hiroshima: "広島県",
  Yamaguchi: "山口県",
  Tokushima: "徳島県",
  Kagawa: "香川県",
  Ehime: "愛媛県",
  Kochi: "高知県",
  Fukuoka: "福岡県",
  Saga: "佐賀県",
  Nagasaki: "長崎県",
  Kumamoto: "熊本県",
  Oita: "大分県",
  Miyazaki: "宮崎県",
  Kagoshima: "鹿児島県",
  Okinawa: "沖縄県",
  "北海道・東北": "北海道・東北",
  関東: "関東",
  中部: "中部",
  近畿: "近畿",
  "中国・四国": "中国・四国",
  "九州・沖縄": "九州・沖縄",
};

const fieldLabels = {
  humanities: "文科",
  science: "理科",
  japanese: "日本語",
  english: "英語プログラム",
};

let universityData = [...featuredUniversities];
let admissionRequirementRecords = {};
let admissionRequirementMeta = null;

const privateFeaturedNames = new Set([
  "早稻田大学 国际招生",
  "上智大学 English-taught Programs",
  "立命馆大学 English-medium Undergraduate",
  "立命馆亚洲太平洋大学 APU",
  "私立大学 EJU利用校",
]);

const privateUniversityProfiles = {
  "Keio University": ["慶應義塾大学 Keio University", 91, 335, 170, 160, 88, 2, 5],
  "Sophia University": ["上智大学 Sophia University", 82, 310, 155, 125, 82, 2, 4],
  "Meiji University": ["明治大学 Meiji University", 82, 315, 160, 135, 75, 2, 4],
  "Meiji Gakuin University": ["明治学院大学 Meiji Gakuin University", 69, 275, 135, 100, 60, 2, 3],
  "Aoyama Gakuin University": ["青山学院大学 Aoyama Gakuin University", 80, 305, 155, 125, 78, 2, 4],
  "Rikkyo University": ["立教大学 Rikkyo University", 80, 305, 155, 120, 78, 2, 4],
  "Chuo University": ["中央大学 Chuo University", 78, 300, 150, 120, 72, 2, 4],
  "Hosei University": ["法政大学 Hosei University", 76, 295, 148, 115, 70, 2, 4],
  "Gakushuin University": ["学習院大学 Gakushuin University", 76, 295, 145, 110, 70, 2, 4],
  "Nihon University": ["日本大学 Nihon University", 66, 270, 135, 105, 58, 2, 3],
  "Toyo University": ["東洋大学 Toyo University", 66, 270, 135, 105, 58, 2, 3],
  "Komazawa University": ["駒澤大学 Komazawa University", 64, 265, 130, 100, 55, 2, 3],
  "Senshu University": ["専修大学 Senshu University", 64, 265, 130, 100, 55, 2, 3],
  "Dokkyo University": ["獨協大学 Dokkyo University", 66, 270, 135, 100, 62, 2, 3],
  "Musashino University": ["武蔵野大学 Musashino University", 64, 265, 130, 100, 58, 2, 3],
  "Tokyo University of Science": ["東京理科大学 Tokyo University of Science", 84, 285, 160, 165, 72, 2, 4],
  "Shibaura Institute Of Technology": ["芝浦工業大学 Shibaura Institute of Technology", 76, 255, 150, 155, 60, 2, 3],
  "Tokyo Denki University": ["東京電機大学 Tokyo Denki University", 68, 240, 138, 145, 52, 2, 3],
  "Tokyo City University": ["東京都市大学 Tokyo City University", 68, 245, 140, 145, 52, 2, 3],
  "Kogakuin University": ["工学院大学 Kogakuin University", 67, 240, 138, 145, 52, 2, 3],
  "Seikei University": ["成蹊大学 Seikei University", 72, 285, 140, 105, 65, 2, 3],
  "Kokugakuin University": ["國學院大学 Kokugakuin University", 68, 275, 135, 95, 58, 2, 3],
  "Tokyo Keizai University": ["東京経済大学 Tokyo Keizai University", 62, 260, 128, 90, 52, 2, 3],
  "Takushoku University": ["拓殖大学 Takushoku University", 60, 250, 125, 85, 50, 2, 3],
  "Teikyo University": ["帝京大学 Teikyo University", 60, 250, 125, 90, 48, 2, 3],
  "Kokushikan University": ["国士舘大学 Kokushikan University", 60, 250, 125, 90, 48, 2, 3],
  "J. F. Oberlin University": ["桜美林大学 J. F. Oberlin University", 60, 250, 125, 85, 52, 2, 3],
  "Kanagawa University": ["神奈川大学 Kanagawa University", 64, 265, 132, 100, 55, 2, 3],
  "Kanto Gakuin University": ["関東学院大学 Kanto Gakuin University", 60, 250, 125, 90, 50, 2, 3],
  "Tokyo International University": ["東京国際大学 Tokyo International University", 60, 245, 122, 85, 58, 2, 3],
  "Bunkyo University": ["文教大学 Bunkyo University", 62, 260, 130, 90, 52, 2, 3],
  "Showa Women's University": ["昭和女子大学 Showa Women's University", 64, 265, 130, 90, 58, 2, 3],
  "Otsuma Women's University": ["大妻女子大学 Otsuma Women's University", 60, 250, 125, 85, 50, 2, 3],
  "Kyorin University": ["杏林大学 Kyorin University", 62, 255, 128, 90, 52, 2, 3],
  "Doshisha University": ["同志社大学 Doshisha University", 82, 315, 160, 130, 78, 2, 4],
  "Kwansei Gakuin University": ["関西学院大学 Kwansei Gakuin University", 78, 300, 150, 120, 75, 2, 4],
  "Kansai University": ["関西大学 Kansai University", 76, 295, 148, 115, 70, 2, 4],
  "Ritsumeikan University": ["立命館大学 Ritsumeikan University", 78, 305, 145, 0, 0, 2, 4],
  "Kindai University": ["近畿大学 Kindai University", 68, 275, 138, 110, 60, 2, 3],
  "Ryukoku University": ["龍谷大学 Ryukoku University", 64, 265, 130, 100, 55, 2, 3],
  "Kyoto Sangyo University": ["京都産業大学 Kyoto Sangyo University", 64, 265, 130, 100, 55, 2, 3],
  "Konan University": ["甲南大学 Konan University", 66, 270, 135, 105, 60, 2, 3],
  "Kyoto University of Foreign Studies": ["京都外国語大学 Kyoto University of Foreign Studies", 66, 270, 132, 90, 68, 2, 3],
  "Kansai Gaidai University": ["関西外国語大学 Kansai Gaidai University", 66, 265, 130, 90, 70, 2, 3],
  "Osaka Institute of Technology": ["大阪工業大学 Osaka Institute of Technology", 66, 235, 135, 145, 50, 2, 3],
  "Osaka Sangyo University": ["大阪産業大学 Osaka Sangyo University", 58, 240, 120, 90, 45, 2, 3],
  "Momoyama Gakuin University": ["桃山学院大学 Momoyama Gakuin University", 60, 250, 125, 85, 50, 2, 3],
  "Kyoto Tachibana University": ["京都橘大学 Kyoto Tachibana University", 60, 250, 125, 85, 50, 2, 3],
  "Kyoto Seika University": ["京都精華大学 Kyoto Seika University", 58, 240, 120, 80, 48, 2, 3],
  "Osaka Gakuin University": ["大阪学院大学 Osaka Gakuin University", 58, 240, 120, 85, 48, 2, 3],
  "Osaka University of Economics": ["大阪経済大学 Osaka University of Economics", 63, 260, 130, 90, 52, 2, 3],
  "Nanzan University": ["南山大学 Nanzan University", 72, 300, 155, 80, 60, 2, 4],
  "Chukyo University": ["中京大学 Chukyo University", 68, 285, 145, 95, 58, 2, 3],
  "Meijo University": ["名城大学 Meijo University", 67, 280, 140, 110, 55, 2, 3],
  "Aichi University": ["愛知大学 Aichi University", 65, 275, 138, 90, 55, 2, 3],
  "Aichi Gakuin University": ["愛知学院大学 Aichi Gakuin University", 62, 260, 130, 90, 50, 2, 3],
  "Aichi Shukutoku University": ["愛知淑徳大学 Aichi Shukutoku University", 63, 265, 132, 90, 55, 2, 3],
  "Nagoya University of Foreign Studies": ["名古屋外国語大学 Nagoya University of Foreign Studies", 67, 275, 135, 80, 70, 2, 4],
  "Nagoya Gakuin University": ["名古屋学院大学 Nagoya Gakuin University", 61, 255, 128, 85, 50, 2, 3],
  "Nagoya University of Commerce & Business": [
    "名古屋商科大学 Nagoya University of Commerce & Business",
    63,
    260,
    130,
    90,
    58,
    2,
    3,
  ],
  "Chubu University": ["中部大学 Chubu University", 62, 255, 130, 105, 50, 2, 3],
  "Aichi Institute of Technology": ["愛知工業大学 Aichi Institute of Technology", 64, 240, 135, 125, 48, 2, 3],
  "Kanazawa Seiryo University": ["金沢星稜大学 Kanazawa Seiryo University", 60, 250, 125, 85, 48, 2, 3],
  "Hokuriku University": ["北陸大学 Hokuriku University", 58, 240, 120, 85, 45, 2, 3],
  "Hokkai-Gakuen University": ["北海学園大学 Hokkai-Gakuen University", 60, 250, 125, 90, 48, 2, 3],
  "Sapporo University": ["札幌大学 Sapporo University", 56, 235, 118, 80, 42, 2, 3],
  "Hokkaido Bunkyo University": ["北海道文教大学 Hokkaido Bunkyo University", 56, 235, 118, 80, 42, 2, 3],
  "Rakuno Gakuen University": ["酪農学園大学 Rakuno Gakuen University", 58, 230, 125, 110, 42, 2, 3],
  "Tohoku Gakuin University": ["東北学院大学 Tohoku Gakuin University", 60, 250, 125, 90, 48, 2, 3],
  "Tohoku Fukushi University": ["東北福祉大学 Tohoku Fukushi University", 58, 240, 120, 85, 45, 2, 3],
  "Miyagi Gakuin Women's University": ["宮城学院女子大学 Miyagi Gakuin Women's University", 56, 235, 118, 80, 45, 2, 3],
  "Sendai Shirayuri Women's College": ["仙台白百合女子大学 Sendai Shirayuri Women's College", 54, 225, 112, 75, 42, 2, 3],
  "Ishinomaki Senshu University": ["石巻専修大学 Ishinomaki Senshu University", 54, 225, 112, 80, 42, 2, 3],
  "Okayama Shoka University": ["岡山商科大学 Okayama Shoka University", 56, 235, 118, 80, 42, 2, 3],
  "Hiroshima Shudo University": ["広島修道大学 Hiroshima Shudo University", 62, 260, 130, 90, 50, 2, 3],
  "Hiroshima University of Economics": [
    "広島経済大学 Hiroshima University of Economics",
    56,
    235,
    118,
    80,
    42,
    2,
    3,
  ],
  "Tokushima Bunri University": ["徳島文理大学 Tokushima Bunri University", 54, 225, 112, 80, 42, 2, 3],
  "Matsuyama University": ["松山大学 Matsuyama University", 58, 240, 120, 85, 45, 2, 3],
  "Fukuoka University": ["福岡大学 Fukuoka University", 66, 270, 135, 105, 55, 2, 3],
  "Seinan Gakuin University": ["西南学院大学 Seinan Gakuin University", 68, 280, 140, 100, 65, 2, 3],
  "Kyushu Sangyo University": ["九州産業大学 Kyushu Sangyo University", 58, 240, 120, 85, 45, 2, 3],
  "Kurume University": ["久留米大学 Kurume University", 58, 240, 120, 85, 45, 2, 3],
  "Nakamura Gakuen University": ["中村学園大学 Nakamura Gakuen University", 58, 240, 120, 85, 45, 2, 3],
  "Kumamoto Gakuen University": ["熊本学園大学 Kumamoto Gakuen University", 58, 240, 120, 85, 45, 2, 3],
  "Nagasaki International University": ["長崎国際大学 Nagasaki International University", 56, 235, 118, 80, 42, 2, 3],
  "Nippon Bunri University": ["日本文理大学 Nippon Bunri University", 54, 225, 112, 80, 42, 2, 3],
  "Okinawa International University": ["沖縄国際大学 Okinawa International University", 56, 235, 118, 80, 42, 2, 3],
};

function renderTab(key) {
  const panel = document.querySelector("#tab-panel");
  const data = tabData[key];
  if (!panel || !data) return;

  panel.innerHTML = `
    <h3>${data.title}</h3>
    <p>${data.body}</p>
    <dl>
      ${data.rows
        .map(([term, detail]) => `<div><dt>${term}</dt><dd>${detail}</dd></div>`)
        .join("")}
    </dl>
  `;
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-selected", "false");
    });
    tab.classList.add("is-active");
    tab.setAttribute("aria-selected", "true");
    renderTab(tab.dataset.tab);
  });
});

const formatter = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
  maximumFractionDigits: 0,
});

const storagePrefix = "study-nav-v2:";

function storageKey(key) {
  return `${storagePrefix}${key}`;
}

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(storageKey(key))) ?? fallback;
  } catch (error) {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(storageKey(key), JSON.stringify(value));
}

function persistFields(key, selectors) {
  const values = {};
  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((node, index) => {
      const id = node.id || `${selector}:${index}`;
      values[id] = node.type === "checkbox" ? node.checked : node.value;
    });
  });
  writeJson(key, values);
}

function restoreFields(key, selectors) {
  const values = readJson(key, {});
  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((node, index) => {
      const id = node.id || `${selector}:${index}`;
      if (!(id in values)) return;
      if (node.type === "checkbox") {
        node.checked = Boolean(values[id]);
      } else {
        node.value = values[id];
      }
    });
  });
}

function setupAutoSave(key, selectors, afterSave) {
  restoreFields(key, selectors);
  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((node) => {
      ["input", "change"].forEach((eventName) => {
        node.addEventListener(eventName, () => {
          persistFields(key, selectors);
          afterSave?.();
        });
      });
    });
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safeUrl(value) {
  if (!value) return "";
  try {
    const parsed = new URL(value, window.location.href);
    if (!["http:", "https:"].includes(parsed.protocol)) return "";
    return parsed.toString();
  } catch (error) {
    return "";
  }
}

function getScoreInput() {
  return {
    field: document.querySelector("#field").value,
    region: document.querySelector("#region").value,
    candidateType: document.querySelector("#candidate-type")?.value ?? "all",
    japanese: Number(document.querySelector("#eju-japanese").value),
    writing: Number(document.querySelector("#eju-writing").value),
    subject: Number(document.querySelector("#eju-subject").value),
    math: Number(document.querySelector("#eju-math").value),
    english: Number(document.querySelector("#english-score").value),
    jlpt: Number(document.querySelector("#jlpt").value),
    essay: Number(document.querySelector("#essay").value),
  };
}

function getUniversityTarget(university) {
  if (university.target) return university.target;

  return {
    japanese: university.type === "private" ? 250 : 285,
    subject: university.fields?.includes("science") ? 125 : 115,
    math: university.fields?.includes("science") ? 125 : 105,
    english: university.type === "private" ? 45 : 60,
    jlpt: 2,
    essay: 3,
  };
}

function getPrivateUniversityProfile(university) {
  const sourceName = [university.name, ...(university.aliases ?? [])].find(
    (name) => privateUniversityProfiles[name],
  );
  if (!sourceName) return null;

  const [name, difficulty, japanese, subject, math, english, jlpt, essay] =
    privateUniversityProfiles[sourceName];
  return {
    sourceName,
    name,
    difficulty,
    target: { japanese, subject, math, english, jlpt, essay },
  };
}

const universitySearchAliases = {
  "Toyo University": ["東洋大学", "东洋大学", "东洋", "東洋"],
  "Sophia University": ["上智大学", "上智", "索菲亚大学", "索菲亞大學", "Sophia"],
  "Meiji University": ["明治大学", "明治大學", "明治", "MARCH", "GMARCH"],
  "Meiji Gakuin University": ["明治学院大学", "明治學院大學", "明治学院", "明学", "明學", "Meigaku"],
  "Aoyama Gakuin University": ["青山学院大学", "青山學院大學", "青山学院", "青山學院", "青学", "青學", "MARCH", "GMARCH"],
  "Rikkyo University": ["立教大学", "立教大學", "立教", "MARCH", "GMARCH"],
  "Chuo University": ["中央大学", "中央大學", "中央", "MARCH", "GMARCH"],
  "Hosei University": ["法政大学", "法政大學", "法政", "MARCH", "GMARCH"],
  "Gakushuin University": ["学習院大学", "學習院大學", "学习院大学", "学习院", "GMARCH"],
  "Doshisha University": ["同志社大学", "同志社大學", "同志社", "関関同立", "关关同立", "Kankandoritsu"],
  "Ritsumeikan University": ["立命館大学", "立命馆大学", "立命館", "立命馆", "関関同立", "关关同立", "Kankandoritsu"],
  "Kansai University": ["関西大学", "关西大学", "關西大學", "関大", "关大", "関関同立", "关关同立", "Kankandoritsu"],
  "Kwansei Gakuin University": ["関西学院大学", "关西学院大学", "關西學院大學", "関学", "关学", "関関同立", "关关同立", "Kankandoritsu"],
  "Nanzan University": ["南山大学", "南山大學", "南山"],
  "Seikei University": ["成蹊大学", "成蹊"],
  "Kokugakuin University": ["國學院大学", "国学院大学", "國學院", "国学院"],
  "Kindai University": ["近畿大学", "近畿"],
  "Meijo University": ["名城大学", "名城"],
};

const searchCharacterMap = {
  "東": "东",
  "學": "学",
  "國": "国",
  "関": "关",
  "關": "关",
  "館": "馆",
  "會": "会",
  "應": "应",
  "慶": "庆",
  "義": "义",
  "稲": "稻",
  "澤": "泽",
  "駒": "驹",
  "專": "专",
  "専": "专",
  "濱": "滨",
  "廣": "广",
  "龍": "龙",
  "徳": "德",
  "愛": "爱",
  "經": "经",
  "経": "经",
  "濟": "济",
};

function getUniversityAliasTerms(university) {
  const terms = [
    university.name,
    university.prefecture,
    university.route,
    university.line,
    university.requirement,
    regionLabels[university.region],
    university.region,
    ...(university.aliases ?? []),
    ...(university.fields ?? []),
  ].filter(Boolean);

  const profile = getPrivateUniversityProfile(university);
  if (profile) {
    terms.push(profile.name, profile.sourceName, ...(universitySearchAliases[profile.sourceName] ?? []));
  }

  const record = getAdmissionRequirementRecord(university);
  if (record) {
    terms.push(record.universityName, record.sourceTitle, record.notes);
  }

  const baseTerms = terms.filter((term) => String(term).trim());
  Object.entries(universitySearchAliases).forEach(([englishName, aliases]) => {
    const normalizedName = normalizeUniversitySearch(englishName);
    const normalizedTerms = baseTerms.map(normalizeUniversitySearch).filter(Boolean);
    if (normalizedTerms.some((term) => term === normalizedName)) {
      terms.push(...aliases);
    }
  });

  return [...new Set(terms.filter(Boolean))];
}

function matchesUniversityQuery(university, query) {
  const needle = normalizeUniversitySearch(query);
  if (!needle) return true;

  return getUniversityAliasTerms(university).some((term) => {
    const haystack = normalizeUniversitySearch(term);
    if (!haystack || haystack.length < 2) return false;
    if (haystack.includes(needle)) return true;
    return needle.length >= 4 && haystack.length >= 4 && needle.includes(haystack);
  });
}

function getUniversitySearchRank(university, query) {
  const needle = normalizeUniversitySearch(query);
  if (!needle) return 0;

  return getUniversityAliasTerms(university).reduce((best, term) => {
    const haystack = normalizeUniversitySearch(term);
    if (!haystack) return best;
    if (haystack === needle) return Math.max(best, 100);
    if (haystack.startsWith(needle)) return Math.max(best, 80);
    if (haystack.includes(needle)) return Math.max(best, 60);
    if (needle.includes(haystack) && haystack.length >= 4) return Math.max(best, 50);
    return best;
  }, 0);
}

function getDisplayUniversityName(university) {
  const name = String(university.name ?? "");
  const japaneseUniversityName = name.match(/^(.+?大学)\s+[A-Za-z]/);
  if (japaneseUniversityName) return japaneseUniversityName[1];
  return name;
}

function getDisplayPrefecture(university) {
  const prefecture = university?.prefecture;
  if (!prefecture) return "";
  return prefectureLabels[prefecture] ?? prefecture;
}

function getDisplayFields(university) {
  return (university?.fields ?? []).map((field) => fieldLabels[field] ?? field).join(" / ");
}

function getUniversitySearchSummary(university) {
  return [
    getDisplayUniversityName(university),
    getDisplayPrefecture(university),
    regionLabels[university.region] ?? university.region,
    university.route,
    university.requirement,
    university.line,
  ]
    .filter(Boolean)
    .join(" ");
}

function passesUniversityTypeFilter(university, type) {
  if (type === "private") return university.type === "private";
  if (type === "national") return university.type === "national";
  if (type === "featured") return Boolean(university.featured);
  return true;
}

function applyPrivateUniversityProfile(university) {
  const profile = getPrivateUniversityProfile(university);
  if (!profile) return university;

  return {
    ...university,
    name: profile.name,
    aliases: [...new Set([profile.sourceName, ...(university.aliases ?? [])])],
    target: profile.target,
    profileDifficulty: profile.difficulty,
    profiled: true,
    line:
      "主要私立大学として個別の出愿参考带を設定。実際の合否は学部・年度・入试方式で変わるため、募集要项で確認。",
    requirement:
      "EJU利用有無はJASSOリストで確認済み。学部別の科目、出愿期間、英語・JLPT要件は大学公式サイトで最終確認。",
  };
}

function getInputStrength(input) {
  if (input.field === "humanities") {
    const japaneseStrength = (Math.min(input.japanese, 400) / 400) * 38;
    const writingStrength = (Math.min(input.writing, 50) / 50) * 6;
    const subjectStrength = (Math.min(input.subject, 200) / 200) * 22;
    const mathStrength = (Math.min(input.math, 200) / 200) * 4;
    const englishStrength = (Math.min(input.english, 120) / 120) * 18;
    const jlptStrength = input.jlpt > 0 ? ((6 - input.jlpt) / 5) * 6 : 0;
    const essayStrength = (Math.min(input.essay, 5) / 5) * 8;
    return Math.round(
      japaneseStrength +
        writingStrength +
        subjectStrength +
        mathStrength +
        englishStrength +
        jlptStrength +
        essayStrength,
    );
  }

  const ejuStrength =
    (Math.min(input.japanese, 400) / 400) * 34 +
    (Math.min(input.writing, 50) / 50) * 6 +
    (Math.min(input.subject, 200) / 200) * 14 +
    (Math.min(input.math, 200) / 200) * 14;
  const englishStrength = (Math.min(input.english, 120) / 120) * 18;
  const jlptStrength = input.jlpt > 0 ? ((6 - input.jlpt) / 5) * 6 : 0;
  const essayStrength = (Math.min(input.essay, 5) / 5) * 8;

  if (input.field === "english") {
    return Math.round(
      englishStrength * 2.2 + ejuStrength * 0.45 + jlptStrength * 0.4 + essayStrength * 1.4,
    );
  }

  return Math.round(ejuStrength + englishStrength + jlptStrength + essayStrength);
}

function getUniversityDifficulty(university) {
  if (university.profileDifficulty) return university.profileDifficulty;

  const knownDifficulty = [
    ["东京大学", 96],
    ["京都大学", 94],
    ["大阪大学", 90],
    ["早稻田", 88],
    ["九州大学", 86],
    ["名古屋大学", 84],
    ["东北大学", 84],
    ["北海道大学", 82],
    ["筑波大学", 80],
    ["国公立大学", 78],
    ["上智大学", 76],
    ["广岛大学", 74],
    ["南山大学", 72],
    ["Nanzan", 72],
    ["冈山大学", 68],
    ["立命馆大学 English", 64],
    ["APU", 58],
    ["私立大学", 56],
  ].find(([name]) => university.name.includes(name));

  if (knownDifficulty) return knownDifficulty[1];

  const target = getUniversityTarget(university);
  const ejuDifficulty =
    (target.japanese / 400) * 28 +
    (target.subject / 200) * 12 +
    (target.math / 200) * 12;
  const englishDifficulty = (target.english / 120) * 14;
  const jlptDifficulty = target.jlpt > 0 ? ((6 - target.jlpt) / 5) * 6 : 0;
  const essayDifficulty = (target.essay / 5) * 8;
  const base = university.type === "private" ? 22 : 30;

  return Math.round(base + ejuDifficulty + englishDifficulty + jlptDifficulty + essayDifficulty);
}

function scoreUniversity(input, university) {
  const target = getUniversityTarget(university);
  const fieldFit = university.fields?.includes(input.field) ? 10 : -14;
  const regionFit =
    input.region === "any"
      ? 5
      : input.region === university.region
        ? 10
        : university.region === "any"
          ? 0
          : -10;
  const component = (value, expected, weight) =>
    expected === 0 ? 0 : Math.min(value / expected, 1) * weight;

  let raw = fieldFit + regionFit;
  let maxRaw = 20;

  const isHumanitiesInput = input.field === "humanities";
  const isScienceInput = input.field === "science";
  const japaneseWeight = isHumanitiesInput ? 26 : 22;
  const subjectWeight = isHumanitiesInput ? 17 : isScienceInput ? 16 : 13;
  const mathWeight = isHumanitiesInput ? 5 : isScienceInput ? 16 : 13;

  if (target.japanese > 0) {
    raw += component(input.japanese, target.japanese, japaneseWeight);
    raw += component(input.writing, 40, 6);
    maxRaw += japaneseWeight + 6;
  }
  if (target.subject > 0) {
    raw += component(input.subject, target.subject, subjectWeight);
    maxRaw += subjectWeight;
  }
  if (target.math > 0) {
    raw += component(input.math, target.math, mathWeight);
    if (!isHumanitiesInput && input.math < target.math * 0.6) raw -= 10;
    maxRaw += mathWeight;
  }
  if (target.english > 0) {
    raw += component(input.english, target.english, 16);
    if (target.english >= 85 && input.english < target.english * 0.82) raw -= 10;
    maxRaw += 16;
  }
  if (target.jlpt > 0) {
    raw += input.jlpt > 0 && input.jlpt <= target.jlpt ? 8 : -6;
    maxRaw += 8;
  }

  raw += Math.min(input.essay / target.essay, 1) * 12;
  maxRaw += 12;

  return Math.max(0, Math.min(99, Math.round((raw / maxRaw) * 100)));
}

function getUniversityFocus(university) {
  const text = `${university.name} ${university.route} ${university.requirement ?? ""}`.toLowerCase();
  if (
    /理科|工業|工科|工学院|工学|電機|情報|science|technology|institute of technology|engineering/.test(
      text,
    )
  ) {
    return "science";
  }
  if (/english|g30|iup|英語项目|英語プログラム|english-taught|international本科/.test(text)) {
    return "english";
  }
  if (/外国語|文学|法学|経済|経営|商学|社会|政策|人文|humanities|business|law|economics/.test(text)) {
    return "humanities";
  }
  return "general";
}

function getGatePenalty(input, university) {
  const target = getUniversityTarget(university);
  const difficulty = getUniversityDifficulty(university);
  const focus = getUniversityFocus(university);
  const routeText = `${university.name} ${university.route}`.toLowerCase();
  let penalty = 0;

  if (input.field === "humanities" && focus === "science") penalty += 34;
  if (input.field === "science" && focus === "humanities") penalty += 14;
  if (input.field !== "english" && (focus === "english" || /iup|g30|english-taught|英語项目/.test(routeText))) {
    penalty += target.english >= 80 ? 30 : 18;
  }
  if (input.field === "english" && target.english >= 80 && input.english < target.english * 0.85) {
    penalty += 22;
  }
  if (target.math >= 140 && input.math < target.math * 0.7) penalty += 20;
  if (target.english >= 85 && input.english < target.english * 0.82) penalty += 18;
  if (difficulty >= 88 && input.english < 75) penalty += 12;
  if (difficulty >= 88 && input.math < 100 && input.field !== "english") penalty += 12;

  return penalty;
}

function getDeficitNotes(input, university) {
  const target = getUniversityTarget(university);
  const focus = getUniversityFocus(university);
  const notes = [];

  if (input.field === "humanities" && focus === "science") {
    notes.push("理工倾向校，文科方向需确认可报学部");
  }
  if (focus === "english" && input.field !== "english") {
    notes.push("英语项目倾向，不能只按EJU判断");
  }
  if (input.field !== "humanities" && target.math >= 120 && input.math < target.math * 0.75) {
    notes.push(`数学偏低：目标目安${target.math}，当前${input.math}`);
  }
  if (target.english >= 75 && input.english < target.english * 0.85) {
    notes.push(`英语偏低：目标目安TOEFL ${target.english}，当前${input.english}`);
  }
  if (input.field === "humanities" && isSelectivePrivateHumanities(university)) {
    const japaneseFloor = getUniversityDifficulty(university) >= 80 ? 300 : 290;
    const subjectFloor = getUniversityDifficulty(university) >= 80 ? 150 : 142;
    if (input.japanese < japaneseFloor || input.subject < subjectFloor) {
      notes.push(`文科核心不足：日语建议${japaneseFloor}+、综合建议${subjectFloor}+`);
    }
  }
  if (target.essay >= 4 && input.essay < target.essay) {
    notes.push("志望理由书/面试准备度需要提高");
  }

  return notes.slice(0, 3);
}

function isSelectivePrivateHumanities(university) {
  const difficulty = getUniversityDifficulty(university);
  const name = `${university.name} ${(university.aliases ?? []).join(" ")}`;
  const knownSelective =
    /上智|Sophia|明治|Meiji|青山|Aoyama|立教|Rikkyo|中央|Chuo|法政|Hosei|学習院|Gakushuin|同志社|Doshisha|関西学院|Kwansei|関西大学|Kansai University|立命館|Ritsumeikan|南山|Nanzan/.test(
      name,
    );

  return university.type === "private" && university.fields?.includes("humanities") && (difficulty >= 76 || knownSelective);
}

function getHumanitiesCorePenalty(input, university) {
  if (input.field !== "humanities" || !isSelectivePrivateHumanities(university)) return 0;

  const target = getUniversityTarget(university);
  const difficulty = getUniversityDifficulty(university);
  let penalty = 0;

  if (target.japanese > 0 && input.japanese < target.japanese) {
    penalty += (target.japanese - input.japanese) * 0.65;
  }
  if (target.subject > 0 && input.subject < target.subject) {
    penalty += (target.subject - input.subject) * 0.95;
  }
  if (target.english > 0 && input.english < target.english) {
    penalty += (target.english - input.english) * 0.55;
  }

  const japaneseFloor = difficulty >= 80 ? 300 : 290;
  const subjectFloor = difficulty >= 80 ? 150 : 142;
  if (input.japanese < japaneseFloor) penalty += difficulty >= 80 ? 22 : 12;
  if (input.subject < subjectFloor) penalty += difficulty >= 80 ? 22 : 12;

  const targetCore = (target.japanese || 0) + 40 + (target.subject || 0);
  const inputCore = input.japanese + input.writing + input.subject;
  if (targetCore > 40 && inputCore < targetCore - 22) penalty += difficulty >= 80 ? 20 : 12;

  return penalty;
}

function getNearSelectivePrivateBonus(input, university, score) {
  if (input.field !== "humanities" || !university.profiled || !isSelectivePrivateHumanities(university)) return 0;

  const { gaps, coreGap } = getScoreGapSummary(input, university);
  const nearCore =
    (gaps.japanese ?? 0) >= -8 &&
    (gaps.subject ?? 0) >= -8 &&
    (gaps.english ?? 0) >= -12 &&
    (coreGap ?? -99) >= -6;
  if (!nearCore || score < 78) return 0;

  const difficulty = getUniversityDifficulty(university);
  if (difficulty >= 82 && (gaps.english ?? 0) < -8) return 6;
  return difficulty >= 76 ? 18 : 10;
}

function rankUniversity(input, university) {
  const score = scoreUniversity(input, university);
  const studentStrength = getInputStrength(input);
  const difficulty = getUniversityDifficulty(university);
  const targetDifficulty = Math.min(96, studentStrength + 10);
  const distancePenalty = Math.abs(difficulty - targetDifficulty) * 0.9;
  const overreachPenalty = Math.max(difficulty - studentStrength - 12, 0) * 1.8;
  const elitePenalty = difficulty >= 88 && score < 82 ? (88 - score) * 1.2 : 0;
  const gatePenalty = getGatePenalty(input, university);
  const humanitiesCorePenalty = getHumanitiesCorePenalty(input, university);
  const communityPenalty = getCommunityPenalty(input, university);
  const weakPenalty = score < 52 ? (52 - score) * 0.7 : 0;
  const fieldPenalty = university.fields?.includes(input.field) ? 0 : 18;
  const regionPenalty =
    input.region === "any" || university.region === input.region || university.region === "any"
      ? 0
      : 12;
  const detailBonus = university.featured || university.target ? 3 : 0;
  const selectivePrivateBonus = getNearSelectivePrivateBonus(input, university, score);

  return (
    score -
    distancePenalty -
    overreachPenalty -
    elitePenalty -
    gatePenalty -
    humanitiesCorePenalty -
    communityPenalty -
    weakPenalty -
    fieldPenalty -
    regionPenalty +
    difficulty * 0.03 +
    detailBonus +
    selectivePrivateBonus
  );
}

function getScoreGapSummary(input, university) {
  const target = getUniversityTarget(university);
  const gaps = {
    japanese: target.japanese > 0 ? input.japanese - target.japanese : null,
    writing: target.japanese > 0 ? input.writing - 40 : null,
    subject: target.subject > 0 ? input.subject - target.subject : null,
    math: target.math > 0 ? input.math - target.math : null,
    english: target.english > 0 ? input.english - target.english : null,
    essay: target.essay > 0 ? input.essay - target.essay : null,
  };
  const relevant = [gaps.japanese, gaps.subject, gaps.english, gaps.essay].filter((value) => value !== null);
  if (input.field === "science") relevant.push(gaps.math);

  const coreTarget =
    (target.japanese || 0) +
    (target.subject || 0) +
    (input.field === "science" ? target.math || 0 : 0) +
    (target.japanese > 0 ? 40 : 0);
  const coreInput =
    input.japanese + input.subject + (input.field === "science" ? input.math : 0) + (target.japanese > 0 ? input.writing : 0);

  return {
    gaps,
    coreGap: coreTarget > 0 ? coreInput - coreTarget : null,
    worstGap: relevant.length ? Math.min(...relevant) : 0,
    target,
  };
}

function hasReliableScoreProfile(university) {
  const record = getAdmissionRequirementRecord(university);
  return Boolean(
    university.target ||
      university.profiled ||
      record?.officialMinimumScore ||
      record?.ejuSubjects?.length ||
      getCommunityStats(university).count >= 3,
  );
}

function getRecommendationBand(input, university, score, rankScore) {
  const difficulty = getUniversityDifficulty(university);
  const strength = getInputStrength(input);
  const focus = getUniversityFocus(university);
  const { gaps, coreGap, worstGap } = getScoreGapSummary(input, university);
  const reliableProfile = hasReliableScoreProfile(university);
  const selectiveHumanities = input.field === "humanities" && isSelectivePrivateHumanities(university);
  const wrongField = !university.fields?.includes(input.field) || (input.field === "humanities" && focus === "science");
  const englishProgramMismatch = focus === "english" && input.field !== "english";
  const hardShortfall =
    (gaps.japanese !== null && gaps.japanese < -45) ||
    (gaps.subject !== null && gaps.subject < -28) ||
    (input.field === "science" && gaps.math !== null && gaps.math < -34) ||
    (gaps.english !== null && gaps.english < -25) ||
    (selectiveHumanities && ((gaps.japanese ?? 0) < -22 || (gaps.subject ?? 0) < -16)) ||
    (difficulty >= 82 && strength < difficulty - 16);
  const softShortfall =
    (gaps.japanese !== null && gaps.japanese < -18) ||
    (gaps.subject !== null && gaps.subject < -12) ||
    (input.field === "science" && gaps.math !== null && gaps.math < -16) ||
    (gaps.english !== null && gaps.english < -10) ||
    (coreGap !== null && coreGap < -25) ||
    difficulty > strength + 8;

  if (wrongField || englishProgramMismatch || score < 48 || rankScore < 28 || hardShortfall) {
    return "notRecommended";
  }
  if (softShortfall || score < 68 || rankScore < 52 || difficulty > strength + 4 || !reliableProfile) {
    return "reach";
  }
  const safetyCore =
    input.field === "humanities"
      ? (gaps.japanese ?? 0) >= 18 && (gaps.subject ?? 0) >= 10 && (gaps.english ?? 0) >= 0
      : input.field === "science"
        ? (gaps.japanese ?? 0) >= 12 && (gaps.subject ?? 0) >= 10 && (gaps.math ?? 0) >= 10
        : (gaps.english ?? 0) >= 8 && (gaps.essay ?? 0) >= 0;
  if (
    score >= 82 &&
    rankScore >= 68 &&
    difficulty <= strength - 6 &&
    safetyCore &&
    worstGap >= 0 &&
    (coreGap === null || coreGap >= 18)
  ) {
    return "safety";
  }
  return "recommended";
}

const recommendationBandLabels = {
  safety: "保底",
  recommended: "推荐",
  reach: "冲刺",
  notRecommended: "暂不建议",
};

const recommendationBandNotes = {
  safety: "当前成绩高于本站参考带，适合作为稳妥/保底候选，但仍需确认学部募集要项和校内考。",
  recommended: "当前成绩与参考带较接近，适合作为主力候选。建议同时准备校内考、面试和志望理由书。",
  reach: "存在分数差、难度差或数据未抽取，适合少量冲刺。不要只靠这些学校组成出愿池。",
  notRecommended: "当前条件与方向或参考带差距较大，暂不放入主要候选。",
};

function getDisplayMatchScore(university) {
  const blended = Math.round(university.score * 0.58 + Math.max(university.rankScore, 0) * 0.42);
  if (university.recommendationBand === "safety") return Math.max(78, Math.min(96, blended));
  if (university.recommendationBand === "recommended") return Math.max(68, Math.min(88, blended));
  if (university.recommendationBand === "reach") return Math.max(52, Math.min(74, blended));
  return Math.max(0, Math.min(48, blended));
}

function getRecommendationReason(input, university, band) {
  const { gaps, coreGap } = getScoreGapSummary(input, university);
  const stats = getCommunityStats(university, input.field);
  const dataLevel = university.target || university.profiled
    ? "个别参考带"
    : stats.count >= 3
      ? "本地投稿统计"
      : university.source?.includes("JASSO")
        ? "JASSO利用校确认"
        : "官方链接确认";
  const parts = [`判定: ${recommendationBandLabels[band]}`, `数据: ${dataLevel}`];
  if (gaps.japanese !== null) parts.push(`日语差${gaps.japanese >= 0 ? "+" : ""}${gaps.japanese}`);
  if (gaps.subject !== null) parts.push(`综合/理科差${gaps.subject >= 0 ? "+" : ""}${gaps.subject}`);
  if (input.field === "science" && gaps.math !== null) parts.push(`数学差${gaps.math >= 0 ? "+" : ""}${gaps.math}`);
  if (gaps.english !== null) parts.push(`英语差${gaps.english >= 0 ? "+" : ""}${gaps.english}`);
  if (coreGap !== null) parts.push(`核心合计差${coreGap >= 0 ? "+" : ""}${coreGap}`);
  return parts.join(" / ");
}

function getLevel(score, rankScore = score) {
  if (score >= 84 && rankScore >= 72) return "稳妥候选";
  if (score >= 72 && rankScore >= 54) return "可以挑战";
  if (score >= 56 && rankScore >= 35) return "需要补强";
  return "暂不推荐";
}

function getAccuracyTags(university) {
  const tags = [];
  if (university.official) tags.push("A 公式リンク");
  if (university.source?.includes("JASSO")) tags.push("B EJU利用: JASSO 2026年5月");
  if (university.target || university.profiled) tags.push("C 匹配スコア: 目安");
  tags.push("D 入力成績による候选");
  tags.push("! 募集要項確認");
  return tags;
}

const japaneseOfficialOverrides = [
  ["東京大学", "https://www.u-tokyo.ac.jp/ja/admissions/index.html"],
  ["东京大学", "https://www.u-tokyo.ac.jp/ja/admissions/index.html"],
  ["早稻田", "https://www.waseda.jp/inst/admission/undergraduate/"],
  ["慶應", "https://www.keio.ac.jp/ja/admissions/"],
  ["庆应", "https://www.keio.ac.jp/ja/admissions/"],
  ["上智", "https://adm.sophia.ac.jp/jpn/"],
  ["明治", "https://www.meiji.ac.jp/exam/"],
  ["明治学院", "https://www.meijigakuin.ac.jp/admission/"],
  ["明学", "https://www.meijigakuin.ac.jp/admission/"],
  ["青山学院", "https://www.aoyama.ac.jp/admission/"],
  ["立教", "https://www.rikkyo.ac.jp/admissions/"],
  ["中央大学", "https://www.chuo-u.ac.jp/admission/"],
  ["法政", "https://www.hosei.ac.jp/admission/"],
  ["学習院", "https://www.univ.gakushuin.ac.jp/admissions/"],
  ["同志社", "https://www.doshisha.ac.jp/admissions/"],
  ["立命館", "https://admission.ritsumei.ac.jp/"],
  ["関西大学", "https://www.kansai-u.ac.jp/nyusi/"],
  ["关西大学", "https://www.kansai-u.ac.jp/nyusi/"],
  ["関西学院", "https://www.kwansei.ac.jp/admissions/"],
  ["关西学院", "https://www.kwansei.ac.jp/admissions/"],
  ["南山", "https://www.nanzan-u.ac.jp/admission/"],
  ["東洋大学", "https://www.toyo.ac.jp/nyushi/"],
  ["东洋大学", "https://www.toyo.ac.jp/nyushi/"],
  ["東洋", "https://www.toyo.ac.jp/nyushi/"],
  ["东洋", "https://www.toyo.ac.jp/nyushi/"],
  ["日本大学", "https://www.nihon-u.ac.jp/admission_info/"],
  ["駒澤", "https://www.komazawa-u.ac.jp/exam/"],
  ["专修", "https://www.senshu-u.ac.jp/admission/"],
  ["専修", "https://www.senshu-u.ac.jp/admission/"],
  ["近畿", "https://kindai.jp/"],
  ["龍谷", "https://www.ryukoku.ac.jp/admission/"],
  ["龙谷", "https://www.ryukoku.ac.jp/admission/"],
];

function getJapaneseOfficialUrl(url) {
  if (!url) return "";

  try {
    const parsed = new URL(url);
    const lowerPath = parsed.pathname.toLowerCase();

    if (parsed.hostname.includes("jasso.go.jp")) {
      parsed.pathname = parsed.pathname.replace("/en/", "/");
      return parsed.toString();
    }
    if (parsed.hostname.includes("jlpt.jp")) {
      parsed.pathname = parsed.pathname.replace("/e/", "/");
      return parsed.toString();
    }
    if (
      lowerPath.includes("/english") ||
      lowerPath.includes("/eng") ||
      lowerPath.includes("/en/") ||
      lowerPath.endsWith("/en") ||
      lowerPath.includes("/global")
    ) {
      return `${parsed.origin}/`;
    }

    return url;
  } catch (error) {
    return url;
  }
}

function getUniversityOfficialUrl(university) {
  const haystack = normalizeUniversitySearch(
    [university.name, ...(university.aliases ?? [])].join(" "),
  );
  const matched = [...japaneseOfficialOverrides]
    .sort((a, b) => normalizeUniversitySearch(b[0]).length - normalizeUniversitySearch(a[0]).length)
    .find(([keyword]) => haystack.includes(normalizeUniversitySearch(keyword)));
  return getJapaneseOfficialUrl(matched?.[1] ?? university.official);
}

let matchRenderTimer;
let matchExpanded = false;
let universitySearchTimer;
let universityInputTimer;
let siteSearchTimer;
const universityPageSize = 36;
let universityVisibleCount = universityPageSize;
let lastUniversityRenderKey = "";

function getFavoriteUniversities() {
  return readJson("favorite-universities", []);
}

function setFavoriteUniversities(items) {
  writeJson("favorite-universities", [...new Set(items)]);
}

function isFavoriteUniversity(name) {
  return getFavoriteUniversities().includes(name);
}

function toggleFavoriteUniversity(name) {
  const favorites = getFavoriteUniversities();
  if (favorites.includes(name)) {
    setFavoriteUniversities(favorites.filter((item) => item !== name));
  } else {
    setFavoriteUniversities([...favorites, name]);
  }
  renderFavoritePanel();
  renderUniversityCards(document.querySelector("#university-search")?.value ?? "");
  renderMatchResultsNow();
}

function getAdmissionReports() {
  return readJson("admission-reports", []);
}

function setAdmissionReports(reports) {
  writeJson("admission-reports", reports);
}

function getReportId() {
  return `report-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function getUniversitySearchNames(university) {
  return [university.name, ...(university.aliases ?? [])].map(normalizeUniversitySearch);
}

function reportMatchesUniversity(report, university) {
  const reportName = normalizeUniversitySearch(report.university);
  return getUniversitySearchNames(university).some(
    (name) => name.includes(reportName) || reportName.includes(name.split(" ")[0]),
  );
}

function getAdmissionRequirementRecord(university) {
  const direct = admissionRequirementRecords[university.name];
  const candidates = Object.values(admissionRequirementRecords).filter((record) => {
    const recordName = normalizeUniversitySearch(record.universityName);
    return getUniversitySearchNames(university).some(
      (name) => name.includes(recordName) || recordName.includes(name.split(" ")[0]),
    );
  });
  if (direct) {
    candidates.push(direct);
  }

  const statusRank = {
    official_extracted: 4,
    official_partial: 3,
    unavailable: 2,
    pending_official_extraction: 1,
  };
  const sorted = candidates.sort((a, b) => {
    const statusDiff = (statusRank[b.status] ?? 0) - (statusRank[a.status] ?? 0);
    if (statusDiff) return statusDiff;
    if (a === direct) return -1;
    if (b === direct) return 1;
    return 0;
  });
  return sorted[0];
}

function getRequirementStatusText(record) {
  if (!record) return "募集要項DB未登録";
  const labels = {
    pending_official_extraction: "抽取待ち",
    official_extracted: "募集要項から抽取済み",
    official_partial: "公式ページから一部抽取済み",
    unavailable: "公式確認済み・該当情報未公開",
  };
  return labels[record.status] ?? record.status;
}

function median(values) {
  const sorted = values.filter((value) => Number.isFinite(value)).sort((a, b) => a - b);
  if (!sorted.length) return null;
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : Math.round((sorted[middle - 1] + sorted[middle]) / 2);
}

function getCommunityStats(university, field = null) {
  const reports = getAdmissionReports().filter((report) => {
    if (!reportMatchesUniversity(report, university)) return false;
    if (field && report.field !== field) return false;
    return report.result === "admitted";
  });

  return {
    count: reports.length,
    japanese: median(reports.map((report) => report.japanese)),
    writing: median(reports.map((report) => report.writing)),
    subject: median(reports.map((report) => report.subject)),
    math: median(reports.map((report) => report.math)),
    english: median(reports.map((report) => report.english)),
    latestYear: reports.length ? Math.max(...reports.map((report) => report.year || 0)) : null,
  };
}

function getCommunityPenalty(input, university) {
  const stats = getCommunityStats(university, input.field);
  if (!stats.count) return 0;

  const confidence = Math.min(stats.count / 5, 1);
  let penalty = 0;
  if (stats.japanese && input.japanese < stats.japanese - 10) penalty += (stats.japanese - input.japanese) * 0.28;
  if (stats.subject && input.subject < stats.subject - 8) penalty += (stats.subject - input.subject) * 0.34;
  if (stats.english && input.english < stats.english - 5) penalty += (stats.english - input.english) * 0.24;
  if (input.field === "science" && stats.math && input.math < stats.math - 8) {
    penalty += (stats.math - input.math) * 0.28;
  }

  return Math.min(24, penalty * confidence);
}

function getOfficialAdmissionFacts(university) {
  const target = getUniversityTarget(university);
  const record = getAdmissionRequirementRecord(university);
  const hasTarget = Boolean(university.target || university.profiled);
  const scoreParts = [];
  if (target.japanese > 0) scoreParts.push(`日语${target.japanese}+`);
  if (target.subject > 0) scoreParts.push(`综合/理科${target.subject}+`);
  if (target.math > 0) scoreParts.push(`数学${target.math}+`);
  if (target.english > 0) scoreParts.push(`TOEFL换算${target.english}+`);
  if (target.jlpt > 0) scoreParts.push(`JLPT N${target.jlpt}目安`);

  const sourceText = university.source?.includes("JASSO")
    ? "JASSO EJU利用校リスト掲載。EJU利用有無は公式リスト由来。"
    : "大学公式リンク・募集要項で確認。";
  const extracted = record && ["official_extracted", "official_partial", "unavailable"].includes(record.status);
  const officialParts = [];
  if (record?.ejuSubjects?.length) officialParts.push(`EJU: ${record.ejuSubjects.join(" / ")}`);
  if (record?.englishRequirement) officialParts.push(`英语: ${record.englishRequirement}`);
  if (record?.jlptRequirement) officialParts.push(`JLPT: ${record.jlptRequirement}`);
  const universityUrl = safeUrl(getUniversityOfficialUrl(university));
  const recordUrl = record?.admissionPageUrl
    ? safeUrl(getJapaneseOfficialUrl(record.admissionPageUrl))
    : "";
  const fallbackRecordUrl = safeUrl(getJapaneseOfficialUrl(record?.officialUrl));
  const sourceUrl = recordUrl || universityUrl || fallbackRecordUrl;
  const sourceTitle = record?.admissionPageUrl?.toLowerCase().includes(".pdf")
    ? "公式募集要項PDF"
    : recordUrl
      ? "公式募集要項・入試ページ候補"
      : "大学公式サイト";

  return {
    extractionStatus: record
      ? `${getRequirementStatusText(record)}${record.sourceCheckedAt ? ` / 確認日 ${record.sourceCheckedAt}` : ""}`
      : "募集要項DB未登録",
    eligibility: extracted && record.eligibility ? record.eligibility : university.requirement || "出愿资格は大学・学部の最新募集要項で確認。",
    minimum:
      extracted && record.officialMinimumScore
        ? record.officialMinimumScore
        : "官方合格最低点は多くの大学で未公開。公開されている場合のみ募集要項・入試結果を優先。",
    reference: hasTarget ? scoreParts.join(" / ") : "未录入学部别目安。先看官方募集要项。",
    timeline:
      extracted && record.timeline?.length
        ? record.timeline.map((item) => `${item.label}: ${item.value}`).join(" / ")
        : "募集要項公開、Web出願、書類締切、校内考/面试、合格発表は大学・学部・年度別。当前卡片不虚构具体日期。",
    source: extracted
      ? `${record.sourceTitle || "大学公式募集要項"} ${record.admissionPageUrl || record.officialUrl || ""}`.trim()
      : `${sourceText} ${record?.notes ?? ""}`.trim(),
    sourceUrl,
    sourceTitle,
    officialRequirements: officialParts.length ? officialParts.join(" / ") : "",
  };
}

function renderAdmissionDataBlock(university, field = null) {
  const facts = getOfficialAdmissionFacts(university);
  const stats = getCommunityStats(university, field);
  const communityText = stats.count
    ? `本地合格投稿${stats.count}件${stats.latestYear ? `（最新${stats.latestYear}）` : ""}：日语${stats.japanese ?? "-"} / 综合${stats.subject ?? "-"} / 数学${stats.math ?? "-"} / 英语${stats.english ?? "-"}`
    : "本地合格投稿：暂无。可以在上方投稿或导入JSON。";

  return `
    <div class="admission-data-box">
      <div><strong>募集要項抽取</strong><span>${escapeHtml(facts.extractionStatus)}</span></div>
      <div><strong>出愿资格</strong><span>${escapeHtml(facts.eligibility)}</span></div>
      <div><strong>最低成绩</strong><span>${escapeHtml(facts.minimum)}</span></div>
      <div><strong>官方科目・条件</strong><span>${escapeHtml(facts.officialRequirements || "募集要項から未抽取。抽取前は大学公式リンクで確認。")}</span></div>
      <div><strong>本站参考带</strong><span>${escapeHtml(facts.reference)}</span></div>
      <div><strong>时间节点</strong><span>${escapeHtml(facts.timeline)}</span></div>
      <div><strong>官方確認リンク</strong><span>${facts.sourceUrl ? `<a href="${escapeHtml(facts.sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(facts.sourceTitle)}</a>` : "公式リンク未登録"}</span></div>
      <div><strong>数据来源</strong><span>${escapeHtml(facts.source)}</span></div>
      <div><strong>投稿统计</strong><span>${escapeHtml(communityText)}</span></div>
    </div>
  `;
}

function renderFavoritePanel() {
  const panel = document.querySelector("#favorite-panel");
  if (!panel) return;

  const favorites = getFavoriteUniversities()
    .map((name) => universityData.find((university) => university.name === name))
    .filter(Boolean);

  if (!favorites.length) {
    panel.innerHTML = `
      <strong>收藏大学</strong>
      <p>在候选结果或大学资料里点“收藏”，这里会生成你的出愿候补池。</p>
    `;
    return;
  }

  panel.innerHTML = `
    <div>
      <strong>收藏大学 ${favorites.length}校</strong>
      <button type="button" id="clear-favorites">清空收藏</button>
    </div>
    <div class="favorite-list">
      ${favorites
        .map(
          (university) => `
            <a href="${getUniversityOfficialUrl(university)}" target="_blank" rel="noreferrer">
              ${escapeHtml(getDisplayUniversityName(university))}
              <span>${regionLabels[university.region] ?? university.region}</span>
            </a>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderMatchResultsNow() {
  const output = document.querySelector("#match-results");
  const scoreNode = document.querySelector("#match-score");
  const note = document.querySelector("#match-note");
  if (!output || !scoreNode || !note) return;

  const input = getScoreInput();
  const matchingPool = universityData.filter((university) => {
    const fieldMatch = university.fields?.includes(input.field);
    const regionMatch =
      input.region === "any" || university.region === input.region || university.region === "any";
    const typeMatch = input.candidateType === "all" || university.type === input.candidateType;
    return fieldMatch && regionMatch && typeMatch;
  });
  const typePool = universityData.filter(
    (university) => input.candidateType === "all" || university.type === input.candidateType,
  );
  const source = matchingPool.length >= 4 ? matchingPool : typePool.length ? typePool : universityData;
  const ranked = source
    .map((university) => ({
      ...university,
      score: scoreUniversity(input, university),
      difficulty: getUniversityDifficulty(university),
      rankScore: rankUniversity(input, university),
      deficitNotes: getDeficitNotes(input, university),
    }))
    .map((university) => ({
      ...university,
      recommendationBand: getRecommendationBand(input, university, university.score, university.rankScore),
    }))
    .map((university) => ({
      ...university,
      displayScore: getDisplayMatchScore(university),
    }))
    .sort((a, b) => b.rankScore - a.rankScore || b.score - a.score || b.difficulty - a.difficulty);
  const grouped = {
    safety: ranked.filter((university) => university.recommendationBand === "safety"),
    recommended: ranked.filter((university) => university.recommendationBand === "recommended"),
    reach: ranked.filter((university) => university.recommendationBand === "reach"),
    notRecommended: ranked.filter((university) => university.recommendationBand === "notRecommended"),
  };
  const baseLimits = matchExpanded
    ? { safety: 12, recommended: 14, reach: 12 }
    : { safety: 6, recommended: 8, reach: 6 };
  const displayGroups = {
    safety: grouped.safety.slice(0, baseLimits.safety),
    recommended: grouped.recommended.slice(0, baseLimits.recommended),
    reach: grouped.reach.slice(0, baseLimits.reach),
  };
  const displayCandidates = [...displayGroups.safety, ...displayGroups.recommended, ...displayGroups.reach];
  const hiddenCount = ["safety", "recommended", "reach"].reduce(
    (sum, band) => sum + Math.max(grouped[band].length - displayGroups[band].length, 0),
    0,
  );
  const topScore = displayCandidates.length
    ? Math.max(...displayCandidates.map((university) => university.displayScore))
    : 0;

  scoreNode.textContent = `${topScore}/100`;
  note.textContent =
    displayCandidates.length
      ? `保底${grouped.safety.length} / 推荐${grouped.recommended.length} / 冲刺${grouped.reach.length}`
      : "当前条件下没有进入主要候选的大学。建议先提高EJU日语、综合/理科、英语或放宽地区/学校类型。";

  const renderCandidateCard = (university) => {
    const accuracyTags = getAccuracyTags(university)
      .slice(0, 3)
      .map((tag) => `<span>${tag}</span>`)
      .join("");
    const deficitSummary = university.deficitNotes.length
      ? university.deficitNotes[0]
      : "当前输入与参考带没有明显硬性短板";
    return `
        <article class="match-card match-row">
          <div class="match-row-main">
            <div class="match-school">
              <h3>${getDisplayUniversityName(university)}</h3>
              <div class="accuracy-tags compact-tags">${accuracyTags}</div>
            </div>
            <span class="match-level band-${university.recommendationBand}">${recommendationBandLabels[university.recommendationBand]} ${university.displayScore}</span>
            <p class="match-row-reason">${escapeHtml(getRecommendationReason(input, university, university.recommendationBand))}</p>
            <div class="match-row-actions">
              <a href="${getUniversityOfficialUrl(university)}" target="_blank" rel="noreferrer">公式</a>
              <button type="button" class="favorite-button ${isFavoriteUniversity(university.name) ? "is-favorite" : ""}" data-favorite="${encodeURIComponent(university.name)}">
                ${isFavoriteUniversity(university.name) ? "已收藏" : "收藏"}
              </button>
            </div>
          </div>
          <details class="match-row-detail">
            <summary>${escapeHtml(deficitSummary)}・募集要項を見る</summary>
            <p>${university.line}</p>
            ${
              university.deficitNotes.length
                ? `<ul class="risk-list">${university.deficitNotes.map((note) => `<li>${escapeHtml(note)}</li>`).join("")}</ul>`
                : `<ul class="risk-list ok"><li>当前输入与该校参考带没有明显硬性短板，但仍需查募集要项。</li></ul>`
            }
            <div class="line-box">
              <strong>确认重点</strong>
              ${university.requirement}
            </div>
            ${renderAdmissionDataBlock(university, input.field)}
          </details>
        </article>
      `;
  };
  const sections = ["safety", "recommended", "reach"]
    .map((band) => {
      const items = displayGroups[band];
      const emptyText =
        band === "safety"
          ? "暂无明确保底校。可以降低学校难度、扩大地区，或把更多中位私立加入候选池。"
          : band === "recommended"
            ? "暂无主力推荐校。建议调整地区/学校类型，或优先补EJU日语和综合科目。"
            : "暂无合理冲刺校。当前输入可能与目标方向不匹配，或分数差距过大。";
      return `
        <section class="match-band match-band-${band}" id="match-band-${band}">
          <div class="match-band-head">
            <div>
              <span>${recommendationBandLabels[band]}</span>
              <strong>${grouped[band].length}校</strong>
            </div>
            <p>${recommendationBandNotes[band]}</p>
          </div>
          <div class="match-band-grid compact-match-grid">
            ${
              items.length
                ? items.map(renderCandidateCard).join("")
                : `<article class="match-card match-empty"><p>${emptyText}</p></article>`
            }
          </div>
        </section>
      `;
    })
    .join("");
  const expandCount = Math.min(hiddenCount, 15);
  const moreLabel = matchExpanded ? "候选を折りたたむ" : `さらに${expandCount}校を表示`;
  const moreText = hiddenCount > 0
    ? `主要候选${grouped.safety.length + grouped.recommended.length + grouped.reach.length}校中、${displayCandidates.length}校を表示中。暂不建议${grouped.notRecommended.length}校は通常非表示です。`
    : `主要候选${displayCandidates.length}校を表示中。暂不建议${grouped.notRecommended.length}校は通常非表示です。`;

  output.innerHTML = `
    <div class="match-priority-nav">
      <a class="priority-card priority-safety" href="#match-band-safety">
        <span>保底</span>
        <strong>${grouped.safety.length}</strong>
        <em>优先确认出愿条件</em>
      </a>
      <a class="priority-card priority-recommended" href="#match-band-recommended">
        <span>推荐</span>
        <strong>${grouped.recommended.length}</strong>
        <em>主力候选池</em>
      </a>
      <a class="priority-card priority-reach" href="#match-band-reach">
        <span>冲刺</span>
        <strong>${grouped.reach.length}</strong>
        <em>少量挑战</em>
      </a>
    </div>
    ${sections}
    <div class="match-more">
      <p>${moreText}</p>
      ${
        hiddenCount > 0 || matchExpanded
          ? `<button type="button" id="match-toggle" aria-expanded="${matchExpanded}">${moreLabel}</button>`
          : ""
      }
    </div>
  `;
}

function renderMatchResults() {
  const scoreOutput = document.querySelector(".score-output");
  const scoreNode = document.querySelector("#match-score");
  const note = document.querySelector("#match-note");
  if (!scoreOutput || !scoreNode || !note) {
    renderMatchResultsNow();
    return;
  }

  matchExpanded = false;
  window.clearTimeout(matchRenderTimer);
  scoreOutput.classList.add("is-loading");
  scoreNode.textContent = "...";
  note.textContent = "EJU、英语、JLPT、志望理由书と大学データを照合しています。";
  matchRenderTimer = window.setTimeout(() => {
    renderMatchResultsNow();
    scoreOutput.classList.remove("is-loading");
  }, 980);
}

document.querySelector("#match-results")?.addEventListener("click", (event) => {
  const toggle = event.target.closest("#match-toggle");
  if (!toggle) return;
  matchExpanded = !matchExpanded;
  renderMatchResultsNow();
});

function renderUniversityCards(query = "") {
  const grid = document.querySelector("#university-grid");
  if (!grid) return;
  const status = document.querySelector("#university-search-status");
  const type = document.querySelector("#university-type")?.value ?? "all";
  const trimmedQuery = query.trim();
  const renderKey = `${type}::${trimmedQuery}`;
  if (renderKey !== lastUniversityRenderKey) {
    universityVisibleCount = universityPageSize;
    lastUniversityRenderKey = renderKey;
  }
  const typedMatches = universityData.filter(
    (university) => passesUniversityTypeFilter(university, type) && matchesUniversityQuery(university, query),
  );
  const relaxedMatches = trimmedQuery
    ? universityData.filter((university) => matchesUniversityQuery(university, query))
    : [];
  const filterRelaxed = Boolean(trimmedQuery && !typedMatches.length && relaxedMatches.length);
  const filtered = (filterRelaxed ? relaxedMatches : typedMatches)
    .map((university) => ({
      ...university,
      searchRank: getUniversitySearchRank(university, query),
    }))
    .sort((a, b) => b.searchRank - a.searchRank || a.name.localeCompare(b.name));
  const visibleUniversities = filtered.slice(0, universityVisibleCount);
  const hiddenCount = Math.max(filtered.length - visibleUniversities.length, 0);
  const resultBanner = trimmedQuery
    ? `
      <div class="search-result-banner">
        <strong>「${escapeHtml(trimmedQuery)}」の検索結果</strong>
        <span>${filterRelaxed ? "学校类型筛选已自动放宽，先显示名称匹配的大学。" : "名称、简称、中文・日文别名を照合しました。"}</span>
      </div>
    `
    : "";

  if (!filtered.length) {
    grid.innerHTML = `
      ${resultBanner}
      <article class="university-card empty-result">
        <h3>該当大学が見つかりません</h3>
        <p>中文、日文、英文、简称都可以搜索。例：東洋大学 / 东洋 / Toyo / 东京 / 私立 / EJU。</p>
        <div class="line-box">
          <strong>搜索建议</strong>
          学校类型筛选为「全部」后再试；如果大学尚未收录，可以先看JASSO EJU利用校和大学官网募集要項。
        </div>
      </article>
    `;
  } else {
    grid.innerHTML = `
      ${resultBanner}
      ${visibleUniversities
      .map(
        (university) => `
        <article class="university-card">
          <h3>${getDisplayUniversityName(university)}</h3>
          <div class="meta-row">
            <span>${university.route}</span>
            <span>${regionLabels[university.region] ?? university.region}</span>
            ${university.prefecture ? `<span>${getDisplayPrefecture(university)}</span>` : ""}
            <span>${getDisplayFields(university)}</span>
          </div>
          <div class="accuracy-tags">
            ${getAccuracyTags(university).map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <p>${university.requirement}</p>
          <div class="line-box">
            <strong>出愿参考带 / 风险</strong>
            ${university.line}
          </div>
          ${renderAdmissionDataBlock(university)}
          <div class="card-links">
            <a href="${getUniversityOfficialUrl(university)}" target="_blank" rel="noreferrer">大学公式サイト</a>
            <button type="button" class="favorite-button ${isFavoriteUniversity(university.name) ? "is-favorite" : ""}" data-favorite="${encodeURIComponent(university.name)}">
              ${isFavoriteUniversity(university.name) ? "已收藏" : "收藏"}
            </button>
            ${university.source ? `<span>${university.source}</span>` : ""}
          </div>
        </article>
      `,
      )
      .join("")}
      ${
        hiddenCount > 0
          ? `<div class="university-more"><p>${filtered.length}件中 ${visibleUniversities.length}件を表示中</p><button type="button" id="university-load-more">さらに${Math.min(hiddenCount, universityPageSize)}校を表示</button></div>`
          : ""
      }
    `;
  }

  const note = document.querySelector("#university-data-note");
  if (note) {
    const requirementCount = admissionRequirementMeta?.recordCount
      ? `募集要項抽取DB ${admissionRequirementMeta.recordCount}校登録。`
      : "";
    const visibleText = hiddenCount > 0
      ? `${filtered.length}件中${visibleUniversities.length}件を表示中。`
      : `${filtered.length}件をすべて表示中。`;
    note.textContent = `${visibleText}${requirementCount} EJU利用情報はJASSO 2026年5月リスト基準、匹配スコアと出愿参考带は目安です。必ず大学公式募集要項で確認してください。`;
  }
  grid.classList.remove("is-searching");
  status?.classList.remove("is-active");
}

function renderUniversityCardsWithAnimation(query = "") {
  const grid = document.querySelector("#university-grid");
  const status = document.querySelector("#university-search-status");
  window.clearTimeout(universitySearchTimer);
  grid?.classList.add("is-searching");
  status?.classList.add("is-active");
  universitySearchTimer = window.setTimeout(() => {
    renderUniversityCards(query);
  }, 80);
}

function renderAdmissionReportSummary() {
  const output = document.querySelector("#report-summary");
  if (!output) return;

  const reports = getAdmissionReports();
  if (!reports.length) {
    output.innerHTML = `
      <strong>本地统计 0 件</strong>
      <p>还没有投稿。保存后，大学卡片会显示本地合格投稿统计，并小幅影响候选推荐。</p>
    `;
    return;
  }

  const admitted = reports.filter((report) => report.result === "admitted");
  const recent = reports.slice(-5).reverse();
  output.innerHTML = `
    <strong>本地统计 ${reports.length}件 / 合格${admitted.length}件</strong>
    <div class="report-list">
      ${recent
        .map(
          (report) => `
            <article>
              <span>${report.result === "admitted" ? "合格" : "不合格"} ${report.year}</span>
              <strong>${escapeHtml(report.university)}</strong>
              <p>EJU日语${report.japanese} / 记述${report.writing} / 综合理科${report.subject} / 数学${report.math} / 英语${report.english} / JLPT ${report.jlpt ? `N${report.jlpt}` : "未取得"}</p>
              ${report.note ? `<p>${escapeHtml(report.note)}</p>` : ""}
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function getReportFormValue(selector, fallback = "") {
  return document.querySelector(selector)?.value ?? fallback;
}

function saveAdmissionReportFromForm() {
  const report = {
    id: getReportId(),
    university: getReportFormValue("#report-university").trim(),
    year: Number(getReportFormValue("#report-year", new Date().getFullYear())),
    field: getReportFormValue("#report-field", "humanities"),
    result: getReportFormValue("#report-result", "admitted"),
    japanese: Number(getReportFormValue("#report-japanese", 0)),
    writing: Number(getReportFormValue("#report-writing", 0)),
    subject: Number(getReportFormValue("#report-subject", 0)),
    math: Number(getReportFormValue("#report-math", 0)),
    english: Number(getReportFormValue("#report-english", 0)),
    jlpt: Number(getReportFormValue("#report-jlpt", 0)),
    note: getReportFormValue("#report-note").trim(),
    createdAt: new Date().toISOString(),
  };
  if (!report.university) return;

  setAdmissionReports([...getAdmissionReports(), report]);
  renderAdmissionReportSummary();
  renderUniversityCards(document.querySelector("#university-search")?.value ?? "");
  renderMatchResultsNow();
}

function exportAdmissionReports() {
  const data = JSON.stringify(getAdmissionReports(), null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `admission-reports-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function normalizeImportedReports(value) {
  const items = Array.isArray(value) ? value : value?.reports;
  if (!Array.isArray(items)) return [];
  return items
    .filter((item) => item && item.university)
    .map((item) => ({
      id: item.id || getReportId(),
      university: String(item.university),
      year: Number(item.year) || new Date().getFullYear(),
      field: ["humanities", "science", "english"].includes(item.field) ? item.field : "humanities",
      result: item.result === "rejected" ? "rejected" : "admitted",
      japanese: Number(item.japanese) || 0,
      writing: Number(item.writing) || 0,
      subject: Number(item.subject) || 0,
      math: Number(item.math) || 0,
      english: Number(item.english) || 0,
      jlpt: Number(item.jlpt) || 0,
      note: item.note ? String(item.note) : "",
      createdAt: item.createdAt || new Date().toISOString(),
    }));
}

function importAdmissionReports(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const imported = normalizeImportedReports(JSON.parse(reader.result));
      if (!imported.length) return;
      const merged = [...getAdmissionReports(), ...imported];
      const unique = [...new Map(merged.map((report) => [report.id, report])).values()];
      setAdmissionReports(unique);
      renderAdmissionReportSummary();
      renderUniversityCards(document.querySelector("#university-search")?.value ?? "");
      renderMatchResultsNow();
    } catch (error) {
      window.alert("JSON格式无法读取。请确认文件是导出的投稿数据。");
    }
  });
  reader.readAsText(file);
}

function getUniversityKey(item) {
  return (item.aliases?.[0] ?? item.name).toLowerCase();
}

function dedupeUniversities(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = getUniversityKey(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function updateUniversitySuggestions() {
  // Native datalist becomes slow and visually intrusive with hundreds of universities.
}

async function loadUniversityData() {
  const fallbackPrivateUniversities = window.__PRIVATE_UNIVERSITIES__ ?? [];
  const fallbackNationalPublicUniversities = window.__NATIONAL_PUBLIC_UNIVERSITIES__ ?? [];
  try {
    const [privateResponse, nationalPublicResponse] = await Promise.all([
      fetch("data/private-universities.json?v=20260629-06", { cache: "no-store" }),
      fetch("data/national-public-universities.json?v=20260629-06", { cache: "no-store" }),
    ]);
    if (!privateResponse.ok) throw new Error("private university data unavailable");
    const privateUniversities = await privateResponse.json();
    const nationalPublicUniversities = nationalPublicResponse.ok
      ? await nationalPublicResponse.json()
      : [];
    universityData = dedupeUniversities([
      ...featuredUniversities.map((item) => ({
        ...item,
        featured: true,
        type: item.type ?? (privateFeaturedNames.has(item.name) ? "private" : "national"),
      })),
      ...nationalPublicUniversities.map((item) => ({
        ...item,
        featured: false,
      })),
      ...privateUniversities.map((item) =>
        applyPrivateUniversityProfile({ ...item, featured: false }),
      ),
    ]);
  } catch (error) {
    const hasFallback = fallbackPrivateUniversities.length || fallbackNationalPublicUniversities.length;
    universityData = dedupeUniversities([
      ...featuredUniversities.map((item) => ({
        ...item,
        featured: true,
        type: item.type ?? (privateFeaturedNames.has(item.name) ? "private" : "national"),
      })),
      ...fallbackNationalPublicUniversities.map((item) => ({
        ...item,
        featured: false,
      })),
      ...fallbackPrivateUniversities.map((item) =>
        applyPrivateUniversityProfile({ ...item, featured: false }),
      ),
    ]);
    const note = document.querySelector("#university-data-note");
    if (note && !hasFallback) {
      note.textContent = "大学JSONを読み込めませんでした。ローカルサーバー経由で開くと全データを表示できます。";
    }
  }
  updateUniversitySuggestions();
  renderUniversityCards(document.querySelector("#university-search")?.value ?? "");
  renderSiteSearch(document.querySelector("#site-search-input")?.value ?? "");
  renderMatchResultsNow();
}

async function loadAdmissionRequirements() {
  try {
    const response = await fetch("data/admission-requirements.json?v=20260702-09", { cache: "no-store" });
    if (!response.ok) throw new Error("admission requirement data unavailable");
    const data = await response.json();
    admissionRequirementRecords = data.records ?? {};
    admissionRequirementMeta = data.meta ?? null;
  } catch (error) {
    const fallback = window.__ADMISSION_REQUIREMENTS__;
    admissionRequirementRecords = fallback?.records ?? {};
    admissionRequirementMeta = fallback?.meta ?? null;
  }
  renderUniversityCards(document.querySelector("#university-search")?.value ?? "");
  renderMatchResultsNow();
}

document.querySelector("#score-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  renderMatchResults();
});

[
  "#field",
  "#region",
  "#candidate-type",
  "#eju-japanese",
  "#eju-writing",
  "#eju-subject",
  "#eju-math",
  "#english-score",
  "#jlpt",
  "#essay",
].forEach((selector) => {
  document.querySelector(selector)?.addEventListener("input", renderMatchResults);
});

document.querySelector("#university-search")?.addEventListener("input", (event) => {
  const value = event.target.value;
  window.clearTimeout(universityInputTimer);
  universityInputTimer = window.setTimeout(() => {
    renderUniversityCardsWithAnimation(value);
  }, 260);
});

document.querySelector("#university-type")?.addEventListener("change", () => {
  renderUniversityCardsWithAnimation(document.querySelector("#university-search")?.value ?? "");
});

document.querySelector("#admission-report-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  saveAdmissionReportFromForm();
});

document.querySelector("#export-report-data")?.addEventListener("click", exportAdmissionReports);

document.querySelector("#import-report-data")?.addEventListener("change", (event) => {
  importAdmissionReports(event.target.files?.[0]);
  event.target.value = "";
});

document.querySelector("#clear-report-data")?.addEventListener("click", () => {
  setAdmissionReports([]);
  renderAdmissionReportSummary();
  renderUniversityCards(document.querySelector("#university-search")?.value ?? "");
  renderMatchResultsNow();
});

const defaultAnnouncements = [
  {
    id: "default-20260702-1705",
    date: "2026-07-02 17:05 JST",
    datetime: "2026-07-02T17:05:00+09:00",
    category: "募集要項",
    title: "主要私大の公式入試データを追加",
    body: "上智、慶應、駒澤、専修、日本、成蹊、京都産業、龍谷、甲南、近畿、明治学院の公式ページ・要項リンクを確認し、出願資格、EJU条件、日程、PDF入口を反映。上智と京都産業はEJU基準点まで抽出済み、未公開校は抽出待ちとして表示。",
  },
  {
    id: "default-20260702-1650",
    date: "2026-07-02 16:50 JST",
    datetime: "2026-07-02T16:50:00+09:00",
    category: "募集要項",
    title: "GMARCH・関関同立の公式データを追加確認",
    body: "2026-07-02确认青山学院、学習院、中央、法政、立教、関西大学的官方入试页面/PDF导线并反映到大学资料。学習院は2027年度公式PDFからEJU/JLPT最低点なし、学部別科目、日程を抽取。同志社は公式サイトが403のため、非公式補完せず抽取待ちとして明記。",
  },
  {
    id: "default-20260702-1645",
    date: "2026-07-02 16:45 JST",
    datetime: "2026-07-02T16:45:00+09:00",
    category: "募集要項",
    title: "立命館大学の2027留学生入試と2026合格データを反映",
    body: "2026-07-02确认立命馆大学官方2027年度外国人留学生入试要项PDF，补充出愿资格、EJU必須科目、前期・后期出愿日程，以及2026年度志愿者数、合格者数、EJU合格者最低点。官方链接：https://admission.ritsumei.ac.jp/admission/international/guidelines.html",
  },
  {
    id: "default-20260702-1526",
    date: "2026-07-02 15:26 JST",
    datetime: "2026-07-02T15:26:00+09:00",
    category: "募集要項",
    title: "京都大学 Kyoto iUP の2027要項を反映",
    body: "2026-07-02确认京都大学官方日文留学导线与 Kyoto iUP 2027年10月入学官方PDF，补充出愿资格、英语条件、无EJU/JLPT必须条件、11月出愿、3月线上面试与4月6日合格发表。官方链接：https://www.kyoto-u.ac.jp/ja/international/students1/study1/undergraduate",
  },
  {
    id: "default-20260702-1041",
    date: "2026-07-02 10:41 JST",
    datetime: "2026-07-02T10:41:00+09:00",
    category: "募集要項",
    title: "関西学院大学の2027留学生入試を反映",
    body: "2026-07-02确认关西学院大学官方外国人留学生入试页与2027年度要项PDF，补充出愿资格、EJU/英语条件、I期・II期出愿、试验日与合格发表。官方链接：https://www.kwansei.ac.jp/admissions/admissions-international/",
  },
  {
    id: "default-20260702-1043",
    date: "2026-07-02 10:43 JST",
    datetime: "2026-07-02T10:43:00+09:00",
    category: "募集要項",
    title: "青森中央学院大学の留学生秋入試を反映",
    body: "2026-07-02确认青森中央学院大学官方外国人留学生入试页与2026年度10月入学募集要项链接，补充出愿资格、JLPT N2条件、7月31日-8月17日出愿、8月29日试验与9月4日合格发表。官方链接：https://www.aomoricgu.ac.jp/international_exchange/foreignstudent/admission",
  },
  {
    id: "default-20260702-1040",
    date: "2026-07-02 10:40 JST",
    datetime: "2026-07-02T10:40:00+09:00",
    category: "募集要項",
    title: "東北芸術工科大学の2027留学生入試を反映",
    body: "2026-07-02确认东北艺术工科大学2027年度官方募集要项PDF，补充出愿资格、EJU/JLPT日本语条件、11月出愿、12月13日试验与12月23日合格发表。官方链接：https://www.tuad.ac.jp/adm/information/dept/",
  },
  {
    id: "default-20260702-1022",
    date: "2026-07-02 10:22 JST",
    datetime: "2026-07-02T10:22:00+09:00",
    category: "募集要項",
    title: "東洋大学の2027留学生入試要項を反映",
    body: "2026-07-02确认东洋大学2027年度外国人留学生入试PDF，补充出愿资格、EJU/英语条件、9-10月与10-12月出愿・试验・合格发表。官方链接：https://www.toyo.ac.jp/nyushi/admission/admission-data/international-student/japan/",
  },
  {
    id: "default-20260701-2333",
    date: "2026-07-01 23:33 JST",
    datetime: "2026-07-01T23:33:00+09:00",
    category: "募集要項",
    title: "東北工業大学の2027留学生入試概要を反映",
    body: "2026-07-01确认东北工業大学官方日文入试页，补充外国人留学生特別選抜的出愿资格、EJU日本语/JLPT条件、10月・2月出愿期、11月・3月试验日与12月・3月合格发表。官方链接：https://www.tohtech.ac.jp/admission/outline/foreigner/",
  },
  {
    id: "default-20260701-1208",
    date: "2026-07-01 12:08 JST",
    datetime: "2026-07-01T12:08:00+09:00",
    category: "募集要項",
    title: "東北学院大学の2027留学生入試を反映",
    body: "2026-07-01确认东北学院大学官方日文入试页与外国人留学生特別選抜PDF，补充出愿资格、EJU学科别条件、11月出愿、12月12日试验与12月18日合格发表。官方链接：https://www.tohoku-gakuin.ac.jp/admission/admissions/",
  },
  {
    id: "default-20260630-2222",
    date: "2026-06-30 22:22 JST",
    datetime: "2026-06-30T22:22:00+09:00",
    category: "募集要項",
    title: "APUの2027国際学生募集要項を反映",
    body: "2026-06-30确认立命馆亚洲太平洋大学 APU 官方招生页与2027 handbook，补充出愿资格、英语/JLPT/EJU日本语条件，以及中国居住者4月・9月入学的出愿期与合格发表。官方链接：https://admissions.apu.ac.jp/admissions/application_eligibility/",
  },
  {
    id: "default-20260630-1820",
    date: "2026-06-30 18:20 JST",
    datetime: "2026-06-30T18:20:26+09:00",
    category: "募集要項",
    title: "秋田大学の国際資源学部留学生入試を追記",
    body: "2026-06-30确认秋田大学官方日文入试页与2027年度国際資源学部外国人留学生特別入試PDF，补充限定范围内的出愿资格、英语条件、8-9月出愿、11月13日线上面试与11月20日合格发表。官方链接：https://www.akita-u.ac.jp/honbu/exam/ex_kind.html",
  },
  {
    id: "default-20260630-1808",
    date: "2026-06-30 18:08 JST",
    datetime: "2026-06-30T18:08:00+09:00",
    category: "募集要項",
    title: "武蔵野美術大学の留学生選抜を追記",
    body: "2026-06-30确认武蔵野美術大学官方日文页，新增外国人留学生特別選抜的出愿资格、EJU/JLPT日本语条件、出愿期间、试验日与合格发表。官方链接：https://www.musabi.ac.jp/admission/undergraduate/foreign/",
  },
  {
    id: "default-20260630-1420",
    date: "2026-06-30 14:20 JST",
    datetime: "2026-06-30T14:20:00+09:00",
    category: "募集要項",
    title: "早稲田大学の2027外国学生入試を反映",
    body: "2026-06-30确认早稲田大学官方日文国际招生页与2027年度外国学生入试要项，补充出愿资格、EJU/JLPT与英语外部试验条件，以及学部别出愿期、试验期和合格发表范围。官方链接：https://www.waseda.jp/inst/admission/undergraduate/system/international/",
  },
  {
    id: "default-20260630-1138",
    date: "2026-06-30 11:38 JST",
    datetime: "2026-06-30T11:38:00+09:00",
    category: "募集要項",
    title: "武蔵野大学の2027留学生入試を反映",
    body: "2026-06-30确认武蔵野大学官方日文留学生入试页，补充出愿资格、EJU/JLPT/英语条件，以及I期・II期・III期出愿与合格发表信息。官方链接：https://www.musashino-u.ac.jp/admission/international_students/other_studies.html",
  },
  {
    id: "default-20260630-0945",
    date: "2026-06-30 09:45 JST",
    datetime: "2026-06-30T09:45:00+09:00",
    category: "更新",
    title: "志望大学メモに募集要項抽取情報を表示",
    body: "EJU时间割の志望大学欄に大学名を入力すると、抽取済み大学は公式PDF/入試ページ、出願資格、必要科目、出願期間や試験日を表示するようにしました。",
  },
  {
    id: "default-20260630-0917",
    date: "2026-06-30 09:17 JST",
    datetime: "2026-06-30T09:17:00+09:00",
    category: "更新",
    title: "首页改为EJU/JLPT重要节点优先",
    body: "将EJU/JLPT倒计时与官方报名入口移到首页上方，补充JLPT国内/海外报名入口；个人收藏网站移至来日生活工具区，并优化手机端的密度。",
  },
  {
    id: "default-20260630-0848",
    date: "2026-06-30 08:48 JST",
    datetime: "2026-06-30T08:48:00+09:00",
    category: "募集要項",
    title: "北海道大学の2027私費外国人留学生入試を反映",
    body: "2026-06-30确认北海道大学官方日文页与PDF，补充出愿资格、EJU/英语条件、9月出愿、11月15日试验、12月8日合格发表。官方链接：https://www.hokudai.ac.jp/admission/faculty/intl-private/",
  },
  {
    id: "default-20260629-2350",
    date: "2026-06-29 23:50 JST",
    datetime: "2026-06-29T23:50:00+09:00",
    category: "更新",
    title: "个人收藏网站改为快捷方式宫格",
    body: "将个人收藏网站改成类似浏览器主页的固定网址入口，支持小头像、点击打开、快速添加和删除。",
  },
  {
    id: "default-20260629-2346",
    date: "2026-06-29 23:46 JST",
    datetime: "2026-06-29T23:46:00+09:00",
    category: "更新",
    title: "站长留言文案调整",
    body: "调整关于站长板块的祝福语，改为祝大家考上想去的学校，实现自己的梦想。",
  },
  {
    id: "default-20260629-2342",
    date: "2026-06-29 23:42 JST",
    datetime: "2026-06-29T23:42:00+09:00",
    category: "更新",
    title: "公告栏改为只读更新记录",
    body: "移除前台站长编辑表单；公告栏只显示站点发布记录。后续每次更新会在发布时追加日期、时间和简洁内容。",
  },
];

function getAnnouncements() {
  return defaultAnnouncements;
}

function renderAnnouncements() {
  const output = document.querySelector("#announcement-list");
  if (!output) return;
  const announcements = getAnnouncements().sort((a, b) => {
    if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
    return String(b.date).localeCompare(String(a.date));
  });

  output.innerHTML = announcements
    .map(
      (item) => `
        <article class="announcement-card">
          <div>
            <span>${escapeHtml(item.category || "更新")}</span>
            <time datetime="${escapeHtml(item.datetime || item.date)}">${escapeHtml(item.date)}</time>
          </div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.body)}</p>
        </article>
      `,
    )
    .join("");
}

const staticSearchItems = [
  ["公告栏", "更新 募集要項 抽取进度 站长公告 notice news", "#announcements"],
  ["EJU出願管理", "EJU Online 日程 出願方法 受験票 成績 発表 時間割", "#eju-planner"],
  ["EJU / JLPT重要节点", "倒计时 报名 出愿 试验 成绩 公表 官方入口 JEES MyJLPT", "#home-exam-title"],
  ["JLPT报名入口", "日本国内 JEES MyJLPT 海外 实施机构 受験 申込", "#exam-guide"],
  ["成绩看候选校", "EJU 英语 JLPT 志望理由书 出愿参考带 候选大学", "#score-tool"],
  ["EJU / JLPT备考指南", "過去問 問題例 参考书 报名 N1 N2 文综 日语", "#exam-guide"],
  ["大学资料", "全国 私立 国公立 公式链接 JASSO EJU利用校", "#universities"],
  ["大学院申请导航", "大学院 修士 博士 研究生 研究计划书 研究計画書 教授联系 教授連絡 导师 研究科 院试 口试 面试 募集要項", "#graduate"],
  [
    "来日生活工具・个人收藏网站",
    "在留卡 住民票 国民健康保险 银行开户 信用卡 证券账户 手机卡 网络 水电煤 租房 垃圾分类 搬家 个人收藏 常用网站 生活工具箱 电力 ガス 水道 softbank docomo ゆうちょ UFJ",
    "#personal-toolbox",
  ],
  ["奖学金・学费减免", "MEXT JASSO 奖学金 学费减免 学校独自减免", "#costs"],
  ["签证与在留", "COE 签证 在留 外务省 入管 申请表 填写方法 留学调查表 代办机构 在留卡", "#visa"],
  ["关于站长", "站长 微信 WeChat RinGoui0513 反馈 加群 交流 南山大学", "#about-contact"],
  ["申请路线", "本科 大学院 专门学校 日本语学校 申请流程", "#timeline"],
  ["官方来源", "JASSO JLPT 外务省 入管 文科省", "#sources"],
];

function getSearchItems() {
  const language = getLanguagePack();
  const universityItems = universityData.map((university) => ({
    title: getDisplayUniversityName(university),
    body: getUniversitySearchSummary(university),
    href: "#universities",
    query: getDisplayUniversityName(university),
    type: language.search.universityType,
    university,
  }));

  return [
    ...staticSearchItems.map(([title, body, href]) => ({ title, body, href, type: language.search.functionType })),
    ...universityItems,
  ];
}

function renderSiteSearch(query) {
  const output = document.querySelector("#site-search-results");
  if (!output) return;

  const normalized = normalizeUniversitySearch(query);
  if (!normalized) {
    output.innerHTML = "";
    return;
  }

  const results = getSearchItems()
    .map((item) => {
      const title = normalizeUniversitySearch(item.title);
      const haystack = normalizeUniversitySearch(`${item.title} ${item.body}`);
      const universityScore = item.university ? getUniversitySearchRank(item.university, query) : 0;
      const score = universityScore
        ? 10 + universityScore
        : title.includes(normalized)
          ? 3
          : haystack.includes(normalized)
            ? 1
            : 0;
      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, 8);

  if (!results.length) {
    output.innerHTML = `<p>${escapeHtml(getLanguagePack().search.noResult)}</p>`;
    return;
  }

  output.innerHTML = results
    .map(
      (item) => `
        <a href="${item.href}" ${item.query ? `data-search-university="${encodeURIComponent(item.query)}"` : ""}>
          <span>${item.type}</span>
          <strong>${escapeHtml(item.title)}</strong>
          <small>${escapeHtml(item.body).slice(0, 80)}...</small>
        </a>
      `,
    )
    .join("");
}

document.querySelector("#site-search-input")?.addEventListener("input", (event) => {
  const value = event.target.value;
  window.clearTimeout(siteSearchTimer);
  siteSearchTimer = window.setTimeout(() => {
    renderSiteSearch(value);
  }, 180);
});

document.querySelector("#site-search-clear")?.addEventListener("click", () => {
  const input = document.querySelector("#site-search-input");
  if (!input) return;
  window.clearTimeout(siteSearchTimer);
  input.value = "";
  renderSiteSearch("");
  input.focus();
});

document.querySelector("#site-search-results")?.addEventListener("click", (event) => {
  const link = event.target.closest("[data-search-university]");
  if (!link) return;
  const query = decodeURIComponent(link.dataset.searchUniversity);
  window.setTimeout(() => {
    const search = document.querySelector("#university-search");
    if (!search) return;
    search.value = query;
    renderUniversityCards(query);
  }, 0);
});

document.addEventListener("click", (event) => {
  const loadMoreUniversities = event.target.closest("#university-load-more");
  if (loadMoreUniversities) {
    universityVisibleCount += universityPageSize;
    renderUniversityCards(document.querySelector("#university-search")?.value ?? "");
    return;
  }

  const favoriteButton = event.target.closest(".favorite-button");
  if (favoriteButton) {
    toggleFavoriteUniversity(decodeURIComponent(favoriteButton.dataset.favorite));
    return;
  }

  const clearFavorites = event.target.closest("#clear-favorites");
  if (clearFavorites) {
    setFavoriteUniversities([]);
    renderFavoritePanel();
    renderUniversityCards(document.querySelector("#university-search")?.value ?? "");
    renderMatchResultsNow();
  }
});

const ejuSchedules = {
  "2026-1": {
    label: "2026年第1回",
    application: {
      domestic: "2026年2月16日-3月12日 17:00 JST",
      overseas: "2026年2月16日-3月12日",
    },
    applicationEnd: "2026-03-12T17:00:00+09:00",
    voucher: "2026年5月22日予定",
    exam: "2026年6月21日",
    examDate: "2026-06-21T09:30:00+09:00",
    result: "2026年7月28日 0:00 JST予定",
    resultDate: "2026-07-28T00:00:00+09:00",
  },
  "2026-2": {
    label: "2026年第2回",
    application: {
      domestic: "2026年7月6日-7月30日 17:00 JST",
      overseas: "2026年7月6日-7月30日",
    },
    applicationEnd: "2026-07-30T17:00:00+09:00",
    voucher: "2026年10月16日予定",
    exam: "2026年11月8日",
    examDate: "2026-11-08T09:30:00+09:00",
    result: "2026年12月15日 0:00 JST予定",
    resultDate: "2026-12-15T00:00:00+09:00",
  },
};

function padDatePart(value) {
  return String(value).padStart(2, "0");
}

function jstDateString(year, month, day, hour = 0, minute = 0) {
  return `${year}-${padDatePart(month)}-${padDatePart(day)}T${padDatePart(hour)}:${padDatePart(minute)}:00+09:00`;
}

function firstSunday(year, month) {
  const date = new Date(`${year}-${padDatePart(month)}-01T00:00:00+09:00`);
  const day = date.getDay();
  const offset = day === 0 ? 0 : 7 - day;
  return 1 + offset;
}

function nthSunday(year, month, nth) {
  return firstSunday(year, month) + (nth - 1) * 7;
}

function getExamCountdownEvents(year) {
  const official2026 = year === 2026;
  const ejuFirstExamDay = official2026 ? 21 : nthSunday(year, 6, 3);
  const ejuSecondExamDay = official2026 ? 8 : nthSunday(year, 11, 2);
  const jlptJulyDay = firstSunday(year, 7);
  const jlptDecemberDay = firstSunday(year, 12);

  return [
    {
      type: "EJU",
      title: `${year}年第1回 EJU出願締切`,
      date: official2026 ? "2026-03-12T17:00:00+09:00" : jstDateString(year, 3, 12, 17),
      link: "https://www.jasso.go.jp/ryugaku/eju/schedule.html",
      status: official2026 ? "公式確定" : "要公式確認",
    },
    {
      type: "EJU",
      title: `${year}年第1回 EJU試験`,
      date: jstDateString(year, 6, ejuFirstExamDay, 9, 30),
      link: "https://www.jasso.go.jp/ryugaku/eju/schedule.html",
      status: official2026 ? "公式確定" : "目安・要確認",
    },
    {
      type: "EJU",
      title: `${year}年第2回 EJU出願締切`,
      date: official2026 ? "2026-07-30T17:00:00+09:00" : jstDateString(year, 7, 30, 17),
      link: "https://www.jasso.go.jp/ryugaku/eju/schedule.html",
      status: official2026 ? "公式確定" : "要公式確認",
    },
    {
      type: "EJU",
      title: `${year}年第2回 EJU試験`,
      date: jstDateString(year, 11, ejuSecondExamDay, 9, 30),
      link: "https://www.jasso.go.jp/ryugaku/eju/schedule.html",
      status: official2026 ? "公式確定" : "目安・要確認",
    },
    {
      type: "EJU",
      title: `${year}年第2回 EJU成績公表`,
      date: official2026 ? "2026-12-15T00:00:00+09:00" : jstDateString(year, 12, 15),
      link: "https://www.jasso.go.jp/ryugaku/eju/schedule.html",
      status: official2026 ? "公式確定" : "要公式確認",
    },
    {
      type: "JLPT",
      title: `${year}年第1回 JLPT試験`,
      date: jstDateString(year, 7, jlptJulyDay, 12, 30),
      link: "https://www.jlpt.jp/application/domestic_index.html",
      status: official2026 ? "公式確定" : "自動計算・要確認",
    },
    {
      type: "JLPT",
      title: `${year}年第2回 JLPT申込準備`,
      date: jstDateString(year, 8, 1, 9),
      link: "https://info.jees-jlpt.jp/",
      status: "JEES確認",
    },
    {
      type: "JLPT",
      title: `${year}年第2回 JLPT試験`,
      date: jstDateString(year, 12, jlptDecemberDay, 12, 30),
      link: "https://www.jlpt.jp/application/domestic_index.html",
      status: official2026 ? "公式確定" : "自動計算・要確認",
    },
  ];
}

function formatEventDate(date) {
  return new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function renderExamCountdown() {
  const list = document.querySelector("#exam-countdown-list");
  if (!list) return;

  const now = new Date();
  const year = now.getFullYear();
  const events = [...getExamCountdownEvents(year), ...getExamCountdownEvents(year + 1)]
    .map((event) => ({ ...event, parsedDate: new Date(event.date) }))
    .filter((event) => event.parsedDate.getTime() >= now.getTime() - 3600000)
    .sort((a, b) => a.parsedDate - b.parsedDate)
    .slice(0, 5);

  list.innerHTML = events
    .map((event) => {
      const diff = event.parsedDate.getTime() - now.getTime();
      const days = Math.max(Math.ceil(diff / 86400000), 0);
      const statusClass = event.status.includes("公式") ? "official" : "check";
      return `
        <a class="countdown-item" href="${event.link}" target="_blank" rel="noreferrer">
          <span class="exam-type">${event.type}</span>
          <strong>${event.title}</strong>
          <time datetime="${event.date}">${formatEventDate(event.parsedDate)} JST</time>
          <b>${days === 0 ? "今天" : `还有${days}天`}</b>
          <em class="${statusClass}">${event.status}</em>
        </a>
      `;
    })
    .join("");
}

const ejuSubjectPlans = {
  humanities: {
    label: "文科",
    examBlocks: ["日本語 9:30-12:00", "総合科目 13:30-15:00", "数学 15:40-17:10"],
    weekly: [
      ["日本語", 0.45],
      ["総合科目", 0.28],
      ["数学", 0.17],
      ["過去問・復習", 0.1],
    ],
  },
  science: {
    label: "理科",
    examBlocks: ["日本語 9:30-12:00", "理科 13:30-15:00", "数学 15:40-17:10"],
    weekly: [
      ["日本語", 0.38],
      ["理科", 0.3],
      ["数学", 0.22],
      ["過去問・復習", 0.1],
    ],
  },
  japanese: {
    label: "日本語のみ",
    examBlocks: ["日本語 9:30-12:00"],
    weekly: [
      ["読解・聴読解", 0.45],
      ["聴解", 0.25],
      ["記述", 0.2],
      ["語彙・復習", 0.1],
    ],
  },
};

function daysUntil(dateString) {
  const diff = new Date(dateString).getTime() - Date.now();
  return Math.ceil(diff / 86400000);
}

function normalizeUniversitySearch(text) {
  return String(text ?? "")
    .toLowerCase()
    .normalize("NFKC")
    .replace(/[()（）・,，.。/／\-_\s]+/g, "")
    .replace(/[東學國関關館會應慶義稲澤駒專専濱廣龍徳愛經経濟]/g, (char) => searchCharacterMap[char] ?? char)
    .replaceAll("university", "u")
    .replaceAll("college", "c")
    .replaceAll("institute", "i")
    .replaceAll("of", "");
}

function findUniversityByInput(name) {
  const needle = normalizeUniversitySearch(name);
  if (!needle) return null;
  return universityData.find((university) => {
    const haystack = normalizeUniversitySearch(getUniversityAliasTerms(university).join(" "));
    return haystack.includes(needle) || needle.includes(haystack);
  });
}

function getPlannerRecordInfo(university) {
  const record = university ? getAdmissionRequirementRecord(university) : null;
  const extracted = record && ["official_extracted", "official_partial", "unavailable"].includes(record.status);
  const recordUrl = record?.admissionPageUrl
    ? safeUrl(getJapaneseOfficialUrl(record.admissionPageUrl))
    : "";
  const officialUrl = university
    ? safeUrl(getUniversityOfficialUrl(university))
    : safeUrl(getJapaneseOfficialUrl(record?.officialUrl));
  const sourceUrl = recordUrl || officialUrl;
  const timeline = extracted && record.timeline?.length ? record.timeline : [];
  const subjectText = extracted && record.ejuSubjects?.length
    ? record.ejuSubjects.join(" / ")
    : "必要EJU回・科目は募集要項で確認";
  const eligibility = extracted && record.eligibility
    ? record.eligibility
    : "出願資格は未抽取。大学公式募集要項で確認";

  return {
    record,
    extracted,
    sourceUrl,
    sourceTitle: recordUrl ? "公式募集要項PDF / 入試ページ" : "大学公式リンク",
    status: record ? getRequirementStatusText(record) : "募集要項DB未登録",
    timeline,
    subjectText,
    eligibility,
  };
}

function renderPlannerTimeline(recordInfo) {
  if (!recordInfo.timeline.length) {
    return `<p class="planner-empty">募集要項から開始・締切日を未抽取。公式ページを確認後、DBに入れるとここに自動表示されます。</p>`;
  }
  return `
    <ul class="planner-timeline">
      ${recordInfo.timeline
        .map((item) => `<li><span>${escapeHtml(item.label)}</span><strong>${escapeHtml(item.value)}</strong></li>`)
        .join("")}
    </ul>
  `;
}

function renderEjuPlanner() {
  const sessionNode = document.querySelector("#eju-session");
  const locationNode = document.querySelector("#eju-location");
  const subjectNode = document.querySelector("#eju-subject-plan");
  const hoursNode = document.querySelector("#eju-weekly-hours");
  const output = document.querySelector("#eju-plan-output");
  const alerts = document.querySelector("#eju-alert-output");
  const targetOutput = document.querySelector("#eju-target-output");
  if (!sessionNode || !locationNode || !subjectNode || !hoursNode || !output || !alerts) return;

  const schedule = ejuSchedules[sessionNode.value];
  const subject = ejuSubjectPlans[subjectNode.value];
  const location = locationNode.value;
  const weeklyHours = Math.max(Number(hoursNode.value) || 1, 1);
  const appDays = daysUntil(schedule.applicationEnd);
  const examDays = daysUntil(schedule.examDate);
  const resultDays = daysUntil(schedule.resultDate);

  const weeklyPlan = subject.weekly
    .map(([name, ratio]) => {
      const hours = Math.max(Math.round(weeklyHours * ratio), 1);
      return `<li><strong>${name}</strong><span>週${hours}時間</span></li>`;
    })
    .join("");

  output.innerHTML = `
    <div class="eju-plan-card">
      <strong>${schedule.label} / ${subject.label}</strong>
      <span>出願: ${schedule.application[location]}</span>
    </div>
    <div class="eju-plan-card">
      <strong>試験日の時間</strong>
      <span>${subject.examBlocks.join(" / ")}</span>
    </div>
    <ul>${weeklyPlan}</ul>
  `;

  const appStatus =
    appDays > 0 ? `出願締切まで約${appDays}日` : "出願期間は終了しています";
  const examStatus = examDays > 0 ? `試験日まで約${examDays}日` : "試験日は終了しています";
  const resultStatus =
    resultDays > 0 ? `成績公表まで約${resultDays}日` : "成績公表日は過ぎています";

  alerts.innerHTML = `
    <li><strong>${appStatus}</strong> ${schedule.application[location]}</li>
    <li><strong>受験票</strong> ${schedule.voucher}</li>
    <li><strong>${examStatus}</strong> ${schedule.exam}</li>
    <li><strong>${resultStatus}</strong> ${schedule.result}</li>
    <li><strong>注意</strong> 国内の出願締切は17:00 JSTです。海外は実施機関の案内も確認してください。</li>
  `;

  if (targetOutput) {
    const names = [...document.querySelectorAll(".target-university")].map((input) => input.value.trim());
    const deadlines = [...document.querySelectorAll(".target-deadline")].map((input) => input.value);
    const targetCards = names
      .map((name, index) => {
        const matched = findUniversityByInput(name);
        const recordInfo = getPlannerRecordInfo(matched);
        const deadline = deadlines[index];
        const deadlineText = deadline
          ? `出願締切まで約${daysUntil(`${deadline}T23:59:00+09:00`)}日`
          : "締切未入力";
        const official = recordInfo.sourceUrl
          ? `<a href="${escapeHtml(recordInfo.sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(recordInfo.sourceTitle)}</a>`
          : "<span>大学名を入力すると一致候補を探します</span>";
        const title = name || `志望大学${index + 1}`;
        const matchedName = matched ? `<span>一致: ${escapeHtml(getDisplayUniversityName(matched))}</span>` : "";

        return `
          <article class="eju-plan-card">
            <strong>${title}</strong>
            ${matchedName}
            <span>${deadlineText}</span>
            <span class="planner-status">${escapeHtml(recordInfo.status)}</span>
            <span><b>必要科目</b> ${escapeHtml(recordInfo.subjectText)}</span>
            <details class="planner-requirement">
              <summary>出願資格・締切を見る</summary>
              <p>${escapeHtml(recordInfo.eligibility)}</p>
              ${renderPlannerTimeline(recordInfo)}
            </details>
            ${official}
          </article>
        `;
      })
      .join("");
    targetOutput.innerHTML = targetCards;
  }
}

[
  "#eju-session",
  "#eju-location",
  "#eju-subject-plan",
  "#eju-weekly-hours",
  ".target-university",
  ".target-deadline",
].forEach((selector) => {
  document.querySelector(selector)?.addEventListener("input", renderEjuPlanner);
  document.querySelectorAll(selector).forEach((node) => {
    node.addEventListener("input", renderEjuPlanner);
  });
});

const lifeRecommendations = {
  phone: {
    support: ["SoftBank / docomo", "店铺支持较强，适合刚到日本、希望有人帮忙确认手续。"],
    price: ["Rakuten Mobile / ahamo / LINEMO", "适合能自己线上办理、重视月费的人。先确认支付方式和覆盖区域。"],
    coverage: ["docomo / au / SoftBank", "适合地方城市、通学范围较广的人。先看学校和住所附近信号。"],
  },
  bank: {
    student: ["ゆうちょ銀行", "很多留学生从这里开始。先完成住民登记，再确认学校是否有指定银行。"],
    mega: ["MUFG / SMBC / Mizuho", "适合需要大手银行、兼职工资、长期在日生活的人。开户条件以各支店判断为准。"],
    online: ["网络银行 + 学校指定账户", "适合习惯App管理的人。但刚来日时本人确认和收件地址很重要。"],
  },
  housing: {
    foreigner: ["wagaya Japan / GTN / 学校寮", "优先看外国籍可否、保证会社、多语言支持。"],
    choice: ["SUUMO / LIFULL HOME'S", "房源多，适合比较车站、租金、通学时间。筛选时要确认外国籍可否。"],
    initial: ["UR賃貸 / 学校寮 / 家具家電付き物件", "优先压低初期费用。注意是否需要保证人、礼金、更新料。"],
  },
};

function renderLifeGuide() {
  const phone = document.querySelector("#phone-priority")?.value ?? "support";
  const bank = document.querySelector("#bank-priority")?.value ?? "student";
  const housing = document.querySelector("#housing-priority")?.value ?? "foreigner";
  const output = document.querySelector("#life-result");
  if (!output) return;

  const items = [
    ["通信", ...lifeRecommendations.phone[phone]],
    ["金融", ...lifeRecommendations.bank[bank]],
    ["住まい", ...lifeRecommendations.housing[housing]],
  ];

  output.innerHTML = items
    .map(
      ([label, title, body]) => `
        <article>
          <span>${label}</span>
          <strong>${title}</strong>
          <p>${body}</p>
        </article>
      `,
    )
    .join("");
}

["#phone-priority", "#bank-priority", "#housing-priority"].forEach((selector) => {
  document.querySelector(selector)?.addEventListener("input", renderLifeGuide);
});

const lifeToolCategoryLabels = {
  electricity: "电力",
  gas: "ガス",
  water: "水道",
  garbage: "垃圾分类",
  mobile: "手机・网络",
  moving: "搬家・住所",
  custom: "自定义",
};

const lifeToolRegionLabels = {
  all: "全国",
  hokkaido: "北海道",
  tohoku: "東北",
  kanto: "関東",
  chubu: "中部",
  kansai: "関西",
  chugoku: "中国",
  shikoku: "四国",
  kyushu: "九州",
  okinawa: "沖縄",
};

const prefectureToLifeRegion = {
  北海道: "hokkaido",
  青森県: "tohoku",
  岩手県: "tohoku",
  宮城県: "tohoku",
  秋田県: "tohoku",
  山形県: "tohoku",
  福島県: "tohoku",
  茨城県: "kanto",
  栃木県: "kanto",
  群馬県: "kanto",
  埼玉県: "kanto",
  千葉県: "kanto",
  東京都: "kanto",
  神奈川県: "kanto",
  山梨県: "kanto",
  新潟県: "chubu",
  富山県: "chubu",
  石川県: "chubu",
  福井県: "chubu",
  長野県: "chubu",
  岐阜県: "chubu",
  静岡県: "chubu",
  愛知県: "chubu",
  三重県: "chubu",
  滋賀県: "kansai",
  京都府: "kansai",
  大阪府: "kansai",
  兵庫県: "kansai",
  奈良県: "kansai",
  和歌山県: "kansai",
  鳥取県: "chugoku",
  島根県: "chugoku",
  岡山県: "chugoku",
  広島県: "chugoku",
  山口県: "chugoku",
  徳島県: "shikoku",
  香川県: "shikoku",
  愛媛県: "shikoku",
  高知県: "shikoku",
  福岡県: "kyushu",
  佐賀県: "kyushu",
  長崎県: "kyushu",
  熊本県: "kyushu",
  大分県: "kyushu",
  宮崎県: "kyushu",
  鹿児島県: "kyushu",
  沖縄県: "okinawa",
};

const englishRegionToPrefecture = {
  Hokkaido: "北海道",
  Aomori: "青森県",
  Iwate: "岩手県",
  Miyagi: "宮城県",
  Akita: "秋田県",
  Yamagata: "山形県",
  Fukushima: "福島県",
  Ibaraki: "茨城県",
  Tochigi: "栃木県",
  Gunma: "群馬県",
  Saitama: "埼玉県",
  Chiba: "千葉県",
  Tokyo: "東京都",
  Kanagawa: "神奈川県",
  Yamanashi: "山梨県",
  Niigata: "新潟県",
  Toyama: "富山県",
  Ishikawa: "石川県",
  Fukui: "福井県",
  Nagano: "長野県",
  Gifu: "岐阜県",
  Shizuoka: "静岡県",
  Aichi: "愛知県",
  Mie: "三重県",
  Shiga: "滋賀県",
  Kyoto: "京都府",
  Osaka: "大阪府",
  Hyogo: "兵庫県",
  Nara: "奈良県",
  Wakayama: "和歌山県",
  Tottori: "鳥取県",
  Shimane: "島根県",
  Okayama: "岡山県",
  Hiroshima: "広島県",
  Yamaguchi: "山口県",
  Tokushima: "徳島県",
  Kagawa: "香川県",
  Ehime: "愛媛県",
  Kochi: "高知県",
  Fukuoka: "福岡県",
  Saga: "佐賀県",
  Nagasaki: "長崎県",
  Kumamoto: "熊本県",
  Oita: "大分県",
  Miyazaki: "宮崎県",
  Kagoshima: "鹿児島県",
  Okinawa: "沖縄県",
};

const defaultLifeTools = [
  ["北海道電力", "https://www.hepco.co.jp/", "electricity", "hokkaido", "北海道の電気。契約・引越し・支払い確認。"],
  ["東北電力", "https://www.tohoku-epco.co.jp/", "electricity", "tohoku", "東北エリアの電気。契約・料金・停電情報。"],
  ["東京電力エナジーパートナー", "https://www.tepco.co.jp/ep/", "electricity", "kanto", "関東中心。電気・ガスの手続き、くらしTEPCO。"],
  ["中部電力ミライズ", "https://miraiz.chuden.co.jp/", "electricity", "chubu", "中部エリアの電気・ガス・支払い手続き。"],
  ["北陸電力", "https://www.rikuden.co.jp/", "electricity", "chubu", "北陸エリアの電気、料金、引越し手続き。"],
  ["関西電力", "https://www.kepco.co.jp/", "electricity", "kansai", "関西エリアの電気・ガス、はぴeみる電。"],
  ["中国電力", "https://www.energia.co.jp/", "electricity", "chugoku", "中国地方の電気、ぐっとずっと。クラブ。"],
  ["四国電力", "https://www.yonden.co.jp/", "electricity", "shikoku", "四国エリアの電気、引越し・支払い。"],
  ["九州電力", "https://www.kyuden.co.jp/", "electricity", "kyushu", "九州エリアの電気、キレイライフプラス。"],
  ["沖縄電力", "https://www.okiden.co.jp/", "electricity", "okinawa", "沖縄エリアの電気、料金・停電情報。"],
  ["東京ガス", "https://www.tokyo-gas.co.jp/", "gas", "kanto", "関東中心。ガス・電気・myTOKYOGAS。"],
  ["大阪ガス", "https://www.osakagas.co.jp/", "gas", "kansai", "関西中心。ガス・電気・マイ大阪ガス。"],
  ["東邦ガス", "https://www.tohogas.co.jp/", "gas", "chubu", "愛知・岐阜・三重中心。ガス・電気。"],
  ["西部ガス", "https://www.saibugas.co.jp/", "gas", "kyushu", "福岡・長崎・熊本など西部ガスエリア。"],
  ["北海道ガス", "https://www.hokkaido-gas.co.jp/", "gas", "hokkaido", "札幌圏中心。ガス・電気・引越し手続き。"],
  ["広島ガス", "https://www.hiroshima-gas.co.jp/", "gas", "chugoku", "広島エリアの都市ガス。"],
  ["日本ガス協会", "https://www.gas.or.jp/", "gas", "all", "地域のガス事業者確認の入口。"],
  ["東京都水道局", "https://www.waterworks.metro.tokyo.lg.jp/", "water", "kanto", "東京の水道開始・中止・料金。"],
  ["横浜市水道局", "https://www.city.yokohama.lg.jp/kurashi/sumai-kurashi/suido-gesui/suido/", "water", "kanto", "横浜市の水道手続き。"],
  ["大阪市水道局", "https://www.city.osaka.lg.jp/suido/", "water", "kansai", "大阪市の水道使用開始・料金。"],
  ["名古屋市上下水道局", "https://www.water.city.nagoya.jp/", "water", "chubu", "名古屋市の水道・下水道。"],
  ["京都市上下水道局", "https://www.city.kyoto.lg.jp/suido/", "water", "kansai", "京都市の水道・下水道。"],
  ["福岡市水道局", "https://www.city.fukuoka.lg.jp/mizu/", "water", "kyushu", "福岡市の水道手続き。"],
  ["札幌市水道局", "https://www.city.sapporo.jp/suido/", "water", "hokkaido", "札幌市の水道手続き。"],
  ["新宿区 ごみ分別", "https://www.city.shinjuku.lg.jp/seikatsu/index09_01.html", "garbage", "kanto", "東京・新宿区のごみ分別例。"],
  ["横浜市 ごみと資源物", "https://www.city.yokohama.lg.jp/kurashi/sumai-kurashi/gomi-recycle/", "garbage", "kanto", "横浜市のごみ分別・粗大ごみ。"],
  ["名古屋市 ごみ・資源", "https://www.city.nagoya.jp/kurashi/category/5-6-0-0-0-0-0-0-0-0.html", "garbage", "chubu", "名古屋市のごみ出しルール。"],
  ["大阪市 ごみ", "https://www.city.osaka.lg.jp/kankyo/page/0000009337.html", "garbage", "kansai", "大阪市のごみ分別・粗大ごみ。"],
  ["京都市 ごみ", "https://www.city.kyoto.lg.jp/kankyo/page/0000001314.html", "garbage", "kansai", "京都市のごみ分別入口。"],
  ["福岡市 ごみ", "https://www.city.fukuoka.lg.jp/kankyo/kateigomi/life/katei-gomi.html", "garbage", "kyushu", "福岡市の家庭ごみルール。"],
  ["札幌市 ごみ", "https://www.city.sapporo.jp/seiso/gomi/", "garbage", "hokkaido", "札幌市のごみ分け方・出し方。"],
  ["docomo", "https://www.docomo.ne.jp/", "mobile", "all", "大手キャリア。店舗・オンライン手続き。"],
  ["au", "https://www.au.com/mobile/", "mobile", "all", "大手キャリア。店舗・オンライン手続き。"],
  ["SoftBank", "https://www.softbank.jp/mobile/", "mobile", "all", "大手キャリア。店舗・オンライン手続き。"],
  ["楽天モバイル", "https://network.mobile.rakuten.co.jp/", "mobile", "all", "料金重視・オンライン手続き。"],
  ["ahamo", "https://ahamo.com/", "mobile", "all", "docomo系オンラインプラン。"],
  ["povo", "https://povo.jp/", "mobile", "all", "au系オンラインプラン。"],
  ["LINEMO", "https://www.linemo.jp/", "mobile", "all", "SoftBank系オンラインプラン。"],
  ["IIJmio", "https://www.iijmio.jp/", "mobile", "all", "格安SIM。本人確認と支払い方法を確認。"],
  ["フレッツ光 東日本", "https://flets.com/", "mobile", "kanto", "東日本の固定回線。"],
  ["フレッツ光 西日本", "https://flets-w.com/", "mobile", "kansai", "西日本の固定回線。"],
  ["NURO 光", "https://www.nuro.jp/hikari/", "mobile", "all", "固定回線。提供エリア確認が必要。"],
  ["引越し手続オンラインサービス", "https://www.digital.go.jp/policies/moving_onestop_service/", "moving", "all", "転出届など引越し関連手続きの入口。"],
  ["郵便局 転居・転送サービス", "https://www.post.japanpost.jp/service/tenkyo/", "moving", "all", "引越し後の郵便物転送。"],
].map(([name, url, category, region, note], index) => ({
  id: `default-life-${index}`,
  name,
  url,
  category,
  region,
  note,
  builtin: true,
}));

function getCustomLifeTools() {
  return readJson("life-tools", []);
}

function setCustomLifeTools(items) {
  writeJson("life-tools", items);
}

function getAllLifeTools() {
  return [...defaultLifeTools, ...getCustomLifeTools()];
}

function renderLifeToolCard(tool) {
  return `
    <article class="tool-card ${tool.builtin ? "" : "is-custom"}">
      <div>
        <span>${escapeHtml(lifeToolCategoryLabels[tool.category] ?? "工具")}</span>
        <em>${escapeHtml(lifeToolRegionLabels[tool.region] ?? "全国")}</em>
      </div>
      <h4>${escapeHtml(tool.name)}</h4>
      <p>${escapeHtml(tool.note || "常用生活网站。")}</p>
      <div class="tool-card-actions">
        <a href="${escapeHtml(tool.url)}" target="_blank" rel="noreferrer">打开网站</a>
        ${
          tool.builtin
            ? `<button type="button" data-add-life-tool="${escapeHtml(tool.id)}">收藏</button>`
            : `<button type="button" data-delete-life-tool="${escapeHtml(tool.id)}">删除</button>`
        }
      </div>
    </article>
  `;
}

function getToolAvatarText(tool) {
  const name = String(tool?.name ?? "").trim();
  if (!name) return "+";
  const visible = Array.from(name.replace(/\s+/g, ""));
  return (visible[0] || "+").toUpperCase();
}

function renderFavoriteShortcut(tool) {
  return `
    <article class="shortcut-card">
      <a class="shortcut-link" href="${escapeHtml(tool.url)}" target="_blank" rel="noreferrer" title="${escapeHtml(tool.note || tool.name)}">
        <span class="shortcut-avatar">${escapeHtml(getToolAvatarText(tool))}</span>
        <strong>${escapeHtml(tool.name)}</strong>
        <em>${escapeHtml(lifeToolCategoryLabels[tool.category] ?? "收藏")}</em>
      </a>
      <button type="button" class="shortcut-delete" data-delete-life-tool="${escapeHtml(tool.id)}" aria-label="删除 ${escapeHtml(tool.name)}">×</button>
    </article>
  `;
}

function renderAddShortcutCard() {
  return `
    <button type="button" class="shortcut-card shortcut-add" id="open-life-tool-add">
      <span class="shortcut-avatar">+</span>
      <strong>添加快捷方式</strong>
      <em>网址 / 缴费 / 学校系统</em>
    </button>
  `;
}

function addBuiltinLifeToolToFavorites(toolId) {
  const source = defaultLifeTools.find((tool) => tool.id === toolId);
  if (!source) return;
  const current = getCustomLifeTools();
  const alreadySaved = current.some((tool) => tool.url === source.url);
  const status = document.querySelector("#favorite-tool-status");
  if (alreadySaved) {
    if (status) status.textContent = "这个网站已经在个人收藏里。";
    return;
  }

  setCustomLifeTools([
    ...current,
    {
      ...source,
      id: `custom-life-${Date.now()}`,
      builtin: false,
      note: source.note ? `${source.note}（从官方常用入口收藏）` : "从官方常用入口收藏",
    },
  ]);
  renderLifeToolbox();
}

function renderFavoriteLifeTools(query, region, category) {
  const grid = document.querySelector("#favorite-tool-grid");
  const status = document.querySelector("#favorite-tool-status");
  if (!grid || !status) return;

  const favorites = getCustomLifeTools()
    .filter((tool) => category === "all" || category === "custom" || tool.category === category)
    .filter((tool) => region === "all" || tool.region === "all" || tool.region === region)
    .filter((tool) => {
      if (!query) return true;
      return normalizeUniversitySearch(
        `${tool.name} ${tool.note} ${lifeToolCategoryLabels[tool.category]} ${lifeToolRegionLabels[tool.region]}`,
      ).includes(query);
    })
    .sort((a, b) => b.id.localeCompare(a.id));

  if (!favorites.length) {
    status.textContent = "像浏览器主页一样，把最常用的网站固定在这里。";
    grid.innerHTML = renderAddShortcutCard();
    return;
  }

  status.textContent = `${favorites.length}件快捷方式。点击图标即可打开网站。`;
  grid.innerHTML = `${favorites.map(renderFavoriteShortcut).join("")}${renderAddShortcutCard()}`;
}

function renderLifeToolbox() {
  const grid = document.querySelector("#life-tool-grid");
  const status = document.querySelector("#life-tool-status");
  if (!grid || !status) return;

  const query = normalizeUniversitySearch(document.querySelector("#life-tool-search")?.value ?? "");
  const region = document.querySelector("#life-tool-region")?.value ?? "all";
  const category = document.querySelector("#life-tool-category")?.value ?? "all";
  renderFavoriteLifeTools(query, region, category);

  const tools = defaultLifeTools
    .filter((tool) => category === "all" || tool.category === category)
    .filter((tool) => region === "all" || tool.region === "all" || tool.region === region)
    .filter((tool) => {
      if (!query) return true;
      return normalizeUniversitySearch(
        `${tool.name} ${tool.note} ${lifeToolCategoryLabels[tool.category]} ${lifeToolRegionLabels[tool.region]}`,
      ).includes(query);
    })
    .sort((a, b) => Number(a.region === "all") - Number(b.region === "all") || a.name.localeCompare(b.name));

  status.textContent = `官方常用入口 ${tools.length}件を表示中。地区はIP推定または手動で変更できます。`;
  if (!tools.length) {
    grid.innerHTML = `<article class="toolbox-empty"><strong>官方入口没有找到</strong><p>换个关键词，或把常用网站添加到上面的个人收藏。</p></article>`;
    return;
  }

  grid.innerHTML = tools.map(renderLifeToolCard).join("");
}

function addCustomLifeTool(event) {
  event.preventDefault();
  const name = document.querySelector("#life-tool-name")?.value.trim();
  const url = document.querySelector("#life-tool-url")?.value.trim();
  const category = document.querySelector("#life-tool-custom-category")?.value ?? "custom";
  const note = document.querySelector("#life-tool-note")?.value.trim() ?? "";
  const region = document.querySelector("#life-tool-region")?.value ?? "all";
  if (!name || !url) return;

  let parsedUrl;
  try {
    parsedUrl = new URL(url);
  } catch (error) {
    const status = document.querySelector("#life-tool-status");
    if (status) status.textContent = "URL格式不正确，请以 https:// 开头。";
    return;
  }

  const item = {
    id: `custom-life-${Date.now()}`,
    name,
    url: parsedUrl.href,
    category,
    region,
    note,
    builtin: false,
  };
  setCustomLifeTools([...getCustomLifeTools(), item]);
  event.target.reset();
  event.target.classList.add("is-collapsed");
  const search = document.querySelector("#life-tool-search");
  if (search) search.value = "";
  document.querySelector("#life-tool-category").value = "all";
  renderLifeToolbox();
}

async function detectLifeRegionByIp() {
  const status = document.querySelector("#life-tool-status");
  const regionSelect = document.querySelector("#life-tool-region");
  if (!status || !regionSelect) return;
  status.textContent = "IPから大まかな地域を確認しています...";
  try {
    const response = await fetch("https://ipapi.co/json/");
    if (!response.ok) throw new Error("ip lookup failed");
    const data = await response.json();
    if (data.country_code !== "JP") {
      regionSelect.value = "all";
      status.textContent = "現在のIPは日本国外のようです。全国のリンクを表示します。";
      renderLifeToolbox();
      return;
    }
    const prefecture = englishRegionToPrefecture[data.region] ?? data.region;
    const mappedRegion = prefectureToLifeRegion[prefecture] ?? "all";
    regionSelect.value = mappedRegion;
    status.textContent = `${prefecture || data.city || "現在地"}付近として、${lifeToolRegionLabels[mappedRegion] ?? "全国"}のリンクを優先表示します。`;
    renderLifeToolbox();
  } catch (error) {
    regionSelect.value = "all";
    status.textContent = "IP推定に失敗しました。地区を手動で選んでください。";
    renderLifeToolbox();
  }
}

["#life-tool-search", "#life-tool-region", "#life-tool-category"].forEach((selector) => {
  document.querySelector(selector)?.addEventListener("input", renderLifeToolbox);
});

document.querySelector("#life-tool-add-form")?.addEventListener("submit", addCustomLifeTool);
document.querySelector("#detect-life-region")?.addEventListener("click", detectLifeRegionByIp);
document.querySelector("#life-tool-grid")?.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add-life-tool]");
  if (addButton) {
    addBuiltinLifeToolToFavorites(addButton.dataset.addLifeTool);
    return;
  }

  const deleteButton = event.target.closest("[data-delete-life-tool]");
  if (!deleteButton) return;
  setCustomLifeTools(getCustomLifeTools().filter((item) => item.id !== deleteButton.dataset.deleteLifeTool));
  renderLifeToolbox();
});

document.querySelector("#favorite-tool-grid")?.addEventListener("click", (event) => {
  const openButton = event.target.closest("#open-life-tool-add");
  if (openButton) {
    const form = document.querySelector("#life-tool-add-form");
    form?.classList.remove("is-collapsed");
    document.querySelector("#life-tool-name")?.focus();
    return;
  }

  const button = event.target.closest("[data-delete-life-tool]");
  if (!button) return;
  setCustomLifeTools(getCustomLifeTools().filter((item) => item.id !== button.dataset.deleteLifeTool));
  renderLifeToolbox();
});

function monthOffsetLabel(baseDate, offsetMonths) {
  const date = new Date(baseDate);
  date.setMonth(date.getMonth() + offsetMonths);
  const currentMonth = new Date();
  currentMonth.setDate(1);
  currentMonth.setHours(0, 0, 0, 0);
  if (date < currentMonth) return "尽快";
  return `${date.getFullYear()}年${date.getMonth() + 1}月`;
}

function renderApplicationPlan() {
  const target = document.querySelector("#plan-target")?.value ?? "大学本科";
  const japanese = document.querySelector("#plan-japanese")?.value ?? "未考试";
  const intakeValue = document.querySelector("#plan-intake")?.value;
  const output = document.querySelector("#application-plan-output");
  if (!output) return;

  const intakeDate = intakeValue ? new Date(`${intakeValue}-01T00:00:00+09:00`) : new Date();
  if (!intakeValue) intakeDate.setMonth(intakeDate.getMonth() + 18);

  const needsEju = target === "大学本科";
  const needsResearch = target === "大学院";
  const needsPortfolio = target === "专门学校";
  const languageGap =
    japanese === "未考试" || japanese === "N5-N4"
      ? "先把N3/N2作为第一目标，JLPT和校内面试要同步准备。"
      : japanese === "N3"
        ? "建议尽快冲N2，同时开始阅读募集要项和志望理由书。"
        : "日语基础不错，重点转向EJU/研究计划/面试和出愿材料。";

  const tasks = [
    [monthOffsetLabel(intakeDate, -18), "确定目标专业、地区和入学时间，建立候选校表。"],
    [monthOffsetLabel(intakeDate, -14), needsEju ? "确认EJU科目并报名最近一次EJU。" : needsResearch ? "整理研究方向，阅读导师论文并准备研究计划书框架。" : "确认学校入学期、日语要求和面试方式。"],
    [monthOffsetLabel(intakeDate, -12), "准备成绩证明、毕业证明、护照、照片、经费支付材料。"],
    [monthOffsetLabel(intakeDate, -9), needsPortfolio ? "开始作品集/实技材料整理，并预约学校说明会。" : "完成志望理由书第一版，并让他人检查逻辑。"],
    [monthOffsetLabel(intakeDate, -6), "确认募集要项、出愿期间、邮寄方式、校内考/面试日程。"],
    [monthOffsetLabel(intakeDate, -3), "提交出愿、准备面试、确认住宿和来日手续。"],
    [monthOffsetLabel(intakeDate, -1), "确认签证、机票、住所、手机、银行卡和学校报到时间。"],
  ];

  output.innerHTML = `
    <h3>${escapeHtml(target)} 准备清单</h3>
    <p>${escapeHtml(languageGap)} 希望入学时间：${intakeValue ? escapeHtml(intakeValue) : "未输入，按18个月后估算"}。</p>
    <ol>
      ${tasks.map(([date, task]) => `<li><strong>${date}</strong><span>${escapeHtml(task)}</span></li>`).join("")}
    </ol>
    <div class="plan-actions">
      <a class="button secondary" href="#exam-guide">看考试备考</a>
      <a class="button secondary" href="#universities">查大学资料</a>
      <a class="button secondary" href="#visa">看签证在留</a>
    </div>
  `;
}

document.querySelector("#application-plan-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  persistFields("application-plan", ["#plan-target", "#plan-japanese", "#plan-intake"]);
  renderApplicationPlan();
});

const detailSections = [...document.querySelectorAll(".detail-section")];

function syncVisibleSection() {
  const targetId = window.location.hash.replace("#", "");
  const targetElement = targetId ? document.getElementById(targetId) : null;
  const activeSection = targetElement?.classList.contains("detail-section")
    ? targetElement
    : targetElement?.closest(".detail-section");
  const shouldShowDetail = Boolean(activeSection);

  detailSections.forEach((section) => {
    section.hidden = section !== activeSection;
  });

  if (shouldShowDetail) {
    window.requestAnimationFrame(() => {
      (targetElement ?? activeSection).scrollIntoView({ block: "start" });
    });
  } else if (targetElement) {
    window.requestAnimationFrame(() => {
      targetElement.scrollIntoView({ block: "start" });
    });
  }
}

window.addEventListener("hashchange", syncVisibleSection);
window.addEventListener("load", syncVisibleSection);

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    link.closest(".nav-menu")?.removeAttribute("open");
    window.setTimeout(syncVisibleSection, 0);
    window.setTimeout(syncVisibleSection, 120);
  });
});

document.addEventListener("click", (event) => {
  const menu = document.querySelector(".nav-menu[open]");
  if (!menu || menu.contains(event.target)) return;
  menu.removeAttribute("open");
});

setupAutoSave("score-profile", [
  "#field",
  "#region",
  "#candidate-type",
  "#eju-japanese",
  "#eju-writing",
  "#eju-subject",
  "#eju-math",
  "#english-score",
  "#jlpt",
  "#essay",
]);

setupAutoSave("eju-planner", [
  "#eju-session",
  "#eju-location",
  "#eju-subject-plan",
  "#eju-weekly-hours",
  ".target-university",
  ".target-deadline",
]);
setupAutoSave("life", ["#phone-priority", "#bank-priority", "#housing-priority"], renderLifeGuide);
setupAutoSave("visa-checklist", ["[data-check-key]"]);
setupAutoSave("application-plan", ["#plan-target", "#plan-japanese", "#plan-intake"]);

document.querySelector("#save-score-profile")?.addEventListener("click", () => {
  persistFields("score-profile", [
    "#field",
    "#region",
    "#candidate-type",
    "#eju-japanese",
    "#eju-writing",
    "#eju-subject",
    "#eju-math",
    "#english-score",
    "#jlpt",
    "#essay",
  ]);
  const button = document.querySelector("#save-score-profile");
  if (!button) return;
  button.textContent = getLanguagePack().buttons.saved;
  window.setTimeout(() => {
    button.textContent = getLanguagePack().buttons.saveScore;
  }, 1200);
});

document.querySelectorAll("[data-lang-switch]").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langSwitch);
  });
});

renderMatchResults();
loadUniversityData();
loadAdmissionRequirements();
renderExamCountdown();
renderEjuPlanner();
renderLifeGuide();
renderLifeToolbox();
renderFavoritePanel();
renderAdmissionReportSummary();
renderAnnouncements();
renderApplicationPlan();
applyLanguage(currentLanguage);
syncVisibleSection();
window.setTimeout(syncVisibleSection, 120);
window.setInterval(renderExamCountdown, 60000);
