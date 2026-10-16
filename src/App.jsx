import { useEffect, useState } from 'react';
import {
  Activity,
  ArrowUpRight,
  BookOpenCheck,
  CalendarDays,
  GraduationCap,
  HeartPulse,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Phone,
  ShieldCheck,
  Stethoscope,
  UsersRound,
  X,
} from 'lucide-react';

const missionIcons = [ShieldCheck, GraduationCap, Microscope, UsersRound];
const activityIcons = [CalendarDays, Stethoscope, UsersRound];

const copy = {
  ar: {
    pageTitle: 'STMU — الجمعية التونسية لطبّ الطوارئ',
    pageDescription:
      'الجمعية التونسية لطبّ الطوارئ — مجتمع مهني يطوّر التكوين والمعرفة وجودة الرعاية الاستعجالية في تونس منذ 2000.',
    skip: 'تخطَّ إلى المحتوى',
    utility: 'جمعية علمية تونسية',
    utilityNote: 'منذ 2000 · نحو رعاية استعجالية أفضل',
    brandSubtitle: 'الجمعية التونسية لطبّ الطوارئ',
    nav: [
      { label: 'الرئيسية', href: '#home' },
      { label: 'من نحن', href: '#about' },
      { label: 'رسالتنا', href: '#missions' },
      { label: 'أنشطتنا', href: '#activities' },
      { label: 'قريبًا', href: '#upcoming' },
      { label: 'الانخراط', href: '#join' },
    ],
    switchLanguage: 'Passer en français',
    joinLabel: 'انضمّوا إلينا',
    openMenu: 'فتح القائمة',
    closeMenu: 'إغلاق القائمة',
    hero: {
      eyebrow: 'خبرة تونسية · مجتمع مهني · أثر إنساني',
      title: 'نرتقي بطبّ الطوارئ',
      accent: 'معًا، في كلّ تونس.',
      description:
        'منذ تأسيسها عام 2000، تجمع الجمعية التونسية لطبّ الطوارئ أهل الميدان حول هدف واحد: معرفة أقوى، تكوين أفضل، ورعاية أكثر جاهزية.',
      primary: 'اكتشفوا STMU',
      secondary: 'استكشفوا أنشطتنا',
      reassurance: 'لكلّ من يعمل من أجل رعاية استعجالية أفضل',
      imageAlt: 'طبيبان تونسيان يتدرّبان على الإيكوغرافيا في مركز محاكاة طبي',
      photoTag: 'التكوين · المعرفة · الميدان',
      photoTitle: 'خبرة تُبنى معًا',
      photoCaption: 'للفرق التي تقف في الصفّ الأوّل',
      photoBadge: 'منذ 2000',
    },
    proof: [
      { value: '2000', label: 'سنة تأسيس الجمعية' },
      { value: '25', suffix: 'ᵉ', label: 'مؤتمر وطني لطبّ الطوارئ' },
      { value: 'تونس', label: 'مجتمع مهني من كلّ الجهات' },
    ],
    upcoming: {
      eyebrow: 'قريبًا · المؤتمر الوطني القادم',
      title: 'لقاؤنا القادم يبدأ من هنا.',
      description:
        'تابعوا إعلان STMU عن المؤتمر الوطني القادم لطبّ الطوارئ. سيُنشر الموعد والمكان والبرنامج فور تأكيد التفاصيل الرسمية.',
      date: 'الموعد: يُعلن لاحقًا',
      location: 'المكان: يُعلن لاحقًا',
      cta: 'تابعوا إعلانات STMU',
      cardTag: 'قريبًا',
      cardSubtitle: 'تفاصيل المؤتمر ستُعلن قريبًا',
    },
    missions: {
      eyebrow: 'ما الذي نعمل من أجله؟',
      title: 'رعاية أفضل تبدأ بفريقٍ مستعدّ.',
      description:
        'نعمل على دعم منظومة الاستعجالي عبر المعرفة العلمية، والتكوين المستمر، والتعاون بين مختلف مهنيّي الصحة.',
      cards: [
        {
          title: 'جودةٌ مبنيّة على الدليل',
          text: 'دعم الممارسات والبروتوكولات التي تضع سلامة المريض ونتائج الرعاية في المقدّمة.',
        },
        {
          title: 'تكوين يواكب الميدان',
          text: 'تطوير مهارات الأطباء والفرق الصحية عبر التعلّم المستمرّ والتدريب التطبيقي.',
        },
        {
          title: 'معرفة نتقاسمها',
          text: 'تشجيع البحث العلمي والحوار المهني وتبادل الخبرات بين العاملين في الاستعجالي.',
        },
        {
          title: 'مجتمع يجمع التخصّصات',
          text: 'مساحة مفتوحة لكلّ المهنيين المهتمّين بالرعاية الاستعجالية، داخل المستشفى وخارجه.',
        },
      ],
    },
    about: {
      eyebrow: 'قصّتنا',
      title: 'منذ 2000، نعمل على تطوير طبّ الطوارئ في تونس.',
      description:
        'تأسست الجمعية التونسية لطبّ الطوارئ في فيفري 2000 بمبادرة من ممارسين وأكاديميين جمعهم هدف مشترك: ترسيخ هذا الاختصاص وتطويره. ومنذ ذلك الحين، تساهم STMU في التكوين، وتبادل الخبرات، وتعزيز مكانة طبّ الطوارئ.',
      timeline: [
        {
          date: 'فيفري 2000',
          text: 'تأسيس الجمعية في المرسى، بمبادرة من أطباء وأكاديميين.',
        },
        {
          date: '23 ماي 2005',
          text: 'الاعتراف بطبّ الطوارئ اختصاصًا قائمًا بذاته في تونس.',
        },
      ],
      quote: 'طبّ الطوارئ أكثر من اختصاص؛ إنّه التزام جماعيّ بالحياة.',
      link: 'اقرأوا تاريخ الجمعية',
    },
    activities: {
      eyebrow: 'تعلّم · شارك · تقدّم',
      title: 'من المعرفة إلى الممارسة.',
      description:
        'اكتشفوا المؤتمرات والموارد العلمية والفرص التي تجمع مجتمع طبّ الطوارئ في تونس.',
      all: 'زيارة الموقع الرسمي',
      cards: [
        {
          eyebrow: 'أرشيف المؤتمر · 2026',
          title: 'المؤتمر الوطني الخامس والعشرون',
          description:
            'لقاء علمي يجمع التحيينات الطبية، والورشات التطبيقية، والمحاكاة. اطّلعوا على البرنامج والموارد المنشورة.',
          meta: '16–18 أفريل 2026 · الحمّامات',
          link: 'استكشفوا موارد المؤتمر',
          href: 'https://stmu.tn/index.php/evenements/25eme-congres-national-de-medecine-durgence-2',
          visual: 'congress',
          imageLabel: 'STMU · 25',
        },
        {
          eyebrow: 'تكوين مستمر',
          title: 'مهارات تُصقل بالممارسة',
          description:
            'تكوينات وورشات عملية في طبّ الطوارئ، من بينها التكوين في الإيكوغرافيا السريرية للاستعجاليين.',
          meta: 'موارد علمية وتطبيقية',
          link: 'اكتشفوا موارد التكوين',
          href: 'https://www.stmu.tn/fr/actualite/seance_de_revision_et_devaluation_de_la_formation_en_echographie_clinique_durgence',
          visual: 'training',
          imageLabel: 'التكوين',
        },
        {
          eyebrow: 'المجتمع · الجيل القادم',
          title: 'مساحة للشباب في STMU',
          description:
            'تدعم STMU Junior الأطباء الشبان وتشجّعهم على المشاركة والبحث والمساهمة في مستقبل طبّ الطوارئ.',
          meta: 'مجتمع مهني شامل',
          link: 'تعرّفوا على STMU Junior',
          href: 'https://www.stmu.tn/fr/article/candidature_stmu_junior',
          visual: 'junior',
          imageLabel: 'STMU Junior',
        },
      ],
    },
    join: {
      eyebrow: 'معًا، أثرنا أكبر',
      title: 'مكانكم بيننا.',
      description:
        'تجمع STMU كلّ من يشارك في الرعاية الاستعجالية — أطباء، ممرضين، مسعفين، وباحثين — من أجل مجتمع مهني أقوى.',
      primary: 'اكتشفوا شروط الانخراط',
      contactTitle: 'تواصلوا مع الأمانة العامة',
      contactText: 'نحن هنا للإجابة عن أسئلتكم حول الجمعية وأنشطتها.',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'الهاتف',
      locationLabel: 'المجال',
      location: 'تونس',
    },
    footer: {
      about: 'مجتمع علمي ومهني يعمل من أجل طبّ طوارئ أفضل في تونس.',
      linksTitle: 'روابط سريعة',
      contactTitle: 'تواصلوا معنا',
      rights: 'جميع الحقوق محفوظة.',
      facebook: 'تابعونا على فيسبوك',
      journal: 'مجلة طبّ الطوارئ التونسية',
    },
  },
  fr: {
    pageTitle: "STMU — Société Tunisienne de Médecine d'Urgence",
    pageDescription:
      "La Société Tunisienne de Médecine d'Urgence rassemble les professionnels autour de la formation, de la connaissance et de la qualité des soins urgents en Tunisie depuis 2000.",
    skip: 'Aller au contenu',
    utility: 'Société savante tunisienne',
    utilityNote: "Depuis 2000 · pour une médecine d'urgence de qualité",
    brandSubtitle: "Société Tunisienne de Médecine d'Urgence",
    nav: [
      { label: 'Accueil', href: '#home' },
      { label: 'La STMU', href: '#about' },
      { label: 'Nos missions', href: '#missions' },
      { label: 'Nos activités', href: '#activities' },
      { label: 'À venir', href: '#upcoming' },
      { label: 'Adhésion', href: '#join' },
    ],
    switchLanguage: 'Passer en arabe',
    joinLabel: 'Rejoindre la STMU',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    hero: {
      eyebrow: 'Expertise tunisienne · Société savante · Engagement humain',
      title: "Faire avancer la médecine d’urgence",
      accent: 'partout en Tunisie.',
      description:
        "Depuis 2000, la Société Tunisienne de Médecine d'Urgence rassemble les acteurs du terrain autour d'une ambition commune : faire progresser les savoirs, la formation et la qualité des soins.",
      primary: 'Découvrir la STMU',
      secondary: 'Explorer nos activités',
      reassurance: "Pour toutes celles et ceux qui font avancer les soins d'urgence",
      imageAlt:
        "Deux médecins tunisiens s'entraînent à l'échographie dans un centre de simulation médicale",
      photoTag: 'FORMATION · SAVOIR · TERRAIN',
      photoTitle: 'Le savoir se construit ensemble',
      photoCaption: 'Au service des équipes de première ligne',
      photoBadge: 'Depuis 2000',
    },
    proof: [
      { value: '2000', label: 'année de fondation de la société' },
      { value: '25', suffix: 'e', label: "congrès national de médecine d'urgence" },
      { value: 'Tunisie', label: 'une communauté présente dans toutes les régions' },
    ],
    upcoming: {
      eyebrow: 'À venir · prochain congrès national',
      title: 'Le prochain rendez-vous se prépare.',
      description:
        "Suivez l’annonce de la STMU pour le prochain Congrès National de Médecine d'Urgence. Les dates, le lieu et le programme seront publiés dès confirmation officielle.",
      date: 'Dates : à confirmer',
      location: 'Lieu : à confirmer',
      cta: 'Suivre les annonces STMU',
      cardTag: 'COMING UP',
      cardSubtitle: 'Informations bientôt disponibles',
    },
    missions: {
      eyebrow: 'Notre engagement',
      title: 'Des soins de qualité commencent par des équipes préparées.',
      description:
        "Nous faisons progresser les soins d'urgence grâce à la connaissance scientifique, à la formation continue et à la coopération entre professionnels de santé.",
      cards: [
        {
          title: 'La qualité, fondée sur les preuves',
          text: 'Encourager des pratiques et des protocoles qui placent la sécurité et les résultats des patients au premier plan.',
        },
        {
          title: 'Une formation ancrée dans le terrain',
          text: "Développer les compétences des médecins et des équipes grâce à l'apprentissage continu et à la pratique.",
        },
        {
          title: 'La connaissance en partage',
          text: "Encourager la recherche, le dialogue professionnel et le partage d'expérience en médecine d'urgence.",
        },
        {
          title: 'Une communauté pluridisciplinaire',
          text: "Un espace ouvert à tous les professionnels concernés par les soins urgents, à l'hôpital comme en préhospitalier.",
        },
      ],
    },
    about: {
      eyebrow: 'Notre histoire',
      title: "Depuis 2000, nous faisons progresser la médecine d'urgence en Tunisie.",
      description:
        "La Société Tunisienne de Médecine d'Urgence a été fondée en février 2000 par des praticiens et universitaires réunis autour d'un objectif commun : faire reconnaître et développer cette discipline. Depuis, la STMU contribue à la formation, au partage des savoirs et au rayonnement de la médecine d'urgence.",
      timeline: [
        {
          date: 'Février 2000',
          text: 'Création de la STMU à La Marsa, à l’initiative de praticiens et universitaires.',
        },
        {
          date: '23 mai 2005',
          text: "La médecine d'urgence est consacrée comme spécialité à part entière en Tunisie.",
        },
      ],
      quote: "La médecine d'urgence est plus qu'une spécialité : un engagement collectif pour la vie.",
      link: 'Lire notre histoire',
    },
    activities: {
      eyebrow: 'Apprendre · Partager · Progresser',
      title: 'Du savoir à la pratique.',
      description:
        "Découvrez les congrès, ressources scientifiques et initiatives qui font vivre la communauté tunisienne de médecine d'urgence.",
      all: 'Visiter le site officiel',
      cards: [
        {
          eyebrow: 'Archives du congrès · 2026',
          title: '25ᵉ Congrès National',
          description:
            "Un rendez-vous scientifique mêlant actualités médicales, ateliers pratiques et simulation. Retrouvez le programme et les ressources publiées.",
          meta: '16–18 avril 2026 · Hammamet',
          link: 'Consulter les ressources',
          href: 'https://stmu.tn/index.php/evenements/25eme-congres-national-de-medecine-durgence-2',
          visual: 'congress',
          imageLabel: 'STMU · 25',
        },
        {
          eyebrow: 'Formation continue',
          title: 'Apprendre par la pratique',
          description:
            "Des formations et ateliers en médecine d'urgence, dont la formation en échographie clinique appliquée aux urgences.",
          meta: 'Ressources scientifiques et pratiques',
          link: 'Découvrir les ressources',
          href: 'https://www.stmu.tn/fr/actualite/seance_de_revision_et_devaluation_de_la_formation_en_echographie_clinique_durgence',
          visual: 'training',
          imageLabel: 'Formation',
        },
        {
          eyebrow: 'Communauté · Nouvelle génération',
          title: 'La relève a sa place à la STMU',
          description:
            "STMU Junior accompagne les jeunes médecins et encourage leur participation, la recherche et leur engagement pour l'avenir de la discipline.",
          meta: 'Une communauté professionnelle ouverte',
          link: 'Découvrir STMU Junior',
          href: 'https://www.stmu.tn/fr/article/candidature_stmu_junior',
          visual: 'junior',
          imageLabel: 'STMU Junior',
        },
      ],
    },
    join: {
      eyebrow: 'Ensemble, notre impact grandit',
      title: 'Votre place est parmi nous.',
      description:
        "La STMU rassemble toutes celles et ceux qui contribuent aux soins urgents — médecins, infirmiers, paramédicaux et chercheurs — pour faire grandir une communauté engagée.",
      primary: "Découvrir les modalités d'adhésion",
      contactTitle: 'Contacter le secrétariat',
      contactText: "Notre équipe répond à vos questions sur la société et ses activités.",
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      locationLabel: 'Rayonnement',
      location: 'Toute la Tunisie',
    },
    footer: {
      about: "Une communauté scientifique et professionnelle au service de la médecine d'urgence en Tunisie.",
      linksTitle: 'Liens rapides',
      contactTitle: 'Nous contacter',
      rights: 'Tous droits réservés.',
      facebook: 'Suivez-nous sur Facebook',
      journal: "Revue Tunisienne de Médecine d'Urgence",
    },
  },
};

