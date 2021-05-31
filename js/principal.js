var cont_estrellas=2
var cont_estrellas

function mostrar_resultado_respuesta(id){ //validar_respuestas
    var xx = document.getElementById(id)
    // var nombre_archivo = filename();
	// alert(nombre_archivo);

    xx.style.display = 'none'; //oculta el elemento

    if(xx.name=='r_correcta'){ //procede a mostrar una imagen dependiendo del caso
        imagen = '<img src="imagenes/correcto.png" alt="Correcto" class="centrar" style="width: 90px; margin-right: 100px;  margin-left: 100px;"/>'
        document.getElementById(xx.id).parentNode.innerHTML = imagen;

        var nombre_archivo = filename()
        if(nombre_archivo=="juego_reloj5.php"){
            pasar_nivel_juego_completado_notificacion()
        }
        if(nombre_archivo=="juego_contar5.php"){
            pasar_nivel_juego_completado_notificacion()
        }
        if(nombre_archivo=="juego_suma5.php"){
            pasar_nivel_juego_completado_notificacion()
        }
        // else if(cont_estrellas<3){
        //     cont_estrellas++;
        //     actualizar_estrellas()
        //     pasar_nivel_estrella_extra_notificacion()
        // }else{
        //     pasar_nivel_notificacion()
        // }
        pasar_nivel_notificacion()
        

            
        
    }else{
        imagen = '<img src="imagenes/incorrecto.png" alt="Incorrecto" class="centrar" style="width: 90px; margin-right: 100px;  margin-left: 100px;" />'
        document.getElementById(xx.id).parentNode.innerHTML = imagen;

        cont_estrellas--;
        // alert(cont_estrellas)
        actualizar_estrellas()
        

        
    }
}

function pasar_nivel_estrella_extra_notificacion(){
    Swal.fire({
        type:'success',
        title:'¡Felicidades, encontraste la respuesta correcta! Has ganado una estrella extra',
        confirmButtonColor:'#3085d6',
        confirmButtonText:'Siguiente nivel',
        allowOutsideClick: false
    }).then((result) => {
        if(result.value){
            llevar_proximo_nvl()
        }
    })
}

function pasar_nivel_notificacion(){
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
function pasar_nivel_juego_completado_notificacion(){
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

function sin_vidas_notificacion(){
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
        title:'¡Ya puedes jugar!, ¡tu perfil ha sido creado!',
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


function click_perfil(id){ //validar_respuestas
    crear_perfil_notificacion()
}

function click_imagen_perfil(id){ //validar_respuestas
    perfil_creado_notificacion()

}

function llevar_proximo_nvl(){ //validar_respuestas
    var nombre_archivo = filename()
            
    if(nombre_archivo=="juego_reloj.php"){
        window.location.href = "juego_reloj2.php";
    }
    if(nombre_archivo=="juego_reloj2.php"){
        window.location.href = "juego_reloj3.php";
    }
    if(nombre_archivo=="juego_reloj3.php"){
        window.location.href = "juego_reloj4.php";
    }
    if(nombre_archivo=="juego_reloj4.php"){
        window.location.href = "juego_reloj5.php";
    }
    if(nombre_archivo=="juego_reloj5.php"){
        window.location.href = "home.php";
    }

    if(nombre_archivo=="juego_suma.php"){
        window.location.href = "juego_suma2.php";
    }
    if(nombre_archivo=="juego_suma2.php"){
        window.location.href = "juego_suma3.php";
    }
    if(nombre_archivo=="juego_suma3.php"){
        window.location.href = "juego_suma4.php";
    }
    if(nombre_archivo=="juego_suma4.php"){
        window.location.href = "juego_suma5.php";
    }
    if(nombre_archivo=="juego_suma5.php"){
        window.location.href = "home.php";
    }

    if(nombre_archivo=="juego_contar.php"){
        window.location.href = "juego_contar2.php";
    }
    if(nombre_archivo=="juego_contar2.php"){
        window.location.href = "juego_contar3.php";
    }
    if(nombre_archivo=="juego_contar3.php"){
        window.location.href = "juego_contar4.php";
    }
    if(nombre_archivo=="juego_contar4.php"){
        window.location.href = "juego_contar5.php";
    }
    if(nombre_archivo=="juego_contar5.php"){
        window.location.href = "home.php";
    }

}

function actualizar_estrellas(){ //validar_respuestas
    if(cont_estrellas==3){
        imagen = '<img src="imagenes/3_estrellas.png" alt="3" class="centrar" />'
        document.getElementById("lugar_estrellas").innerHTML = imagen;
    }else if(cont_estrellas==2){
        imagen = '<img src="imagenes/2_estrellas.png" alt="2" class="centrar" />'
        document.getElementById("lugar_estrellas").innerHTML = imagen;
    }else if(cont_estrellas==1){
        imagen = '<img src="imagenes/1_estrellas.png" alt="1" class="centrar" />'
        document.getElementById("lugar_estrellas").innerHTML = imagen;
    }else if(cont_estrellas==0){
    imagen = '<img src="imagenes/0_estrellas.png" alt="0" class="centrar" />'
    document.getElementById("lugar_estrellas").innerHTML = imagen;
    sin_vidas_notificacion()
    }

}

