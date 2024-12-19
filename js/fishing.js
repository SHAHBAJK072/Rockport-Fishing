const swiper = new Swiper('.swiper', {
    speed:800,
autoplay:{delay: 4000},
autoHeight: true,
loop: true,

// If we need pagination
pagination: {
el: '.swiper-pagination',
},

// Navigation arrows
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},


});
//</script>
    // jquery (back-to-top)
    // $(document).ready(function(){
    //     $("#btd").click(function(){
    //       $('html').animate({
    //         scrollTop:0
    //       })
    //     })
    //   })
    
// Button reference
const backToTop = document.getElementById('btd');

// Scroll event listener
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTop.style.display = 'flex'; // Show button
  } else {
    backToTop.style.display = 'none'; // Hide button
  }
});

// Click event to scroll to top
backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});