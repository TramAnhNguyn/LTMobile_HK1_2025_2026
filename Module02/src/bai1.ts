//Create a Promise  that returns  the string  "Hello Async" after 2 seconds
function createDelayedPromise(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello Async");
    }, 2000); //delay for 2000 milliseconds = 2 seconds
  });
}

// Example usage:
createDelayedPromise().then((message) => {  //then: wait for promise to complete
  console.log(message); // This will log "Hello Async" after 2 seconds
});