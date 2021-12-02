function onReady(callback) {
  let intervalID = window.setInterval(checkReady, 1000);
  function checkReady() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
          window.clearInterval(intervalID);
          callback.call(this);
      }
  }
}

function show(elem, value) {
  document.querySelector(elem).style.display = value ? 'block' : 'none';
}

onReady(function () {
  show('.preloader', false);
});