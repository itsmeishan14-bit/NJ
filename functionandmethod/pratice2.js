let n = Number(prompt("How many numbers do you want to enter?"));

let numbers = [];

for (let i = 0; i < n; i++) {
    let num = Number(prompt("Enter a number:"));
    numbers.push(num);
}

console.log(numbers);
let r=numbers.reduce((re,c)=>{
return re+c
})
console.log(r)
console.log(numbers);

let p=numbers.reduce((re,c)=>{
return re*c
})
console.log(p)