let totalBudget = 0;

const totalBudgetEl = document.getElementById("total-budget");
const formEl = document.getElementById("budget-form");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const typeSelect = document.getElementById("type");

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const amount = parseFloat(amountInput.value);
  const type = typeSelect.value;

  if (isNaN(amount) || amount <= 0) {
    return;
  }

  // Update total budget based on selected type
  if (type === "income") {
    totalBudget += amount;
  } else if (type === "expense") {
    totalBudget -= amount;
  }

  // Display updated budget
  totalBudgetEl.textContent = totalBudget;

  // Clear inputs
  descriptionInput.value = "";
  amountInput.value = "";
  typeSelect.value = "income";
});