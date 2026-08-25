const all = (selector) => document.querySelectorAll(selector);

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2500);
}

function setText(selector, value) {
  if (!value) return;
  all(selector).forEach((element) => { element.textContent = value; });
}

async function loadConfig() {
  try {
    const response = await fetch("site-config.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Config unavailable");
    const config = await response.json();
    const version = config.version || "1.0.0";

    setText(".version-plain", version);
    setText(".version-prefixed", `v${version}`);
    setText(".last-update", config.lastUpdate);
    setText(".apk-size", config.apkSize);
    setText(".developer-name", config.developer);

    if (config.primaryDownloadUrl) all(".primary-download").forEach((link) => { link.href = config.primaryDownloadUrl; });
    if (config.alternativeDownloadUrl) all(".mirror-download").forEach((link) => { link.href = config.alternativeDownloadUrl; });
    if (config.shizukuTutorialUrl) all(".tutorial-target").forEach((link) => { link.href = config.shizukuTutorialUrl; });
    if (config.logoUrl) all(".app-logo").forEach((image) => { image.src = config.logoUrl; });

    if (config.telegramUsername) {
      const username = config.telegramUsername.replace(/^@/, "");
      all(".telegram-target").forEach((link) => { link.href = `https://t.me/${username}`; });
      setText(".telegram-name", `@${username}`);
    }
  } catch (error) {
    console.warn("Using the built-in website details.", error);
  }
}

all(".faq-list details").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    all(".faq-list details").forEach((other) => { if (other !== item) other.open = false; });
  });
});

all("a[href^='#']").forEach((link) => {
  link.addEventListener("click", () => {
    if (!document.querySelector(link.getAttribute("href"))) showToast("Section is not available yet.");
  });
});

loadConfig();
