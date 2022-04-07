gsap.set(".section-1 .flower-wrapper > div", {scale: "0", rotate: "460", yPercent: 0}),
gsap.to(".section-1 .flower-wrapper > div", {scale: "1", rotate: "0", scrollTrigger: {
      trigger: ".section-1",
      start: "top bottom",
      end: "bottom",
      //markers:true,
      //pin: true,
      scrub: 1
}})