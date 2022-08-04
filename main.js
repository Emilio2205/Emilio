
var connection = new WebSocket('ws://'+location.hostname+':81/');

let envio = document.getElementById("enviar");

let fecha= new Date();
let hora = fecha.getHours();
console.log(hora);


function agregar(){
    contenedor = document.getElementById("bboton");
    elemento = document.createElement("div");
    elemento.innerHTML=` <div>
                            <button id="Destrabar" class="boton">Destrabar Puerta</button>
                        </div>
                        <div>
                            <button class="boton">Devolver Combustible</button>
                        </div>`;
    contenedor.appendChild(elemento);

    let destrabar=document.getElementById("Destrabar");
    destrabar.addEventListener("mousedown", button1);
    destrabar.addEventListener("mouseup", button2);
}


envio.addEventListener("click", () => {
    let codigo = document.getElementById("clave").value;
    if(codigo==hora){
        console.log("Corecto");
        agregar();
    }
    else{
        alert("Clave Incorrecto");
    }
})


function button1(){
    console.log("Led esta en ON");
    connection.send("Led esta en ON");
}

function button2(){
    console.log("Led esta en off");
    connection.send("Led esta en OFF");
    location.href=location.href
}



