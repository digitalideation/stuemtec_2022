gsap.set(".section-1 .flower-wrapper > div", {scale: "0.5", rotate: "460", yPercent: 0}),
gsap.to(".section-1 .flower-wrapper > div", {scale: "1", rotate: "0", scrollTrigger: {
      trigger: ".section-1",
      start: "top top",
      end: "+=1200",
      //markers:true,
      pin: true,
      scrub: true
}})