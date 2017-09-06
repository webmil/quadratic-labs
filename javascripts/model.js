(new THREE.FileLoader()).load('app.json', function (text) {
  function updateCamera(camera) {
    var koef = this.width / this.height;
    var top = (camera.right - camera.left) / koef / 2;
    camera.top = top;
    camera.bottom = -top;
    camera.updateProjectionMatrix();
  }

  var player = new APP.Player(updateCamera);
  player.load(JSON.parse(text));
  player.setSize(window.innerWidth, window.innerHeight);
  player.play();

  document.body.appendChild(player.dom);

  window.addEventListener('resize', function () {
    player.setSize(window.innerWidth, window.innerHeight);
  });


  var scene = player.getScene();
  var logo = scene.getObjectByName('QuadraticLabsLogo');

  var tween;

  function animateSlide(newRotation) {
    tween && tween.stop();
    tween = new TWEEN.Tween(logo.rotation).to(newRotation, 2000)
                     .easing(TWEEN.Easing.Back.Out)
                     .start();
  }

  function toRad(deg) {
    return deg * Math.PI / 180;
  }

  window.slide0 = function slide0() {
    animateSlide({x: 0, y: 0, z: 0});
  }


  window.slide1 = function slide1() {
    animateSlide({x: toRad(35), y: toRad(45), z: 0});
  }

  window.slide2 = function slide2() {
    animateSlide({x: toRad(90), y: 0, z: 0});
  }


  logo.rotation.x = -toRad(15);
  logo.rotation.y = 0;
  logo.rotation.z = 0;
});