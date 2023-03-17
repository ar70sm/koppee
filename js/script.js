let wrapCarousel =document.querySelectorAll("#wrapper ul li");
let wrapCarouselButton =document.querySelectorAll("#wrapper > i");


let wrapInterval=setInterval(()=>{
  wrapCarousel.forEach(e=>{
    e.classList.toggle("active")
  })
},5000)
wrapCarouselButton.forEach(e=>{
  e.onclick=()=>{
    wrapCarousel.forEach(e=>{
      e.classList.toggle("active")
    })  
    clearInterval(wrapInterval)
    wrapInterval=setInterval(()=>{
      wrapCarousel.forEach(e=>{
        e.classList.toggle("active")
      })
    },5000)
  }
})