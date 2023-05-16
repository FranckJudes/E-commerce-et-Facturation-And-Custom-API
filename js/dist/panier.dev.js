"use strict";

function recupere(idTemp) {
  var temp = idTemp;
  var http2 = new XMLHttpRequest(); //On recupere Tout le contenu du fichier JSON Produit

  http2.open('get', 'js/products.json', true);
  http2.send();

  http2.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      var products = JSON.parse(this.responseText);
      var produitEnregistrerProduit = JSON.parse(localStorage.getItem("produit"));
      products.forEach(function (element) {
        if (element.id === temp) {
          // function pop Up de Verification
          var popupConfirmation = function popupConfirmation() {
            if (window.confirm("".concat(element.title, " a ete bien Ajouter dans votre Panier    Appuyer sur OK pour consulter le panier ou ANNULER pour rester a l'accueil\n                        "))) {
              window.location.href = "panier.html";
            }
          }; //    ---Stockage dans le LocalStorage


          var produitEnregistrerDansLocalStorage = JSON.parse(localStorage.getItem("produit"));
          console.log(produitEnregistrerDansLocalStorage); // Tester S'il y a de produit dans le localStorage

          if (produitEnregistrerDansLocalStorage) {
            produitEnregistrerDansLocalStorage.push(element);
            localStorage.setItem("produit", JSON.stringify(produitEnregistrerDansLocalStorage));
            popupConfirmation();
          } // S'il y a  pas de produit Enregister dans le localStorage
          else {
              produitEnregistrerDansLocalStorage = [];
              produitEnregistrerDansLocalStorage.push(element);
              localStorage.setItem("produit", JSON.stringify(produitEnregistrerDansLocalStorage));
              popupConfirmation(); // console.log(produitEnregistrerDansLocalStorage);
            }
        }
      });
    }
  };
}