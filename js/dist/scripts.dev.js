"use strict";

// Creation d'un Object XML
var http = new XMLHttpRequest(); //On recupere Tout le contenu du fichier JSON Produit

http.open('get', 'js/products.json', true);
http.send();

http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    var products = JSON.parse(this.responseText); // console.log(products);

    var output = "";
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = products[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;
        output += "\n\t\t\t\n\t\t\t\t<div class=\"product\">\n\t\t\t\t\t<img src=\"".concat(item.image, "\" alt=\"").concat(item.image, "\">\n\t\t\t\t\t<p class=\"title\">").concat(item.title, "</p>\n\t\t\t\t\t<p class=\"description\">").concat(item.description, "</p>\n\t\t\t\t\t<p class=\"price\">\n\t\t\t\t\t\t<span> ").concat(item.price, "</span>\n\t\t\t\t\t\t<span>&euro;</span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"cart\" id=\"card\" onclick=\"recupere(").concat(item.id, ")\" value=\"").concat(item.id, "\">Ajouter au Panier <i class=\"fa-solid fa-plus\"></i></p>\n\t\t\t\t</div>\n\t\t\n\t\t\t");
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    document.querySelector(".products").innerHTML = output;
  }
};