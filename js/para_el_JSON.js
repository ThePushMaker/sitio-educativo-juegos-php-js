    $(document).ready(function() {
        var nivel = localStorage.getItem("nivel")-1;
        contaNivel= parseInt(nivel);

        var contaNivel = 0;
        var contaSubNivel = 0;

        var jsonNiveles = (function () {
            var json = null;
            $.ajax({
                'async': false,
                'global': false,
                'url': localStorage.getItem("archivo_niveles_ruta"),
                'dataType': "json",
                'success': function (data) {
                    json = data;
                }
            });
            return json;
        })();

        $(".boton_respuesta").click(function(){

/*            var limite = localStorage.getItem("limite");
            if(contaNivel>parseInt(limite)) {
                alert("se ha completado el juego!");
                return;
            }*/

            $('.desc').text('');


            console.log("script nivel: " + nivel);
            console.log(jsonNiveles);

            var respuesta = $(this).val();

            console.log(respuesta);

            //Validar respuesta incorrecta y realizar acciones correspondientes
            if (respuesta === 'r_incorrecta') {
                proceso_respuesta_incorrecta();
                return;
            }

            console.log("Nivel: "+contaNivel);
            console.log("subnivel: "+contaSubNivel);

            if(contaSubNivel==4){//Esto es lo que ocurre cuando se acaban los 5 subniveles
                contaNivel++;
                contaSubNivel=0;
                notificacion_nivel_completado();
            }else {//SI aun no se completan los 5 subniveles del nivel
                contaSubNivel++;
                pasar_nivel_notificacion();
            }
            var imagenPrimera = jsonNiveles[contaNivel][contaSubNivel]['primeraImg'];
            var imagenSegunda = jsonNiveles[contaNivel][contaSubNivel]['segundaImg'];
            var opcionUno = jsonNiveles[contaNivel][contaSubNivel]['opcionUno'];
            var opcionDos = jsonNiveles[contaNivel][contaSubNivel]['opcionDos'];
            var opcionTres = jsonNiveles[contaNivel][contaSubNivel]['opcionTres'];

            var respuestas = jsonNiveles[contaNivel][contaSubNivel]['respuestas'];

            $('#primero').attr("src", imagenPrimera.toString());
            $('#segundo').attr("src", imagenSegunda.toString());
            $('#img_1').attr("src", opcionUno.toString());
            $('#img_2').attr("src", opcionDos.toString());
            $('#img_3').attr("src", opcionTres.toString());


            $(".boton_respuesta").each(function( index ) {
                console.log('f-02');
                $(this).attr("value", respuestas[index]);
            });
        });

    });