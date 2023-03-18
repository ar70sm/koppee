// very simple carousel on the wrapper

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

// go to up button

addEventListener("scroll",()=>{
  if (window.scrollY>50) document.querySelector(".goUp").classList.add("seen")
  else document.querySelector(".goUp").classList.remove("seen")
})
