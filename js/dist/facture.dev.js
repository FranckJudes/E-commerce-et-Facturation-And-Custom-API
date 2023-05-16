"use strict";

var produitEnregistrerProduit = JSON.parse(localStorage.getItem("produit"));
var quantite = JSON.parse(localStorage.getItem("quantite"));
var tbody = document.querySelector("tbody");
var subtotal = document.querySelector(".subtotal");
var montantTotal = document.querySelector(".montantTotal");
console.log(tbody);

if (produitEnregistrerProduit === null || produitEnregistrerProduit == 0) {
  FactureVide = "\n        <tr>\n        \n            <td colspan=\"5\" style=\"text-align: center;\"> Veuillez selectionner le produit dans le panier et revener ICI recuperer la facture</td>\n            \n        </tr>\n\n    ";
  tbody.innerHTML = FactureVide;
} else {
  var somme = 0;
  facture = [];

  for (i = 0; i < produitEnregistrerProduit.length; i++) {
    facture = facture + "\n                <tr>\n                    <th scope=\"row\">".concat(i, "</th>\n                    <td>").concat(produitEnregistrerProduit[i].title, "</td>\n                    <td>").concat(quantite[i], "</td>\n                    <td>").concat(produitEnregistrerProduit[i].price, " &euro;</td>\n                    <td>").concat(parseInt(produitEnregistrerProduit[i].price) * parseInt(quantite[i]), " &euro;</td>\n                </tr>\n            \n            ");
    somme = somme + parseInt(produitEnregistrerProduit[i].price) * parseInt(quantite[i]);
    subtotal.innerHTML = "Total :  " + somme + "&euro;";
    montantTotal.innerHTML = somme + 4.5 + '&euro;';
  }

  console.log(somme);

  if (i === produitEnregistrerProduit.length) {
    tbody.innerHTML = facture;
  }
}

function generePDF() {
  var element = document.querySelector(".pdf-imprimer");
  var opt = {
    margin: 1,
    filename: 'Facture.pdf',
    image: {
      type: 'jpeg',
      quality: 1
    },
    html2canvas: {
      scale: 2
    },
    jsPDF: {
      unit: 'in',
      format: 'letter',
      orientation: 'portrait'
    }
  };
  html2pdf().set(opt).from(element).save();
}