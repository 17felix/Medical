// == Authorization popup
// -- Login
let popupLogin = document.querySelector(".popup-wrapper--login");
let popupFormLogin = document.querySelector(".popup-form--login");
let popupBtnLogin = document.querySelector(".btn-popup--open-login");
let popupCloseLogin = document.querySelector(".btn-popup--close-login");

popupBtnLogin.addEventListener("click", (e) => {
  e.preventDefault;
  showPopupLogin();
});

popupCloseLogin.addEventListener("click", (e) => {
  e.preventDefault;
  removePopupLogin();
});

popupFormLogin.addEventListener("submit", () => {
  removePopupLogin();
});

popupLogin.addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("popup-wrapper")) {
    removePopupLogin();
  } else return;
});

function showPopupLogin() {
  popupLogin.classList.add("active");
  bodyScroll();
}

function removePopupLogin() {
  popupLogin.classList.remove("active");
  bodyScroll();
}

function bodyScroll() {
  document.body.classList.toggle("no-scroll");
}


