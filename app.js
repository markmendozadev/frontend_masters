let numbers = Array.from(document.querySelectorAll("ul li"));
numbers.forEach((number, i) => {
  const data_number = number.getAttribute("data-count");

  number.addEventListener("click", (e) => {
    numbers.forEach((num) => {
      num.classList.remove("active");
    });
    if (i + 1 == data_number) {
      e.target.classList.add("active");
    }
  });
});

let button = document.querySelector(".card button");
const initialVal = document.querySelector("#initialNumber");
const length = document.querySelector("#length");
button.addEventListener("click", () => {
  document.querySelector("#main").style.display = "none";
  document.querySelector("#onSubmit").style.display = "block";

  numbers.forEach((num) => {
    if (num.classList.contains("active")) {
      initialVal.innerText = num.getAttribute("data-count");
      length.innerText = numbers.length;
    }
  });
});
