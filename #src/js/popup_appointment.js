
// -- Appointment
let popupAppointment = document.querySelector(".popup-wrapper--appointment");
let popupFormAppointment = document.querySelector(".popup-form--appointment");
let popupBtnAppointment = document.querySelector(".btn-popup--open-appointment");
let popupCloseAppointment = document.querySelector(".btn-popup--close-appointment");

popupBtnAppointment.addEventListener("click", (e) => {
  e.preventDefault;
  showPopupAppointment();
});

popupCloseAppointment.addEventListener("click", (e) => {
  e.preventDefault;
  removePopupAppointment();
});

popupFormAppointment.addEventListener("submit", () => {
  removePopupAppointment();
});

popupAppointment.addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("popup-wrapper")) {
    removePopupAppointment();
  } else return;
});

function showPopupAppointment() {
  popupAppointment.classList.add("active");
  bodyScroll();
}

function removePopupAppointment() {
  popupAppointment.classList.remove("active");
  bodyScroll();
}


