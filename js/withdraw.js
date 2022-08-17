document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = getElementByValue("withdraw-field");
  const previousWithdrawAmount = getElementByText("withdraw-amount");
  const totalWithdraw = withdrawField + previousWithdrawAmount;
  setValue("withdraw-amount", totalWithdraw);

  const previousBalanceTotal = getElementByText("balance-amount");
  const nowTotalBalance = previousBalanceTotal - withdrawField;
  setValue("balance-amount", nowTotalBalance);
});
