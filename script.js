"use strict";

// Days, Month and Year

const userYear = document.querySelector(".year");

// Button
const btnTapped = document.querySelector(".icon");

const day = 30;
const month = 12;
const year = 2024;

const ifNotUserday = function () {
  document.querySelector(".day").style.borderColor = "hsl(0, 100%, 67%)";
  document.querySelector(".one").style.color = "hsl(0, 100%, 67%)";
  document.querySelector(".require").textContent = "This field is required";
  document.querySelector(".require").style.fontWeight = "400";
  document.querySelector(".require").style.fontSize = "12px";
  document.querySelector(".require").style.color = "hsl(0, 100%, 67%)";
};

const ifNotUsermonth = function () {
  document.querySelector(".month").style.borderColor = "hsl(0, 100%, 67%)";
  document.querySelector(".two").style.color = "hsl(0, 100%, 67%)";
  document.querySelector(".requires").textContent = "This field is required";
  document.querySelector(".requires").style.fontWeight = "400";
  document.querySelector(".requires").style.fontSize = "12px";
  document.querySelector(".requires").style.color = "hsl(0, 100%, 67%)";
};

const ifNotUseryear = function () {
  document.querySelector(".year").style.borderColor = "hsl(0, 100%, 67%)";
  document.querySelector(".three").style.color = "hsl(0, 100%, 67%)";
  document.querySelector(".requirese").textContent = "This field is required";
  document.querySelector(".requirese").style.fontWeight = "400";
  document.querySelector(".requirese").style.fontSize = "12px";
  document.querySelector(".requirese").style.color = "hsl(0, 100%, 67%)";
};

btnTapped.addEventListener("click", function () {
  const userDay = Number(document.querySelector(".day").value);
  const userMonth = Number(document.querySelector(".month").value);
  const userYear = Number(document.querySelector(".year").value);

  //Calculations for the age
  const newYear = year - userYear;
  const newMonth = month - userMonth;
  const newDay = day - userDay;

  console.log(newMonth, newDay, newYear);

  // User day
  if (!userDay) {
    ifNotUserday();
  } else if (userDay > day) {
    document.querySelector(".day").style.borderColor = "hsl(0, 100%, 67%)";
    document.querySelector(".one").style.color = "hsl(0, 100%, 67%)";
    document.querySelector(".require").textContent = "Invalid Day";
    document.querySelector(".require").style.fontWeight = "400";
    document.querySelector(".require").style.fontSize = "12px";
    document.querySelector(".require").style.color = "hsl(0, 100%, 67%)";
  } else if (newDay) {
    document.querySelector(".slashone").textContent = newDay;
    document.querySelector(".day").style.borderColor = "hsl(0, 0%, 86%)";
    document.querySelector(".one").style.color = "hsl(0, 1%, 44%)";
    document.querySelector(".require").textContent = "";
  }
  // User Month
  if (!userMonth) {
    ifNotUsermonth();
  } else if (userMonth > month && userMonth > newMonth) {
    document.querySelector(".month").style.borderColor = "hsl(0, 100%, 67%)";
    document.querySelector(".two").style.color = "hsl(0, 100%, 67%)";
    document.querySelector(".requires").textContent = "Invalid Month";
    document.querySelector(".requires").style.fontWeight = "400";
    document.querySelector(".requires").style.fontSize = "12px";
    document.querySelector(".requires").style.color = "hsl(0, 100%, 67%)";
  } else if (newMonth) {
    document.querySelector(".slashtwo").textContent = newMonth;
    document.querySelector(".month").style.borderColor = "hsl(0, 0%, 86%)";
    document.querySelector(".two").style.color = "hsl(0, 1%, 44%)";
    document.querySelector(".requires").textContent = "";
  }

  // User Month
  if (!userYear) {
    ifNotUseryear();
  } else if (userYear > year) {
    document.querySelector(".year").style.borderColor = "hsl(0, 100%, 67%)";
    document.querySelector(".two").style.color = "hsl(0, 100%, 67%)";
    document.querySelector(".requirese").textContent = "Invalid Year";
    document.querySelector(".requirese").style.fontWeight = "400";
    document.querySelector(".requirese").style.fontSize = "12px";
    document.querySelector(".requirese").style.color = "hsl(0, 100%, 67%)";
  } else if (newYear) {
    document.querySelector(".year").style.borderColor = "hsl(0, 0%, 86%)";
    document.querySelector(".slashthree").textContent = newYear;
    document.querySelector(".three").style.color = "hsl(0, 1%, 44%)";
    document.querySelector(".requirese").textContent = "";
  }
});
