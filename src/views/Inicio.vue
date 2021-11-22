<template>
<div id="home">
    <div class="landing">
        <img src="@/assets/banner.png" class="banner" />

        <a href="#forms">
            <button v-if="!sesionActiva" class="cta">¡EMPIEZA HOY!</button>
        </a>
    </div>

    <section class="beneficios contenedor">
        <Beneficios />   
    </section>

    <div class="linea"></div>

    <section v-if="!sesionActiva" class="registro">
        <Registro />
    </section>

</div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import Registro from '@/components/Registro.vue'
import Beneficios from '@/components/Beneficios.vue'

export default {
    name: 'Inicio',
    components: {
        Registro,
        Beneficios
    },
    props: {
        sesionActiva: String
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

.linea{
    width: 100%;
    height: 1rem;
    background-color: $primario;
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
