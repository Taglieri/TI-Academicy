document.addEventListener("DOMContentLoaded", function(event) {
    var listaProdutos = document.getElementById("produtos");
    var produtos = document.createElement("li");
    produtos.setAttribute("id","1");
    produtos.setAttribute("preco","2.50");
    produtos.appendChild(document.createTextNode("Mamão Papaia"));
    listaProdutos.appendChild(produtos);

 
    produtos = document.createElement("li");
    produtos.setAttribute("id","2");
    produtos.setAttribute("preco","1.50");
    produtos.appendChild(document.createTextNode("Laranja"));
    listaProdutos.appendChild(produtos);


    produtos = document.createElement("li");
    produtos.setAttribute("id","3");
    produtos.setAttribute("preco","2.00");
    produtos.appendChild(document.createTextNode("Manga"));
    listaProdutos.appendChild(produtos);


    produtos = document.createElement("li");
    produtos.setAttribute("id","4");
    produtos.setAttribute("preco","5.00");
    produtos.appendChild(document.createTextNode("Melão"));
    listaProdutos.appendChild(produtos);


    produtos = document.createElement("li");
    produtos.setAttribute("id","5");
    produtos.setAttribute("preco","3.00");
    produtos.appendChild(document.createTextNode("Melancia"));
    listaProdutos.appendChild(produtos);
});

var total = 0;

function suaCesta(produto){
    var teste = true;
    var listaProdutos = document.getElementById("cestaDoCliente");
    for(let i = 0; i < listaProdutos.children.length; i ++){
        if (listaProdutos.children[i].getAttribute("id") == produto.getAttribute("id")){
            teste=false;
        }
    }
   if(teste == true){
    var produtos = document.createElement("li");
    produtos.setAttribute("id", produto.getAttribute("id"));
    produtos.appendChild(document.createTextNode(produto.innerHTML));
    listaProdutos.appendChild(produtos);
    total = total + parseFloat(produto.getAttribute("preco"));
    document.getElementById("mostraTotalCompra").value = "R$ "+total.toFixed(2);
   }
   else{
       alert ("Este item " + produto.innerHTML + " está na sua cesta");
   }

}

window.onclick = e => {
    if ((isNaN(e.target.getAttribute("id")) == false ) && (e.target.getAttribute("id") !== null)){
        suaCesta(e.target);
    }

}