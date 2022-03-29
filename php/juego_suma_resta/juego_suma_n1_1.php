<?php require_once "../vistas/parte_superior.php"?>
<main>
    <script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <div class="posicion_btn_volver">
        <a href="../niveles/niveles_suma">
            <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left btn_volver" viewBox="0 0 40 40"  stroke="#000000" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z" />
            </svg>
        </a>
    </div>

    <p class="instrucciones_cortas desc_nivel">Nivel 1 : 1/5 Juego suma con objetos</p>
    <div class="recuadro_blanco_fondo centrar">
        <!-- <h4> Puntuación actual:</h4> -->
        <div class="grupo_posibles_respuestas centrar" id='lugar_estrellas'>
            <img class="img_estrellas_ejercicio" src="../../imagenes/3_estrellas.png">
        </div>
        <p class="instrucciones_cortas">¿Cuánto es?</p>
        <div class="grupo_posibles_respuestas img_ejercicio_resolver centrar">
            <div>
                <img src="../../imagenes/caballero/Caballero 2.png" class="centrar"  id="primero" style="margin-top:20px; width:100%;">
            </div>
            <div>
                <img src="../../imagenes/Suma.png" class="centrar"  style="margin-top:20px; width:100%;">
            </div>
            <div>
                <img src="../../imagenes/caballero/Caballero 3.png" class="centrar"  id="segundo" style="margin-top:20px; width:100%;">
            </div>
        </div>
        <div class="grupo_posibles_respuestas_elegir centrar">
            <div id='lugar_r1'>
                <button class="boton_seleccionable boton_respuesta" value="r_incorrecta" onclick="mostrar_resultado_respuesta('r1');"  id="r1"  ><img src="../../imagenes/Numeros/2.png"  class="img_boton_respuesta_corta centrar" id="img_1"></button>
            </div>
            <div id='lugar_r2'>
                <button class="boton_seleccionable boton_respuesta" value="r_incorrecta" onclick="mostrar_resultado_respuesta('r2');"  id="r2"  ><img src="../../imagenes/Numeros/4.png"   class="img_boton_respuesta_corta centrar" id="img_2"></button>
            </div>
            <div id='lugar_r3'>
                <button class="boton_seleccionable boton_respuesta" value="r_correcta" onclick="mostrar_resultado_respuesta('r3');"  id="r3"  ><img src="../../imagenes/Numeros/5.png"   class="img_boton_respuesta_corta centrar" id="img_3"></button>
            </div>
        </div>
    </div>
</main>

<script>
    $(document).ready(function() {
        var contaNivel = 0;
        var contaSubNivel = 0;

        var jsonNiveles = (function () {
            var json = null;
            $.ajax({
                'async': false,
                'global': false,
                'url': "../juego_suma_resta/niveles.json",
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

            if(contaSubNivel >= 4){
                contaNivel++;
                contaSubNivel = 0;
            }else {
                contaSubNivel++;
            }

            console.log(contaNivel);
            console.log(contaSubNivel);

            $('.desc_nivel').text('Nivel ' + (contaNivel+1) + ': ' + (contaSubNivel+1) + '/5 Juego suma con objetos');

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
</script>

<script type="text/javascript">

    function llevar_proximo_nvl(){

    }

</script>

</body>
</html>