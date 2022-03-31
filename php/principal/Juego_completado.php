<?php require_once "../vistas/parte_superior.php" ?>
<main>
  <div class="posicion_btn_volver">
    <a href="../principal/home">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left btn_volver" viewBox="0 0 40 40" stroke="#000000" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z" />
      </svg>
    </a>
  </div>

  <div class="recuadro_blanco_fondo centrar">
    <div class=" centrar">
      <p class="instrucciones_cortas"> ¡Felicitaciones!</p>
    </div>

    <div class="btn_nivel_fondo">
      <p style="text-align:center">
        <img src="https://thumbs.gfycat.com/DeadlySpeedyAmericanbadger-size_restricted.gif" alt="tres" class="imagen_nivel">
      </p>
    </div>
    <p class="instrucciones_cortas" style="font-size: 1.2rem; color: black; text-shadow: none; -webkit-text-stroke-width: 1px; font-weight: normal;"> ¡Haz completado todos los niveles de este juego!</p>


    <div class="btn_nivel_fondo">
      <a href="../principal/home" class="btn_nivel boton_seleccionable ">
        <div>
          <h2 style="padding-left: 20px; padding-right: 20px;">Jugar otro juego</h2>
        </div>
        <p style="text-align:center;">
        </p>
      </a>
    </div>
  </div>


  </div>

</main>

<script src="../../js/principal.js"></script>
<script>
  // var audio = document.createElement("AUDIO")
  // document.body.appendChild(audio);
  // audio.src = "./audio/rain.m4a"

  // document.body.addEventListener("mousemove", function () {

  // })
  window.onload = function() {
    pasar_nivel_juego_completado_notificacion();

  }
  // window.onload=juego_completado;
</script>

</body>

</html>