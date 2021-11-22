<template>
<div id="clases">
    <section class="sec-clases contenedor">

        <h2>NUESTRAS CLASES</h2>

        <div class="clases">

            <div class="clase">
                <img src="@/assets/clases/danza_area.png" alt="">
                <h3>Danza área</h3>
                <p>
                    Más allá de ser estética e impresionante, la danza aérea otorga muchos beneficios a quien la practica. ¿Quieres conocerlos? ¡Aquí te los dejamos!
                <br><br>
                    1. Favorece la condición física. La ejecución de coreografías demanda resistencia del cuerpo.
                <br><br>
                    2. Tonifica el cuerpo. Desde subir la tela hasta realizar figuras y secuencias requiere fuerza, misma que desarrollarás durante la práctica.
                <br><br>
                    3. Al requerir concentración, favorece a la respiración, permitiendo la liberación del estrés.
                </p>
            </div>


            <div class="clase">
                <img src="@/assets/clases/handstand.png" alt="">
                <h3>Handstand</h3>
                <p>
                    El parado de manos es sin duda una habilidad que muchas personas quisieran tener, sin embargo ¿Conoces los beneficios de su práctica? ¡Aquí te los dejamos! 
                <br><br>
                    1. Tonifica y fortalece el cuerpo. Se trabajan espalda, hombros, brazos, muñecas y abdomen.
                <br><br>
                    2. Mejora tu metabolismo.
                <br><br>
                    3.  Activa la circulación de la sangre hacia la cabeza, por lo que es excelente para disminuir la ansiedad y regular el sueño.
                </p>
            </div>

            <div v-if="state.masBeneficos" class="clase">
                <img src="@/assets/clases/contorsion.png" alt="">
                <h3>Contorsión</h3>
                <p>
                    ¿Tienes curiosidad de iniciarte en el mundo de la contorsión pero aún tienes dudas? Aquí te dejamos más motivos para intentarlo:
                <br><br>
                    1. Mejora el rendimiento físico y reduce el riesgo de lesiones.
                <br><br>
                    2. Reduce molestias musculares y mejora la postura. ¡Estirar después de tu entrenamiento físico puede marcar una gran diferencia!
                <br><br>
                    3. Aumenta la temperatura del tejido muscular, favoreciendo a la circulación y el transporte de nutrientes.
                </p>
            </div>

            <div v-if="state.masBeneficos" class="clase">
                <img src="@/assets/clases/entrenamiento_funcional.png" alt="">
                <h3>Entrenamiento Funcional</h3>
                <p>
                    El entrenamiento funcional es ideal si buscas mejorar tu rendimiento en tus actividades diarias y un ejercicio personalizado para cubrir tus necesidades. Combínalo con nuestras demás clases o adáptalo al estilo de vida que más te guste.
                <br>
                </p>
            </div>
        </div>

        <i class="show" @click="showMore">MOSTRAR MÁS ...</i>

    </section>
</div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
    name: 'Clases',
    setup() {
        const state = reactive({
            masBeneficos: false
        });

        function showMore() {

            const show = document.querySelector(".show");
            if (state.masBeneficos)
                show.innerHTML = "MOSTRAR MÁS ...";
            else
                show.innerHTML = "MOSTRAR MENOS ...";

            state.masBeneficos = !state.masBeneficos;
        }

        return {
            state,
            showMore
        }

    }

}
</script>

<style lang="scss" scoped>
@import '@/styles/__variables.scss';

.contenedor {
    margin: 2rem;
}

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

            h3{
                color: white;
                padding-top: 20px;
                padding-bottom: 20px;
                font-size: 25px;
            }

            img {
                border-radius: 50%;
                height: 15rem;
                width: 15rem;
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
