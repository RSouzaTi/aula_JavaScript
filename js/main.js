function clicou(){
	document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
	//console.log(document.getElementById("agradecimento"));
	//alert("Obrigado por clicar")
}

function redirecionar(){
	window.open("https://palmeiras.com.br/");
	window.location.href = "https://palmeiras.com.br/";
}

function trocar(elemento){
	//document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
	elemento.innerHTML = "Obrigado por passar o mouse";
	//alert("trocar texto");
}

function voltar(elemento){
	//document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
	elemento.innerHTML = "Passe o mouse aqui";
	
}

function load(){
	alert("pagina caregada");

}

function funcaoChange(elemento){
	console.log(elemento.value)
}

/*function soma(n1, n2){
	return n1 + n2;
}

function validaidade(idade){
	var validar;
	if (idade >= 18){
		validar = true
	}else{
		validar= false
	}
}
 
 var idade = prompt("Qual sua idade");
 console.log(validaidade(idade));

 //alert(soma(5, 10));
*/
/*
function soma(n1, n2){
	return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
	return frase.replace(nome, novo_nome)
}
alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
var d = new Date();
alert(d.getMonth());
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count=0; count <= 5; count++){
	alert(count);
}
*/

/*
var count = 0;
while (count <= 5){
	console.log(count);
	alert(count);
	count++;
}

*/

/*
var idade = prompt("Qual sua idade");
if (idade >= 18){
	alert("maior de idade");
}else{
	alert("menor de idade");
}
*/

/*var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);

 var lista = ["maça", "pêra", "laranja"];
 lista.push("uva");
 lista.pop();

 var nome = "Ricardo Souza";
 var idade = 39;
 var idade2 = 12;
 var frase = "Japão é o melhor time do mundo";
 alert(nome + "tem " + idade + "anos");
 alert("meu primeiro js");

 console.log(nome);
 console.log(idade + idade2);
 console.log(frase.toLowerCase());
 alert(frase.replace("Japão", "Brasil"));
 */