(() => {
  "use strict";

  console.log("✅ app.js loaded");

  const I18N = {
    cs: {
      role: "L&D specialista",
      pdfBtn: "PDF",

      aboutTitle: "O mně",
      aboutP1: `Baví mě hledat nové způsoby, jak věci dělat chytřeji a jednodušeji. Jsem zvědavý, dravý a ambiciózní samouk – rychle se učím, jsem flexibilní, kreativní a komunikativní. Zároveň jsem si vědom i slabších stránek: občas dokážu být zbrklý a puntičkářský. Beru to ale jako něco, na čem vědomě pracuju, protože mi záleží na kvalitě výsledku i na tom, aby věci fungovaly v praxi.`,
      aboutP2: `Nejvíc si na sobě cením toho, že jsem extrémně univerzální pracovník. Zatím jsem nenarazil na oblast, kterou bych si nedokázal osvojit – nejsem nutně „dokonalý specialista“ na jednu úzkou disciplínu, ale umím nadprůměrně zastoupit široké spektrum činností a propojit je do funkčního celku. Ve volném čase mě baví sport, hlavně posilovna a volejbal, a jsem velký milovník zvířat.`,

      aboutKicker: "Zaměření",
      aboutLi1: "Analýza vzdělávacích potřeb a návrh školení",
      aboutLi2: "Úzká komunikace s manažery a sladění priorit",
      aboutLi3: "Hledání talentů a rozvojové plány",
      aboutLi4: "Tvorba a realizace školení (hard/soft skills, onboarding)",
      aboutLi5: "Zpětná vazba, testování a měření dopadu",

      skillsTitle: "PRACOVNÍ DOVEDNOSTI",
      workTitle: "Ukázky práce",
      workNote: "",
      xpTitle: "Zkušenosti",
      xpNote: "",
      eduTitle: "Vzdělání",
      contactTitle: "Kontakt",
      phoneLabel: "Telefon",
      emailLabel: "Email",
      linkedinOpen: "Otevřít profil",
      open: "Otevřít"
    },
    en: {
      role: "L&D Specialist",
      pdfBtn: "PDF",

      aboutTitle: "About me",
      aboutP1: `I enjoy looking for new ways to do things smarter and more efficiently. I’m a curious, driven, and ambitious self-learner — I pick things up quickly and I’m flexible, creative, communicative, and proactive. At the same time, I’m aware of my weaker points: I can sometimes be a bit impulsive and detail-oriented to a fault. I see this as something I actively work on, because I care about quality and about making things work in real life.`,
      aboutP2: `What I value most about myself is that I’m an extremely versatile professional. So far, I haven’t come across an area I couldn’t learn — I may not be a “perfect specialist” in one narrow field, but I can reliably cover a wide range of responsibilities at an above-average level and connect them into a functional whole. In my free time, I enjoy sports — especially the gym and volleyball — and I’m a big animal lover.`,

      aboutKicker: "Focus",
      aboutLi1: "Training needs analysis and program design",
      aboutLi2: "Close collaboration with managers and alignment of priorities",
      aboutLi3: "Talent identification and development plans",
      aboutLi4: "Training delivery (hard/soft skills, onboarding)",
      aboutLi5: "Feedback, assessments and impact measurement",

      skillsTitle: "SKILLS",
      workTitle: "Selected work",
      workNote: "",
      xpTitle: "Experience",
      xpNote: "",
      eduTitle: "Education",
      contactTitle: "Contact",
      phoneLabel: "Phone",
      emailLabel: "Email",
      linkedinOpen: "Open profile",
      open: "Open"
    }
  };

  const WORK = {
    w1: {
      cs: {
        kicker: "Manuály ke školení",
        title: "Manuály, checklisty a onboarding podklady",
        long: "Srozumitelná dokumentace pro rychlé zaškolení, standardy a jednotný postup napříč týmy.",
        tags: ["onboarding", "standardy", "metodika"],
        meta: "",
        desc: "Vytvářím přehledné a praktické manuály ke školením, které vedou uživatele krok za krokem a jsou snadno použitelné i pro úplné začátečníky. Kombinuji stručné instrukce s vizuálními ukázkami (screenshoty, zvýraznění důležitých prvků) a doplňuji je o tipy, kontrolní seznamy a nejčastější chyby, aby byl postup srozumitelný a fungoval i v reálné praxi.",
        bullets: []
      },
      en: {
        kicker: "Training manuals",
        title: "Manuals, checklists and onboarding materials",
        long: "Clear documentation for faster onboarding, consistent standards, and unified workflows across teams.",
        tags: ["onboarding", "standards", "methodology"],
        meta: "",
        desc: "I create clear, practical training manuals that guide users step by step and remain easy to follow even for complete beginners. I combine concise instructions with visual examples (screenshots and highlighted key elements) and add tips, checklists, and common pitfalls to make the materials genuinely useful in real-world work. I can also prepare quick-reference cheat sheets so people can find the right steps fast without revisiting the entire training.",
        bullets: []
      }
    },
    w2: {
      cs: {
        kicker: "Grafika",
        title: "Edukativní vizuály pro školení",
        long: "Praktické grafické podklady (infografiky, komiksy, šablony) pro lepší zapamatování a jednotný styl.",
        tags: ["vizuály", "šablony", "edukace"],
        meta: "",
        desc: "Umím převést složité informace do vizuální formy, která baví a funguje. Komiksový styl používám záměrně: podporuje pozornost, zjednodušuje sdělení a zvyšuje zapamatovatelnost.",
        bullets: []
      },
      en: {
        kicker: "Graphics",
        title: "Training visuals and educational graphics",
        long: "Practical visual materials (infographics, comics, templates) for better retention and a consistent style.",
        tags: ["visuals", "templates", "learning"],
        meta: "",
        desc: "I turn complex topics into visuals that are both engaging and effective. I use comic-style intentionally: it boosts attention, simplifies the message, and improves retention.",
        bullets: []
      }
    },
    w3: {
      cs: {
        kicker: "Powerpoint prezentace",
        title: "Prezentace pro interní workshopy",
        long: "Strukturované prezentace pro tréninky a workshopy, které podporují interakci a praxi.",
        tags: ["workshop", "praxe", "struktura"],
        meta: "",
        desc: "Navrhuji a vytvářím prezentace v PowerPointu, které nejen dobře vypadají, ale hlavně dávají smysl. Stavím je na jasné struktuře, konzistentní grafice a sdělení, které publikum rychle pochopí.",
        bullets: [
          "PowerPoint úroveň 1 a 2",
          "Bezpečnost práce",
          "Úvod do AI",
          "Mezigenerační spolupráce",
          "Vstupní školení",
          "První pomoc"
        ]
      },
      en: {
        kicker: "PowerPoint presentations",
        title: "Presentations for internal workshops",
        long: "Structured decks for trainings and workshops that support interaction and hands-on practice.",
        tags: ["workshop", "practice", "structure"],
        meta: "",
        desc: "I design and build PowerPoint presentations that not only look great, but also communicate clearly. I focus on strong structure, consistent visuals, and messages that audiences grasp quickly.",
        bullets: [
          "PowerPoint Level 1 & 2",
          "Workplace safety",
          "Introduction to AI",
          "Intergenerational collaboration",
          "Onboarding training",
          "First aid"
        ]
      }
    },
    w4: {
      cs: {
        kicker: "aplikace a webové aplikace",
        title: "Interní nástroje pro vzdělávání a procesy",
        long: "Jednoduché aplikace pro plánování, evidenci a automatizaci — aby se vzdělávání dalo řídit efektivně.",
        tags: ["automatizace", "workflow", "nástroje"],
        meta: "",
        desc: "Tvořím jednoduché aplikace v Unity Engine a webové nástroje, které pomáhají řídit procesy přehledněji a rychleji. V Google prostředí se pohybuji přirozeně a rutinní činnosti umím automatizovat pomocí skriptů – od drobných zlepšení až po malé interní utility. Jako ukázku přikládám screenshoty webů a nástrojů, které jsem navrhl a realizoval.",
        bullets: []
      },
      en: {
        kicker: "Apps & web apps",
        title: "Internal tools for training and workflows",
        long: "Lightweight apps for planning, tracking and automation — making training easier to manage efficiently.",
        tags: ["automation", "workflow", "tools"],
        meta: "",
        desc: "I build simple Unity Engine applications and web tools that make processes clearer, faster, and easier to manage. I’m comfortable working in the Google ecosystem and automate repetitive tasks with scripts—from small improvements to lightweight internal utilities. As examples, I’ve selected screenshots of websites and tools I designed and delivered.",
        bullets: []
      }
    }
  };

  const XP = {
    cs: [
      {
        when: "2022 - Současnost",
        role: "Koordinátor vzdělávání",
        meta: "Kompletní zastřešení vzdělávání ve firmě",
        bullets: [
          "Realizace a tvorba vzdělávání ve firmě (hard/soft skills, onboarding).",
          "Koordinace a mentoring ~20 trenérů napříč ČR (metodika, standardy, školení trenérů).",
          "Zpětná vazba, testovací nástroje a vyhodnocování dopadu školení.",
          "Modernizace a automatizace (skripty/šablony), využití AI v praxi.",
          "Edukativní obsah včetně grafiky (manuály, checklisty, komiks)."
        ]
      },
      {
        when: "2019 - 2022",
        role: "Vedoucí provozu",
        meta: "Provoz & péče o kurýry",
        bullets: [
          "Zastřešení péče o ~50 kurýrů (kvalita, procesy, standardy).",
          "Fakturace a odměňování, správa dokumentů a smluv.",
          "Správa technologií, komunikace se zákazníky a externími partnery.",
          "Spolupráce na integracích a zlepšování procesů."
        ]
      }
    ],
    en: [
      {
        when: "2022 - Present",
        role: "Training Coordinator",
        meta: "End-to-end training ownership",
        bullets: [
          "Training delivery and creation across the company (hard/soft skills, onboarding).",
          "Coordination and mentoring of ~20 trainers across Czechia (methodology, standards, train-the-trainer).",
          "Feedback, assessment tools and training impact evaluation.",
          "Modernization and automation (scripts/templates), practical AI usage.",
          "Educational content including graphics (manuals, checklists, comics)."
        ]
      },
      {
        when: "2019 - 2022",
        role: "Operations Manager",
        meta: "Operations & courier care",
        bullets: [
          "Oversight of ~50 couriers (quality, processes, standards).",
          "Invoicing and compensation, document and contract administration.",
          "Technology administration, communication with customers and external partners.",
          "Collaboration on integrations and process improvements."
        ]
      }
    ]
  };

  const EDU = {
    cs: [
      {
        title: "Certifikovaný lektor dalšího vzdělávání",
        school: "Certifikace",
        type: "Ministerstvo školství",
        years: "2024"
      },
      {
        title: "Maturita — střední zdravotnická škola",
        school: "Škola",
        type: "Střední zdravotnická škola",
        years: "2013–2017"
      }
    ],
    en: [
      {
        title: "Certified Continuing Education Trainer",
        school: "Certification",
        type: "Ministry of Education",
        years: "2024"
      },
      {
        title: "High school diploma — Secondary medical school",
        school: "School",
        type: "Secondary Nursing School",
        years: "2013–2017"
      }
    ]
  };

  const SKILL_ICONS = [
    { label: "Unitiy engine", file: "photoshop.png" },
    { label: "Notion", file: "illustrator.png" },
    { label: "Github", file: "indesign.png" },
    { label: "Umělá inteligence", file: "figma.png" },
    { label: "Scriptování / Automatizace", file: "coreldraw-icon.png" },
    { label: "Angličtina (B1+)", file: "unreal-engine-icon.png" },
    { label: "Canva", file: "figma.png" }
  ];

  const cursorTip = document.getElementById("cursorTip");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxMeta = document.getElementById("lightboxMeta");
  const lightboxDesc = document.getElementById("lightboxDesc");
  const lightboxList = document.getElementById("lightboxList");
  const xpList = document.getElementById("xpList");
  const eduList = document.getElementById("eduList");

  const orbit = document.querySelector(".orbit");
  const photo = document.querySelector(".orbit__photo");
  const items = Array.from(document.querySelectorAll(".orbit__item"));
  const fillPath = document.querySelector(".orbit__arcFill");
  const basePath = document.querySelector(".orbit__arcBase");

  let revealObserver = null;

  function injectSkillIcons() {
    const map = new Map(SKILL_ICONS.map(x => [x.label.toLowerCase(), x.file]));
    const nodes = Array.from(document.querySelectorAll(".skillLogo"));
    if (nodes.length === 0) return;

    nodes.forEach(btn => {
      if (btn.querySelector("img")) return;

      const label = (btn.dataset.label || btn.getAttribute("aria-label") || "").trim();
      const file = map.get(label.toLowerCase());
      if (!file) return;

      btn.innerHTML = "";
      const img = document.createElement("img");
      img.src = `assets/icons/${file}`;
      img.alt = "";
      img.loading = "lazy";
      btn.appendChild(img);
    });
  }

  function renderEdu(lang) {
    if (!eduList) return;
    eduList.innerHTML = "";
    (EDU[lang] || []).forEach(item => {
      const row = document.createElement("div");
      row.className = "eduItem";

      const left = document.createElement("div");

      const t = document.createElement("div");
      t.className = "eduTitle";
      t.textContent = item.title;

      const s = document.createElement("div");
      s.className = "eduSchool";
      s.textContent = item.school;

      const ty = document.createElement("div");
      ty.className = "eduType";
      ty.textContent = item.type;

      left.appendChild(t);
      left.appendChild(s);
      left.appendChild(ty);

      const years = document.createElement("div");
      years.className = "eduYears";
      years.textContent = item.years;

      row.appendChild(left);
      row.appendChild(years);
      eduList.appendChild(row);
    });
  }

  function setArcProgress(progress) {
    if (!fillPath) return;
    const L = Number(fillPath.dataset.len || 0);
    if (!L) return;
    const draw = Math.max(0, Math.min(L, L * progress));
    fillPath.style.strokeDasharray = `${draw} ${L}`;
  }

  function positionItems() {
    if (!orbit || !photo || items.length === 0) return;

    const orbitRect = orbit.getBoundingClientRect();
    const photoRect = photo.getBoundingClientRect();
    const cx = orbitRect.width / 2;
    const cy = orbitRect.height / 2;

    const photoRadius = Math.min(photoRect.width, photoRect.height) / 2;
    const r = photoRadius + Math.max(70, orbitRect.width * 0.13);
    const n = items.length;

    items.forEach((el, i) => {
      const t = (i + 1) / (n + 1);
      const angleDeg = -90 + t * 180;
      const angle = (angleDeg * Math.PI) / 180;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.dataset.progress = String(t);
    });

    if (fillPath && basePath && typeof basePath.getTotalLength === "function") {
      const L = basePath.getTotalLength();
      fillPath.style.strokeDasharray = `0 ${L}`;
      fillPath.dataset.len = String(L);
    }
  }

  function setupOrbitHover() {
    items.forEach((el) => {
      const on = () => setArcProgress(parseFloat(el.dataset.progress || "0"));
      const off = () => setArcProgress(0);
      el.addEventListener("mouseenter", on);
      el.addEventListener("focus", on);
      el.addEventListener("mouseleave", off);
      el.addEventListener("blur", off);
    });
  }

  function openLightbox(btn) {
    if (!lightbox || !lightboxImg) return;

    const smallImg = btn.querySelector("img");
    const src = (smallImg && smallImg.src) ? smallImg.src : (btn.getAttribute("data-img") || "");
    lightboxImg.src = src;

    lightboxImg.alt = btn.dataset.title || "";
    if (lightboxTitle) lightboxTitle.textContent = btn.dataset.title || "";
    if (lightboxMeta) lightboxMeta.textContent = btn.dataset.meta || "";
    if (lightboxDesc) lightboxDesc.textContent = btn.dataset.desc || "";

    if (lightboxList) {
      lightboxList.innerHTML = "";
      const parts = (btn.dataset.bullets || "").split("|").map(s => s.trim()).filter(Boolean);
      parts.forEach(t => {
        const li = document.createElement("li");
        li.textContent = t;
        lightboxList.appendChild(li);
      });
    }

    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightbox || !lightboxImg) return;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  function setupWork() {
    const medias = Array.from(document.querySelectorAll(".workMedia"));
    const canHover = window.matchMedia && window.matchMedia("(hover: hover)").matches;

    medias.forEach(btn => {
      btn.style.setProperty("--mx", "50%");
      btn.style.setProperty("--my", "50%");

      btn.addEventListener("pointermove", (e) => {
        const r = btn.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        const y = ((e.clientY - r.top) / r.height) * 100;
        btn.style.setProperty("--mx", `${x}%`);
        btn.style.setProperty("--my", `${y}%`);

        if (cursorTip && canHover) {
          cursorTip.style.left = `${e.clientX + 14}px`;
          cursorTip.style.top = `${e.clientY + 14}px`;
        }
      });

      btn.addEventListener("pointerenter", (e) => {
        if (cursorTip && canHover) {
          cursorTip.classList.add("is-on");
          cursorTip.style.left = `${e.clientX + 14}px`;
          cursorTip.style.top = `${e.clientY + 14}px`;
        }
      });

      btn.addEventListener("pointerleave", () => {
        if (cursorTip) cursorTip.classList.remove("is-on");
      });

      btn.addEventListener("click", () => openLightbox(btn));
    });
  }

  function setupReveal() {
    const revealEls = Array.from(document.querySelectorAll("[data-reveal]"));
    const trails = Array.from(document.querySelectorAll("[data-trail]"));

    const showAll = () => {
      revealEls.forEach(el => el.classList.add("is-in"));
      trails.forEach(el => el.classList.add("is-drawn"));
    };

    try {
      if (revealObserver) revealObserver.disconnect();
      if (!("IntersectionObserver" in window)) {
        showAll();
        return;
      }

      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const el = entry.target;
          if (el.hasAttribute("data-trail")) {
            if (entry.isIntersecting) el.classList.add("is-drawn");
            else el.classList.remove("is-drawn");
            return;
          }
          if (entry.isIntersecting) el.classList.add("is-in");
          else el.classList.remove("is-in");
        });
      }, { threshold: 0.18 });

      revealEls.forEach(el => revealObserver.observe(el));
      trails.forEach(el => revealObserver.observe(el));
    } catch (err) {
      console.error("setupReveal failed:", err);
      showAll();
    }
  }

  function applyLang(lang) {
    document.body.dataset.lang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const value = I18N[lang] ? I18N[lang][key] : null;
      if (value != null) el.textContent = value;
    });

    if (cursorTip) cursorTip.textContent = (I18N[lang] && I18N[lang].open) ? I18N[lang].open : "Open";

    document.querySelectorAll("[data-label-cs][data-label-en]").forEach(el => {
      el.dataset.label = lang === "en" ? el.dataset.labelEn : el.dataset.labelCs;
    });

    document.querySelectorAll(".workRow[data-work]").forEach(row => {
      const id = row.dataset.work;
      const data = WORK[id] && WORK[id][lang] ? WORK[id][lang] : null;
      if (!data) return;

      const kicker = row.querySelector(".workKicker");
      const title = row.querySelector(".workH");
      const desc = row.querySelector(".workP");
      const tagsWrap = row.querySelector(".workTags");
      const btn = row.querySelector(".workMedia");
      const img = btn ? btn.querySelector("img") : null;

      if (kicker) kicker.textContent = data.kicker;
      if (title) title.textContent = data.title;
      if (desc) desc.textContent = data.long;

      if (tagsWrap) {
        tagsWrap.innerHTML = "";
        (data.tags || []).forEach(t => {
          const s = document.createElement("span");
          s.className = "tag";
          s.textContent = t;
          tagsWrap.appendChild(s);
        });
      }

      if (btn) {
        btn.dataset.title = data.title;
        btn.dataset.meta = data.meta;
        btn.dataset.desc = data.desc;
        btn.dataset.bullets = (data.bullets || []).join("|");
        btn.setAttribute("aria-label", `${I18N[lang].open}: ${data.title}`);
      }

      if (img) img.alt = data.title;
    });

    if (xpList) {
      xpList.innerHTML = "";
      (XP[lang] || []).forEach(item => {
        const card = document.createElement("article");
        card.className = "xpCard reveal";
        card.setAttribute("data-reveal", "");

        const grid = document.createElement("div");
        grid.className = "xpCard__grid";

        const left = document.createElement("div");
        const when = document.createElement("div");
        when.className = "xpWhen";
        when.textContent = item.when;

        const ul = document.createElement("ul");
        ul.className = "xpBullets";
        (item.bullets || []).forEach(b => {
          const li = document.createElement("li");
          li.textContent = b;
          ul.appendChild(li);
        });

        left.appendChild(when);
        left.appendChild(ul);

        const right = document.createElement("div");
        right.className = "xpRight";
        const role = document.createElement("div");
        role.className = "xpRole";
        role.textContent = item.role;
        const meta = document.createElement("div");
        meta.className = "xpMeta";
        meta.textContent = item.meta;

        right.appendChild(role);
        right.appendChild(meta);

        grid.appendChild(left);
        grid.appendChild(right);
        card.appendChild(grid);
        xpList.appendChild(card);
      });
    }

    renderEdu(lang);
    setupReveal();
    localStorage.setItem("lang", lang);
    injectSkillIcons();
  }

  function setupLangToggle() {
    document.querySelectorAll(".langToggle__btn").forEach(btn => {
      btn.addEventListener("click", () => applyLang(btn.dataset.lang));
    });
  }

  function init() {
    try {
      const yearEl = document.getElementById("year");
      if (yearEl) yearEl.textContent = new Date().getFullYear();

      setupReveal();
      positionItems();
      window.addEventListener("resize", positionItems);

      setupOrbitHover();
      setupWork();
      setupLangToggle();

      injectSkillIcons();

      const saved = localStorage.getItem("lang");
      applyLang(saved === "en" ? "en" : "cs");
    } catch (err) {
      console.error("❌ init crashed:", err);
      document.querySelectorAll("[data-reveal]").forEach(el => el.classList.add("is-in"));
      document.querySelectorAll("[data-trail]").forEach(el => el.classList.add("is-drawn"));
    }
  }

  document.addEventListener("click", (e) => {
    const target = (e.target instanceof Element) ? e.target : (e.target && e.target.parentElement ? e.target.parentElement : null);
    if (!target) return;

    const closeEl = target.closest("[data-close]");
    if (closeEl) closeLightbox();

    const a = target.closest("a[href^='#']");
    if (a) {
      const id = a.getAttribute("href");
      const targetEl = document.querySelector(id);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
