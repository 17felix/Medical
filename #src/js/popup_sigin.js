// -- Sigin
let popupSigin = document.querySelector(".popup-wrapper--sigin");
let popupFormSigin = document.querySelector(".popup-form--sigin");
let popupBtnSigin = document.querySelector(".btn-popup--open-sigin");
let popupCloseSigin = document.querySelector(".btn-popup--close-sigin");

popupBtnSigin.addEventListener("click", (e) => {
  e.preventDefault;
  showPopupSigin();
});

popupCloseSigin.addEventListener("click", (e) => {
  e.preventDefault;
  removePopupSigin();
});

popupFormSigin.addEventListener("submit", () => {
  removePopupSigin();
});

popupSigin.addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("popup-wrapper")) {
    removePopupSigin();
  } else return;
});

function showPopupSigin() {
  popupSigin.classList.add("active");
  bodyScroll();
}

function removePopupSigin() {
  popupSigin.classList.remove("active");
  bodyScroll();
}