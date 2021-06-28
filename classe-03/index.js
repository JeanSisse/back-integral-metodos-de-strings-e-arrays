const texto = 'Aprenda programar do zero na Cubos Academy';

function transformar_para_url_amigavel(texto){
	let urlAmigavel = texto.trim();

	urlAmigavel = urlAmigavel.split(" ").join("-");

	return urlAmigavel;
}

console.log(transformar_para_url_amigavel(texto));