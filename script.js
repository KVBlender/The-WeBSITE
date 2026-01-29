// 1. Handle the Main Header Morphing
const mainHeader = document.getElementById("main-header-card");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // Threshold to trigger the morph (adjusted slightly)
  if (scrollY > 100) {
    mainHeader.classList.add("header-minimized");
  } else {
    mainHeader.classList.remove("header-minimized");
  }
});


// 2. Handle the fading of subsequent sticky blocks
// We use IntersectionObserver to detect when a block is in the "active" viewing area.

const stickyWrappers = document.querySelectorAll('.sticky-wrapper');

const observerOptions = {
  root: null, // use browser viewport
  rootMargin: '-20% 0px -20% 0px', // Adjusts the active area to the center 60% of screen
  threshold: 0
};

const observerCallback = (entries) => {
  entries.forEach(entry => {
    // If the wrapper is intersecting with our defined center area
    if (entry.isIntersecting) {
      entry.target.classList.add('is-active');
    } else {
      // Optional: remove this else block if you want them to stay visible once scrolled past
      entry.target.classList.remove('is-active');
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Start observing each sticky wrapper
stickyWrappers.forEach(wrapper => {
  observer.observe(wrapper);
});
