/*Товар добавлен в корзину"*/
var cartLink = document.querySelector(".buy"); 
var cartPopup= document.querySelector(".cart-popup");
var cartClose = cartPopup.querySelector(".modal-close");

    cartLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("cart-popup-show");
});

    cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("cart-popup-show");
});

/*Вызов карты*/
var mapLink = document.querySelector(".map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");
  
    mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-map-show");
  });

    mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-map-show");
  });
/*Вызов кнопки "Написать нам"*/
var link = document.querySelector(".write-us-button"); 
var writeUsForm = document.querySelector(".write-us-form");
var close = writeUsForm.querySelector(".modal-close");

var form = writeUsForm.querySelector("form");
var name = writeUsForm.querySelector("[name=user-name]");
var email = writeUsForm.querySelector("[name=email]");

    link.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsForm.classList.add("write-us-form-show");
});

    close.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsForm.classList.remove("write-us-form-show");
    writeUsForm.classList.remove("modal-error");
});

  form.addEventListener("submit", function (evt) {
    form.classList.remove("modal-error")
    if (!username.value || !email.value) {
    evt.preventDefault();
    form.classList.remove("modal-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("modal-error");
  }
});
