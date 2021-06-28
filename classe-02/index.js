const cpf = "12345678900";
const cnpj = "12345678900";

function valida_cpf(cpf){
	let cpfFormatado = `${cpf}`;

	if(cpfFormatado.length === 11){
		cpfFormatado = cpfFormatado.split("");
		cpfFormatado.splice(3, 0, ".");
		cpfFormatado.splice(7, 0, ".");
		cpfFormatado.splice(11, 0, "-");

		cpfFormatado = cpfFormatado.join("");
	} else {
		return "CPF inválido";
	}
	
	return cpfFormatado;
}

function valida_cnpj(cnpj){
	let cnpjFormatado = `${cnpj}`;

	if (cnpjFormatado.length === 14){
		cnpjFormatado = cnpjFormatado.split("");
		cnpjFormatado.splice(2, 0, ".");
		cnpjFormatado.splice(6, 0, ".");
		cnpjFormatado.splice(10, 0, "/");
		cnpjFormatado.splice(15, 0, "-");

		cnpjFormatado = cnpjFormatado.join("");
	} else {
		return "CNPJ inválido";
	}

	return cnpjFormatado;
}
 

console.log(valida_cpf(cpf));
console.log(valida_cnpj(cnpj));