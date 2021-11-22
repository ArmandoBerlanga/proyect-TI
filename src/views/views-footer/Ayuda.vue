<template>
<div id="ayuda">
    <h2>FAQs</h2>

    <div class="FAQ">
        <div class="pregunta">
            ¿Desde que edad puedo empezar en Indigo?
        </div>
        <div class="contenido">
            ¡Todas nuestras clases son para niños y niñas de 10 años en adelante! ¡Algunas clases puedes empezar incluso desde los 6 años!
        </div>
    </div>

    <div class="FAQ">
        <div class="pregunta">
            ¿Necesito ser flexible?
        </div>
        <div class="contenido">
            ¡No! No necesitas ser flexible para ninguna de nuestras clases, en Indigo te ayudaremos a desarrollarla.
        </div>
    </div>

    <div class="FAQ">
        <div class="pregunta">
            ¿Es solo para niñas?
        </div>
        <div class="contenido">
            No, tenemos un ambiente inclusivo en el que cualquier persona puede inscribirse a cualquiera de nuestras clases.
        </div>
    </div>

    <div class="FAQ">
        <div class="pregunta">
            No puedo encontrar la ubicación
        </div>
        <div class="contenido">
            No te preoocupes te tenemos cubiertx, consulta nuestra ubicación
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.475015404541!2d-100.97503188498533!3d25.455809383776582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868812b11807ebcd%3A0x3950388d3c926560!2sAvemed!5e0!3m2!1ses-419!2smx!4v1637570823963!5m2!1ses-419!2smx" allowfullscreen="" loading="lazy"></iframe>
    </div>

</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/styles/__variables.scss';

#ayuda {
    margin: 2rem;
    display: flex;
    flex-flow: column wrap;
    gap: 0.7rem;

    .FAQ {
        font-size: 1.1rem;

        .pregunta {
            font-weight: bold;
            color: $primario;
        }

        iframe{
            border: 0;
            border-radius: 5px;
            width: 40rem;
            height: 20rem;
        }
    }

}
</style>
