"use strict";

// 
var produitEnregistrerProduit = JSON.parse(localStorage.getItem("produit"));
console.log(produitEnregistrerProduit); // ---------------------------- Selectionner la Div en question

var position = document.querySelector(".items");
console.log(position); /// Tester si le panier est vide

if (produitEnregistrerProduit === null || produitEnregistrerProduit == 0) {
  var panierVide = "\n    <div class=\"items\">\n    <div class=\"product\">\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n              \n            </div>\n            <div class=\"col-md-8\">\n                <div class=\"info\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12 product-name\">\n                            <div class=\"product-name-vide\">\n                                <div class=\"vide\">Le panier est Vide</div>\n                            </div>\n                          \n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <p class=\"temp\">Veuillez Selectionner au moins produit pour etre facturer</p>\n                    </div>\n                    <a href=\"index.html\" class=\"btn btn-primary btn-lg btn-block\">Retour a L'acceuil</a>\n\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n \n    ";
  position.innerHTML = panierVide;
} // Dans le cas ou le panier n'est pas vide
else {
    var StrutureProduitPanier = [];

    for (index = 0; index < produitEnregistrerProduit.length; index++) {
      StrutureProduitPanier = StrutureProduitPanier + "\n             <div class=\"items\">\n                <div class=\"product\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3\">\n                            <img class=\"p-4 img-fluid mx-auto d-block image\" src=\"".concat(produitEnregistrerProduit[index].image, "\">\n                        </div>\n                        <div class=\"col-md-8\">\n                            <div class=\"info\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-4 product-name\">\n                                        <div class=\"product-name\">\n                                            <a href=\"#\">").concat(produitEnregistrerProduit[index].title, "</a>\n                                            <div class=\"product-info\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-3 quantity\">\n                                        <label for=\"quantity\">Quantity:</label>\n                                        <input id=\"quantity\" type=\"number\" value =\"1\" class=\"form-control quantity-input\">\n                                    </div>\n                                    <div class=\"col-md-3 price\">\n                                        <span>").concat(produitEnregistrerProduit[index].price, "$</span>\n                                    </div>\n                                <div class=\"col-md-2 price\">\n                                        <button class=\"bg-danger\"><i class=\"fa-solid fa-trash\"></i></button> \n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        \n        "); // console.log(StrutureProduitPanier);
    }

    if (index === produitEnregistrerProduit.length) {
      position.innerHTML = StrutureProduitPanier;
    }
  } // --------------- Supprimer un Produit particulier du pannier


var buttonDelete = document.querySelectorAll(".bg-danger");
console.log(buttonDelete);

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
}