var headingBanner = document.getElementById('heading-banner')
var headingClose = document.getElementById('btn-close')
headingClose.addEventListener('click', (e) => {
  headingBanner.classList.add("hide")
  headingBanner.classList.remove("d-flex")
})