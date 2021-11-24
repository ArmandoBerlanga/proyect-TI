<template>
<div id="recompensas">
    <section class="sec-recompensas">

        <h2>RECOMPENSAS</h2>

        <div class="recompensas">

            <div class="recompensa">
                <img src="@/assets/recompensas/recompensa1.png" alt="Chica haciendo una figura de telas">
                <h3>Clase Gratis</h3>
                <p>
                   Lleva un comprobante de tu registro y tu primera clase será gratis.
                </p>
            </div>

            <div class="recompensa">
                <img src="@/assets/recompensas/recompensa2.png" alt="Chica haciendo el arco">
                <h3>Gimnasio</h3>
                <p>
                    Ahora como miembro, tendrás acceso ilimitado a nuestra serie de videos de práctica.
                </p>
            </div>

            <div class="recompensa">
                <img src="@/assets/recompensas/recompensa3.png" alt="Chico haciendo un ejercicio de abdomen">
                <h3>Promociones</h3>
                <p>
                    En tu correo recibirás promociones para las distintas clases.
                </p>
            </div>

            <div class="recompensa">
                <img src="@/assets/recompensas/recompensa4.png" alt="Chico usando el trapecio">
                <h3>Descuento</h3>
                <p>
                    Ahora tendrás acceso a descuentos en distintas tiendas deportivas.
                </p>
            </div>


        </div>

    </section>
</div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
    name: 'Recompensas',
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

.sec-recompensas {
    .recompensas {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.7rem;
        margin-top: 0.7rem;

        .recompensa {
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
    .sec-recompensas .recompensas {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media screen and (max-width: 890px) {
    .sec-recompensas .recompensas {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 500px) {
    .sec-recompensas .recompensas {
        grid-template-columns: 1fr;
    }
}

</style>
