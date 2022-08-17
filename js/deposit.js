document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositInputFieldTotal = getElementByValue("deposit-field");
  const currentDepositAmount = getElementByText("deposit-amount");
  const totalDeposit = depositInputFieldTotal + currentDepositAmount;
  setValue("deposit-amount", totalDeposit);

  const previoudBalance = getElementByText("balance-amount");
  const totalBalance = previoudBalance + depositInputFieldTotal;
  setValue("balance-amount", totalBalance);
});
