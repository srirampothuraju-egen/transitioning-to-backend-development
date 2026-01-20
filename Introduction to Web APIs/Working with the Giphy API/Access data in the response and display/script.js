fetch("https://api.giphy.com/v1/gifs/random?api_key=RzTWHHufvTejt6S4G4ElJ81FzKLVrPiv&tag=squirrel&rating=g")
.then(function(response){
    return response.json();
})
.then(function(jsonData){
    console.log(jsonData)

    var gifUrl = jsonData.data.images.original.url

    var gifImg = document.createElement('img');
    gifImg.setAttribute('src', gifUrl);
    document.body.appendChild(gifImg)
})