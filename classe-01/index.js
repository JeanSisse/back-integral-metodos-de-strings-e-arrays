const comentario = "Esse COVID é muito perigoso!";

function verificar_comentario(comentario) {
	
	if (comentario.toLowerCase().includes("covid") || comentario.toLowerCase().includes("pandemia")) {
		console.log("Comentario bloqueado por conter palavras proibidas.");
	} else {
		console.log("Comentário autorizado");
	}
}

verificar_comentario(comentario);