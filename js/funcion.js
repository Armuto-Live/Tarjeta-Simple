function activarBoton() {
    document.getElementById("cambiarTexto").value="Cambiar carta";

    let menu = document.getElementById('borde');
    
    if(menu.className == 'card-zoro'){
        menu.className = 'card-luffy';
    }
    else{
        menu.className = 'card-zoro';
    }
}

