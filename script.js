const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const stickyCta = document.querySelector(".mobile-sticky-cta");
const hero = document.querySelector(".hero");
const orderSection = document.querySelector("#order");
const mobileQuery = window.matchMedia("(max-width: 620px)");

menuButton?.addEventListener("click", () => {
  const isOpen = siteNav?.classList.toggle("is-open") ?? false;
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    siteNav.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  }
});

const updateStickyCta = () => {
  if (!stickyCta) {
    return;
  }

  const setStickyVisible = (isVisible) => {
    stickyCta.classList.toggle("is-visible", isVisible);
    stickyCta.setAttribute("aria-hidden", String(!isVisible));

    if (isVisible) {
      stickyCta.removeAttribute("tabindex");
    } else {
      stickyCta.setAttribute("tabindex", "-1");
    }
  };

  if (!mobileQuery.matches) {
    setStickyVisible(false);
    return;
  }

  const heroBottom = hero?.getBoundingClientRect().bottom ?? 0;
  const orderTop = orderSection?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;
  const pastHero = heroBottom < window.innerHeight * 0.35;
  const beforeOrder = orderTop > window.innerHeight * 0.7;

  setStickyVisible(pastHero && beforeOrder);
};

window.addEventListener("scroll", updateStickyCta, { passive: true });
window.addEventListener("resize", updateStickyCta);

if (typeof mobileQuery.addEventListener === "function") {
  mobileQuery.addEventListener("change", updateStickyCta);
} else {
  mobileQuery.addListener?.(updateStickyCta);
}

updateStickyCta();
