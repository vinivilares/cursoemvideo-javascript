function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    
    //Caso a Hora ou Minutos fique menor que 10 vai adicionar um 0
    if (hora < 10){
        hora = "0" + hora;
    }

    if (minutos < 10) {
        minutos = "0" + minutos;
    }


    msg.innerHTML = `Agora são ${hora}:${minutos}.`;

    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'manha.png';
        document.body.style.background = '#e2cd9f';
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'tarde.png';
        document.body.style.background = '#b9846f';
    } else {
        // BOA NOITE!
        img.src = 'noite.png';
        document.body.style.background = '#515154';
    }
}