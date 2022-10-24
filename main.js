const billInput = document.querySelector("#bill-input");
const alertBill = document.querySelector(".bill-div label .alert");
let billAmount;

const tibBtns = document.querySelector(".tips");
const listTibBtns = document.querySelectorAll(".tip-btn");
const tipInput = document.querySelector("#tip-input");
let tipPar;

const peopleInput = document.querySelector("#people-input");
const alertPeople = document.querySelector(".people-div label .alert");
let peopleNumber;

const tipNum = document.querySelector(".tip-num .amount");
const totalNum = document.querySelector(".total-num .amount");

const resetBtn = document.querySelector(".reset-btn");

const renderAmount = function (bill = 0, tip = 0, people = 1) {
  // if (!bill || !tip || !people) return;
  // if (bill && !people) {
  //   totalNum.textContent = bill.toFixed(2);
  // } else if (bill && people) {
  //   totalNum.textContent = (bill / people).toFixed(2);
  // }
  billForPerson = bill / people;
  tipForPerson = (bill * (tip / 100)) / people;
  tipNum.textContent = tipForPerson.toFixed(2);
  totalNum.textContent = (billForPerson + tipForPerson).toFixed(2);
  resetBtn.classList.add("active");
};

billInput.addEventListener("input", function (e) {
  const value = +e.target.value;
  if (value < 0) {
    alertBill.textContent = "Can't be minus";
    alertBill.style.display = "block";
    billInput.classList.add("wrong");
  } else if (value === 0) {
    alertBill.textContent = "Can't be zero";
    alertBill.style.display = "block";
    billInput.classList.add("wrong");
  } else {
    billInput.classList.remove("wrong");
    alertBill.style.display = "none";
    billAmount = value;
    renderAmount(billAmount, tipPar, peopleNumber);
  }
});

tibBtns.addEventListener("click", function (e) {
  const target = e.target;
  if (target.classList.contains("tip-btn")) {
    listTibBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    tipInput.value = "";
    tipPar = +target.dataset.number;
    target.classList.add("active");
    renderAmount(billAmount, tipPar, peopleNumber);
  }
});

tipInput.addEventListener("input", function (e) {
  if (e.target.value >= 0) {
    listTibBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    tipPar = +e.target.value;
    renderAmount(billAmount, tipPar, peopleNumber);
  }
});

peopleInput.addEventListener("input", function (e) {
  const value = +e.target.value;
  if (value < 0) {
    alertPeople.textContent = "Can't be minus";
    alertPeople.style.display = "block";
    peopleInput.classList.add("wrong");
  } else if (value === 0) {
    alertPeople.textContent = "Can't be zero";
    alertPeople.style.display = "block";
    peopleInput.classList.add("wrong");
  } else {
    alertPeople.style.display = "none";
    peopleInput.classList.remove("wrong");
    peopleNumber = value;
    renderAmount(billAmount, tipPar, peopleNumber);
  }
});

resetBtn.addEventListener("click", function () {
  if (resetBtn.classList.contains("active")) {
    billInput.classList.remove("wrong");
    billInput.value = "";
    alertBill.style.display = "none";
    billAmount = 0;

    listTibBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    tipInput.value = "";
    tipPar = 0;

    peopleInput.classList.remove("wrong");
    peopleInput.value = "";
    alertPeople.style.display = "none";
    peopleNumber = 1;

    tipNum.textContent = "0.00";
    totalNum.textContent = "0.00";

    resetBtn.classList.remove("active");
  }
});

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/*
function workWithInputs (event, input, alert , number) {
  const value = +event.target.value;
  if (value < 0) {
    alert.textContent = "Can't be minus";
    alert.style.display = "block";
    input.classList.add("wrong");
  } else if (value === 0) {
    alert.textContent = "Can't be zero";
    alert.style.display = "block";
    input.classList.add("wrong");
  } else {
    alert.style.display = "none";
    input.classList.remove("wrong");
    number = value;
  }
}
*/
