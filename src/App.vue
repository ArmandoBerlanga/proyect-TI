<template>
<div id="app">

    <nav>
        <img src="@/assets/logo.png" alt="logo">

        <ul class="lista hide">
            <li><router-link to="/">INICIO</router-link></li>
            <li><router-link to="/clases">CLASES</router-link></li>
            <li><router-link to="/maestros">MAESTROS</router-link></li>
            <li><router-link to="/login">INICIA SESIÓN</router-link></li>
            <li><router-link to="/" @click="Logout">CERRAR SESIÓN</router-link></li>
            <li><button class="secundario">REGISTRATE</button></li>
        </ul>

        <Menu class="menu" />
    </nav>

    <main>
        <router-view />
    </main>

    <footer>

        <section class="first">

            <div class="info">
                <p>© Copyright 2021. </p>
                <p>Este website utiliza cookies. Para rechazar o conocer más, visite nuestra página de Política de Cookies.</p>
            </div>

            <div class="icons">

                <img src="@/assets/social_media/facebook.png" alt="">
                <img src="@/assets/social_media/insta.png" alt="">
                <img src="@/assets/social_media/whatsapp.png" alt="">

             </div>

        </section>

        <div class="linea"></div>



    </footer>

</div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import {
    reactive
} from '@vue/reactivity'
import firebase from 'firebase';

export default {
    name: 'App',
    components: {
        Menu
    },    
    setup() {

        document.title = "Landing Indigo";

        const state = reactive({

        });

        const Logout = () => {
            firebase
                .auth()
                .signOut()
                .then(alert("Has cerrado tu sesión"))
                .catch(err => alert(err.message));
        }


        return {
            state,
            Logout
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
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    box-sizing: border-box;
}

h1,
h2,
h3 {
    color: $primario;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $primario;
    padding: 1rem 2.5%;

    img {
        width: 10rem;
        height: 70%;
    }

    .lista {
        display: flex;
        align-items: center;
        gap: 0.7rem;
        color: white;
        list-style: none;

        a {
            text-decoration: none;
            color: inherit;
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

    .first{
        display: flex;
        justify-content: space-between;
        gap: 0.7rem;

        .icons{
            display: flex;
            gap: 0.35rem;
            img{
                width: 2.5rem;
                height: 2.5rem;
                filter: invert(100%);
                border-radius: 50%;
                transition: transform 750ms ease;

                &:hover{
                    transform: scale(1.02, 1.02);
                    box-shadow: 0 0 10px rgba(128, 128, 128, 0.548);
                }
            }
        }
    }

    .linea {
        align-self: center;
        align-items: c;
        background-color: white;
        width: 80%;
        height: 0.08rem;
        margin-top: 2rem;
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
