    $(document).ready(function() {
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

        console.log(jsonNiveles)

        $(".boton_respuesta").click(function(){

            var respuesta = $(this).val();

            console.log(respuesta);

            if (respuesta === 'r_incorrecta') {
                return;
            }


            console.log(contaSubNivel);

            if(contaSubNivel>6){
                contaNivel++;
            }else {
                contaSubNivel++;
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