total();

function preco_atual(){
    let item = this.closest("li");
    let input = item.getElementsByClassName('quantity')[0];
    if (input.value <1){
        input.value = 1;
    }
    item.getElementsByClassName('prodTotal')[0].innerHTML = (parseFloat(item.getElementsByClassName('price')[0].innerHTML.replace(',', '.'))*input.value).toFixed(2).replace('.', ',');
    total();
}

function excluir(){
    this.closest("li").remove();
    total();
}

var botoes = document.getElementsByClassName('delete');
for (let i=0; i<botoes.length; i++){
    botoes[i].addEventListener('click', excluir);
}

var inputs = document.getElementsByClassName('quantity');
for (let i=0; i<inputs.length; i++){
    inputs[i].addEventListener('change', preco_atual);
}

function total(){
    let precos = document.getElementsByClassName('prodTotal');
    let total = 0;
    for (let p of precos){
        total += parseFloat(p.innerHTML.replace(',', '.'))
    }
    document.getElementById('subtotal').innerHTML = total.toFixed(2).replace('.', ',');
    total += parseFloat(document.getElementById('s_total').innerHTML.replace(',', '.')) - parseFloat(document.getElementById('c_total').innerHTML.replace(',', '.'));
    document.getElementById('total').innerHTML = total.toFixed(2).replace('.', ',');
}

function frete(){
    let valor_f = 0;
    switch (document.getElementById('cep').value){
        case '88780-000':
            valor_f= 14;
            break;
        case '88495-000':
            valor_f= 15;
            break;
        case '88490-000':
            valor_f= 16;
            break;
    }
    let total_f = valor_f + parseFloat(this.labels[0].getElementsByClassName('s_price')[0].innerHTML.replace(',', '.'));
    document.getElementById('s_total').innerHTML = total_f.toFixed(2).replace('.', ',');
    cupom();
    total();
}
var radios = document.getElementsByClassName('s_op');
for (let i=0; i<radios.length; i++){
    radios[i].addEventListener('click', frete);
}

function cupom(){
    c_value = document.getElementById('coupon').value;
    switch (c_value){
        case 'DESCONTO':
            document.getElementById('c_total').innerHTML = '25,00';
            document.getElementById('c_warn').innerHTML = 'Cupom aplicado!';
            break;
        case 'FRETEGRATIS':
            document.getElementById('c_total').innerHTML = document.getElementById('s_total').innerHTML;
            document.getElementById('c_warn').innerHTML = 'Cupom aplicado!';
            break;
        case '':
            document.getElementById('c_warn').innerHTML = '';
            break;
        default:
            document.getElementById('c_warn').innerHTML = 'Cupom inválido!';
    }
    total();
}
document.getElementById('c_set').addEventListener('click', cupom);