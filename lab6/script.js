let s = "dwbyu@mail.ua";
let r = /^([a-z0-9]+)(\.[a-z0-9]+)*@([a-z0-9]+)(\.[a-z0-9]+)*$/i;
let a = s.match(r);
let task1 = document.getElementById("task1");
for (let i = 0; i < a.length; i++) {
  task1.innerHTML += "<hr>a[" + i + "] " + a[i];
}

document.getElementById("checkBtn").onclick = function() {
  validateField("email", /^[a-z0-9._%+-]+@pnu\.edu\.ua$/, "E-mail повинен містити @pnu.edu.ua");
  validateField("fullname", /^[A-ZА-ЯІЇЄ][a-zа-яіїє']+\s[A-ZА-ЯІЇЄ]+$/, "Ім’я з великої, прізвище великими літерами (латиниця або кирилиця)");
  validateField("login", /^[A-Za-z]+$/, "Логін лише латинські літери без пробілів");
  validateField("password", /^(?=.*[A-Za-z])(?=.*\d)(?=.*[_\-!@#$%^&*]).{8,}$/, "Мін. 8 символів, 1 буква, 1 цифра, 1 спецсимвол (_-!@#$%^&*)");
  validateField("index", /^\d{5}$/, "Поштовий індекс має містити рівно 5 цифр");
};

function validateField(id, regex, message) {
  let input = document.getElementById(id);
  let status = input.parentElement.querySelector(".status");
  let error = input.parentElement.parentElement.querySelector(".error");

  if (regex.test(input.value.trim())) {
    input.classList.add("valid");
    input.classList.remove("invalid");
    status.textContent = "✔️";
    status.style.color = "green";
    error.textContent = "";
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
    status.textContent = "❌";
    status.style.color = "red";
    error.textContent = message;
  }
}
