// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


// let url="https://masai-api.herokuapp.com/news/top-headlines?country={country code}"



import navbar from "../components/navbar.js"

// // console.log(navbar())
 document.getElementById("navbar").innerHTML=navbar();





 async function cSearch(id){
   let url=`https://masai-api.herokuapp.com/news/top-headlines?country=${id}` 

   let res=await fetch(url)
   let data= await res.json()
    console.log(data)
    append(data.articles)
}

 function append(data){

      let cont=document.getElementById("results");

data.forEach(function(el){

    let img=document.createElement("img")
    img.src=el.urlToImage;
    let p1 =document.createElement("h3")
    p1.innerText=el.title;
    let p2=document.createElement("p")
    p2.innerText=el.description;

    let div=document.createElement("div")
    div.append(img,p1,p2)
    cont.append(div)
})
// localStorage.setItem("news",JSON.stringify(div))
 }






// function search(event){

// let s=document.getElementById("search_input").value;




// }