<template>
<div id="clases">
    <section class="sec-clases contenedor">

        <h2>NUESTRAS CLASES</h2>

        <div class="clases">

            <div class="clase">
                <img src="@/assets/stock/s1.jpeg" alt="">
                <h2>Danza Aerea</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
                    culpa? Optio nostrum ad eligendi, aliquam ullam praesentium. Exercitationem
                    harum repellat illo excepturi architecto nostrum inventore, a dolor facilis? Alias,
                    illum?
                </p>
            </div>

            <div class="clase">
                <img src="@/assets/stock/s1.jpeg" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
                    culpa? Optio nostrum ad eligendi, aliquam ullam praesentium. Exercitationem
                    harum repellat illo excepturi architecto nostrum inventore, a dolor facilis? Alias,
                    illum?
                </p>
            </div>

            <div class="clase">
                <img src="@/assets/stock/s1.jpeg" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
                    culpa? Optio nostrum ad eligendi, aliquam ullam praesentium. Exercitationem
                    harum repellat illo excepturi architecto nostrum inventore, a dolor facilis? Alias,
                    illum?
                </p>
            </div>

            <div class="clase">
                <img src="@/assets/stock/s1.jpeg" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
                    culpa? Optio nostrum ad eligendi, aliquam ullam praesentium. Exercitationem
                    harum repellat illo excepturi architecto nostrum inventore, a dolor facilis? Alias,
                    illum?
                </p>
            </div>

            <div v-if="state.masBeneficos" class="clase">
                <img src="@/assets/stock/s1.jpeg" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
                    culpa? Optio nostrum ad eligendi, aliquam ullam praesentium. Exercitationem
                    harum repellat illo excepturi architecto nostrum inventore, a dolor facilis? Alias,
                    illum?
                </p>
            </div>

            <div v-if="state.masBeneficos" class="clase">
                <img src="@/assets/stock/s1.jpeg" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
                    culpa? Optio nostrum ad eligendi, aliquam ullam praesentium. Exercitationem
                    harum repellat illo excepturi architecto nostrum inventore, a dolor facilis? Alias,
                    illum?
                </p>
            </div>

            <div v-if="state.masBeneficos" class="clase">
                <img src="@/assets/stock/s1.jpeg" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
                    culpa? Optio nostrum ad eligendi, aliquam ullam praesentium. Exercitationem
                    harum repellat illo excepturi architecto nostrum inventore, a dolor facilis? Alias,
                    illum?
                </p>
            </div>

            <div v-if="state.masBeneficos" class="clase">
                <img src="@/assets/stock/s1.jpeg" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
                    culpa? Optio nostrum ad eligendi, aliquam ullam praesentium. Exercitationem
                    harum repellat illo excepturi architecto nostrum inventore, a dolor facilis? Alias,
                    illum?
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
        grid-template-columns: 1fr 1fr 1fr 1fr;
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
