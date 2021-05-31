<?php require_once "parte_superior.php"?>

    <main>

        <div class="posicion_btn_volver">
            <a href="niveles_suma.php">
            <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left btn_volver" viewBox="0 0 40 40"  stroke="#000000" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z" />
            </svg>
            </a>
        </div>

        <div class="recuadro_blanco_fondo centrar">
            <h4> Puntuación actual:</h4>
            <div class="grupo_posibles_respuestas centrar" id='lugar_estrellas'>
                 <img class="img_estrellas_ejercicio" src="imagenes/3_estrellas.png">
            </div>
        <p class="instrucciones_cortas">¿Cuánto es?</p>
            <div class="grupo_posibles_respuestas img_ejercicio_resolver centrar">
                <div>
                    <img src="imagenes/princesa/Princesa 1.png" class="centrar"  style="margin-top:20px; width:100%;">
                </div>
                <div>
                    <img src="imagenes/Suma.png" class="centrar"  style="margin-top:20px; width:100%;">
                </div>
                <div>
                    <img src="imagenes/princesa/Princesa 2.png" class="centrar"  style="margin-top:20px; width:100%;">
                </div>
            </div>
            <div class="grupo_posibles_respuestas_elegir centrar">
            <div id='lugar_r1'>
                <button class="boton_seleccionable boton_respuesta" name="r_correcta" onclick="mostrar_resultado_respuesta('r1');"  id="r1"  ><img src="imagenes/Numeros/3.png" class="img_boton_respuesta_corta centrar" ></button>
                </div>
                <div id='lugar_r2'>
                    <button class="boton_seleccionable boton_respuesta" name="r_incorrecta" onclick="mostrar_resultado_respuesta('r2');"  id="r2"  ><img src="imagenes/Numeros/6.png" class="img_boton_respuesta_corta centrar" ></button>
                </div>
                    <div id='lugar_r3'>
                <button class="boton_seleccionable boton_respuesta" name="r_incorrecta" onclick="mostrar_resultado_respuesta('r3');"  id="r3"  ><img src="imagenes/Numeros/4.png" class="img_boton_respuesta_corta centrar" ></button>
                </div>
            </div>
        </div>
    </main>
</body>
</html>