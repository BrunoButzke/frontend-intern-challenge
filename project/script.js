/*
  Java Script

- getJSON            : Função responsável por conectar com o servidor e retornar dados .json;
- chamada de getJSON : Responsável por ordenar e agrupar a resposta .json em uma tabela;
- encurtar_link      : Função que faz a primeira parte da animação, encurtando o link e viabiliza chamada de "limpar_link";
- limpar_link        : Função que apaga link/retorna os atributos originais dos objetos.

*/

var getJSON = function (url, sucesso, erro) {
	var httpRequest = new XMLHttpRequest();
	httpRequest.open("GET", url, true);
	httpRequest.responseType = "json";
	httpRequest.addEventListener("readystatechange", function (event) {
		if(httpRequest.readyState == 4) {
			if(httpRequest.status == 200) {
				if(sucesso) sucesso(httpRequest.response);
			}else{
				if(erro) erro(httpRequest.status, httpRequest.statusText);
			}
		}
	});
	
	httpRequest.send();
}

//Chamada getJSON
getJSON("http://localhost/projeto/urls.json", function(data) {
	data.sort(function(a,b) {
		return b["hits"] - a["hits"];
	});
	var tabela="";
	for(i=0;i<5;i++){
		var url = data[i]['url'];
		var shortUrl = data[i]['shortUrl'];
		var hits = data[i]['hits'];
		if(i!=4){
			tabela=tabela+"<tr><td><a href="+url+" target='_blank'>" + shortUrl +"</a></td><td>" + hits +"</td></tr>";	
		}else{
			tabela=tabela+"<tr><td style='border: 0px;'><a href="+url+" target='_blank'>" + shortUrl +"</a></td><td style='border: 0px ;'>" + hits +"</td></tr>";	
		}
	}
	table.innerHTML = tabela;
});			

function encurtar_link(){
	if (document.getElementById("link").value != "") {                
		document.getElementById("link").style.color = "white";                            
		document.getElementById("link").value="http://chr.dc/xyzxyz"; 
		button.innerText = "COPIAR";									
		document.getElementById("clean").style.display = "block";  									
	}
}

function limpar_link(acao){
	if((acao=="clicou") ||(acao=="apagou" && document.getElementById("link").value=="")){
		document.getElementById("link").value="";									
		document.getElementById("link").style.color ="#ff6e15";							
		button.innerText = "ENCURTAR";													 
		document.getElementById("clean").style.display = "none"; 															
	}
}	
