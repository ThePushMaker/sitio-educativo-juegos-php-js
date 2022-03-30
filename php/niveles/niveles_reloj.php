<?php require_once "../vistas/parte_superior.php"?>
    <main>
    <div class="posicion_btn_volver">
        <a href="../principal/home">
          <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left btn_volver" viewBox="0 0 40 40"  stroke="#000000" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z" />
          </svg>
        </a>
    </div>

        <div class="recuadro_blanco_fondo centrar">
            <div>
                 <p class="instrucciones_cortas">¡Elige un nivel en juego de reloj!</p>
            </div>
            <div style="display:grid; grid-template-columns: repeat(1, 1fr);  grid-gap: 0px;">
                <div class="btn_nivel_fondo">
                    <a href="../videos/video_reloj" class="btn_nivel boton_seleccionable_video btn_nivel_tam">
                        <div>
                            <h2>Video introducción</h2>
                        </div>
                        <p style="text-align:center;" >
                            <img src="../../imagenes/youtube.png" alt="youtube" class="imagen_nivel_video">
                        </p>
                    </a>
                </div>
                <div class="btn_nivel_fondo">
                    <a href="../juego_reloj/juego_reloj_n1_1?nivel=1"" class="btn_nivel boton_seleccionable btn_nivel_tam">
                        <div>
                            <h2>Nivel 1 - Horas en punto</h2>
                        </div>
                        
                            <p style="text-align:center;" >
                                <img src="../../imagenes/niveles-reloj/1.jpg" alt="uno" class="imagen_nivel">
                            </p>        
                    </a>
                </div>
                <div class="btn_nivel_fondo">
                    <a href="../juego_reloj/juego_reloj_n1_1?nivel=2"" class="btn_nivel boton_seleccionable btn_nivel_tam">
                        <div>
                            <h2>Nivel 2  - Horas y media</h2>
                        </div>
                            <p style="text-align:center;" >
                                <img src="../../imagenes/niveles-reloj/2.jpg" alt="uno" class="imagen_nivel">
                            </p>        
                    </a>
                </div>
                <div class="btn_nivel_fondo">
                    <a href="../juego_reloj/juego_reloj_n1_1?nivel=3"" class="btn_nivel boton_seleccionable btn_nivel_tam">
                        <div>
                            <h2>Nivel 3  - Horas y minutos</h2>
                        </div>
                        
                            <p style="text-align:center;" >
                                <img src="../../imagenes/niveles-reloj/3.jpg" alt="uno" class="imagen_nivel">
                            </p>        
                    </a>
                </div>
                <div class="btn_nivel_fondo">
                    <a href="../juego_reloj/juego_reloj_n1_1?nivel=4"" class="btn_nivel boton_seleccionable btn_nivel_tam">
                        <div>
                            <h2>Nivel 4  - Identificar manecillas</h2>
                        </div>
                        
                            <p style="text-align:center;" >
                                <img src="../../imagenes/niveles-reloj/4.jpg" alt="uno" class="imagen_nivel">
                            </p>        
                    </a>
                </div>
                <div class="btn_nivel_fondo">
                    <a href="../juego_reloj/juego_reloj_n1_1?nivel=5"" class="btn_nivel boton_seleccionable btn_nivel_tam">
                        <div>
                            <h2>Nivel 5  - Ejercicios combinados</h2>
                        </div>
                        
                            <p style="text-align:center;" >
                                <img src="../../imagenes/niñoreloj.jpg" alt="uno" class="imagen_nivel">
                            </p>        
                    </a>
                </div>
           
        </div>

        
        
    </main>
    

    <script type="text/javascript">
       
       localStorage.setItem('cont_estrellas', 3)


    </script> 



</body>
</html>
