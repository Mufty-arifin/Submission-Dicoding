//event pada saat link di klik
$(".page-scroll").on("click", function (event) {
  // ambil isi herf
  var tujuan = $(this).attr("href");
  // tangkap elemen ybs
  var elemenTujuan = $(tujuan);

  // pindahlan scroll
  $("html,body").animate(
    {
      scrollTop: elemenTujuan.offset().top - 50,
    },
    1250,
    "easeInOutExpo"
  );
  event.preventDefault();
});

//hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
