let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
    document.getElementById('display').value = displayValue;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function calculateTrigonometry(operation) {
  const angle = parseFloat(displayValue);
  if (!isNaN(angle)) {
    switch (operation) {
      case 'tan':
        displayValue = Math.tan(angle).toString();
        break;
      case 'sin':
        displayValue = Math.sin(angle).toString();
        break;
      case 'cos':
        displayValue = Math.cos(angle).toString();
        break;
      default:
        break;
    }
    document.getElementById('display').value = displayValue;
  } else {
    document.getElementById('display').value = 'Invalid Input';
  }
}
