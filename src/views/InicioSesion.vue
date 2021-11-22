<template>
<div id="login">

    <section id="forms" class="login">

        <div class="wrapper">

            <img class="cover" src="@/assets/stock/s1.jpeg" alt="">

            <form class="form-holder" @submit.prevent="Login">

                <div class="titulo">
                    <h2>INICIA SESIÓN</h2>
                    <div class="linea"></div>
                </div>

                <div class="datos correo">
                    <div class="cuadro">
                        <img src="@/assets/svg/email.svg" alt="">
                    </div>
                    <input type="email" name="correo" placeholder="Correo" v-model="state.correo" required />
                </div>

                <div class="datos password">
                    <div class="cuadro">
                        <img src="@/assets/svg/password.svg" alt="">
                    </div>
                    <input type="password" name="password" placeholder="Contraseña" v-model="state.password" required />
                </div>

                <div class="botones">
                    <button class="primario">INICIA SESIÓN</button>
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
import firebase from 'firebase';

export default {
    name: "Login",
    setup(props, context) {
        const state = reactive({
            nombre: '',
            apellido: '',
            telefono: '',
            correo: '',
            password: '',
            cumple: '',
            comentarios: ''
        });

        const Login = () => {
            firebase
                .auth()
                .signInWithEmailAndPassword(state.correo, state.password)
                .then(() => {
                    alert("Inicio de sesión exitoso");
                    location.replace("/");
                    context.emit("login");
                    localStorage.setItem("sesionActiva", true);
                })
                .catch(err => alert(err.message));
        }

        return {
            state,
            Login
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/forms.scss';
</style>
