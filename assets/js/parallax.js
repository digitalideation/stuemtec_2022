// PARALLAX:JS
var scene = document.getElementById('header-img');
var parallaxInstance = new Parallax(scene, {
  relativeInput: false,
  limitY: 50,
  limitX: 50,
  frictionX: 0.1,
  frictionY: 0.1
});