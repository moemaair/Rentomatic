var headingBanner = document.getElementById('heading-banner')
var headingClose = document.getElementById('btn-close')
headingClose.addEventListener('click', (e) => {
  headingBanner.classList.add("hide")
  headingBanner.classList.remove("d-flex")
})

// inherited the mobile view toggle from script.js
$().ready(function(){
  $('#hamburgerIcon').click(function (){
    $('.mobile-menu').toggle();
  })
})