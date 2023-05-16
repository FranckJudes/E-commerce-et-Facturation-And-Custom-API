"use strict";

// 
var produitEnregistrerProduit = JSON.parse(localStorage.getItem("produit")); // console.log(produitEnregistrerProduit);
// ---------------------------- Selectionner la Div en question

var position = document.querySelector(".items"); // console.log(position);
/// Tester si le panier est vide

if (produitEnregistrerProduit === null || produitEnregistrerProduit == 0) {
  var panierVide = "\n    <div class=\"items\">\n    <div class=\"product\">\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n              \n            </div>\n            <div class=\"col-md-8\">\n                <div class=\"info\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12 product-name\">\n                            <div class=\"product-name-vide\">\n                                <div class=\"vide\">Le panier est Vide</div>\n                            </div>\n                          \n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <p class=\"temp\">Veuillez Selectionner au moins produit pour etre facturer</p>\n                    </div>\n                    <a href=\"index.html\" class=\"btn btn-primary btn-lg btn-block\">Retour a L'acceuil</a>\n\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n \n    ";
  position.innerHTML = panierVide;
} // Dans le cas ou le panier n'est pas vide
else {
    var StrutureProduitPanier = [];

    for (index = 0; index < produitEnregistrerProduit.length; index++) {
      StrutureProduitPanier = StrutureProduitPanier + "\n             <div class=\"items\">\n                <div class=\"product\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3\">\n                            <img class=\"p-4 img-fluid mx-auto d-block image\" src=\"".concat(produitEnregistrerProduit[index].image, "\">\n                        </div>\n                        <div class=\"col-md-8\">\n                            <div class=\"info\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-4 product-name\">\n                                        <div class=\"product-name\">\n                                            <a href=\"#\">").concat(produitEnregistrerProduit[index].title, "</a>\n                                            <div class=\"product-info\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-3 quantity\">\n                                        <label for=\"quantity\">Quantity:</label>\n                                        <input id=\"quantity\" type=\"number\" min=\"0\" value=\"1\" class=\"form-control quantity-input\">\n                                    </div>\n                                    <div class=\"col-md-3 price\">\n                                        <span>").concat(produitEnregistrerProduit[index].price, "$</span>\n                                    </div>\n                                <div class=\"col-md-2 price\">\n                                        <button class=\"bg-danger\"><i class=\"fa-solid fa-trash\"></i></button> \n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        \n        "); // console.log(StrutureProduitPanier);
    }

    if (index === produitEnregistrerProduit.length) {
      position.innerHTML = StrutureProduitPanier;
    }
  } // --------------- Supprimer un Produit particulier du pannier


var buttonDelete = document.querySelectorAll(".bg-danger"); // console.log(buttonDelete);

var _loop = function _loop(_index) {
  buttonDelete[_index].addEventListener("click", function (event) {
    event.preventDefault(); // selectionner ID a selectionner

    var id_supprimer = produitEnregistrerProduit[_index].id; // supprimer l'instance en question

    produitEnregistrerProduit = produitEnregistrerProduit.filter(function (el) {
      return el.id !== id_supprimer;
    }); // Mettre a jour le localStorage

    localStorage.setItem("produit", JSON.stringify(produitEnregistrerProduit));
    alert("Ce Produit a ete Bien Supprimer");
    window.location.href = "panier.html";
  });
};

for (var _index = 0; _index < buttonDelete.length; _index++) {
  _loop(_index);
} // ------------------------------------- Ecrire la Function pour Vider le Panier -------------------------


var buttonViderPanier = document.querySelector(".viderpanier"); // console.log(buttonViderPanier);

buttonViderPanier.addEventListener("click", function (e) {
  e.preventDefault();

  if (produitEnregistrerProduit === null || produitEnregistrerProduit == 0) {
    alert("Le Panier est deja vide");
  } else {
    // RemoveItem pour Vider le panier
    localStorage.removeItem("produit");
    alert("Le Panier a ete vider avec success"); // Rechargement de la Page

    window.location.href = "panier.html";
  }
}); // ------------------------------------------------------- calcule du prix total  ---------------------

var prixTotalCalcul = 0;
var input = document.querySelectorAll("#quantity");

for (var _index2 = 0; _index2 < produitEnregistrerProduit.length; _index2++) {
  prixTotalCalcul = parseFloat(prixTotalCalcul) + parseFloat(produitEnregistrerProduit[_index2].price) * parseFloat(input[_index2].value);
} // Affichage du Subtotal sans TVA


var subtotal = document.querySelector(".subtotal");

function afficheTotal() {
  var totaux = document.querySelector(".total");
  totaux = 0;
  subtotal = 0;

  if (produitEnregistrerProduit === null || produitEnregistrerProduit == 0) {
    alert("le panier est vide");
  } else {
    for (var _index3 = 0; _index3 < produitEnregistrerProduit.length; _index3++) {
      prixTotalCalcul = parseFloat(prixTotalCalcul) + parseFloat(produitEnregistrerProduit[_index3].price) * parseFloat(input[_index3].value);
    }

    subtotal.innerHTML = prixTotalCalcul + '&euro;';

    var _totaux = document.querySelector(".total");

    var temp = parseFloat(4.5 + prixTotalCalcul);
    _totaux.innerHTML = temp + '&euro;';
    localStorage.setItem("prix_total", JSON.stringify(temp));
  }
}

function stocker() {
  var elements = [];
  var LesInputs = document.querySelectorAll("input");

  for (var i = 0; i < LesInputs.length; i++) {
    elements.push(LesInputs[i].value); //  localStorage.setItem("QTE",JSON.stringify(elements))

    console.log(LesInputs[i].value);
  }

  localStorage.setItem("quantite", JSON.stringify(elements));
  window.location.href = "facture.html";
}