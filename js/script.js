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

var name = writeUsForm.querySelector("[name=username]");
var email = writeUsForm.querySelector("[name=email]");

    link.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsForm.classList.add("write-us-form-show");
    console.log("Вызвали модальное окно")
});
    close.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsForm.classList.remove("write-us-form-show");
    console.log("Закрыли модальное окно")
    writeUsForm.classList.remove("modal-error");
});
    writeUsForm.addEventListener("submit", function (evt) {
    writeUsForm.classList.remove("modal-error");
    if (!name.value || !email.value) {
    evt.preventDefault();
    writeUsForm.classList.remove("modal-error");
    writeUsForm.offsetWidth = writeUsForm.offsetWidth;
    writeUsForm.classList.add("modal-error");
  }
});
