const accordion = document.getElementsByClassName('accordion');

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function(){
    this.classList.toggle('active')
  })
}
let popup = document.querySelector(".popup-wrapper");
let popupForm = document.querySelector(".popup-form");
let popupBtn = document.querySelector(".btn-popup--open");
let popupClose = document.querySelector(".btn-popup--close");

popupBtn.addEventListener("click", (e) => {
  e.preventDefault;
  showPopup();
});

popupClose.addEventListener("click", (e) => {
  e.preventDefault;
  removePopup();
});

popupForm.addEventListener("submit", () => {
  removePopup();
});

popup.addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("popup-wrapper")) {
    removePopup();
  } else return;
});

function showPopup() {
  popup.classList.add("active");
  bodyScroll();
}

function removePopup() {
  popup.classList.remove("active");
  bodyScroll();
}

function bodyScroll() {
  document.body.classList.toggle("no-scroll");
}


/*
// alert('Hello Gulp!');

function fontsStyle(params) {

  let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
  if (file_content == '') {
    fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
    return fs.readdir(path.build.fonts, function (err, items) {
      if (items) {
        let c_fontname;
        for (var i = 0; i < items.length; i++) {
          let fontname = items[i].split('.');
          fontname = fontname[0];
          if (c_fontname != fontname) {
            fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
          }
          c_fontname = fontname;
        }
      }
    })
  }
}

function cb() { }
function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
  callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
  
  testWebP(function (support) {
  
  if (support == true) {
  document.querySelector('body').classList.add('webp');
  }else{
  document.querySelector('body').classList.add('no-webp');
  }
});
// === Hamburger ===
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    menu.classList.add('active');
    body.classList.add('noscroll');
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    menu.classList.remove('active');
    body.classList.remove('noscroll');
  }
});
// === / Hamburger ===

*/

console.log("Use this: npm i --save-dev gulp-uglify-es");
