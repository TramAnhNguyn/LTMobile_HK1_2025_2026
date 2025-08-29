"use strict";
/*
    Write a function  that returns  a Promise
    resolving  with  the number  10 after  1 second

*/
function numberDelayed() {
    return new Promise((resolve) => {
        setTimeout(() => {
            return 10;
        }, 10000);
    });
}
numberDelayed().then((message) => {
    console.log(message);
});
