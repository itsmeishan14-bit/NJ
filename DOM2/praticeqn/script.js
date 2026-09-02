let bu=document.createElement("button")
console.dir(bu)
bu.innerText="click me"
bu.style.backgroundColor ="red"
bu.style.color="white"
let a=document.querySelector("body")
a.prepend(bu)