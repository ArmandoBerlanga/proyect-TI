<template>
<div id="videos">
    <section class="sec-videos contenedor">

        <h2>VIDEOS</h2>

        <div class="videos">

            <div class="video">
                <div>
                    <h3>Clase 1: Danza área</h3>
                    <iframe width="1000" height="500" src="https://www.youtube.com/embed/biwjNyr5VHY" frameborder="0" allowfullscreen></iframe>
                </div>
                <div>
                    <p>Este es un video en donde</p>
                </div>
            </div>
            <div class="video">
                <div>
                    <h3>Clase 2: Danza área</h3>
                    <iframe width="1000" height="500" src="https://www.youtube.com/embed/biwjNyr5VHY" frameborder="0" allowfullscreen></iframe>
                </div>
                <div>
                    <p>Este es un video en donde</p>
                </div>
            </div>
            <div class="video">
                <div>
                    <h3>Clase 3: Danza área</h3>
                    <iframe width="1000" height="500" src="https://www.youtube.com/embed/biwjNyr5VHY" frameborder="0" allowfullscreen></iframe>
                </div>
                <div>
                    <p>Este es un video en donde</p>
                </div>
            </div>

        </div>

    </section>
</div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
    name: 'Videos',
    setup() {
        const state = reactive({
            masBeneficos: false
        });

       
        return {
            state
        }

    }

}
</script>

<style lang="scss" scoped>
@import '@/styles/__variables.scss';

.contenedor {
    margin: 2rem;
}

.sec-videos {
    .videos {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0.7rem;
        margin-top: 0.7rem;

        .video {
            display: grid;
            grid-template-columns: 1fr 1fr;
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
    .sec-videos .videos {
        grid-template-columns: 1fr;
    }
}

@media screen and (max-width: 890px) {
    .sec-videos .videos {
        grid-template-columns: 1fr;
    }
}

@media screen and (max-width: 500px) {
    .sec-videos .videos {
        grid-template-columns: 1fr;
    }
}

</style>
