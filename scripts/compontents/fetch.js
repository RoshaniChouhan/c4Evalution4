let search=async(search_input)=>{

    let url1=`https://masai-api.herokuapp.com/news?q=${search_input}`

let res=await fetch(url1)
let data=await res.json()
// console.log(data)
return data

}

