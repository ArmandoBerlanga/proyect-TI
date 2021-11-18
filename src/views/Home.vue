<template>
<div id="home">
    <div class="landing">
        <img src="@/assets/banner.png" class="banner" />

        <a href="#forms">
            <button class="cta">¡Empieza Hoy!</button>
        </a>
    </div>
    
    <section class="sec-beneficios contenedor">

        <h2>¿Que beneficos tengo al ser parte de INDIGO?</h2>

        <div class="beneficios"> 

            <div class="beneficio">
                <img src="@/assets/stock/s1.jpeg" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, 
                    culpa? Optio nostrum ad eligendi, aliquam ullam praesentium. Exercitationem 
                    harum repellat illo excepturi architecto nostrum inventore, a dolor facilis? Alias, 
                    illum?
                </p>
            </div>  

            <div class="beneficio">
                <img src="@/assets/stock/s1.jpeg" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, 
                    culpa? Optio nostrum ad eligendi, aliquam ullam praesentium. Exercitationem 
                    harum repellat illo excepturi architecto nostrum inventore, a dolor facilis? Alias, 
                    illum?
                </p>
            </div>  

            <div class="beneficio">
                <img src="@/assets/stock/s1.jpeg" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, 
                    culpa? Optio nostrum ad eligendi, aliquam ullam praesentium. Exercitationem 
                    harum repellat illo excepturi architecto nostrum inventore, a dolor facilis? Alias, 
                    illum?
                </p>
            </div>  

            <div class="beneficio">
                <img src="@/assets/stock/s1.jpeg" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, 
                    culpa? Optio nostrum ad eligendi, aliquam ullam praesentium. Exercitationem 
                    harum repellat illo excepturi architecto nostrum inventore, a dolor facilis? Alias, 
                    illum?
                </p>
            </div>  
    
        </div>

    </section>

    <section class="lista-maestros contenedor">

        <h2>Consulta nuestra lista de maestros</h2>

        <div class="maestros">

        </div>
        
    </section>

    <section class="registrate">



    </section>



</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/styles/__variables.scss';

.landing {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background-color: $primario;

    img {
        width: 90%;
        margin: 0 2.5%;
    }

    button{
        font-size: 1.5rem;
        width: 20rem;
        height:3rem;
        margin: 2rem 0;
    }
}

.contenedor{
    margin: 2.5%;
}

.sec-beneficios{
    .beneficios{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 0.7rem;
        margin-top: 0.7rem;
        .beneficio{
            display: flex;
            flex-flow: column nowrap;
            gap: 0.35rem;
            align-items: center;
            text-align: center;
            padding: 1rem;
            border-radius: 5px;
            background-color: $primario;
            border: 2px solid $primario;
            color: white;

            img{
               border-radius: 50%;
                height: 10rem;
                width: 10rem;
                object-fit: cover;
            }
            
        }
    }
}

@media screen and (max-width: 1000px) {
    .sec-beneficios .beneficios{
        grid-template-columns: 1fr 1fr 1fr;

    }
}

@media screen and (max-width: 890px) {
    .sec-beneficios .beneficios{
        grid-template-columns: 1fr 1fr;

    }
}

@media screen and (max-width: 500px) {
    .sec-beneficios .beneficios{
        grid-template-columns: 1fr;

    }
}

</style>