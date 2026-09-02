// // // let div=document.querySelector("div");
// // // console.log(div);
// // // let id=div.getAttribute("id")
// // // console.log(id)
// // // let name=div.getAttribute("name")
// // // console.log(name)
// // let para=document.querySelector("p");
// // console.log(para.setAttribute("class","newclass"))//to change the atrribute
// let div = document.querySelector("div")
// div.style.backgroundColor = "green"
// div.style.backgroundColor = "purple"
// div.style.fontSize = "29px"
// div.innerText="hello";
// // // div.style.visibility="hidden"
// let newbtn =  document.createElement("button")
// newbtn.innerText="click me";
// console.log(newbtn)

// let div=document.querySelector("div")
// // div.append(newbtn)//at end
// // div.prepend(newbtn);//at the first
// // div.before(newbtn);//outside the boxd
// div.after(newbtn)//outsid at the end of the box
let head=document.createElement("h1")
head.innerHTML="<i>Hello</i>"
document.querySelector("body").prepend(head);
let para=document.querySelector("p")
para.remove();
