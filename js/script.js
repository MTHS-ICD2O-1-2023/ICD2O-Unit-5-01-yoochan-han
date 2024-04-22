// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yoochan
// Created on: Apr 2024
// This file contains the JS functions for index.html
function ShowAnswer() {
const userAnswer = document.getElementById("get_UserAnswer").value
//get user's answer
const randomNumber = Math.floor(Math.random() * 6) + 1
// returns a random integer from 1 to 6 into variable "randomNumber"
if (userAnswer == randomNumber) {
  document.getElementById("TheAnswer").innerHTML = "True!"
}
else {
  document.getElementById("TheAnswer").innerHTML = "False.."
}
}