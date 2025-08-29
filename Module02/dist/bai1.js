"use strict";
//Create a Promise  that returns  the string  "Hello Async" after 2 seconds
function createDelayedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 2000); //delay for 2000 milliseconds = 2 seconds
    });
}
// Example usage:
createDelayedPromise().then((message) => {
    console.log(message); // This will log "Hello Async" after 2 seconds
});
