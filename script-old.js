
const orderButton = document.getElementById("orderButton");
const message = document.getElementById("message");

orderButton.addEventListener("click", function() {
    message.textContent = "Отличный выбор! Выбери напиток в нашем меню ☕";
    message.style.color = "#b36a3b";
    message.style.marginTop = "15px";
});
