<style>
    @import url('https://fonts.googleapis.com/css2?family=Zen+Tokyo+Zoo&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@600&display=swap');

    :root{
        --specialBlue : #4679c7;
        --specialBlack: rgb(31, 28, 28)
    }

    *{
        font-family: 'Hind Siliguri', sans-serif;
        color:rgb(31, 28, 28);
    }

    .bigContainer{
        background-color: var(--specialBlue);
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .heading{
        font-family: 'Zen Tokyo Zoo', cursive;
        text-align: right;
        font-size: 80px;
    }

    .image{
        width: 60%;
        height: 400px;
        margin-left: 100px;
        margin-top: 20px;
    }

    .separator{
        width:100%;
        background-color: var(--specialBlack);
        height: 10px;
        display: inline-block;
    }

    .underline{
        width:100%;
        background-color: white;
        height: 5px;
        display: inline-block;
    }

    .textDatosGenerales{
        width: 50%;
        background-color: var(--specialBlue);
        text-align: center;
        font-size: 40px;
        color: white;
    }

    .smallContainer1{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        width: 100%;
        height: 450px;
        margin: 0px;
    }

    .datosGeneralesTitle{
        width: 50%;
        background-color: rgb(245, 153, 14);
        text-align: center;
        padding-top: 180px;
        font-size: 60px;
        margin: 0px;
    }

    .title{
        margin: 0px;
        margin-top: 20px;
        text-align: center;
        font-size: 60px;
        
    }

    .bigText{
        font-size: 30px;
    }

    .indice{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: justify;
    }
</style>

<div class="bigContainer">
    
    <span class="separator"></span>
    <img class="image" src="https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854__340.png">
    <h1 class="heading">Portafolio III</h1>
    <span class="separator"></span>
    
    <div class="smallContainer1">
        <h1 class="datosGeneralesTitle">Datos generales</h1>
        <p class="textDatosGenerales">
            Colegio Santa Catalina Labouré
            <br>
            Ricardo Andrés Morales Castillo
            <br>
            Curso: Laboratorio 1
            <br>
            4to Bachillerato en computación
        </p>
    </div>
    <span class="separator"></span>
    
    <div class="smallContainer2">
        <h1 class="title">Índice</h1>
        <span class="underline"></span>
        <ol class="indice">
            <li class="bigText">Portada</li>
            <li class="bigText">Anteportada</li>
            <li class="bigText">Índice</li>
            <li class="bigText">Objetivos</li>
            <li class="bigText">Documentación</li>
        </ol>
    </div>
    <span class="separator"></span>

    <div class="smallContainer2">
        <h1 class="title">Objetivos</h1>
        <span class="underline"></span>
        <p class="bigText">
            -En esta unidad tenía como meta personal aprender python
            y entender completamente html y css
            <br>
            -Quería que este portafolio tuviera un diseño más atractivo 
            <br>
            -Y quería aprender el uso de Flexbox
        </p>
    </div>
    <span class="separator"></span>

    <div class="smallContainer2">
        <h1 class="title">Documentación</h1>
        <span class="underline"></span>
        <p class="bigText">
            Este es mi portafolio contiene mucha información sobre html y css puede ayudarme personalmente
            y también a otras personas como un pequeño diccionario este también tiene soporte para celular
            link del proyecto 
            <a href="https://ricardo-we.github.io/Glosario-de-etiquetas/glosario.html">
                Glosario de etiquetas
            </a>
        </p>
    </div>
</div>
