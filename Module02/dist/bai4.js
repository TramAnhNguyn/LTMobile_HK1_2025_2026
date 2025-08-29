"use strict";
/*
    Use  .then() and  .catch() to handle  a Promise
    that returns  a random  number.

*/
function getRandomNumber() {
    return new Promise((resolve, reject) => {
        const num = Math.random();
        if (num > 0.5) {
            resolve(num);
        }
        else {
            reject("Fail to generate number");
        }
    });
}
getRandomNumber()
    .then((resolve) => {
    console.log("Random number:", resolve);
})
    .catch((reject) => {
    console.log("Error: ", reject);
});
