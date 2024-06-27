"use strict";

const locationInput = document.getElementById("locationInput");
const dateInput = document.getElementById("dateInput");
const amountInput = document.getElementById("amountInput");

const submit = document.querySelector("button.submit");
const noExpStr = document.querySelector(".no-exp-str");

const deleteBtn = document.querySelector("[data-delete]");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    locationInput.value !== "" &&
    dateInput.value !== "" &&
    amountInput.value !== ""
  ) {
    const tableElements = ` <tr class="table-data">
              <td data-name>${locationInput.value}</td>
              <td data-date>${dateInput.value}</td>
              <td data-amount>${amountInput.value}</td>
              <td data-delete class='delete'>Delete</td>
             `;
    noExpStr.classList.add("hidden");
    // document.querySelector("[data-name]").textContent = locationInput.value;
    // document.querySelector("[data-date]").textContent = dateInput.value;
    // document.querySelector("[data-amount]").textContent = amountInput.value;
    document
      .querySelector("table")
      .insertAdjacentHTML("beforeend", tableElements);
  }

  locationInput.value = "";
  dateInput.value = "";
  amountInput.value = "";
});

document.querySelector("table").addEventListener("click", function (event) {
  if (event.target.matches("[data-delete]")) {
    // Check if the clicked element is a delete button
    event.target.closest(".table-data").remove(); // Remove the entire row
  }
});
