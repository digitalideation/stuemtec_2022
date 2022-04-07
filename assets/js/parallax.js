// PARALLAX:JS
var scene = document.getElementById('header-img');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true,
  /*limitY: 100,
  limitX: 100,*/
  frictionX: 0.05,
  frictionY: 0.05
});