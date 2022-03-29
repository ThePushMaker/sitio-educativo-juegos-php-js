
var cont_estrellas = localStorage.getItem("cont_estrellas");

// Función que valida si la repsuesta elegida por el usuario es valida y psoteriormente muestra un simbolo y sonido dependiendo del caso
// Programador: Martín Calderón
// Fecha: 29/mayo/21
function mostrar_resultado_respuesta(id){ //validar_respuestas
    //1
    var xx = document.getElementById(id)

    xx.style.display = 'none'; //oculta el elemento

    if(xx.name=='r_correcta'){ //procede a mostrar una imagen dependiendo del caso //2
        //3
        /*        imagen = '<img src="imagenes/correcto.png" alt="Correcto" class="centrar" style="width: 90px; margin-right: 100px;  margin-left: 100px;"/>'
                document.getElementById(xx.id).parentNode.innerHTML = imagen;*/
        pasar_nivel_notificacion()
        var nombre_archivo = filename()
        //reloj
        if(nombre_archivo=="juego_reloj_n1_5.php" || nombre_archivo=="juego_reloj_n2_5.php" || nombre_archivo=="juego_reloj_n3_5.php" || nombre_archivo=="juego_reloj_n4_5.php" || nombre_archivo=="juego_reloj_n5_5.php" || nombre_archivo=="juego_contar_n1_5.php" || nombre_archivo=="juego_contar_n2_5.php" || nombre_archivo=="juego_contar_n3_5.php" || nombre_archivo=="juego_contar_n4_5.php" || nombre_archivo=="juego_contar_n5_5.php" || nombre_archivo=="juego_suma_n2_5.php" || nombre_archivo=="juego_suma_n2_5.php" || nombre_archivo=="juego_suma_n3_5.php" || nombre_archivo=="juego_suma_n4_5.php" || nombre_archivo=="juego_suma_n5_5.php"){//4
            pasar_nivel_juego_completado_notificacion()//5
        }

    }else{//6
        const sonido = cargarSonido("audios/incorrecto.mp3");
        sonido.play();
        /*        imagen = '<img src="imagenes/incorrecto.png" alt="Incorrecto" class="centrar" style="width: 90px; margin-right: 100px;  margin-left: 100px;" />'
                document.getElementById(xx.id).parentNode.innerHTML = imagen;*/

        cont_estrellas--;
        // alert(cont_estrellas)
        actualizar_estrellas()

    }
    localStorage.setItem('cont_estrellas', cont_estrellas)//7
}

// Función que muestra un mensaje de completado al elegir la respuesta correcta en un nivel
// Programador: Brian Rodríguez
// Fecha: 29/mayo/21
function pasar_nivel_notificacion(){
    const sonido = cargarSonido("audios/correcto.mp3");
    sonido.play();
    Swal.fire({
        type:'success',
        title:'¡Felicidades, encontraste la respuesta correcta!',
        confirmButtonColor:'#3085d6',
        confirmButtonText:'Siguiente nivel',
        allowOutsideClick: false
    }).then((result) => {
        if(result.value){
            llevar_proximo_nvl()
        }
    })
}

// Función que muestra un mensaje de completado al completar todos los subniviles de un nivel de juego
// Programador: Brian Rodríguez
// Fecha: 29/mayo/21
function pasar_nivel_juego_completado_notificacion(){
    const sonido = cargarSonido("audios/terminado.ogg");
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
    const sonido = cargarSonido("audios/muerte.ogg");
    sonido.play();
    Swal.fire({
        type:'error',
        title:'¡Oh no, te has quedado sin vidas! Es el fin del juego',
        confirmButtonColor:'#D35E23',
        confirmButtonText:'Volver a la lista de juegos',
        allowOutsideClick: false
    }).then((result) => {
        if(result.value){
            window.location.href = "home.php";
        }
    })
}


function crear_perfil_notificacion(){
    Swal.fire({
        type:'alert',
        title:'Necesitas crear tu perfil',
        confirmButtonColor:'#63C84A',
        confirmButtonText:'Crear perfil'
    }).then((result) => {
        if(result.value){
            window.location.href = "crear_perfil.php";
        }
    })
}

