const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const stickyCta = document.querySelector(".mobile-sticky-cta");
const hero = document.querySelector(".hero");
const orderSection = document.querySelector("#order");
const gallerySection = document.querySelector("#gallery");
const mobileQuery = window.matchMedia("(max-width: 620px)");
const galleryDialog = document.querySelector(".gallery-lightbox");
const galleryDialogImage = galleryDialog?.querySelector("img");
const galleryDialogCaption = galleryDialog?.querySelector("figcaption");
const galleryDialogClose = galleryDialog?.querySelector(".gallery-lightbox-close");

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
  const galleryRect = gallerySection?.getBoundingClientRect();
  const pastHero = heroBottom < window.innerHeight * 0.35;
  const beforeOrder = orderTop > window.innerHeight * 0.7;
  const viewingGallery = galleryRect
    ? galleryRect.top < window.innerHeight * 0.82 && galleryRect.bottom > window.innerHeight * 0.18
    : false;
  const lightboxOpen = galleryDialog?.hasAttribute("open") ?? false;

  setStickyVisible(pastHero && beforeOrder && !viewingGallery && !lightboxOpen);
};

window.addEventListener("scroll", updateStickyCta, { passive: true });
window.addEventListener("resize", updateStickyCta);

if (typeof mobileQuery.addEventListener === "function") {
  mobileQuery.addEventListener("change", updateStickyCta);
} else {
  mobileQuery.addListener?.(updateStickyCta);
}

updateStickyCta();

document.querySelectorAll(".gallery-button").forEach((button) => {
  button.addEventListener("click", () => {
    if (!galleryDialog || !galleryDialogImage || !galleryDialogCaption) {
      return;
    }

    const fullImage = button.getAttribute("data-gallery-full");
    const caption = button.getAttribute("data-gallery-caption") || "";
    const thumbnail = button.querySelector("img");

    if (!fullImage || !(thumbnail instanceof HTMLImageElement)) {
      return;
    }

    galleryDialogImage.src = fullImage;
    galleryDialogImage.alt = thumbnail.alt;
    galleryDialogCaption.textContent = caption;
    galleryDialog.showModal();
    updateStickyCta();
  });
});

galleryDialogClose?.addEventListener("click", () => {
  galleryDialog?.close();
});

galleryDialog?.addEventListener("click", (event) => {
  if (event.target === galleryDialog) {
    galleryDialog.close();
  }
});

galleryDialog?.addEventListener("close", () => {
  if (galleryDialogImage) {
    galleryDialogImage.removeAttribute("src");
    galleryDialogImage.alt = "";
  }

  updateStickyCta();
});
