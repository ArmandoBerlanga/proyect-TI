<template>
<div id="registro">

    <section id="forms" class="registrate">

        <div class="wrapper">

            <img class="cover" src="@/assets/stock/s1.jpeg" alt="">

            <form class="form-holder">

                <div class="titulo">
                    <h2>REGISTRATE YA</h2>
                    <div class="linea"></div>
                </div>

                <div class="datos nombres">
                    <div class="cuadro">
                        <img src="@/assets/svg/account.svg" alt="">
                    </div>
                    <input type="text" name="nombre" placeholder="Nombre(s)" v-model="state.nombre" required />
                </div>

                <div class="datos apellidos">
                    <div class="cuadro">
                        <img src="@/assets/svg/account.svg" alt="">
                    </div>
                    <input type="text" name="apellido" placeholder="Apelllido(s)" v-model="state.apellido" required />
                </div>

                <div class="datos telefono">
                    <div class="cuadro">
                        <img src="@/assets/svg/phone.svg" alt="">
                    </div>
                    <input type="number" name="telefono" placeholder="Telefono" v-model="state.telefono" required />
                </div>

                <div class="datos correo">
                    <div class="cuadro">
                        <img src="@/assets/svg/email.svg" alt="">
                    </div>
                    <input type="email" name="correo" placeholder="Correo" v-model="state.correo" required />
                </div>

                <div class="datos pais">
                    <div class="cuadro">
                        <img src="@/assets/svg/loc.svg" alt="">
                    </div>
                    <input type="text" name="pais" placeholder="Pais" v-model="state.pais" required />
                </div>

                <div class="datos date">
                    <div class="cuadro">
                        <img src="@/assets/svg/date.svg" alt="">
                    </div>
                    <input type="date" name="edad" v-model="state.cumple" required />
                </div>

                <div class="datos comentarios">
                    <h4>Comentarios: </h4>
                    <textarea name="comentarios" placeholder="Dejanos tus comentarios..." v-model="state.comentarios"></textarea>
                </div>

                <div class="botones">
                    <button class="primario">REGISTRATE</button>
                </div>

            </form>

        </div>

    </section>

</div>
</template>

<script>
import {
    reactive
} from '@vue/reactivity'
export default {
    name: "Registro",
    setup() {
        const state = reactive({
            nombre: '',
            apellido: '',
            telefono: "",
            correo: '',
            pais: '',
            cumple: "",
            comentarios: ''
        });

        return {
            state
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/forms.scss';
</style>
