function contar() {
    var inicio = window.document.getElementById('inicio');
    var fim = window.document.getElementById('fim');
    var passo = window.document.getElementById('passo');
    var res = window.document.getElementById('res');
    
    if (inicio.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = "Impossivel contar"
        window.alert ("[ERRO] Dados Inválidos, verifique novamente!")
    } else {
        res.innerHTML = "Contando: <br>"
        var txtinicio = Number(inicio.value);
        var txtfim = Number(fim.value);
        var txtpasso = Number(passo.value);
        
        if (txtpasso <= 0) {
            window.alert ("Passo Inválido! Considerando Passo = 1")
            txtpasso = 1
        }
        if (txtinicio < txtfim) {
            //Contagem Crescente
            for (var c = txtinicio; c <= txtfim; c+=txtpasso){
                res.innerHTML += ` ${c} &#x1F449 `;
            }
    
        } else {
            //Contagem Decrescente
            for (var c = txtinicio; c >= txtfim; c-=txtpasso){
                res.innerHTML += ` ${c} &#x1F449 `;
            }
        }
        res.innerHTML += `&#x1F3C1`;
    }
}