"use strict";
/*
    Create a function  simulateTask(time) that returns
    a Promise  resolving  with  "Task done" after  time ms

*/
function simulateTask(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}
simulateTask(2000)
    .then((message) => {
    console.log(message);
})
    .catch((error) => {
    console.log("Error: ", error);
});
