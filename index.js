var initialPrice = document.querySelector(".initial-price");
var quantity = document.querySelector(".quantity");
var currentPrice = document.querySelector(".current-price");
var tellMeButton = document.querySelector(".tell-me-button");
var output = document.querySelector(".output");

tellMeButton.addEventListener("click", clickHandler);

function clickHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(quantity.value);
  var price = Number(currentPrice.value);
  calculateProfitAndLoss(ip, qty, price);
}

function calculateProfitAndLoss(ip, qty, price) {
  var profit = (price - ip) * qty;
  var loss = (ip - price) * qty;
  var profitPercentage = (profit / price) * 100;
  var lossPercentage = (loss / price) * 100;
  if (ip > price) {
    output.innerText =
      "Sorry, You have made a loss of " +
      loss +
      ". The loss percentage is " +
      lossPercentage.toFixed(2) +
      "%";
  } else if (ip === price) {
    output.innerText = "No profit, No loss";
  } else {
    output.innerText =
      "Yay, You have made a profit of INR " +
      profit +
      ". The profit percentage is " +
      profitPercentage.toFixed(2) +
      "%.";
  }
}
