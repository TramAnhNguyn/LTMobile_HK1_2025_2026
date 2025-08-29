"use strict";
/*
    Write a function  that rejects a Promise  with
    the error  "Something went wrong" after  1 second.

*/
function rejectedOneSec() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Something went wrong !");
        }, 1000); //wait for 1sec to print
    });
}
rejectedOneSec()
    .then((result) => {
    console.log("This will not run: ", result);
})
    .catch((error) => {
    console.log("Error:", error);
});
