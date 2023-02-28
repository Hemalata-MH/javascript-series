// use this place to practice same topic code

/* Asynchronous Operations 
createOrder
proceedToPayment
ShowOrderSummary
updateWallet
*/

/*
var cart = ["Bhagvat Gita", "Sutras", "Asanas", "Pranayamas"];

// return order ID
function createOrder() {
  return new Promise(function (resolve, reject) {
    if (!validateOrder()) {
      var err = new Error("The cart has no items in it");
      reject(err);
    } else {
      // Say suppose an API is returning order Id - 12345;
      const orderId = "12345";
      resolve(orderId);
    }
  });
}

function validateOrder() {
  return true;
}
// return payment info i.e. success or failure
function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    if (!orderId) {
      reject("Order Id is not valid");
    } else {
      resolve("Payment is successful");
    }
  });
}

// returns the number of items purchased
function ShowOrderSummary(paymentInfo) {
  return new Promise(function (resolve, reject) {
    if (!paymentInfo) {
      reject("Payment has failed");
    } else {
      resolve("Payment is successful");
    }
  });
}

// return wallet info

function updateWallet(walletInfo) {
  return new Promise(function (resolve, reject) {
    if (cart.length === 4) {
      resolve(walletInfo + "Wallet is updated");
    } else {
      reject("Please make the neccessary payment");
    }
  });
}

createOrder()
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return ShowOrderSummary(paymentInfo);
  })
  .then(function (walletInfo) {
    console.log("walletInfo - " + walletInfo);
    return updateWallet(walletInfo);
  })
  .catch(function (err) {
    console.log("err : " + err);
  });
  */
