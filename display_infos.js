// função para exibir todos os dados da lista de objetos (os dados dos livros)
function exibir_infos(llivros) {
  for (i = 0; i < llivros.length; i++) {
    const livro = llivros[i];
    console.log("Titulo: " + livro.nome);
    console.log("Genero: " + livro.genero);
    console.log("Preco: R$ " + livro.preco.toFixed(2));
    console.log("Autor: " + livro.autor);
    console.log("Ano de Publicacao: " + livro.anopubl);
    console.log("Editora: " + livro.editora);
    console.log("Codigo do livro: " + livro.codigo_livro);
    console.log("Estoque: " + livro.estoque);
    console.log();
  }
}

module.exports = exibir_infos;
