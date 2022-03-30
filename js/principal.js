
var cont_estrellas = localStorage.getItem("cont_estrellas");

// Función que valida si la repsuesta elegida por el usuario es valida y psoteriormente muestra un simbolo y sonido dependiendo del caso
// Programador: Martín Calderón
// Fecha: 29/mayo/21
function mostrar_resultado_respuesta(id){ //validar_respuestas
    //1
    var xx = document.getElementById(id)

    /*xx.style.display = 'none'; //oculta el elemento*/

    if(xx.value=='r_correcta'){ //procede a mostrar una imagen dependiendo del caso //2
        //3
        /*imagen='';*/
        // imagen = '<img src="../../imagenes/correcto.png" alt="Correcto" class="centrar" style="width: 90px; margin-right: 100px;  margin-left: 100px;"/>'
        /*document.getElementById(xx.id).parentNode.innerHTML = imagen;*/
        // pasar_nivel_notificacion()
        var nombre_archivo = filename()
        //reloj


        if(nombre_archivo=="juego_reloj_n1_5.php" || nombre_archivo=="juego_reloj_n2_5.php" || nombre_archivo=="juego_reloj_n3_5.php" || nombre_archivo=="juego_reloj_n4_5.php" || nombre_archivo=="juego_reloj_n5_5.php" || nombre_archivo=="juego_contar_n1_5.php" || nombre_archivo=="juego_contar_n2_5.php" || nombre_archivo=="juego_contar_n3_5.php" || nombre_archivo=="juego_contar_n4_5.php" || nombre_archivo=="juego_contar_n5_5.php" || nombre_archivo=="juego_suma_n2_5.php" || nombre_archivo=="juego_suma_n2_5|" || nombre_archivo=="juego_suma_n3_5.php" || nombre_archivo=="juego_suma_n4_5.php" || nombre_archivo=="juego_suma_n5_5.php"){//4
            pasar_nivel_juego_completado_notificacion()//5
        }

    }
    // else{//6
    //     const sonido = cargarSonido("../../audios/incorrecto.mp3");
    //     sonido.play();
    //     /*imagen='';*/
    //     // imagen = '<img src="../../imagenes/incorrecto.png" alt="Incorrecto" class="centrar" style="width: 90px; margin-right: 100px;  margin-left: 100px;" />'
    //     /*document.getElementById(xx.id).parentNode.innerHTML = imagen;*/

    //     cont_estrellas--;
    //     // alert(cont_estrellas)
    //     actualizar_estrellas()

    // }
    // localStorage.setItem('cont_estrellas', cont_estrellas)//7
}

function notificacion_nivel_completado(){
    const sonido = cargarSonido("../../audios/correcto.mp3");
    sonido.play();
    Swal.fire({
        icon: 'success',
        type:'success',
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
        //   Swal.fire('Saved!', '', 'success')
        //   llevar_proximo_nvl()
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
        type:'success',
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
        b.textContent = Swal.getTimerLeft()
        }, 100)
    },
    willClose: () => {
        clearInterval(timerInterval)
    }
    }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
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
        confirmButtonText:'Jugar otro juego',
        allowOutsideClick: false
    }).then((result) => {
        if(result.value){
            llevar_proximo_nvl()
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
        type:'error',
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
        sin_vidas_notificacion()
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

