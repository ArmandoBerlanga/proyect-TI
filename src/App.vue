<template>
<div id="app">

    <nav>
        <img src="@/assets/logo.png" alt="logo">

        <ul class="lista hide">
            <li><a href="#">INICIO</a></li>
            <li><a href="#">CLASES</a></li>
            <li><a href="#">MAESTROS</a></li>
            <li><a href="#">INCIAR SESIÓN</a></li>
            <li><button class="secundario">REGISTRATE</button></li>
        </ul>

        <Menu class="menu" />
    </nav>

    <main>
        <router-view />
    </main>

    <aside></aside>

    <footer></footer>

</div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import {
    reactive
} from '@vue/reactivity'

export default {
    name: 'App',
    components: {
        Menu
    },
    setup() {

        const state = reactive({

        });

        return {
            state
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
}

h1,h2,h3{
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

main{
    background-color: $secundario;
}

footer{
    background-color: $primario;
}

@media screen and (min-width: 700px) {
    nav .menu{
        display: none !important;
    }
}

@media screen and (max-width: 700px) {
    nav .hide{
        display: none !important;
    }
}

</style>
