fetch("https://api.giphy.com/v1/gifs/random?api_key=RzTWHHufvTejt6S4G4ElJ81FzKLVrPiv")
.then(function(response){
    return response.json();
})
.then(function(jsonData){
    console.log(jsonData)
})