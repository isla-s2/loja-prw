function prod_atual(){
    let input = document.getElementById('quantity');
    let stock = parseInt(document.getElementById('stock').innerHTML);
    if (input.value <1){
        input.value = 1;
    }else if (input.value > stock){
        input.value = stock;
    }
    document.getElementById('prod_total').innerHTML = (parseFloat(document.getElementById('prod_unit').innerHTML.replace(',', '.'))*input.value).toFixed(2).replace('.', ',');
    total();
}
document.getElementById('quantity').addEventListener('change', prod_atual);