function perfil_creado_notificacion(){
    Swal.fire({
        type:'success',
        title:'¡Perfil creado ya puedes jugar!',
        confirmButtonColor:'#3085d6',
        confirmButtonText:'Ir a lista de juegos'
    }).then((result) => {
        if(result.value){
            window.location.href = "home.php";
        }
    })
}

function ingresaste_cuenta(){
    Swal.fire({
        type:'success',
        title:'¡Bienvenido de nuevo!',
        confirmButtonColor:'#3085d6',
        confirmButtonText:'Llevame a la lista de juegos',
        allowOutsideClick: false

    }).then((result) => {
        if(result.value){
            window.location.href = "home.php";
        }
    })
}


function filename(){
    var rutaAbsoluta = self.location.href;
    var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
    var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
    return rutaRelativa;
}


function click_imagen_perfil(id){ //validar_respuestas
    perfil_creado_notificacion()

}

function ingresar_cuenta(id){ //validar_respuestas
    ingresaste_cuenta()

}


function llevar_proximo_nvl(){ //validar_respuestas
    var nombre_archivo = filename()

    // Juego reloj
    //Juego reloj nvl 1
    if(nombre_archivo=="juego_reloj_n1_1.php"){
        window.location.href = "juego_reloj_n1_2.php";
    }
    if(nombre_archivo=="juego_reloj_n1_2.php"){
        window.location.href = "juego_reloj_n1_3.php";
    }
    if(nombre_archivo=="juego_reloj_n1_3.php"){
        window.location.href = "juego_reloj_n1_4.php";
    }
    if(nombre_archivo=="juego_reloj_n1_4.php"){
        window.location.href = "juego_reloj_n1_5.php";
    }
    if(nombre_archivo=="juego_reloj_n1_5.php"){
        window.location.href = "niveles_reloj.php";
    }

    //Juego reloj nvl 2
    if(nombre_archivo=="juego_reloj_n2_1.php"){
        window.location.href = "juego_reloj_n2_2.php";
    }
    if(nombre_archivo=="juego_reloj_n2_2.php"){
        window.location.href = "juego_reloj_n2_3.php";
    }
    if(nombre_archivo=="juego_reloj_n2_3.php"){
        window.location.href = "juego_reloj_n2_4.php";
    }
    if(nombre_archivo=="juego_reloj_n2_4.php"){
        window.location.href = "juego_reloj_n2_5.php";
    }
    if(nombre_archivo=="juego_reloj_n2_5.php"){
        window.location.href = "niveles_reloj.php";
    }

    //Juego reloj nvl 3
    if(nombre_archivo=="juego_reloj_n3_1.php"){
        window.location.href = "juego_reloj_n3_2.php";
    }
    if(nombre_archivo=="juego_reloj_n3_2.php"){
        window.location.href = "juego_reloj_n3_3.php";
    }
    if(nombre_archivo=="juego_reloj_n3_3.php"){
        window.location.href = "juego_reloj_n3_4.php";
    }
    if(nombre_archivo=="juego_reloj_n3_4.php"){
        window.location.href = "juego_reloj_n3_5.php";
    }
    if(nombre_archivo=="juego_reloj_n3_5.php"){
        window.location.href = "niveles_reloj.php";
    }

    //Juego reloj nvl 4
    if(nombre_archivo=="juego_reloj_n4_1.php"){
        window.location.href = "juego_reloj_n4_2.php";
    }
    if(nombre_archivo=="juego_reloj_n4_2.php"){
        window.location.href = "juego_reloj_n4_3.php";
    }
    if(nombre_archivo=="juego_reloj_n4_3.php"){
        window.location.href = "juego_reloj_n4_4.php";
    }
    if(nombre_archivo=="juego_reloj_n4_4.php"){
        window.location.href = "juego_reloj_n4_5.php";
    }
    if(nombre_archivo=="juego_reloj_n4_5.php"){
        window.location.href = "niveles_reloj.php";
    }

    //Juego reloj nvl 5
    if(nombre_archivo=="juego_reloj_n5_1.php"){
        window.location.href = "juego_reloj_n5_2.php";
    }
    if(nombre_archivo=="juego_reloj_n5_2.php"){
        window.location.href = "juego_reloj_n5_3.php";
    }
    if(nombre_archivo=="juego_reloj_n5_3.php"){
        window.location.href = "juego_reloj_n5_4.php";
    }
    if(nombre_archivo=="juego_reloj_n5_4.php"){
        window.location.href = "juego_reloj_n5_5.php";
    }
    if(nombre_archivo=="juego_reloj_n5_5.php"){
        window.location.href = "niveles_reloj.php";
    }

    // Juego suma
    //Juego suma nvl 1
    if(nombre_archivo=="juego_suma_n1_1.php"){
        window.location.href = "juego_suma_n1_2.php";
    }
    if(nombre_archivo=="juego_suma_n1_2.php"){
        window.location.href = "juego_suma_n1_3.php";
    }
    if(nombre_archivo=="juego_suma_n1_3.php"){
        window.location.href = "juego_suma_n1_4.php";
    }
    if(nombre_archivo=="juego_suma_n1_4.php"){
        window.location.href = "juego_suma_n1_5.php";
    }
    if(nombre_archivo=="juego_suma_n1_5.php"){
        window.location.href = "niveles_suma.php";
    }
    //Juego suma nvl 2
    if(nombre_archivo=="juego_suma_n2_1.php"){
        window.location.href = "juego_suma_n2_2.php";
    }
    if(nombre_archivo=="juego_suma_n2_2.php"){
        window.location.href = "juego_suma_n2_3.php";
    }
    if(nombre_archivo=="juego_suma_n2_3.php"){
        window.location.href = "juego_suma_n2_4.php";
    }
    if(nombre_archivo=="juego_suma_n2_4.php"){
        window.location.href = "juego_suma_n2_5.php";
    }
    if(nombre_archivo=="juego_suma_n2_5.php"){
        window.location.href = "niveles_suma.php";
    }
    //Juego suma nvl 3
    if(nombre_archivo=="juego_suma_n3_1.php"){
        window.location.href = "juego_suma_n3_2.php";
    }
    if(nombre_archivo=="juego_suma_n3_2.php"){
        window.location.href = "juego_suma_n3_3.php";
    }
    if(nombre_archivo=="juego_suma_n3_3.php"){
        window.location.href = "juego_suma_n3_4.php";
    }
    if(nombre_archivo=="juego_suma_n3_4.php"){
        window.location.href = "juego_suma_n3_5.php";
    }
    if(nombre_archivo=="juego_suma_n3_5.php"){
        window.location.href = "niveles_suma.php";
    }
    //Juego suma nvl 4
    if(nombre_archivo=="juego_suma_n4_1.php"){
        window.location.href = "juego_suma_n4_2.php";
    }
    if(nombre_archivo=="juego_suma_n4_2.php"){
        window.location.href = "juego_suma_n4_3.php";
    }
    if(nombre_archivo=="juego_suma_n4_3.php"){
        window.location.href = "juego_suma_n4_4.php";
    }
    if(nombre_archivo=="juego_suma_n4_4.php"){
        window.location.href = "juego_suma_n4_5.php";
    }
    if(nombre_archivo=="juego_suma_n4_5.php"){
        window.location.href = "niveles_suma.php";
    }
    //Juego suma nvl 5
    if(nombre_archivo=="juego_suma_n5_1.php"){
        window.location.href = "juego_suma_n5_2.php";
    }
    if(nombre_archivo=="juego_suma_n5_2.php"){
        window.location.href = "juego_suma_n5_3.php";
    }
    if(nombre_archivo=="juego_suma_n5_3.php"){
        window.location.href = "juego_suma_n5_4.php";
    }
    if(nombre_archivo=="juego_suma_n5_4.php"){
        window.location.href = "juego_suma_n5_5.php";
    }
    if(nombre_archivo=="juego_suma_n5_5.php"){
        window.location.href = "niveles_suma.php";
    }

    //Juego contar
    //Juego contar nvl 1
    if(nombre_archivo=="juego_contar_n1_1.php"){
        window.location.href = "juego_contar_n1_2.php";
    }
    if(nombre_archivo=="juego_contar_n1_2.php"){
        window.location.href = "juego_contar_n1_3.php";
    }
    if(nombre_archivo=="juego_contar_n1_3.php"){
        window.location.href = "juego_contar_n1_4.php";
    }
    if(nombre_archivo=="juego_contar_n1_4.php"){
        window.location.href = "juego_contar_n1_5.php";
    }
    if(nombre_archivo=="juego_contar_n1_5.php"){
        window.location.href = "niveles_contar.php";
    }
    //Juego contar nvl 2
    if(nombre_archivo=="juego_contar_n2_1.php"){
        window.location.href = "juego_contar_n2_2.php";
    }
    if(nombre_archivo=="juego_contar_n2_2.php"){
        window.location.href = "juego_contar_n2_3.php";
    }
    if(nombre_archivo=="juego_contar_n2_3.php"){
        window.location.href = "juego_contar_n2_4.php";
    }
    if(nombre_archivo=="juego_contar_n2_4.php"){
        window.location.href = "juego_contar_n2_5.php";
    }
    if(nombre_archivo=="juego_contar_n2_5.php"){
        window.location.href = "niveles_contar.php";
    }
    //Juego contar nvl 3
    if(nombre_archivo=="juego_contar_n3_1.php"){
        window.location.href = "juego_contar_n3_2.php";
    }
    if(nombre_archivo=="juego_contar_n3_2.php"){
        window.location.href = "juego_contar_n3_3.php";
    }
    if(nombre_archivo=="juego_contar_n3_3.php"){
        window.location.href = "juego_contar_n3_4.php";
    }
    if(nombre_archivo=="juego_contar_n3_4.php"){
        window.location.href = "juego_contar_n3_5.php";
    }
    if(nombre_archivo=="juego_contar_n3_5.php"){
        window.location.href = "niveles_contar.php";
    }

}

