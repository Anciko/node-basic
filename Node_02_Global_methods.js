
// setTimeout(() => {
//     console.log("I have already waiting for 3 seconds.");
// }, 3000);


let i = 0;

let myInter = setInterval(() => {
    i++;
    if(i == 5) clearInterval(myInter);
    console.log("I am start working!!" + i);
}, 1000);