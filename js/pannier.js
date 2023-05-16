// 

let produitEnregistrerProduit  = JSON.parse(localStorage.getItem("produit"))

// console.log(produitEnregistrerProduit);


// ---------------------------- Selectionner la Div en question

let position  = document.querySelector(".items")

// console.log(position);


/// Tester si le panier est vide
if (produitEnregistrerProduit === null || produitEnregistrerProduit == 0) {
    const panierVide = 
    `
    <div class="items">
    <div class="product">
        <div class="row">
            <div class="col-md-3">
              
            </div>
            <div class="col-md-8">
                <div class="info">
                    <div class="row">
                        <div class="col-md-12 product-name">
                            <div class="product-name-vide">
                                <div class="vide">Le panier est Vide</div>
                            </div>
                          
                        </div>
                    </div>
                    <div class="row">
                        <p class="temp">Veuillez Selectionner au moins produit pour etre facturer</p>
                    </div>
                    <a href="index.html" class="btn btn-primary btn-lg btn-block">Retour a L'acceuil</a>

                </div>

            </div>
        </div>
    </div>
</div>
 
    `;

    position.innerHTML = panierVide;
}

// Dans le cas ou le panier n'est pas vide
else{
    let StrutureProduitPanier = [];
    for ( index = 0; index < produitEnregistrerProduit.length; index++)
     {
        
        StrutureProduitPanier = StrutureProduitPanier + `
             <div class="items">
                <div class="product">
                    <div class="row">
                        <div class="col-md-3">
                            <img class="p-4 img-fluid mx-auto d-block image" src="${produitEnregistrerProduit[index].image}">
                        </div>
                        <div class="col-md-8">
                            <div class="info">
                                <div class="row">
                                    <div class="col-md-4 product-name">
                                        <div class="product-name">
                                            <a href="#">${produitEnregistrerProduit[index].title}</a>
                                            <div class="product-info">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 quantity">
                                        <label for="quantity">Quantity:</label>
                                        <input id="quantity" type="number" min="0" value="1" class="form-control quantity-input">
                                    </div>
                                    <div class="col-md-3 price">
                                        <span>${produitEnregistrerProduit[index].price}$</span>
                                    </div>
                                <div class="col-md-2 price">
                                        <button class="bg-danger"><i class="fa-solid fa-trash"></i></button> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        `;
        // console.log(StrutureProduitPanier);
        
        
    }
    if (index === produitEnregistrerProduit.length)
    {
       position.innerHTML = StrutureProduitPanier;
    }
}

// --------------- Supprimer un Produit particulier du pannier

let buttonDelete =  document.querySelectorAll(".bg-danger");

// console.log(buttonDelete);

for (let index = 0; index < buttonDelete.length; index++) {
    
    buttonDelete[index].addEventListener("click", (event)=>{
        event.preventDefault();

     
        // selectionner ID a selectionner
       let id_supprimer = produitEnregistrerProduit[index].id;
          // supprimer l'instance en question
       produitEnregistrerProduit  = produitEnregistrerProduit.filter(
         el => el.id !== id_supprimer
       )

       // Mettre a jour le localStorage
       localStorage.setItem("produit",JSON.stringify(produitEnregistrerProduit));

       alert("Ce Produit a ete Bien Supprimer");

       window.location.href = "panier.html";

    

   })

    
}


// ------------------------------------- Ecrire la Function pour Vider le Panier -------------------------
const buttonViderPanier  = document.querySelector(".viderpanier")

// console.log(buttonViderPanier);

buttonViderPanier.addEventListener("click" ,(e)=>{
    e.preventDefault();
 

    if (produitEnregistrerProduit === null || produitEnregistrerProduit == 0)
    {
        alert("Le Panier est deja vide");

    }else
    {
        // RemoveItem pour Vider le panier
        localStorage.removeItem("produit");

        alert("Le Panier a ete vider avec success");    
            // Rechargement de la Page

        window.location.href = "panier.html"


    }
    

});


// ------------------------------------------------------- calcule du prix total  ---------------------

let prixTotalCalcul = 0 ;
const input =  document.querySelectorAll("#quantity");


for (let index = 0; index < produitEnregistrerProduit.length; index++) 
{
  

        prixTotalCalcul = parseFloat(prixTotalCalcul) + parseFloat(produitEnregistrerProduit[index].price) * parseFloat(input[index].value);
       
}

// Affichage du Subtotal sans TVA
let subtotal = document.querySelector(".subtotal");





function afficheTotal(){
    let totaux = document.querySelector(".total");
    totaux = 0;
    subtotal = 0 ;
    if (produitEnregistrerProduit === null || produitEnregistrerProduit == 0)
    {
            alert("le panier est vide");
    }else
    {   

            for (let index = 0; index < produitEnregistrerProduit.length; index++) 
            {
            

                    prixTotalCalcul = parseFloat(prixTotalCalcul) + parseFloat(produitEnregistrerProduit[index].price) * parseFloat(input[index].value);
                
            }
            subtotal.innerHTML  = prixTotalCalcul+'&euro;';
            let totaux = document.querySelector(".total");
            let temp = parseFloat(4.5 + prixTotalCalcul);
            totaux.innerHTML =temp + '&euro;';
             localStorage.setItem("prix_total",JSON.stringify(temp))

    }
    
}





 function stocker()
{
    let elements= [];
    let LesInputs =  document.querySelectorAll("input");



    for (let i = 0; i < LesInputs.length; i++) {
         elements.push(LesInputs[i].value);
        //  localStorage.setItem("QTE",JSON.stringify(elements))
        console.log(LesInputs[i].value);
    }

    localStorage.setItem("quantite",JSON.stringify(elements))
    window.location.href = "facture.html";


    
}