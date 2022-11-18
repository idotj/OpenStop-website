/**
 * Setup the phone screenshot slider
 **/

new Splide( '.carousel', {
  type: 'loop',
  arrows: false,
  pagination: true,
  autoplay: true,
  label: 'Slider für App Screenshots',
  i18n: {
    slideX: 'Zum %s. Screenshot wechseln',
    slideLabel: '%s von %s',
    select: 'Screenshot auswählen zu dem gewechselt werden soll'
  },
}).mount();


/**
 * Observes the visibility of all page sections.
 * Adds a "visible" class if a section becomes visible.
 **/

// remove noscript fallback "visible" body class
document.body.classList.remove('visible');

const observer = new IntersectionObserver(handleIntersect, {
  rootMargin: "0px 0px -33% 0px",
});

for (const element of document.querySelectorAll('.page-section')) {
  observer.observe(element);
}

function handleIntersect (entries) {
  for (const entry of entries) {
    const element = entry.target;
    if (entry.isIntersecting) {
      observer.unobserve(element);
      element.classList.add('visible');
    }
  }
}
