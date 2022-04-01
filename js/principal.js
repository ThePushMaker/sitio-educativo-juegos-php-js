


function resetear_bloqueo_niveles() {
    var estado_niveles = [{
            'juego_contar_n1': 'desbloqueado',
            'juego_contar_n2': 'bloqueado',
            'juego_contar_n3': 'bloqueado'
        },
        {
            'juego_reloj_n1': 'desbloqueado',
            'juego_reloj_n2': 'bloqueado',
            'juego_reloj_n3': 'bloqueado',
            'juego_reloj_n4': 'bloqueado',
            'juego_reloj_n5': 'bloqueado'
        },
        {
            'juego_suma_resta_n1': 'desbloqueado',
            'juego_suma_resta_n2': 'bloqueado',
            'juego_suma_resta_n3': 'bloqueado',
            'juego_suma_resta_n4': 'bloqueado',
        }
    ];
    localStorage.setItem("LS_estado_niveles", JSON.stringify(estado_niveles));

    // console.log(estado_niveles);

}

function desbloquear_nivel(juego, nivel){
    var stored_estado_niveles = JSON.parse(localStorage.getItem("LS_estado_niveles"));
    stored_estado_niveles[juego][nivel] = "desbloqueado"
    localStorage.setItem("LS_estado_niveles", JSON.stringify(stored_estado_niveles));
}

function notificacion_nivel_completado(){
    const sonido = cargarSonido("../../audios/correcto.mp3");
    sonido.play();
    Swal.fire({
        icon: 'success',
        title:'¡Nivel completado!',
        confirmButtonColor:'#3085d6',
        confirmButtonText: '>> Vamos al siguiente',
        showDenyButton: true,
        denyButtonText: `X Quiero otro juego`,
        allowOutsideClick: false,
        color: '#3085d6',
        // background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
        backdrop: `
        rgba(0,0,123,0.3)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
        center top
        no-repeat
        `
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            llevar_proximo_nvl();
        //   Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
        //   Swal.fire('Changes are not saved', '', 'info')
          window.location.href = "../principal/home";
        }
      })
}

// Función que muestra un mensaje de completado al elegir la respuesta correcta en un nivel
// Programador: Brian Rodríguez
// Fecha: 29/mayo/21
function pasar_nivel_notificacion(){
    const sonido = cargarSonido("../../audios/correcto.mp3");
    sonido.play();
    Swal.fire({
        icon: 'success',
        title:'¡Genial! ¡Encontraste la respuesta correcta!',
        confirmButtonColor:'#3BC362',
        confirmButtonText: '>> Dame otro reto',
        showDenyButton: true,
        denyButtonText: `X Me rindo, quiero salir`,
        allowOutsideClick: false,
        color: '#716add',
        // background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
        backdrop: `
        rgba(0,0,123,0.3)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
        center top
        no-repeat
        `
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
        //   Swal.fire('Saved!', '', 'success')
        //   llevar_proximo_nvl()
        } else if (result.isDenied) {
        //   Swal.fire('Changes are not saved', '', 'info')
          window.location.href = "../principal/home";
        }
      })
}

function notificacion_respuesta_incorrecta(){
    let timerInterval
    Swal.fire({
    icon: 'error',
    title: '¡Oops... Esa no es!',
    // html: 'I will close in <b></b> milliseconds.',
    timer: 1000,
    backdrop: `
    rgba(123,0,0,0.2)
    url("")
    center top 
    no-repeat
    `,
    timerProgressBar: true,
    didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
        // b.textContent = Swal.getTimerLeft()
        }, 100)
    },
    willClose: () => {
        clearInterval(timerInterval)
    }
    }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
        // console.log('I was closed by the timer')
    }
    })
}


