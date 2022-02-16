<?php require_once "../vistas/parte_superior.php"?>

    <main>

    <div class="posicion_btn_volver">
    <a href="../niveles/niveles_contar">
          <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left btn_volver" viewBox="0 0 40 40"  stroke="#000000" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z" />
          </svg>
        </a>
    </div>

    <p class="instrucciones_cortas">Nivel 2 : 3/5 Completar series</p>
        <div class="recuadro_blanco_fondo centrar">
            <!-- <h4> Puntuación actual:</h4> -->
            <div class="grupo_posibles_respuestas centrar" id='lugar_estrellas'>
                 <img class="img_estrellas_ejercicio" src="../../imagenes/3_estrellas.png">
            </div>
        <p class="instrucciones_cortas">Completa la serie con el numero faltante</p>
            <div class="grupo_posibles_respuestas centrar">
                <div>
                    <img src="../../imagenes/numero_faltante/-19.png" class="img_ejercicio_resolver centrar">
                </div>
            </div>
            <div class="grupo_posibles_respuestas_elegir centrar">
            <div id='lugar_r1'>
               <button class="boton_seleccionable boton_respuesta" name="r_correcta" onclick="mostrar_resultado_respuesta('r1');"  id="r1"  ><img src="../../imagenes/numero_faltante/19.png" class="img_boton_respuesta_corta centrar" ></button>
               </div>
               <div id='lugar_r2'>
                <button class="boton_seleccionable boton_respuesta" name="r_incorrecta" onclick="mostrar_resultado_respuesta('r2');"  id="r2"  ><img src="../../imagenes/numero_faltante/15.png" class="img_boton_respuesta_corta centrar" ></button>
                </div>
                <div id='lugar_r3'>
                <button class="boton_seleccionable boton_respuesta" name="r_incorrecta" onclick="mostrar_resultado_respuesta('r3');"  id="r3"  ><img src="../../imagenes/numero_faltante/13.png" class="img_boton_respuesta_corta centrar" ></button>
                </div>
            </div>
        </div>
    </main>

    <script type="text/javascript">
        function llevar_proximo_nvl(){ //
            window.location.href = "../juego_contar/juego_contar_n2_4";
        }
    </script> 
</body>
</html>