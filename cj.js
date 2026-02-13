const root = document.documentElement;

const langCz = document.getElementById("langCz");
const langEn = document.getElementById("langEn");
const printBtn = document.getElementById("printBtn");
const printBtnEn = document.getElementById("printBtnEn");

function safeGet(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}

function safeSet(key, val) {
  try { localStorage.setItem(key, val); } catch (e) {}
}

function normalizeLang(lang) {
  return lang === "en" ? "en" : "cs";
}

function syncLangVisibility(l) {
  // Language buttons active state
  if (langCz) langCz.classList.toggle("active", l === "cs");
  if (langEn) langEn.classList.toggle("active", l === "en");

  // Print buttons visibility (don’t rely only on CSS)
  if (printBtn)  printBtn.hidden  = l !== "cs";
  if (printBtnEn) printBtnEn.hidden = l !== "en";
}

function setLang(lang, { persist = true } = {}) {
  const l = normalizeLang(lang);

  root.setAttribute("data-lang", l);
  root.setAttribute("lang", l);

  // ukládáme jen pro CV (hlavní web používá localStorage "lang")
  if (persist) safeSet("cvLang", l);

  syncLangVisibility(l);
}

langCz?.addEventListener("click", () => setLang("cs"));
langEn?.addEventListener("click", () => setLang("en"));

printBtn?.addEventListener("click", () => window.print());
printBtnEn?.addEventListener("click", () => window.print());

// Priority:
// 1) ?lang=cs/en v URL (kdyby ses rozhodl předávat lang param)
// 2) hlavní webový jazyk v localStorage "lang"
// 3) poslední jazyk v CV v localStorage "cvLang"
// 4) default "cs"
const urlLang = new URLSearchParams(window.location.search).get("lang");
const initial = urlLang || safeGet("lang") || safeGet("cvLang") || "cs";
setLang(initial);

// když se na hlavní stránce přepne jazyk, CV se dorovná
window.addEventListener("storage", (e) => {
  if (e.key !== "lang") return;
  if (!e.newValue) return;
  setLang(e.newValue, { persist: false });
});
