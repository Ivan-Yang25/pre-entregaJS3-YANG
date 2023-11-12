document.addEventListener('DOMContentLoaded', () => {

    let usuario = document.getElementById('users');
    let nav = document.getElementById('nav');
    let close = document.getElementById('cierre');
    let compra = document.getElementsByClassName('compra');
    let pokemon = document.getElementsByClassName('card');
    let items = document.getElementById('compras');
    let carrito = [];
    let persona = sessionStorage.getItem("usuarios");
    let personaObj = JSON.parse(persona);
    let content = document.createElement('DIV');
    let contentObj = document.createElement('DIV');


    nav.appendChild(content);

    items.addEventListener('click', () => {
        content.classList.contains('visual') ? content.classList.remove('visual') : content.classList.add('visual'); 
    });

    let { name } = personaObj;

    usuario.textContent = `Bienvenido ${name}`;

    let pokemonObj = function (nombre, clase, precio) {

        this.nombre = nombre;
        this.clase = clase;
        this.precio = precio;

    }

    for (let u = 0; u < compra.length; u++) {

        compra[u].addEventListener('click', () => {

            let nombre = pokemon[u].getElementsByClassName('nombre')[0].textContent;
            let clase = pokemon[u].getElementsByClassName('clase')[0].textContent;
            let precio = pokemon[u].getElementsByClassName('precio')[0].textContent;

            
            contentObj.innerHTML = `
                <h5>
                    El pokemon es ${nombre}
                </h5>    
                <p>
                    Clase: ${clase}</br>
                    precio: ${precio}
                </P>
            `
            content.appendChild(contentObj);

        });
    };

    close.addEventListener('click', () => {

        window.location = "index.html";
    });
});