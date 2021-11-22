<template>
<div id="aboutus">
    <h2>UN POCO DE NOSOTROS</h2>

    <section class="presentacion">

        <img src="@/assets/aboutus/aboutus.jpg" alt="imagen de maestra dando clase">

        <p class="contenido">
            En Indigo Circus Academy estamos comprometidos a la motivación y superación personal de cada uno de nuestros alumnos, te invitamos a empujar tus límites y hacer más de lo que creías posible!
            FUERZA ante las situaciones de la vida, FLEXIBILIDAD en los métodos y DISCIPLINA en el día a día. Tu formación como artista y atleta se ve traducida en tu persona.
            Aprende nuevas habilidades mientras te pones en forma.
        </p>

    </section>

</div>
</template>

<style lang="scss">
#aboutus {
    margin: 2rem;
    text-align: justify;
}

h2{
    margin-bottom: 0.7rem;
}

.presentacion {
    display: flex;
    gap: 1.4rem;

    img {
        width: 25rem;
        border-radius: 5px;
    }

}
</style>
