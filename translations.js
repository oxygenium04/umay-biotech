/**
 * UMAY Platform - Internationalization Dictionary
 * Languages: English (en), O'zbekcha (uz), Türkçe (tr)
 */

const translations = {
  en: {
    nav: {
      brand: "UMAY",
      brandSub: "Biotech AI Engine",
      technology: "Technology",
      pipeline: "8-Stage Pipeline",
      simulator: "Live Simulator",
      traction: "Uz Combinator Pitch",
      founder: "Founder",
      cta: "Launch Engine"
    },
    hero: {
      badge: "🚀 Uz Combinator 2026 Batch Candidate // Central Asia Deep-Tech",
      title: "Autonomous AI & Biophysical Engine for De Novo Therapeutics",
      subtitle: "UMAY transforms drug discovery from an uncertain multi-year gamble into a deterministic, hours-long computational pipeline. From clinical disease phenotype to FDA-ready preclinical lead molecule in under 24 hours.",
      btnPrimary: "Explore 8-Stage Pipeline",
      btnSecondary: "Interactive Discovery Demo",
      stat1Val: "70%+",
      stat1Lbl: "Top-3 Accuracy across N=100 FDA Gold Standard Benchmarks",
      stat2Val: "10,000+",
      stat2Lbl: "De Novo Molecules Generated & Filtered per Target",
      stat3Val: "< 1.0 Å",
      stat3Lbl: "Binding Pocket MD Stability (10ns RMSD Drift)",
      stat4Val: "100x",
      stat4Lbl: "Speedup vs Traditional High-Throughput Screening"
    },
    pipeline: {
      badge: "Architectural Rigor",
      title: "End-to-End Autonomous Pipeline",
      subtitle: "A cascading 8-stage biophysical and genomic filter where non-viable, toxic, or synthetically intractable molecules fail early, ensuring only clinically viable drug candidates survive.",
      s1Title: "1. Genetic Target Mapping",
      s1Desc: "Integrates Open Targets, DisGeNET & ClinVar with dual-layer SHA256 SQLite caching to score genetic confidence (S_gen).",
      s2Title: "2. Protein Network Biology",
      s2Desc: "Constructs STRING DB interactomes and runs NetworkX graph theory algorithms to detect bottleneck hub targets (S_net).",
      s3Title: "3. Tissue Safety & gnomAD",
      s3Desc: "Human Protein Atlas vital organ RNA expression filters penalize on-target cardiotoxicity, hepatotoxicity, and neurotoxicity.",
      s4Title: "4. 3D Pocket & Structure AI",
      s4Desc: "Automates experimental RCSB PDB crystal structures + AlphaFold DB AI coordinates with cKDTree binding pocket detection.",
      s5Title: "5. Autonomous Modality Brain",
      s5Desc: "Medical Paradox Shield classifies targets into Inhibitor, Activator (PAM), PROTAC degrader, or Gene Therapy without human bias.",
      s6Title: "6. Dual-Engine Molecular Design",
      s6Desc: "1,000+ FDA/ChEMBL BRICS fragments combined with 10,000 100% synthetically valid SELFIES GRU RNN generated candidate pool.",
      s7Title: "7. Bayesian Active Learning",
      s7Desc: "Gaussian Process regression with Lower Confidence Bound (LCB) acquisition balancing exploration vs exploitation across 8D MPO.",
      s8Title: "8. Biophysical MD & PLIP Validation",
      s8Desc: "AutoDock Vina ensemble docking, 10ns molecular dynamics trajectory stability, and PLIP non-covalent interaction fingerprinting."
    },
    simulator: {
      badge: "Real-Time Demonstration",
      title: "Interactive Target-to-Lead Simulator",
      subtitle: "Choose an indication to see UMAY autonomously map the genomic target, select therapeutic modality, generate de novo candidates, and validate lead affinity.",
      selectLabel: "Select Disease Indication:",
      btnRun: "Run Autonomous Screening",
      targetLabel: "Validated Genomic Target:",
      modalityLabel: "Autonomous Modality:",
      candidatesLabel: "Candidates Evaluated:",
      bestLeadLabel: "Top Preclinical Lead:",
      affinityLabel: "Docking Affinity (ΔG):",
      stabilityLabel: "10ns MD Trajectory:",
      dossierReady: "Full 3-Page IND Candidate Dossier ready for regulatory submission.",
      btnDownloadDossier: "Download Sample IND Dossier (PDF)",
      indications: {
        ipf: "Idiopathic Pulmonary Fibrosis (IPF)",
        t2d: "Type 2 Diabetes Mellitus (T2D)",
        ad: "Alzheimer's Disease (Neurodegeneration)",
        kras: "KRAS-Driven Non-Small Cell Lung Cancer"
      }
    },
    pitch: {
      badge: "Uz Combinator 2026 Pitch",
      title: "Why UMAY is Built to Win from Uzbekistan",
      subtitle: "Transforming Central Asia into a high-margin deep-tech biotechnology hub by replacing wet-lab trial & error with algorithmic certainty.",
      card1Title: "$250B+ Global Market Urgency",
      card1Desc: "Traditional pharmaceutical R&D spends $2.6 Billion and 12 years per approved drug, suffering an 88% clinical attrition rate. UMAY slashes candidate discovery time by 99% and eliminates false-positive leads before spending a single dollar in the wet lab.",
      card2Title: "Proprietary Offline-First Architecture",
      card2Desc: "Engineered with zero cloud lock-in, deterministic SHA256 caching, local AlphaFold coordinates, and a zero-token-waste pipeline. IP and molecular candidate data never leak to third-party proprietary APIs.",
      card3Title: "The Uzbekistan Deep-Tech Advantage",
      card3Desc: "Leveraging Tashkent IT Park zero-tax incentives, top-tier algorithmic talent, and unmatched capital efficiency. UMAY can execute biotech R&D at 1/15th the operational burn of Boston or San Francisco startups."
    },
    founder: {
      badge: "Leadership & Vision",
      title: "Architect Behind UMAY",
      name: "Sayidmurod Umaraliev",
      role: "Founder, Molecular Biologist, Genetic Engineer & Bioinformatician",
      bio: "Molecular biologist, genetic engineer, and bioinformatician specializing in genomic target validation, structural interactomes, and autonomous biophysical algorithms. Combining deep molecular genetics and cellular biology with advanced bioinformatics pipelines to engineer next-generation therapeutics from Uzbekistan to the world.",
      location: "Tashkent, Uzbekistan / Zonguldak, Türkiye",
      btnContact: "Connect on LinkedIn / GitHub"
    },
    ctaBanner: {
      title: "Ready to Accelerate Drug Discovery?",
      desc: "UMAY is currently inviting academic partners, pharmaceutical research labs, and early-stage venture investors for pilot validation programs.",
      btnDeck: "Request Pitch Deck & IND Sample",
      btnDemo: "Schedule Uz Combinator Interview"
    },
    footer: {
      brandDesc: "UMAY — Unified Molecular Architecture & Yield Engine. Autonomous Drug Discovery & Biophysical Design Suite.",
      rights: "All rights reserved. Designed for Uz Combinator 2026 Batch.",
      builtFor: "Built with scientific rigor in Uzbekistan & Türkiye."
    },
    modal: {
      title: "Request Investor Pitch Deck & Dossier",
      subtitle: "Get in touch directly with founder Sayidmurod Umaraliev.",
      nameLabel: "Your Name / Organization",
      emailLabel: "Email Address",
      roleLabel: "Your Role (Investor, Researcher, Accelerator)",
      notesLabel: "Message / Inquiry",
      btnSubmit: "Submit Request",
      successMsg: "Thank you! Your request has been logged. We will get back to you within 24 hours."
    }
  },

  tr: {
    nav: {
      brand: "UMAY",
      brandSub: "Biyoteknoloji Yapay Zeka Motoru",
      technology: "Teknoloji",
      pipeline: "8 Aşamalı Pipeline",
      simulator: "Canlı Simülatör",
      traction: "Uz Combinator Sunumu",
      founder: "Kurucu",
      cta: "Motoru Başlat"
    },
    hero: {
      badge: "🚀 Uz Combinator 2026 Dönemi Adayı // Orta Asya Derin Teknoloji",
      title: "De Novo Terapötikler İçin Otonom Yapay Zeka ve Biyofiziksel Tasarım Platformu",
      subtitle: "UMAY, ilaç keşfini yıllar süren belirsiz bir kumar olmaktan çıkarıp deterministik ve saatler süren hesaplamalı bir bilim hattına dönüştürür. Klinik hastalık fenotipinden FDA onayına hazır preklinik moleküle 24 saatten kısa sürede ulaşın.",
      btnPrimary: "8 Aşamalı Pipeline'ı İncele",
      btnSecondary: "İnteraktif Keşif Demosu",
      stat1Val: "%70+",
      stat1Lbl: "N=100 FDA Altın Standart Benchmark Doğruluğu (Top-3)",
      stat2Val: "10.000+",
      stat2Lbl: "Hedef Başına Üretilen ve Filtrelenen De Novo Molekül",
      stat3Val: "< 1.0 Å",
      stat3Lbl: "Bağlanma Cebi MD Kararlılığı (10ns RMSD Drift)",
      stat4Val: "100x",
      stat4Lbl: "Geleneksel Yüksek Verimli Taramaya (HTS) Göre Hızlanma"
    },
    pipeline: {
      badge: "Bilimsel Disiplin",
      title: "Uçtan Uca Otonom Hesaplama Hattı",
      subtitle: "Biyofiziksel olarak kararsız, toksik veya sentezlenemez molekülleri en baştan eleyen kaskat 8 aşamalı filtre motoru; yalnızca klinik olarak başarılı olabilecek adayların nihai aşamaya ulaşmasını sağlar.",
      s1Title: "1. Genetik Hedef Eşleme",
      s1Desc: "Open Targets, DisGeNET ve ClinVar veritabanlarını çift katmanlı SHA256 SQLite önbellekleme ile tarayarak genetik güven skorunu (S_gen) hesaplar.",
      s2Title: "2. Protein Ağ Biyolojisi",
      s2Desc: "STRING DB etkileşim ağını kurar ve NetworkX graf teorisi (degree & betweenness centrality) ile kilit kavşak proteinleri tespit eder (S_net).",
      s3Title: "3. Doku Güvenliği & gnomAD",
      s3Desc: "Human Protein Atlas hayati organ RNA ekspresyon filtreleri ile kardiyotoksisite, hepatotoksisite ve nörotoksisite risklerini cezalandırır.",
      s4Title: "4. 3D Cep & Yapısal Yapay Zeka",
      s4Desc: "RCSB PDB deneysel kristal yapıları ve AlphaFold DB koordinatlarını otonom indirip cKDTree ile bağlanma cebini haritalandırır.",
      s5Title: "5. Otonom Modalite Beyni",
      s5Desc: "Tıbbi Paradoks Kalkanı ile hedefi insan önyargısı olmadan İnhibitör, Aktivatör (PAM), PROTAC yıkıcı veya Gen Terapisi olarak sınıflandırır.",
      s6Title: "6. İki Modlu Molekül Tasarımı",
      s6Desc: "1.000+ FDA/ChEMBL BRICS parçacıkları ve %100 kimyasal geçerli 10.000 SELFIES GRU RNN üretim havuzunu birleştirir.",
      s7Title: "7. Bayesyen Aktif Öğrenme",
      s7Desc: "Gauss Süreç regresyonu ve LCB akizisyon fonksiyonu ile 8 boyutlu MPO uzayında keşif ve sömürü dengesini optimize eder.",
      s8Title: "8. Biyofiziksel MD & PLIP Doğrulama",
      s8Desc: "AutoDock Vina ansambl kenetlenme, 10ns moleküler dinamik yörünge kararlılığı ve PLIP kovalent-olmayan etkileşim parmak izi analizi."
    },
    simulator: {
      badge: "Gerçek Zamanlı Simülasyon",
      title: "İnteraktif Hedef-Molekül Simülatörü",
      subtitle: "Bir endikasyon seçin; UMAY'ın genomik hedefi belirlemesini, modaliteyi seçmesini, molekülleri üretmesini ve lider adayı doğrulamasını canlı izleyin.",
      selectLabel: "Hastalık Endikasyonunu Seçin:",
      btnRun: "Otonom Taramayı Başlat",
      targetLabel: "Doğrulanan Genomik Hedef:",
      modalityLabel: "Otonom Terapötik Modalite:",
      candidatesLabel: "Değerlendirilen Molekül Havuzu:",
      bestLeadLabel: "En İyi Preklinik Lider Aday:",
      affinityLabel: "Kenetlenme İlgisi (ΔG):",
      stabilityLabel: "10ns MD Yörünge Kararlılığı:",
      dossierReady: "Eksiksiz 3 Sayfalık IND Preklinik Dosyası regülasyon sunumu için hazırlandı.",
      btnDownloadDossier: "Örnek IND Dosyasını İncele (PDF)",
      indications: {
        ipf: "İdiyopatik Pulmoner Fibrozis (IPF)",
        t2d: "Tip 2 Diyabet (T2D)",
        ad: "Alzheimer Hastalığı (Nörodejenerasyon)",
        kras: "KRAS Kaynaklı Küçük Hücreli Dışı Akciğer Kanseri"
      }
    },
    pitch: {
      badge: "Uz Combinator 2026 Sunumu",
      title: "UMAY Neden Özbekistan'dan Dünyaya Kazanmak İçin Tasarlandı?",
      subtitle: "Geleneksel laboratuvar deneme-yanılma maliyetlerini algoritmik kesinlikle değiştirerek Orta Asya'yı yüksek katma değerli derin teknoloji biyoteknoloji üssüne dönüştürüyoruz.",
      card1Title: "250+ Milyar Dolarlık Küresel Pazar İhtiyacı",
      card1Desc: "Geleneksel ilaç geliştirme süreci ilaç başına 2.6 Milyar Dolar ve 12 yıl sürmekte olup %88 klinik başarısızlıkla sonuçlanır. UMAY, aday molekül keşif süresini %99 kısaltır ve ıslak laboratuvarda tek bir sent harcamadan önce ölü adayları eler.",
      card2Title: "Özgün Yerel ve Güvenli Mimari",
      card2Desc: "Sıfır bulut bağımlılığı, deterministik SHA256 önbellekleme, yerel AlphaFold koordinatları ve sıfır token israfı ilkesiyle tasarlanmıştır. Şirketlerin fikri mülkiyeti (IP) asla üçüncü parti API'lara sızmaz.",
      card3Title: "Özbekistan Derin Teknoloji Avantajı",
      card3Desc: "Taşkent IT Park vergi teşvikleri, üstün algoritmik mühendislik potansiyeli ve benzersiz sermaye verimliliği. UMAY, Boston veya San Francisco'daki rakiplerinin 15'te 1'i operasyonel maliyetle küresel biyoteknoloji Ar-Ge'si yürütür."
    },
    founder: {
      badge: "Liderlik ve Vizyon",
      title: "UMAY'ın Arkasındaki Mimar",
      name: "Sayidmurod Umaraliev",
      role: "Kurucu, Moleküler Biyolog, Genetik Mühendisi & Biyoinformatikçi",
      bio: "Genomik hedef doğrulama, yapısal etkileşim ağları ve otonom biyofiziksel algoritmalar alanında uzmanlaşmış moleküler biyolog, genetik mühendisi ve biyoinformatikçi. Moleküler biyoloji ve genetik mühendisliğindeki derinliğini ileri düzey biyoinformatik boru hatlarıyla birleştirerek Özbekistan'dan dünyaya yeni nesil terapötikler geliştirmektedir.",
      location: "Taşkent, Özbekistan / Zonguldak, Türkiye",
      btnContact: "LinkedIn / GitHub Üzerinden İletişime Geçin"
    },
    ctaBanner: {
      title: "İlaç Keşfini Hızlandırmaya Hazır mısınız?",
      desc: "UMAY, akademik ortakları, ilaç araştırma laboratuvarlarını ve erken aşama girişim sermayesi fonlarını pilot doğrulama programlarına davet ediyor.",
      btnDeck: "Yatırımcı Sunumu ve IND Dosyası İste",
      btnDemo: "Uz Combinator Görüşmesi Planla"
    },
    footer: {
      brandDesc: "UMAY — Unified Molecular Architecture & Yield Engine. Otonom İlaç Keşif ve Biyofiziksel Tasarım Platformu.",
      rights: "Tüm hakları saklıdır. Uz Combinator 2026 Başvurusu için tasarlanmıştır.",
      builtFor: "Özbekistan ve Türkiye'de bilimsel titizlikle geliştirilmiştir."
    },
    modal: {
      title: "Yatırımcı Sunumu ve IND Dosyası Talebi",
      subtitle: "Kurucu Sayidmurod Umaraliev ile doğrudan iletişime geçin.",
      nameLabel: "Adınız / Kurumunuz",
      emailLabel: "E-posta Adresiniz",
      roleLabel: "Rolünüz (Yatırımcı, Araştırmacı, Hızlandırıcı)",
      notesLabel: "Mesajınız / Notunuz",
      btnSubmit: "Talebi Gönder",
      successMsg: "Teşekkürler! Talebiniz kaydedildi. 24 saat içinde sizinle iletişime geçeceğiz."
    }
  },

  uz: {
    nav: {
      brand: "UMAY",
      brandSub: "Biotexnologik SI Dvigateli",
      technology: "Texnologiya",
      pipeline: "8 Bosqichli Quvur",
      simulator: "Jonli Simulyator",
      traction: "Uz Combinator Taqdimoti",
      founder: "Asoschi",
      cta: "Platformani Ishga Tushirish"
    },
    hero: {
      badge: "🚀 Uz Combinator 2026 Dasturi Nomzodi // Markaziy Osiyo Deep-Tech SI",
      title: "De Novo Terapetik Dori Vositalari Uchun Avtonom Sun'iy Intellekt va Biofizik Tizim",
      subtitle: "UMAY dori vositalarini kashf qilishni ko'p yillik noaniq tavakkaldan aniq, deterministik va bir necha soatlik hisoblash tizimiga aylantiradi. Kasallik fenotipidan FDA standartidagi klinikadan oldingi yetakchi molekulagacha 24 soat ichida yetib boring.",
      btnPrimary: "8 Bosqichli Quvurni O'rganish",
      btnSecondary: "Interaktiv Demo Sinovi",
      stat1Val: "70%+",
      stat1Lbl: "N=100 FDA Oltin Standart Testlarida Top-3 Aniqlik",
      stat2Val: "10,000+",
      stat2Lbl: "Har Bir Maqsad Uchun Yaratilgan va Saralangan Molekulalar",
      stat3Val: "< 1.0 Å",
      stat3Lbl: "Bog'lanish Cho'ntagi MD Barqarorligi (10ns RMSD)",
      stat4Val: "100x",
      stat4Lbl: "An'anaviy Tajribaxona Tahlillariga Nisbatan Tezlashuv"
    },
    pipeline: {
      badge: "Ilmiy Intizom",
      title: "To'liq Avtonom Hisoblash Quvuri",
      subtitle: "Biofizik jihatdan beqaror, zaharli yoki sintez qilib bo'lmaydigan molekulalarni boshlang'ich bosqichdayoq elab tashlovchi kaskadli 8 bosqichli filtr; faqatgina klinik jihatdan samarali bo'ladigan dori nomzodlari yetib kelishini kafolatlaydi.",
      s1Title: "1. Genetik Maqsadni Aniqlash",
      s1Desc: "Open Targets, DisGeNET va ClinVar ma'lumotlar bazalarini ikki qatlamli SHA256 SQLite kesh yordamida tahlil qilib, genetik ishonch indeksini (S_gen) hisoblaydi.",
      s2Title: "2. Protein Tarmoq Biologiyasi",
      s2Desc: "STRING DB oqsillararo ta'sir tarmog'ini tuzadi va NetworkX graf nazariyasi yordamida markaziy bog'lovchi tugunlarni aniqlaydi (S_net).",
      s3Title: "3. To'qima Xavfsizligi & gnomAD",
      s3Desc: "Human Protein Atlas muhim a'zolar RNK ekspressiyasi asosida kardiotoksiklik, gepatotoksiklik va neyrotoksiklik xatarlarini pasaytiradi.",
      s4Title: "4. 3D Cho'ntak & Fazoviy SI",
      s4Desc: "RCSB PDB tajribaviy kristall tuzilmalari va AlphaFold DB SI koordinatalarini avtonom yuklab, cKDTree orqali bog'lanish cho'ntagini xaritalaydi.",
      s5Title: "5. Avtonom Modallik Miya",
      s5Desc: "Tibbiy Paradoks Qalqoni orqali nishonni Inhibitör, Faollashtiruvchi (PAM), PROTAC yoki Gen Terapiyasi sifatida xolis tasniflaydi.",
      s6Title: "6. Ikki Rejimli Molekula Dizayni",
      s6Desc: "1,000+ FDA/ChEMBL BRICS bo'laklari va 100% kimyoviy to'g'ri 10,000 SELFIES GRU RNN yaratish havzasini birlashtiradi.",
      s7Title: "7. Bayyes Aktiv O'rganishi",
      s7Desc: "Gauss Jarayonlari regressiyasi va LCB funksiyasi yordamida 8 o'lchamli MPO maydonida qidiruv va optimallashtirish muvozanatini saqlaydi.",
      s8Title: "8. Biofizik MD & PLIP Tekshiruvi",
      s8Desc: "AutoDock Vina ansambl dokingi, 10ns molekulyar dinamika barqarorligi va PLIP kovalent bo'lmagan bog'lanish tahlili."
    },
    simulator: {
      badge: "Real Vaqt Rejimida Namoyish",
      title: "Interaktiv Maqsad-Molekula Simulyatori",
      subtitle: "Kasallik turini tanlang va UMAY qanday qilib avtonom tarzda genetik nishonni aniqlashi, modallikni tanlashi va yetakchi molekulani sinovdan o'tkazishini ko'ring.",
      selectLabel: "Klinik Kasallikni Tanlang:",
      btnRun: "Avtonom Tahlilni Boshlash",
      targetLabel: "Tasdiqlangan Genetik Nishon:",
      modalityLabel: "Avtonom Terapevtik Modallik:",
      candidatesLabel: "Baholangan Molekulalar Soni:",
      bestLeadLabel: "Eng Yaxshi Preklinik Nomzod:",
      affinityLabel: "Bog'lanish Kuchliligi (ΔG):",
      stabilityLabel: "10ns MD Trayektoriya Barqarorligi:",
      dossierReady: "To'liq 3 sahifalik IND Preklinik Hujjatlar to'plami xalqaro talablar asosida tayyorlandi.",
      btnDownloadDossier: "IND Hujjati Namunasini Ko'rish (PDF)",
      indications: {
        ipf: "Idiopatik O'pka Fibrozi (IPF)",
        t2d: "2-Tur Qandli Diabet (T2D)",
        ad: "Altsgeymer Kasalligi (Neyrodegeneratsiya)",
        kras: "KRAS Bilan Bog'liq O'pka Saratoni"
      }
    },
    pitch: {
      badge: "Uz Combinator 2026 Taqdimoti",
      title: "Nima Uchun UMAY O'zbekistondan Turib Global Miqyosda G'alaba Qozonadi?",
      subtitle: "An'anaviy laboratoriya xatolarini algoritmik aniqlik bilan almashtirib, Markaziy Osiyoni yuqori daromadli chuqur texnologiyalar (Deep-Tech) markaziga aylantiramiz.",
      card1Title: "$250+ Milliardlik Global Bozor Ehtiyoji",
      card1Desc: "An'anaviy farmatsevtikada bitta dori yaratish uchun 2.6 Milliard Dollar va 12 yil sarflanadi hamda 88% holatda klinik muvaffaqiyatsizlik bilan tugaydi. UMAY kashfiyot vaqtini 99% ga qisqartiradi va tajribaxonaga bir dollar ham sarflamasdan oldin yaroqsiz molekulalarni elab beradi.",
      card2Title: "Mustaqil va Xavfsiz Mahalliylashtirilgan Arxitektura",
      card2Desc: "Bulutli tizimlarga qaram bo'lmagan, deterministik SHA256 kesh, mahalliy AlphaFold koordinatalari va tejamkor arxitektura. Kompaniyalarning qimmatli intellektual mulki hech qachon begona API tizimlariga sizib chiqmaydi.",
      card3Title: "O'zbekistonning Deep-Tech Bo'yicha Afzalligi",
      card3Desc: "Toshkent IT Park soliq imtiyozlari, jahon miqyosidagi algoritmik muhandislik salohiyati va yuqori kapital samaradorligi. UMAY Boston yoki San-Fransisko startaplariga nisbatan 15 baravar kam xarajat bilan global biotexnologik R&D ishlarini olib boradi."
    },
    founder: {
      badge: "Yetakchilik va Rivojlanish Rejasi",
      title: "UMAY Loyihasi Muallifi",
      name: "Sayidmurod Umaraliev",
      role: "Asoschi, Molekulyar Biolog, Genetik Muhandis & Bioinformatikachi",
      bio: "Genomik nishonlarni tekshirish, oqsil o'zaro ta'sir tarmoqlari va avtonom biofizik algoritmlar bo'yicha mutaxassis bo'lgan molekulyar biolog, genetik muhandis va bioinformatikachi. Molekulyar biologiya va genetik muhandislik sohasidagi fundamental bilimlarni ilg'or bioinformatik hisoblash tizimlari bilan birlashtirib, O'zbekistondan turib jahon miqyosidagi innovatsion dori vositalarini yaratishga hissa qo'shmoqda.",
      location: "Toshkent, O'zbekiston / Zonguldak, Turkiya",
      btnContact: "LinkedIn / GitHub Orqali Bog'lanish"
    },
    ctaBanner: {
      title: "Dori Vositalarini Yaratishni Tezlashtirishga Tayyormisiz?",
      desc: "UMAY hozirda akademik hamkorlar, farmatsevtika tadqiqot markazlari va venchur investorlarni dastlabki sinov dasturlariga taklif qiladi.",
      btnDeck: "Taqdimot & IND Hujjatini So'rash",
      btnDemo: "Uz Combinator Uchun Uchrashuv Belgilash"
    },
    footer: {
      brandDesc: "UMAY — Unified Molecular Architecture & Yield Engine. Avtonom Dori Kashfiyoti va Biofizik Dizayn Platformasi.",
      rights: "Barcha huquqlar himoyalangan. Uz Combinator 2026 qabuli uchun maxsus tayyorlandi.",
      builtFor: "O'zbekiston va Turkiyada ilmiy aniqlik bilan yaratildi."
    },
    modal: {
      title: "Investor Taqdimoti va IND Hujjatini So'rash",
      subtitle: "Asoschi Sayidmurod Umaraliev bilan to'g'ridan-to'g'ri bog'laning.",
      nameLabel: "Ismingiz / Tashkilotingiz",
      emailLabel: "Elektron Pochta Manzilingiz",
      roleLabel: "Maqomingiz (Investor, Tadqiqotchi, Akselerator)",
      notesLabel: "Xabar / Qo'shimcha Izoh",
      btnSubmit: "So'rovni Yuborish",
      successMsg: "Rahmat! So'rovingiz qabul qilindi. 24 soat ichida siz bilan bog'lanamiz."
    }
  }
};
