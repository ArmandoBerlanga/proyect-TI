<template>
<div id="maestros">
    <section class="lista-maestros contenedor">

        <h2>TUS MAESTROS</h2>

        <div class="maestros">

            <div class="maestro">
                <img src="@/assets/maestros/paulina.png" alt="Imagen de la mestra de Danza Aerea Paulina Flores">
                <h3>Paulina Flores Herndández</h3>
                <p>
                    Me llamo <b>Paulina Flores</b>, tengo 21 años y estaré impartiendo la clase de danza aérea para el grupo de teens. Llevo practicando danza aérea desde que tenía 10 años y a lo largo de este tiempo he participado en expos, obras de teatro y competencias.
                    En esta clase te ayudaré a desarrollar tu fuerza, flexibilidad y expresión corporal.
                    ¡Ahí te espero!
                </p>
            </div>

            <div class="maestro">
                <img src="@/assets/maestros/luis.png" alt="Imagen del maestro de entrenamiento funcional Luis Alexandro Buendia">
                <h3>Luis Alexandro Buendia Charles</h3>
                <p>
                    Hola, mi nombre es <b> Luis Buendia </b>, tengo 26 años y mi experiencia deportiva comenzó a los 6 siendo deportista de gimnasia olímpica, a los 16 ingresé a un equipo de cheerleading el cual me ayudó a llegar a una competencia mundial representando a México a mis 20 años.
                    Comencé a dar clases de gimnasia desde los 17 años hasta hoy en día al igual que de cheerleading. <br><br>
                    Me he capacitado tanto en entrenamiento funcional y personalizado basado en las áreas de aumento de masa muscular, tonificación y pérdida de grasa como en entrenamiento para personas con capacidades diferentes o lesiones.
                </p>
            </div>

            <div class="maestro">
                <img src="@/assets/maestros/nahomi.png" alt="Imagen de la maestra de Contorsión Nahomi López">
                <h3>Cristina Nahomi López González</h3>
                <p>
                   ¡Hola! Soy <b>Nahomi</b>, tengo 21 años y he tenido contacto con el deporte desde los 3 años. A lo largo
                    de mi vida he practicado diversas disciplinas como escalada, danza aérea y gimnasia olímpica. La práctica 
                    de estos deportes me ha ayudado a tener control corporal, disciplina, confianza, seguridad y fuerza tanto 
                    física como mental. En Indigo impartiré la clase de handstand donde mi principal objetivo es ayudarte a
                     conseguir estas cualidades y más. ¡Te espero en clase!
                </p>
            </div>

            <div class="maestro">
                <img src="@/assets/maestros/paula.png" alt="Imagen de la maestra de Danza Aérea Paula Laredo">
                <h3>Paula Sofía Laredo Del Bosque</h3>
                <p>
                    ¡Hola! Soy <b>Paula</b>, tengo 20 años, ocho de ellos en la práctica del aéreo y cuatro impartiendo clases de esta misma disciplina. También he participado en compañías de teatro y circo, desarrollándome tanto en las alturas como en clown. Además, he tomado talleres y capacitaciones de metodología de la enseñanza para la danza aérea, seguridad y de diferentes aparatos. En Indigo voy a guiarte en tu practica aérea y a apoyarte en tu desarrollo artístico ¡Nos vemos en clase!
                </p>
            </div>

            <div class="maestro">
                <img src="@/assets/maestros/marce2.png" alt="Imagen de la maestra de Contorsión Marcela Dainitín">
                <h3>Marcela Dainitín Dávila</h3>
                <p>
                    ¡Hola! Soy <b>Marce</b>, tengo 23 años y llevó más de 8 años desarrollándome en el ámbito de la danza y el arte circense tanto en México como en el Extranjero. Me apasiona el arte por lo que busco ser multidisciplinaria, me he entrenado en diferentes áreas como ballet, jazz, contemporáneo, acrobacia, contorsión, danza aérea, entre otras. Me gusta compartir mi conocimiento y experiencia y ver cómo mis alumnos disfrutan y crecen con la danza y el circo. En Indigo podrás desarrollar tu Flexibilidad ¡Te espero!
                </p>
            </div>

            <div class="maestro">
                <img src="@/assets/maestros/marce1.png" alt="Imagen de la maestra de Trapecio Marcela González">
                <h3>Marcela González Valdez</h3>
                <p>
                    ¡Hola! Soy <b>Marce</b>, tengo 19 años y practico danza aérea desde que tengo 10. A lo largo de estos años he practicado en varios aparatos aéreos como la tela, el aro y el trapecio. Además he tomado talleres y competido a nivel estatal. La danza aérea es una disciplina que te ayudará a soltarte y tener más confianza en ti mismx. Yo me di cuenta de que el trapecio es el aparato con el que más me identifico y en el que más me divierto y puede ser que tú también. En Indigo te guiaré para que te puedas desarrollar en el trapecio. ¡Te veo en clase!                </p>
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

#maestros {
    margin: 2rem 0;
}

.contenedor {
    margin: 2rem;
}

.lista-maestros {
    margin: 0;
    padding: 2rem;
    background-color: $primario;

    h2 {
        color: white;
    }

    h3 {
        padding-top: 20px;
        padding-bottom: 20px;
        font-size: 25px;
    }

    .maestros {
        display: grid;
        grid-template-columns: 1fr 1fr;
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
                height: 17rem;
                width: 17rem;
                object-fit: cover;
            }

            p {
                font-size: 17px;
                height: 15rem;
                overflow: scroll;
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
