
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

/*Вызов кнопки "Написать нам"*/
var link = document.querySelector(".write-us-button"); 
var writeUsForm = document.querySelector(".write-us-form");
var close = writeUsForm.querySelector(".modal-close");
    link.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsForm.classList.add("write-us-form-show");
});

    close.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsForm.classList.remove("write-us-form-show");
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