function actualizar_estrellas(){ //validar_respuestas
    if(cont_estrellas==3){
        imagen = '<img src="imagenes/3_estrellas.png" alt="3" class="img_estrellas_ejercicio centrar" />'
        document.getElementById("lugar_estrellas").innerHTML = imagen;
    }else if(cont_estrellas==2){
        imagen = '<img src="imagenes/2_estrellas.png" alt="2" class="img_estrellas_ejercicio centrar" />'
        document.getElementById("lugar_estrellas").innerHTML = imagen;
    }else if(cont_estrellas==1){
        imagen = '<img src="imagenes/1_estrellas.png" alt="1" class="img_estrellas_ejercicio centrar" />'
        document.getElementById("lugar_estrellas").innerHTML = imagen;
    }else if(cont_estrellas==0){
        imagen = '<img src="imagenes/0_estrellas.png" alt="0" class="img_estrellas_ejercicio centrar" />'
        document.getElementById("lugar_estrellas").innerHTML = imagen;
        sin_vidas_notificacion()
    }
}



function register(id) {
    if(id=='img_p1'){
        localStorage.setItem('nombre_imagen_perfil', 'icono_1')
        perfil_creado_notificacion()
    }else if(id=='img_p2'){
        localStorage.setItem('nombre_imagen_perfil', 'icono_2')
        perfil_creado_notificacion()
    }else if(id=='img_p3'){
        localStorage.setItem('nombre_imagen_perfil', 'icono_3')
        perfil_creado_notificacion()
    }else if(id=='img_p4'){
        localStorage.setItem('nombre_imagen_perfil', 'icono_4')
        perfil_creado_notificacion()
    }else if(id=='img_p5'){
        localStorage.setItem('nombre_imagen_perfil', 'icono_5')
        perfil_creado_notificacion()
    }else
        alert("no existe esa imagen")
    // var nombre_imagen_perfil = localStorage.getItem("nombre_imagen_perfil");

}

function actualizar_perfiles(){
    var nombre_imagen_perfil = localStorage.getItem("nombre_imagen_perfil");
    if(nombre_imagen_perfil!=null){
        // alert(nombre_imagen_perfil)

        imagen = '<img src="imagenes/iconos_perfil/'+nombre_imagen_perfil+'.png" alt="cuenta guardada" class="btn_añadir_perfil centrar" />'
        document.getElementById("o1").innerHTML = imagen;


    }else{ //sin cuenta
        // alert("vacio")

    }
}

function click_perfil(id){ //validar_respuestas
    var nombre_imagen_perfil = localStorage.getItem("nombre_imagen_perfil");
    if(nombre_imagen_perfil!=null){
        if(id=='o1'){
            window.location.href = "home.php";
        }else{
            crear_perfil_notificacion()
        }


    }else{ //sin cuenta
        // alert("vacio")
        crear_perfil_notificacion()
    }
}


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















