
let produitEnregistrerProduit  = JSON.parse(localStorage.getItem("produit"));
let quantite =  JSON.parse(localStorage.getItem("quantite"));

let tbody  = document.querySelector("tbody");
let subtotal  = document.querySelector(".subtotal");
let montantTotal =  document.querySelector(".montantTotal");

console.log(tbody);

    if (produitEnregistrerProduit === null || produitEnregistrerProduit == 0) 
    {
        FactureVide =  `
        <tr>
        
            <td colspan="5" style="text-align: center;"> Veuillez selectionner le produit dans le panier et revener ICI recuperer la facture</td>
            
        </tr>

    `;
    tbody.innerHTML = FactureVide;

    }else{
        let somme =  0;
        facture = [];
         for (i = 0; i < produitEnregistrerProduit.length; i++) {
           facture = facture + `
                <tr>
                    <th scope="row">${i}</th>
                    <td>${produitEnregistrerProduit[i].title}</td>
                    <td>${quantite[i]}</td>
                    <td>${produitEnregistrerProduit[i].price} &euro;</td>
                    <td>${parseInt(produitEnregistrerProduit[i].price) * parseInt(quantite[i])} &euro;</td>
                </tr>
            
            `;
            somme =  somme + parseInt(produitEnregistrerProduit[i].price) * parseInt(quantite[i]);

            subtotal.innerHTML = "Total :  "+ somme+"&euro;";
            montantTotal.innerHTML = somme + 4.5 + '&euro;';


            
        }
        console.log(somme);
        
        if (i === produitEnregistrerProduit.length)
        {
            tbody.innerHTML = facture;
        }
    }

   
   

    function generePDF()
    {
        var element = document.querySelector(".pdf-imprimer");
        var opt = {
            margin:       1,
            filename:     'Facture.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
          };
          html2pdf().set(opt).from(element).save();
      
    }
