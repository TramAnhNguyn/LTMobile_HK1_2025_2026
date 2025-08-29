"use strict";
/*
    Write a function  that rejects a Promise  with
    the error  "Something went wrong" after  1 second.

*/
function rejectedOneSec() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Something went wrong !"); //triggers the rejection.
        }, 1000); //wait for 1sec to print error
    });
}
rejectedOneSec()
    .then((result) => {
    console.log("This will not run: ", result);
})
    //handle the error when promise fail
    .catch((error) => {
    console.log("Error:", error);
});
