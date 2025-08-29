/*
    Use  Promise.all() to run  3 simulated  Promises  
    in paralle l  and print  the result.

*/

function demo() : Promise<string>{
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("My name");
            resolve("is");
            resolve("Tranh");
        }, 1000);
    })
}

demo()
        .then((message) =>{
                        console.log(message);
                    })
                    .catch((error) =>{
                        console.log("Error: ", error);
                    });
