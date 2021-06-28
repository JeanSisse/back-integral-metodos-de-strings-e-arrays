const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

function inverter_array(arrayFrutas){

	let count = 0;
	let stringFrutas = "";
	let arrayFrutasInverso = arrayFrutas.slice(); //Faz cópia de array de frutas
	arrayFrutasInverso.reverse();

	for (let fruta of arrayFrutasInverso){
		count++;

		if(count === arrayFrutasInverso.length){
			stringFrutas = stringFrutas.concat(fruta);
		} else {
			stringFrutas = stringFrutas.concat(fruta, ", ");
		}
	}

	console.log(stringFrutas);

	arrayFrutas.splice(0, 1);
	arrayFrutas.splice(arrayFrutas.length - 1, 1, "Melão");

	console.log(arrayFrutas);
}

inverter_array(frutas);