// Función que muestra un mensaje de completado al completar todos los subniviles de un nivel de juego
// Programador: Brian Rodríguez
// Fecha: 29/mayo/21
function pasar_nivel_juego_completado_notificacion(){
    const sonido = cargarSonido("../../audios/terminado.ogg");
    sonido.play();
    Swal.fire({
        type:'success',
        title:'¡Felicidades, terminaste todos los niveles de este juego!',
        confirmButtonColor:'#3085d6',
        confirmButtonText:'Aceptar',
        allowOutsideClick: false
    }).then((result) => {
        if(result.value){
            // llevar_proximo_nvl()
            const sonido = cargarSonido("../../audios/juego_completado.ogg");
            sonido.play();
        }
    })
}

// Función que muestra un mensaje al quedarse sin vidas
// Programador: Brian Rodríguez
// Fecha: 29/mayo/21
function sin_vidas_notificacion(){
    const sonido = cargarSonido("../../audios/muerte.ogg");
    sonido.play();
    Swal.fire({
        title:'¡Oh no, te has quedado sin vidas! Es el fin del juego',
        confirmButtonColor:'#D35E23',
        confirmButtonText:'Volver a la lista de juegos',
        allowOutsideClick: false,
        imageUrl: 'https://i0.wp.com/i.giphy.com/media/Hwq45iwTIUBGw/giphy.gif',
        imageWidth: 400,
        imageHeight: 200,
        backdrop: `
        rgba(123,0,0,0.4)
        url("")
        center top 
        no-repeat
        `
    }).then((result) => {
        if(result.value){
            window.location.href = "../principal/home";
        }
    })
}

// Función que obtiene el nombre del archivo actual
// Programador: Juan Morales
// Fecha: 31/mayo/21
function filename(){
    var rutaAbsoluta = self.location.href;
    var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
    var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
    return rutaRelativa;
}


// Función que se encarga de restar vidas y mostrar la imagen de vidas correpsondiente
// Programador: Martín Calderón
// Fecha: 31/mayo/21
function actualizar_estrellas(){ //validar_respuestas
    var cont_estrellas = parseInt(localStorage.getItem("cont_estrellas"),10);
    if(cont_estrellas==3){
        imagen = '<img src="../../imagenes/3_estrellas.png" alt="3" class="img_estrellas_ejercicio centrar" />'
        document.getElementById("lugar_estrellas").innerHTML = imagen;
    }else if(cont_estrellas==2){
        imagen = '<img src="../../imagenes/2_estrellas.png" alt="2" class="img_estrellas_ejercicio centrar" />'
        document.getElementById("lugar_estrellas").innerHTML = imagen;
    }else if(cont_estrellas==1){
        imagen = '<img src="../../imagenes/1_estrellas.png" alt="1" class="img_estrellas_ejercicio centrar" />'
        document.getElementById("lugar_estrellas").innerHTML = imagen;
    }else if(cont_estrellas==0){
        imagen = '<img src="../../imagenes/0_estrellas.png" alt="0" class="img_estrellas_ejercicio centrar" />'
        document.getElementById("lugar_estrellas").innerHTML = imagen;
    }
}

function resetear_vidas(){
    localStorage.setItem('cont_estrellas', 3);
    actualizar_estrellas();
}

function proceso_respuesta_incorrecta(){
    const sonido = cargarSonido("../../audios/incorrecto.mp3");
    sonido.play();
    var cont_estrellas = parseInt(localStorage.getItem("cont_estrellas"),10);
    cont_estrellas--;
    localStorage.setItem('cont_estrellas', cont_estrellas)
    actualizar_estrellas();
    if(cont_estrellas==0){
        sin_vidas_notificacion()
    }else{
        notificacion_respuesta_incorrecta();
    }
}

// Función que se encarga de crear un reproductor para los sonidos
// Programador: Martín Calderón
// Fecha: 33/mayo/21
// Carga un sonido a través de su fuente y lo inyecta de manera oculta
const cargarSonido = function (fuente) {
    const sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none"; // <-- oculto
    document.body.appendChild(sonido);
    return sonido;
};

