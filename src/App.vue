<template>
<div id="app">

    <nav>
        <img src="@/assets/logo.png" alt="Logo de Indigo Circus">

        <ul class="lista hide">
            <li>
                <router-link to="/">INICIO</router-link>
            </li>
            <li>
                <router-link to="/clases">CLASES</router-link>
            </li>
            <li>
                <router-link to="/maestros">MAESTROS</router-link>
            </li>
            <li v-if="state.sesionActiva">
                <router-link to="/videos">VIDEOS</router-link>
            </li>
            <li v-if="!state.sesionActiva">
                <router-link to="/login">INICIAR SESIÓN</router-link>
            </li>
            <li v-if="state.sesionActiva">
                <router-link to="/" @click="logout()">CERRAR SESIÓN</router-link>
            </li>
            <li v-if="!state.sesionActiva">
                
                <a href="/#forms">
                    <button class="secundario">REGÍSTRATE</button>
                </a>
                
            </li>
        </ul>

        <Menu :sesionActiva="state.sesionActiva" class="menu" />
    </nav>

    <main>
        <router-view :sesionActiva="state.sesionActiva" @login="state.sesionActiva=true" />
    </main>

    <footer>

        <section class="first">

            <div class="info">
                Derechos Reservados © 2021 Todos los Derechos Reservados Indigo Circus Academy <br>
                Paseo del Bienestar 414 Col. Alpes Norte. Saltillo Coah. MX 844-232-4782
            </div>

            <div class="icons">

                <a href="https://www.facebook.com/indigo.circus.academy" target="_blank">
                    <img src="@/assets/social_media/facebook.png" alt="Logo de Facebook">
                </a>
                <a href="https://www.instagram.com/indigo.circus/" target="_blank">
                    <img src="@/assets/social_media/insta.png" alt="Logo de Instagram">
                </a>
                <a href="https://www.tiktok.com/@indigocircus?" target="_blank">
                    <img src="@/assets/social_media/tiktok.png" alt="Logo de TikTok">
                </a>

            </div>

        </section>

        <ul class="sub-links">
            <!-- <li>
                <router-link to="#">Derechos Reservados</router-link>
            </li> -->
            <li>
                <router-link to="/nosotros">Sobre Nosotros</router-link>
            </li>
            <li>
                <router-link to="/politicas_privacidad">Politica de Privacidad</router-link>
            </li>
            <li>
                <router-link to="ayuda">Ayuda</router-link>
            </li>
        </ul>

        <div class="linea"></div>

    </footer>

</div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import {
    reactive
} from '@vue/reactivity'
//import { onMounted } from '@vue/runtime-core'; 
import firebase from 'firebase';
//import watch from 'vue';

export default {
    name: 'App',
    components: {
        Menu
    },
    setup() {

        document.title = "Landing Indigo";

        const state = reactive({
            sesionActiva: localStorage.getItem("sesionActiva"),
            usuario: '',
        });

        function logout() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    alert("Has cerrado tu sesión");
                    location.replace("/");
                    localStorage.clear();
                })
                .catch(err => alert(err.message));
        }
        
        return {
            state,
            logout
        }
    }
}
</script>

<style lang="scss">
@import '@/styles/__variables.scss';
@import '@/styles/botones.scss';

* {
    margin: 0;
    padding: 0;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    box-sizing: border-box;
}

h1,
h2,
h3 {
    color: $primario;
}

#app {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    background-color: $secundario;
    height: 100vh;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $primario;
    padding: 1rem 2.5%;

    img {
        width: 8rem;
        height: auto;
    }

    .lista {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        color: white;
        list-style: none;

        a {
            text-decoration: none;
            color: inherit;
            font-size: 120%;
        }

    }

    li {
        &:hover {
            transform: scale(1.1, 1.1);
            color: $amarillo;

        }
    }
}

main {
    background-color: $secundario;
}

footer {
    display: flex;
    flex-flow: column wrap;
    color: white;
    padding: 2rem;
    background-color: $primario;

    .first {
        display: flex;
        justify-content: space-between;
        gap: 0.7rem;

        .icons {
            display: flex;
            gap: 0.35rem;

            img {
                width: 2.5rem;
                height: 2.5rem;
                filter: invert(100%);
                border-radius: 50%;
                transition: transform 450ms ease;

                &:hover {
                    transform: scale(1.2, 1.2);
                    box-shadow: 0 0 10px rgba(128, 128, 128, 0.548);
                }
            }
        }
    }

    .linea {
        align-self: center;
        background-color: white;
        width: 80%;
        height: 0.08rem;
        margin-top: 2rem;
    }

    .sub-links {
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: center;
        list-style: none;
        gap: 0.7rem;
        margin-top: 2rem;

        li {
            transition: transform 450ms ease;

            &:hover {
                transform: scale(1.1, 1.1);

            }

            a {
                color: inherit;
                font-weight: 50;
            }
        }

    }
}

@media screen and (min-width: 700px) {
    nav .menu {
        display: none !important;
    }
}

@media screen and (max-width: 700px) {
    nav .hide {
        display: none !important;
    }
}
</style>
