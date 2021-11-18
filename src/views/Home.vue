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

            <div v-if="state.masBeneficos" class="beneficio">
                <img src="@/assets/stock/s1.jpeg" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
                    culpa? Optio nostrum ad eligendi, aliquam ullam praesentium. Exercitationem
                    harum repellat illo excepturi architecto nostrum inventore, a dolor facilis? Alias,
                    illum?
                </p>
            </div>

            <div v-if="state.masBeneficos" class="beneficio">
                <img src="@/assets/stock/s1.jpeg" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
                    culpa? Optio nostrum ad eligendi, aliquam ullam praesentium. Exercitationem
                    harum repellat illo excepturi architecto nostrum inventore, a dolor facilis? Alias,
                    illum?
                </p>
            </div>

            <div v-if="state.masBeneficos" class="beneficio">
                <img src="@/assets/stock/s1.jpeg" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
                    culpa? Optio nostrum ad eligendi, aliquam ullam praesentium. Exercitationem
                    harum repellat illo excepturi architecto nostrum inventore, a dolor facilis? Alias,
                    illum?
                </p>
            </div>

            <div v-if="state.masBeneficos" class="beneficio">
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

        <h2>Consulta nuestra lista de maestros</h2>

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

    <section id="forms" class="registrate contenedor">

        <h2>Registrate HOY</h2>

        <div class="wrapper">
            <img class="cover" src="@/assets/stock/s1.jpeg" alt="">

            <form class="form-holder">
                <div class="datos nombres">
                    <div class="cuadro">
                        <img src="@/assets/name.svg" alt="">
                    </div>
                    <input type="text" name="nombre" placeholder="Nombre(s)" v-model="state.correo" required />
                </div>

                <div class="datos nombres">
                    <div class="cuadro">
                        <img src="@/assets/name.svg" alt="">
                    </div>
                    <input type="text" name="nombre" placeholder="Nombre(s)" v-model="state.correo" required />
                </div>

                <div class="datos nombres">
                    <div class="cuadro">
                        <img src="@/assets/name.svg" alt="">
                    </div>
                    <input type="text" name="nombre" placeholder="Nombre(s)" v-model="state.correo" required />
                </div>

                <div class="datos nombres">
                    <div class="cuadro">
                        <img src="@/assets/name.svg" alt="">
                    </div>
                    <input type="text" name="nombre" placeholder="Nombre(s)" v-model="state.correo" required />
                </div>
            </form>

        </div>

    </section>

</div>
</template>

<script>
import {
    reactive
} from '@vue/reactivity'
export default {
    name: 'Home',
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

.sec-beneficios {
    .beneficios {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 0.7rem;
        margin-top: 0.7rem;

        .beneficio {
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

.registrate {
    .wrapper {
        display: flex;
        justify-content: center;
        box-shadow: 0 0 10px rgba(128, 128, 128, 0.548);
        border-radius: 5px;

        .cover {
            height: 15rem;
            width: 12rem;
            object-fit: cover;
        }

        .form-holder {
            display: flex;
            flex-flow: column nowrap;
            background-color: white;
            padding: 2rem 7.5%;
            padding-top: 0;
            border-radius: 0 0 5px 5px;

            .datos {
                display: flex;
                flex-flow: row nowrap;
                margin-bottom: 0.7rem;

                .cuadro {
                    background-color: $primario;
                    padding: 0.35rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                input {
                    &:hover {
                        border-bottom: 2px solid rgb(225, 223, 223);
                    }

                    &:focus {
                        border-bottom: 2px solid #18314F;
                    }
                }
            }

            input {
                background-color: $secundario;
                outline: none;
                padding-left: 0.35rem;
            }

            input,
            button {
                width: 100%;
                height: 2.35rem;
                border: 0;
            }

            .botones {
                margin-top: 0.7rem;
            }
        }

    }
}

@media screen and (max-width: 1000px) {
    .sec-beneficios .beneficios {
        grid-template-columns: 1fr 1fr 1fr;
    }

    .lista-maestros .maestros {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media screen and (max-width: 890px) {
    .sec-beneficios .beneficios {
        grid-template-columns: 1fr 1fr;
    }

    .lista-maestros .maestros {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 500px) {
    .sec-beneficios .beneficios {
        grid-template-columns: 1fr;
    }

    .lista-maestros .maestros {
        grid-template-columns: 1fr;
    }
}
</style>
