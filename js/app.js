//criar as duas funções dos botoes, adicionar e limpar.

let totalGeral;
limpar();

function adicionar () {
    // recuperar os valores nome do produto, quantidade e valor

    const Produto = document.getElementById('produto').value;
    let nomeDoProduto = Produto.split('-')[0];
    let valorUnitario = Produto.split('R$')[1];
    const quantidade = document.getElementById('quantidade').value;


    // calcular o preço, o subtotal

    let subTotal = quantidade * valorUnitario;
    

    //adicionar no carrinho

    let carrinho = document.getElementById('lista-produtos');

    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeDoProduto} <span class="texto-azul">R$${subTotal}</span>
        </section>`;

    //atualizar o valor total

    totalGeral = totalGeral + subTotal;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar () {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 0;

}