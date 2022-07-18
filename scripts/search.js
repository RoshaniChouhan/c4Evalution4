// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js"

// console.log(navbar())
document.getElementById("navbar").innerHTML=navbar();


 async function getData(event){


    let url1=`https://masai-api.herokuapp.com/news?q=${event}`

let res=await fetch(url1)
let data=await res.json()
console.log(data)


}