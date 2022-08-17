function getElementByValue(elementId) {
  const elementField = document.getElementById(elementId);
  const elementAmount = elementField.value;
  const elementString = parseFloat(elementAmount);
  elementField.value = "";
  return elementString;
}

function getElementByText(textId) {
  const elementText = document.getElementById(textId);
  const elementTextAmount = elementText.innerText;
  const elementTextString = parseFloat(elementTextAmount);
  return elementTextString;
}

function setValue(elementIdFind, newValue) {
  const findId = document.getElementById(elementIdFind);
  findId.innerText = newValue;
}
