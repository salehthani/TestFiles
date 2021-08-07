/*
fetch ("https://www.breakingbadapi.com/api/")
.then(function(response){
    
     return response.json();
})
.then(function(data){
    console.log(data)
    })
    */
   const api = "https://www.breakingbadapi.com/api/characters";

    async function getData(){
        const response = await fetch (api)
        const data = await response.json();
        const print = data.map(m => m.name)

        console.log(print)
    }
    getData()