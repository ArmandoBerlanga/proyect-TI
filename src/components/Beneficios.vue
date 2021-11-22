<template>
<div id="beneficios">
    <section class="sec-clases">

        <h2>BENEFICIOS</h2>

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


        </div>

    </section>
</div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
    name: 'Beneficios',
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
