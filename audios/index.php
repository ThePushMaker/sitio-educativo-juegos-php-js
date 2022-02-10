<!DOCTYPE html>
<html lang="en">
<head>  
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aprende+ </title>    
    <link rel="preload" href="css/normalize.css" as="style">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Krub:wght@400;700&display=swap" rel="stylesheet">
    <link rel="preload" href="css/style.css" as="style">
    <link rel="stylesheet" href="css/style.css">

    <link rel="stylesheet" href="plugins/sweetalert2/sweetalert2.min.css"> 

    <script src="plugins/sweetalert2/sweetalert2.all.min.js"></script>    
    <script src="plugins/jquery-3.3.1.min.js"></script>    

    <script src="js/principal.js"></script>


    <link href="imagenes/logo_chico.png" rel="icon" type="image/png"/>

</head>
<body background="imagenes/fondo.jpg" class="imagen_fondo" onload="actualizar_perfiles();">
    <header >
        <a href=""><img class="logo_grande centrar" src="imagenes/logo_grande.png"></a>
        
    </header>

    <main class="">
      <p class="instrucciones_cortas"> ¡Elige un perfil y comienza a jugar!</p>

      <div class="perfiles_index ">
        <seccion class="perfiles">

          <a href="#" onclick="click_perfil('o1');"  id="o1">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus btn_añadir_perfil" width="200" height="200" viewBox="0 0 24 24" stroke-width="2.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="9" />
                <line x1="9" y1="12" x2="15" y2="12" />
                <line x1="12" y1="9" x2="12" y2="15" />
              </svg>
          </a>
            
          <a href="#" onclick="click_perfil('o2');"  id="o2">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus btn_añadir_perfil" width="200" height="200" viewBox="0 0 24 24" stroke-width="2.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="12" cy="12" r="9" />
                <line x1="9" y1="12" x2="15" y2="12" />
                <line x1="12" y1="9" x2="12" y2="15" />
              </svg>
          </a>

        

        </section>
      </div>
    </main>

    <footer>
        
    </footer>

    


</body>    
</html>