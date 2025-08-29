/*
    Write a function  that returns  a Promise  
    resolving  with  the number  10 after  1 second

*/

function numberDelayed(): Promise<number> {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(10);
        }, 1000); //wait for 1sec to printo
    });

}

numberDelayed().then((message) => {
    console.log(message);
})