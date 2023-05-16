

// Creation d'un Object XML
let http = new XMLHttpRequest();

//On recupere Tout le contenu du fichier JSON Produit
http.open('get', 'js/products.json', true);

http.send();


http.onload = function(){
	if(this.readyState == 4 && this.status == 200){
		
		let products = JSON.parse(this.responseText);

        // console.log(products);
		
		let output = "";

	
		for(let item of products){
			output += `
			
				<div class="product">
					<img src="${item.image}" alt="${item.image}">
					<p class="title">${item.title}</p>
					<p class="description">${item.description}</p>
					<p class="price">
						<span>${item.price}$</span>
						<span>&euro;</span>
					</p>
					<p class="cart" id="card" onclick="recupere(${item.id})" value="${item.id}">Add to cart <i class="fa-solid fa-plus"></i></p>
				</div>
		
			`;

		}
		
		document.querySelector(".products").innerHTML = output;

	}


	
	
		
	
	
} 