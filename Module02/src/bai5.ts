/*
    Create a function  simulateTask(time) that returns  
    a Promise  resolving  with  "Task done" after  time ms

*/

function simulateTask(time: number) : Promise<string>{  //<string> means resolve is a string
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve ("Task done");
        }, time)}
    )
}

simulateTask(2000)
                    .then((message) =>{
                        console.log(message);
                    })
                    .catch((error) =>{
                        console.log("Error: ", error);
                    });