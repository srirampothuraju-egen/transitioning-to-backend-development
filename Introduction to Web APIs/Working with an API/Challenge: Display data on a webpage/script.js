fetch("https://hplussport.com/api/products?order=price")
.then(function(response){
  return response.json()
})
.then(function(jsonData){
  for(items in jsonData){
    var productName = jsonData[items].name;
    var products = document.createElement('li');
    products.innerHTML = productName;
    document.body.appendChild(products)

    var productImg = jsonData[items].image;
    var image = document.createElement('img');
    image.setAttribute('src', productImg);
    image.style.width = '8rem'
    image.style.height = '8rem'
    document.body.appendChild(image)

    var productPrice = jsonData[items].price;
    var price = document.createElement('h6');
    price.innerHTML = productPrice
    document.body.appendChild(price)
  }
})
