<template>
<div id="login">

    <section id="forms" class="login">

        <div class="wrapper">

            <img class="cover" src="@/assets/cover2.png" alt="Chica apoyando a otra a pararse de manos">

            <form class="form-holder" @submit.prevent="login()">

                <div class="titulo">
                    <h2>INICIAR SESIÓN</h2>
                    <div class="linea"></div>
                </div>

                <div class="datos correo">
                    <div class="cuadro">
                        <img src="@/assets/svg/email.svg" alt="Icono de usuario">
                    </div>
                    <input type="email" name="correo" placeholder="Correo" v-model="state.correo" required />
                </div>

                <div class="datos password">
                    <div class="cuadro">
                        <img src="@/assets/svg/password.svg" alt="Icono de contraseña">
                    </div>
                    <input type="password" name="password" placeholder="Contraseña" v-model="state.password" required />
                </div>

                <div class="botones">
                    <button class="primario">ACCEDER</button>
                </div>

            </form>

        </div>

    </section>

</div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { auth } from '@/firebase.js';

export default {
    name: "IniciaSesion",
    setup(props,context) {

        document.title = "Iniciar Sesión";

        const state = reactive({
            nombre: '',
            apellido: '',
            telefono: '',
            correo: '',
            password: '',
            cumple: ''
        });


        function login() {
            auth
            .signInWithEmailAndPassword(state.correo, state.password)
            .then(() => {
                alert("Inicio de sesión exitoso");
                location.replace("/");
                context.emit("login");
                localStorage.setItem("sesionActiva", true);
            })
            .catch(err => {
                if(err.message)
                    alert("Credenciales inválidas. Intenta otra vez.")
            })
        }

        return {
            state,
            login
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/forms.scss';

.login {
    padding: 0 25%;

    .wrapper .form-holder {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 870px) {
    .login {
        padding: 10%;

        .wrapper {
            flex-flow: column nowrap;

            .cover {
                border-radius: 5px 5px 0 0;
                width: 100%;
                height: 12rem;
                object-fit: cover;
            }

            .form-holder {
                width: 100%;
                grid-template-columns: 1fr;
            }
        }
    }   
}
</style>
