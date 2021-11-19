<template>
<div id="home">
    <div class="landing">
        <img src="@/assets/banner.png" class="banner" />

        <a href="#forms">
            <button class="cta">¡EMPIEZA HOY!</button>
        </a>
    </div>

    <section class="sec-clases contenedor">

        <h2>NUESTRAS CLASES</h2>

        <div class="clases">

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

    <section class="lista-maestros contenedor">

        <h2>TUS MAESTROS</h2>

        <div class="maestros">

            <div class="maestro">
                <img src="@/assets/stock/s1.jpeg" alt="">
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit placeat ab blanditiis. Eos commodi velit quis? Voluptates, quos molestiae?</p>
            </div>

            <div class="maestro">
                <img src="@/assets/stock/s1.jpeg" alt="">
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit placeat ab blanditiis. Eos commodi velit quis? Voluptates, quos molestiae?</p>
            </div>

            <div class="maestro">
                <img src="@/assets/stock/s1.jpeg" alt="">
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit placeat ab blanditiis. Eos commodi velit quis? Voluptates, quos molestiae?</p>
            </div>

            <div class="maestro">
                <img src="@/assets/stock/s1.jpeg" alt="">
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit placeat ab blanditiis. Eos commodi velit quis? Voluptates, quos molestiae?</p>
            </div>

            <div class="maestro">
                <img src="@/assets/stock/s1.jpeg" alt="">
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit placeat ab blanditiis. Eos commodi velit quis? Voluptates, quos molestiae?</p>
            </div>

        </div>

    </section>

    <section class="registro">
        <Registro/>
    </section>

    
   
</div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import Registro from '@/components/Registro.vue'

export default {
    name: 'Home',
    components:{
        Registro
    },
    setup(){
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

<style lang="scss">
@import '@/styles/__variables.scss';

.landing {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background-color: $primario;

    img {
        width: 95%;
        margin: 0 2.5%;
    }

    button {
        font-size: 1.5rem;
        width: 20rem;
        height: 3rem;
        margin: 2rem 0;
    }
}

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

            img {
                border-radius: 50%;
                height: 10rem;
                width: 10rem;
                object-fit: cover;
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

.lista-maestros {
    margin: 0;
    padding: 2rem;
    background-color: $primario;

    h2 {
        color: white;
    }

    .maestros {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        gap: 0.7rem;
        margin-top: 0.7rem;

        .maestro {
            display: flex;
            flex-flow: column nowrap;
            gap: 0.35rem;
            align-items: center;
            text-align: center;
            padding: 1rem;
            border-radius: 5px;
            background-color: white;
            color: $primario;
            transition: transform 750ms ease;

            img {
                border-radius: 50%;
                height: 7rem;
                width: 7rem;
                object-fit: cover;
            }

            &:hover {
                transform: scale(1.02, 1.02);
                box-shadow: 0 0 10px rgba(128, 128, 128, 0.548);
            }

        }
    }
}

@media screen and (max-width: 1000px) {
    .sec-clases .clases {
        grid-template-columns: 1fr 1fr 1fr;
    }

    .lista-maestros .maestros {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media screen and (max-width: 890px) {
    .sec-clases .clases {
        grid-template-columns: 1fr 1fr;
    }

    .lista-maestros .maestros {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 500px) {
    .sec-clases .clases {
        grid-template-columns: 1fr;
    }

    .lista-maestros .maestros {
        grid-template-columns: 1fr;
    }
}
</style>