function Brand({ subtitle }) {
  return (
    <a className="brand" href="#home" aria-label={`STMU — ${subtitle}`}>
      <span className="brand-mark" aria-hidden="true">
        <Activity size={23} strokeWidth={2.35} />
        <span className="brand-dot" />
      </span>
      <span className="brand-copy">
        <strong>STMU</strong>
        <span>{subtitle}</span>
      </span>
    </a>
  );
}

function ExternalLinkIcon() {
  return <ArrowUpRight className="directional-icon" size={17} strokeWidth={2} aria-hidden="true" />;
}

function App() {
  const [language, setLanguage] = useState('ar');
  const [menuOpen, setMenuOpen] = useState(false);
  const isRtl = language === 'ar';
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.title = t.pageTitle;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', t.pageDescription);
  }, [language, isRtl, t.pageDescription, t.pageTitle]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const changeLanguage = () => {
    setLanguage((current) => (current === 'ar' ? 'fr' : 'ar'));
    setMenuOpen(false);
  };

  return (
    <div className={`site site--${language}`}>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>

      <div className="utility-bar">
        <div className="container utility-inner">
          <span className="utility-mark" aria-hidden="true">
            <span />
          </span>
          <span>{t.utility}</span>
          <span className="utility-divider" aria-hidden="true" />
          <span className="utility-note">{t.utilityNote}</span>
          <a className="utility-contact" href="mailto:secretariat@stmu.tn">
            <Mail size={14} aria-hidden="true" />
            <span>secretariat@stmu.tn</span>
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-shell">
          <Brand subtitle={t.brandSubtitle} />

          <nav
            className={`site-nav${menuOpen ? ' site-nav--open' : ''}`}
            aria-label={isRtl ? 'التنقّل الرئيسي' : 'Navigation principale'}
            id="primary-navigation"
          >
            {t.nav.map((item, index) => (
              <a
                className={index === 0 ? 'nav-link nav-link--home' : 'nav-link'}
                href={item.href}
                key={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a className="button button--primary nav-join" href="#join" onClick={() => setMenuOpen(false)}>
              {t.joinLabel}
              <ExternalLinkIcon />
            </a>
          </nav>

          <div className="header-actions">
            <button className="language-switch" type="button" onClick={changeLanguage} aria-label={t.switchLanguage}>
              <span className="language-globe" aria-hidden="true">Aa</span>
              <span>{isRtl ? 'FR' : 'العربية'}</span>
            </button>
            <a className="button button--primary header-join" href="#join">
              {t.joinLabel}
              <ExternalLinkIcon />
            </a>
            <button
              className="menu-toggle"
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? t.closeMenu : t.openMenu}
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
            >
              {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero-section" id="home" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow hero-eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                {t.hero.eyebrow}
              </div>
              <h1 id="hero-title">
                {t.hero.title}
                <span>{t.hero.accent}</span>
              </h1>
              <p className="hero-description">{t.hero.description}</p>
              <div className="hero-actions">
                <a className="button button--primary button--large" href="#about">
                  {t.hero.primary}
                  <ExternalLinkIcon />
                </a>
                <a className="button button--quiet button--large" href="#activities">
                  <span className="quiet-icon" aria-hidden="true">
                    <BookOpenCheck size={19} />
                  </span>
                  {t.hero.secondary}
                </a>
              </div>
              <div className="hero-reassurance">
                <span className="reassurance-icon" aria-hidden="true">
                  <HeartPulse size={16} />
                </span>
                <span>{t.hero.reassurance}</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
              <div className="hero-orbit hero-orbit--two" aria-hidden="true" />
              <div className="hero-photo">
                <img src="/images/emergency-team.jpg" alt={t.hero.imageAlt} fetchPriority="high" />
                <div className="hero-photo-shade" aria-hidden="true" />
                <div className="photo-top-chip">
                  <span className="photo-chip-dot" aria-hidden="true" />
                  {t.hero.photoTag}
                </div>
                <div className="photo-caption">
                  <span className="photo-heart" aria-hidden="true">
                    <HeartPulse size={20} />
                  </span>
                  <span className="photo-caption-copy">
                    <strong>{t.hero.photoTitle}</strong>
                    <span>{t.hero.photoCaption}</span>
                  </span>
                </div>
              </div>
              <div className="photo-floating-badge">
                <span className="badge-symbol" aria-hidden="true">
                  <Activity size={19} />
                </span>
                <span>
                  <strong>{t.hero.photoBadge}</strong>
                  <small>STMU</small>
                </span>
              </div>
              <span className="visual-spark visual-spark--one" aria-hidden="true">✳</span>
              <span className="visual-spark visual-spark--two" aria-hidden="true">✳</span>
            </div>
          </div>

          <div className="container proof-strip" aria-label={isRtl ? 'نبذة عن STMU' : 'La STMU en bref'}>
            {t.proof.map((item, index) => (
              <div className="proof-item" key={item.value}>
                <span className={`proof-icon proof-icon--${index + 1}`} aria-hidden="true">
                  {index === 0 ? <HeartPulse size={19} /> : index === 1 ? <CalendarDays size={19} /> : <UsersRound size={19} />}
                </span>
                <span className="proof-copy">
                  <strong>{item.value}{item.suffix && <sup>{item.suffix}</sup>}</strong>
                  <span>{item.label}</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="upcoming-section" id="upcoming" aria-labelledby="upcoming-title">
          <div className="container">
            <div className="upcoming-card">
              <div className="upcoming-copy">
                <span className="upcoming-eyebrow">
                  <span className="upcoming-pulse" aria-hidden="true" />
                  {t.upcoming.eyebrow}
                </span>
                <h2 id="upcoming-title">{t.upcoming.title}</h2>
                <p>{t.upcoming.description}</p>
                <div className="upcoming-details">
                  <span>
                    <CalendarDays size={16} aria-hidden="true" />
                    {t.upcoming.date}
                  </span>
                  <span>
                    <MapPin size={16} aria-hidden="true" />
                    {t.upcoming.location}
                  </span>
                </div>
                <a className="button button--coral upcoming-button" href="https://stmu.tn/" target="_blank" rel="noreferrer">
                  {t.upcoming.cta}
                  <ExternalLinkIcon />
                </a>
              </div>
              <div className="upcoming-art" aria-hidden="true">
                <span className="upcoming-ring upcoming-ring--one" />
                <span className="upcoming-ring upcoming-ring--two" />
                <div className="upcoming-ticket">
                  <span className="upcoming-ticket-tag">{t.upcoming.cardTag}</span>
                  <span className="upcoming-calendar"><CalendarDays size={29} strokeWidth={1.7} /></span>
                  <strong>STMU</strong>
                  <small>{t.upcoming.cardSubtitle}</small>
                  <span className="ticket-bottom-line" />
                </div>
                <span className="upcoming-spark upcoming-spark--one">✳</span>
                <span className="upcoming-spark upcoming-spark--two">✳</span>
              </div>
            </div>
          </div>
        </section>

        <section className="missions-section section-pad" id="missions" aria-labelledby="missions-title">
          <div className="container missions-layout">
            <div className="section-intro">
              <span className="eyebrow section-eyebrow">
                <span className="eyebrow-dash" aria-hidden="true" />
                {t.missions.eyebrow}
              </span>
              <h2 id="missions-title">{t.missions.title}</h2>
              <p>{t.missions.description}</p>
              <a className="text-link" href="#join">
                {t.joinLabel}
                <ExternalLinkIcon />
              </a>
              <div className="intro-decoration" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="mission-grid">
              {t.missions.cards.map((card, index) => {
                const Icon = missionIcons[index];
                return (
                  <article className={`mission-card mission-card--${index + 1}`} key={card.title}>
                    <div className="mission-card-head">
                      <span className="mission-icon" aria-hidden="true">
                        <Icon size={22} strokeWidth={1.85} />
                      </span>
                      <span className="mission-index">0{index + 1}</span>
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                    <span className="mission-card-line" aria-hidden="true" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="about-pattern" aria-hidden="true" />
          <div className="container about-grid">
            <div className="about-copy">
              <span className="eyebrow eyebrow--light">
                <span className="eyebrow-dot" aria-hidden="true" />
                {t.about.eyebrow}
              </span>
              <h2 id="about-title">{t.about.title}</h2>
              <p>{t.about.description}</p>
              <a
                className="button button--outline-light"
                href="https://stmu.tn/index.php/qui-sommes-nous"
                target="_blank"
                rel="noreferrer"
              >
                {t.about.link}
                <ExternalLinkIcon />
              </a>
            </div>

            <div className="about-side">
              <div className="timeline-card">
                <div className="timeline-heading">
                  <span className="timeline-mark" aria-hidden="true"><Activity size={19} /></span>
                  <span>{isRtl ? 'محطات في مسيرتنا' : 'Quelques dates clés'}</span>
                </div>
                <div className="timeline-list">
                  {t.about.timeline.map((item, index) => (
                    <div className="timeline-item" key={item.date}>
                      <span className="timeline-rail" aria-hidden="true">
                        <span />
                        {index === 0 && <i />}
                      </span>
                      <div>
                        <strong>{item.date}</strong>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <blockquote className="about-quote">
                <span className="quote-mark" aria-hidden="true">“</span>
                <p>{t.about.quote}</p>
                <span className="quote-attribution">— STMU</span>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="activities-section section-pad" id="activities" aria-labelledby="activities-title">
          <div className="container">
            <div className="activities-heading">
              <div className="activities-intro">
                <span className="eyebrow section-eyebrow">
                  <span className="eyebrow-dash" aria-hidden="true" />
                  {t.activities.eyebrow}
                </span>
                <h2 id="activities-title">{t.activities.title}</h2>
                <p>{t.activities.description}</p>
              </div>
              <a className="text-link activities-all-link" href="https://stmu.tn/" target="_blank" rel="noreferrer">
                {t.activities.all}
                <ExternalLinkIcon />
              </a>
            </div>

            <div className="activity-grid">
              {t.activities.cards.map((card, index) => {
                const Icon = activityIcons[index];
                return (
                  <article className={`activity-card activity-card--${card.visual}`} key={card.title}>
                    <div className={`activity-art activity-art--${card.visual}`} aria-hidden="true">
                      <div className="art-orbit art-orbit--one" />
                      <div className="art-orbit art-orbit--two" />
                      <div className="art-icon-wrap">
                        <Icon size={28} strokeWidth={1.65} />
                      </div>
                      <span className="art-label">{card.imageLabel}</span>
                      <span className="art-index">0{index + 1}</span>
                    </div>
                    <div className="activity-content">
                      <span className="activity-eyebrow">{card.eyebrow}</span>
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                      <div className="activity-footer">
                        <span className="activity-meta">
                          <span className="activity-meta-dot" aria-hidden="true" />
                          {card.meta}
                        </span>
                        <a href={card.href} target="_blank" rel="noreferrer" aria-label={`${card.link} — ${card.title}`}>
                          <span>{card.link}</span>
                          <ExternalLinkIcon />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="join-section" id="join" aria-labelledby="join-title">
          <div className="join-glow join-glow--one" aria-hidden="true" />
          <div className="join-glow join-glow--two" aria-hidden="true" />
          <div className="container join-grid">
            <div className="join-copy">
              <span className="eyebrow eyebrow--light">
                <span className="eyebrow-dot" aria-hidden="true" />
                {t.join.eyebrow}
              </span>
              <h2 id="join-title">{t.join.title}</h2>
              <p>{t.join.description}</p>
              <a
                className="button button--coral button--large"
                href="https://www.stmu.tn/fr/faqs"
                target="_blank"
                rel="noreferrer"
              >
                {t.join.primary}
                <ExternalLinkIcon />
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-card-heading">
                <span className="contact-icon" aria-hidden="true"><Mail size={21} /></span>
                <div>
                  <h3>{t.join.contactTitle}</h3>
                  <p>{t.join.contactText}</p>
                </div>
              </div>
              <a className="contact-row" href="mailto:secretariat@stmu.tn">
                <span className="contact-row-icon" aria-hidden="true"><Mail size={16} /></span>
                <span className="contact-row-copy">
                  <small>{t.join.emailLabel}</small>
                  <strong>secretariat@stmu.tn</strong>
                </span>
                <ExternalLinkIcon />
              </a>
              <a className="contact-row" href="tel:+21656030733">
                <span className="contact-row-icon" aria-hidden="true"><Phone size={16} /></span>
                <span className="contact-row-copy">
                  <small>{t.join.phoneLabel}</small>
                  <strong dir="ltr">+216 56 030 733</strong>
                </span>
                <ExternalLinkIcon />
              </a>
              <div className="contact-location">
                <MapPin size={16} aria-hidden="true" />
                <span>{t.join.locationLabel}</span>
                <strong>{t.join.location}</strong>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand-block">
            <Brand subtitle={t.brandSubtitle} />
            <p>{t.footer.about}</p>
            <div className="footer-socials">
              <a
                href="https://www.facebook.com/p/Soci%C3%A9t%C3%A9-Tunisienne-de-M%C3%A9decine-dUrgence-100057121554290/"
                target="_blank"
                rel="noreferrer"
                aria-label={t.footer.facebook}
              >
                <span className="facebook-letter" aria-hidden="true">f</span>
              </a>
              <a href="https://tjem.tn/index.php/tjem" target="_blank" rel="noreferrer" aria-label={t.footer.journal}>
                <BookOpenCheck size={17} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="footer-links-block">
            <h2>{t.footer.linksTitle}</h2>
            <ul>
              {t.nav.map((item) => (
                <li key={item.href}><a href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-contact-block">
            <h2>{t.footer.contactTitle}</h2>
            <a href="mailto:secretariat@stmu.tn"><Mail size={15} aria-hidden="true" />secretariat@stmu.tn</a>
            <a href="tel:+21656030733"><Phone size={15} aria-hidden="true" /><span dir="ltr">+216 56 030 733</span></a>
            <span><MapPin size={15} aria-hidden="true" />{t.join.location}</span>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} STMU. {t.footer.rights}</span>
          <span className="footer-bottom-note">{t.utilityNote}</span>
          <a href="#home" className="back-to-top">
            <span>{isRtl ? 'العودة إلى الأعلى' : 'Retour en haut'}</span>
            <ArrowUpRight className="back-to-top-icon" size={16} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
