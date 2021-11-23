<template>
<div id="registro">

    <section id="forms" class="registrate">

        <div class="wrapper">

            <img class="cover" src="@/assets/cover1.png" alt="Equipo de chicas haciendo una figura">

            <form class="form-holder" @submit.prevent="registro()">

                <div class="titulo">
                    <h2>REGÍSTRATE YA</h2>
                    <div class="linea"></div>
                </div>

                <div class="datos nombres">
                    <div class="cuadro">
                        <img src="@/assets/svg/account.svg" alt="Icono de usuario">
                    </div>
                    <input type="text" name="nombre" placeholder="Nombre(s)" v-model="state.nombre" required />
                </div>

                <div class="datos apellidos">
                    <div class="cuadro">
                        <img src="@/assets/svg/account.svg" alt="Icono de usuario">
                    </div>
                    <input type="text" name="apellido" placeholder="Apelllido(s)" v-model="state.apellido" required />
                </div>

                <div class="datos telefono">
                    <div class="cuadro">
                        <img src="@/assets/svg/phone.svg" alt="Icono de teléfono">
                    </div>
                    <input type="number" name="telefono" placeholder="Teléfono" v-model="state.telefono" required />
                </div>

                <div class="datos correo">
                    <div class="cuadro">
                        <img src="@/assets/svg/email.svg" alt="Icono de correo">
                    </div>
                    <input type="email" name="correo" placeholder="Correo" v-model="state.correo" required />
                </div>

                <div class="datos password">
                    <div class="cuadro">
                        <img src="@/assets/svg/password.svg" alt="Icono de contraseña">
                    </div>
                    <input type="password" name="password" placeholder="Contraseña" v-model="state.password" required />
                </div>

                <div class="datos date">
                    <div class="cuadro">
                        <img src="@/assets/svg/date.svg" alt="Icono de cumpleaños">
                    </div>
                    <input type="date" name="edad" v-model="state.cumple" required />
                </div>

                <div class="botones">
                    <button class="primario">REGISTRARSE</button>
                </div>

            </form>

        </div>

    </section>

</div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { auth } from '@/firebase.js'
import { db } from '@/firebase.js'

export default {
    name: "Registro",
    setup() {
        const state = reactive({
            nombre: '',
            apellido: '',
            telefono: '',
            correo: '',
            password: '',
            cumple: ''
        });


        function registro() {
            auth.createUserWithEmailAndPassword(state.correo,state.password)
            .then(cred => {
                return db.collection('usuarios').doc(cred.user.uid).set({
                    correo: state.correo,
                    nombre: state.nombre,
                    apellido: state.apellido,
                    telefono: state.telefono,
                    cumple: state.cumple,
                });
            })
            .then(() => {
                alert("Registro exitoso")
                location.replace("/login");
            })
            .catch(err => {
                if(err.message=="Password should be at least 6 characters") {
                    alert("La contraseña debe contener al menos 6 caracteres.")
                } else {
                    alert("El correo ingresado ya está asociado con una cuenta. Intenta otra vez.")
                }
            });
               
        }

        return {
            state,
            registro
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/forms.scss';

@media screen and (max-width: 900px) {
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

</style>
