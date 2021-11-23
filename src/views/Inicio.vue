<template>
<div id="home">
    <div class="landing">
        <img src="@/assets/banner.png" class="banner" alt="banner con el texto de Cada día es una opurtunidad de ser tu mejor versión" />

        <a href="#forms">
            <button v-if="!sesionActiva" class="cta">¡EMPIEZA HOY!</button>
        </a>
    </div>

    <div class="linea"></div>

    <section v-if="!sesionActiva" class="video">
        <div>
            <iframe width="1000" height="500" src="https://www.youtube.com/embed/biwjNyr5VHY" frameborder="0" allowfullscreen></iframe>
        </div>
    </section>

    <section v-if="!sesionActiva" class="beneficios contenedor">
        <Beneficios />   
    </section>

    <section v-if="sesionActiva" class="beneficios contenedor">
        <Recompensas />   
    </section>

    <div class="linea"></div>

    <section v-if="!sesionActiva" class="registro">
        <Registro />
    </section>
    
    
    <div v-if="!sesionActiva">
    <Popup  
        v-if="popupTriggers.timedTrigger"
        :TogglePopup="() => TogglePopup('timedTrigger')">
        <h2>Uso de Cookies</h2>
        <p>
            Utilizamos cookies propias y de terceros para obtener datos estadísticos de la navegación 
            de nuestros usuarios y mejorar nuestros servicios. Si acepta o continúa navegando, 
            consideramos que acepta su uso		
        </p>
	</Popup>
    </div>

</div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import Registro from '@/components/Registro.vue'
import Beneficios from '@/components/Beneficios.vue'
import Recompensas from '@/components/Recompensas.vue'
import { ref } from 'vue';
import Popup from '@/components/Popup.vue'

export default {
    name: 'Inicio',
    components: {
        Registro,
        Beneficios,
        Popup,
        Recompensas
    },
    props: {
        sesionActiva: String
    },
    setup() {
        const state = reactive({
        });
       
        const popupTriggers = ref({
			timedTrigger: false
		});

        const TogglePopup = (trigger) => {
            popupTriggers.value[trigger] = !popupTriggers.value[trigger]
        }

		setTimeout(() => {
			popupTriggers.value.timedTrigger = true;
		}, 500);

        return {
            state,
            TogglePopup,
            popupTriggers
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

.video {
    height: 0;
	overflow: hidden;
	padding-bottom: 56.25%;
	padding-top: 30px;
	position: relative;
}

.video iframe, .video object, .video embed {
	height: 100%;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;
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
