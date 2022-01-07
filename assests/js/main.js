const date = new Date()

let comment=""
let mail= ""


const handleComment=(e)=> comment=e
const handleEmail=(e)=> mail=e

const getInput=()=>{
console.log(comment)
console.log(mail)

let div= document.createElement("div")
div.setAttribute("class","list-item")

listHtml =`
<p>
<span>${date.getTime()}#</span>
<span>${comment}</span>
<span>${mail}</span>


</p>



`;

div.innerHTML=listHtml

document.getElementById("list-group").appendChild(div)





}

const clickbtn = document.getElementById("btn").addEventListener("click",getInput)