<template>
<div id="home">
    <div class="landing">
        <img src="@/assets/banner.png" class="banner" />

        <a href="#forms">
            <button class="cta">¡EMPIEZA HOY!</button>
        </a>
    </div>

    <section class="sec-clases contenedor">
    </section>

    <section class="lista-maestros">
    </section>

    <section class="registro">
        <Registro />
    </section>

</div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import Registro from '@/components/Registro.vue'

export default {
    name: 'Home',
    components: {
        Registro
    },
    setup() {
        const state = reactive({

        });

        return {
            state
        }

    }

}
</script>

<style lang="scss" scoped>
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

.registro {
    padding: 2rem;
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
