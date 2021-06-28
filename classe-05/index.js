const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";


function localiza_livro(livros, nomeDoLivro){
	let index = livros.indexOf(nomeDoLivro);
	let msg = "";

	if(index != -1){
		msg = `O livro esta na posição ${index + 1}`;
	} else {
		msg = "O livro não existe";
	}

	console.log(msg);
}

localiza_livro(livros, nomeDoLivro);