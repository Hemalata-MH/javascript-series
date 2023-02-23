# What is Promise?

Promise is an object that represents eventual completion or rejection of asynchronous operations.

Promises were introduced to handle callback functions basically an asynchronous functions

Using callback functions had major issues when dealing with asynchronous operations

1. Inversion of control :- where there was no surety that the callback function is returned

# Solution is using promise instead of callback function

2. Callback hell :- way how the nested callback functions are executed

# Solution :- .then() object handles this callback hell very gracefully

# Callback function which creates a callback hell

createOrder(cart, function (orderId) {
proceedToPayment(orderId, function (paymentInfo) {
ShowOrderSummary(paymentInfo, function () {
updateWallet(walletInfo);
});
});
});

# 3 States

1. Pending - the async operation is in the pending state
2. Fulfilled - the promise has completed its's async operation & has returned some data
3. Rejected - the promise has rejected to perform async operation with an exception thrown

# 2 very imporatnt things to remember

1. always return the promise which most of the developers forget this days
2. if .catch() is excecuted before .then() then all the errors of prev then functions will be
   handled & definetely the next then() function is executed

# eg: below

createOrder()
.then(function (orderId) {
return proceedToPayment(orderId);
}).catch(function (err) {
console.log("err : " + err);

# all the errors of prev promises will be handled here & the next .then() function is executed

});
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
