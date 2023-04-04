async function buscarDados(){
    console.log("Cheguei na função");

    const retornoRequisicao = await fetch("https://api.thecatapi.com/v1/images/search");
    console.log("Retorno sa Requisição", retornoRequisicao)

    const dadosRequisicao = await retornoRequisicao.json();
    console.log("Dados da Requisição", dadosRequisicao)

    const imgCat = document.getElementById("img_cat");
    imgCat.src = dadosRequisicao[0].url;
}