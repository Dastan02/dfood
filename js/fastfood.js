let popup = document.querySelector(".fastfood__popup");

// Get the modal
var popupBg = document.querySelector(".fastfood__popup__bg");

// Get the button that opens the modal
var openPopupButtons = document.querySelectorAll(".fastfood__btn");
document.querySelector
// Get the <span> element that closes the modal
var closePopup = document.getElementsByClassName("fastfood__close-popup")[0];

// When the user clicks on the button, open the modal
const buttonOpen = [...openPopupButtons];

buttonOpen.map((item) => {
  item.addEventListener("click", () => {
    popupBg.style.display = "block";
    popup.style.display = "block"
  });
});

// When the user clicks on <span> (x), close the modal
closePopup.onclick = function () {
  popupBg.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == popupBg) {
    popupBg.style.display = "none";
  }
};