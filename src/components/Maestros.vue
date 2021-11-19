<template>
<div id="maestros">
    <section class="lista-maestros">

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

</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/styles/__variables.scss';

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
    .lista-maestros .maestros {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media screen and (max-width: 890px) {
    .lista-maestros .maestros {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 500px) {
    .lista-maestros .maestros {
        grid-template-columns: 1fr;
    }
}


</style>
