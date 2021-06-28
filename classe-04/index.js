let identificador = "123";
// let nome = "José da silva costa có";
let nome = "José silva costa";
let email = "      jose@email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];

function formatar_dados_de_formulario(){

	normalize_identificador(identificador);	
	verificar_nome(nome);
	remove_espacos_email(email);
	string_de_tags(tags);
}

function normalize_identificador(identificador){
	if (identificador.length < 6){
		identificador = identificador.padStart(6, "0");
		console.log(identificador);
	}
}

function verificar_nome(nome){
	let arrayNome = nome.split(" ");
	let novoNome = "";
	let count = 0;

	for (let x of arrayNome){
		count++;

		if(x.length > 2 || count === arrayNome.length)
			x = x.replace(x.charAt(0), x.charAt(0).toUpperCase());

		if (count === arrayNome.length){
			novoNome = novoNome.concat(x);
		} else {
			novoNome = novoNome.concat(x, " ");
		}
	}
	console.log(`${novoNome}`);
}

function remove_espacos_email(email){
	email = email.trim();
	console.log(`${email}`);
}

function string_de_tags(arrayTags){
	let count = 0;
	let stringTags = "";
	for (let tag of arrayTags){
		count++;

		if(count === arrayTags.length){
			stringTags = stringTags.concat(tag);
		} else {
			stringTags = stringTags.concat(tag, ", ");
		}
	}
	console.log(stringTags);
}

formatar_dados_de_formulario();