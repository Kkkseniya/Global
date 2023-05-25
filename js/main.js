const formInput = document.querySelector(".form-input");
const description = document.querySelector(".info__description");
const burgerMenu = document.querySelector(".burger-menu");
const headerMobile = document.querySelector(".header-mobile");

//regular expression fot input
formInput.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/[\!\@\#\$\%\^\&\*\(\)]/g, "");
});

burgerMenu.addEventListener("click", () => {
  headerMobile.classList.toggle("header-mobile--visible");
});

//getting data for description
const getDescription = () => {
  fetch("https://baconipsum.com/api/?type=lucky")
    .then((res) => res.json())
    .then((data) => {
      description.textContent = data;
    });
};

getDescription();
