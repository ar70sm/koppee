document.querySelector("nav > i.list").onclick=()=>document.querySelector("nav > i.list").classList.toggle("active")

// carousel of wrapper

$("#wrapper .owl-carousel").owlCarousel({
  loop: true,
  nav: true,
  autoplay: true,
  mouseDrag: false,
  dots: false,
  smartSpeed: 1000,
  items: 1,
});
// go to up button

addEventListener("scroll", () => {
  if (window.scrollY > 50)
    document.querySelector(".goUp").classList.add("seen");
  else document.querySelector(".goUp").classList.remove("seen");
});

// carousel of testimonial

$("#testimonial .owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  margin:20,
  mouseDrag: false,
  smartSpeed: 700,
  autoplayTimeout:10000,
  center:true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

let mapCounter=0
let mabBox = document.querySelector("#contact .map")
setInterval(()=>{
  mabBox.style.backgroundImage=`linear-gradient(45deg ,transparent ${mapCounter-20}%,#fffa ${mapCounter-20}%,#fffa ${mapCounter}%, transparent ${mapCounter}%)`
  mapCounter++
  mapCounter>400 ?mapCounter=0:mapCounter++
},8)
