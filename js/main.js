const formInput = document.querySelector(".form-input");
const description = document.querySelector(".info__description");

//regular expression fot input
formInput.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/[\!\@\#\$\%\^\&\*\(\)]/g, "");
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
