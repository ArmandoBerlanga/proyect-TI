<template>
<div id="beneficios">
    <section class="sec-clases">

        <h2>BENEFICIOS</h2>

        <div class="clases">

            <div class="clase">
                <img src="@/assets/beneficios/beneficio1.png" alt="Chicas haciendo una figura">
                <h3>Convive</h3>
                <p>
                    Estarás rodeado de personas energéticas y activas como tú.
                </p>
            </div>

            <div class="clase">
                <img src="@/assets/beneficios/beneficio2.png" alt="Chica haciendo una figura en una tela">
                <h3>Aprende</h3>
                <p>
                    Aprenderás habilidades que no se aprenden en ningún otro lado.
                </p>
            </div>

            <div class="clase">
                <img src="@/assets/beneficios/beneficio3.png" alt="Chicos haciendo una figura de gimnasia">
                <h3>Atrévete</h3>
                <p>
                    Toma el reto de aprende una habilidad única y diferente.
                </p>
            </div>

            <div class="clase">
                <img src="@/assets/beneficios/beneficio4.png" alt="Chicas paradas de manos">
                <h3>Únete a la gran famila Índigo Circus</h3>
                <p>
                    Somos una comunidad unida que busca divertirse a través de la expresión de este bello arte.
                </p>
            </div>


        </div>

    </section>
</div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
    name: 'Recompensas',
    setup() {
        const state = reactive({
        });


        return {
            state,
        }

    }

}
</script>

<style lang="scss" scoped>
@import '@/styles/__variables.scss';

.sec-clases {
    .clases {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.7rem;
        margin-top: 0.7rem;

        .clase {
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
            transition: transform 750ms ease;

            img {
                border-radius: 50%;
                height: 10rem;
                width: 10rem;
                object-fit: cover;
            }

            &:hover{
                transform: scale(1.02, 1.02);
                box-shadow: 0 0 10px $primario;
            }

        }
    }

    .show {
        display: flex;
        justify-content: center;
        margin-top: 1.4rem;
        text-decoration: underline;
        transition: transform 750ms ease;

        &:hover {
            transform: scale(1.02, 1.02);
            color: $amarillo;
            cursor: pointer;
        }
    }
}

@media screen and (max-width: 1000px) {
    .sec-clases .clases {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media screen and (max-width: 890px) {
    .sec-clases .clases {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 500px) {
    .sec-clases .clases {
        grid-template-columns: 1fr;
    }
}

</style>
