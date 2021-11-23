<template>
<div class="menu-wrap">
    <input type="checkbox" class="toggler">
    <div class="hamburger">
        <div></div>
    </div>
    <div class="menu">
        <div>
            <div>
                <ul>
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
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import firebase from 'firebase';

export default {
    name: 'Menu',
    props:{
        sesionActiva: String
    },
    setup(){
        const state = reactive({
            admin: false, // se ocupara algun dia
            sesionActiva: localStorage.getItem("sesionActiva"),
        });

        onMounted(() =>{
            document.addEventListener('keyup', function (evt) {
            if (evt.key === 27) { // esc es la letra 27 es pa cerrar el menu
                cerrarMenu()
            }
        });
        })

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

            cerrarMenu();

        }

        function cerrarMenu() {
            let toggler = document.querySelector(".toggler");
            toggler.checked = false;
        }

        return{
            state,
            cerrarMenu,
            logout

        }
    }

}
</script>

<style lang="scss" scoped>
$primario: white;
$overlay: #18314fe1;
$speed: 0.75s;

/* MENU STYLES */
.menu-wrap {
    z-index: 1000;
}

.menu-wrap .toggler {
    z-index: 100;
    position: absolute;
    top: 2%;
    right: 8%.5;
    z-index: 2;
    cursor: pointer;
    width: 2.9rem;
    height: 2.9rem;
    opacity: 0;
}

.menu-wrap .hamburger {
    z-index: 1;
    width: 2.9rem;
    height: 2.9rem;

    display: flex;
    align-items: center;
    justify-content: center;
}

/* Hamburger Line */
.menu-wrap .hamburger>div {
    position: relative;
    flex: none;
    width: 80%;
    height: 4px;
    background: $primario;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
}

/* Hamburger Lines - Top & Bottom */
.menu-wrap .hamburger>div::before,
.menu-wrap .hamburger>div::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: -10px;
    width: 100%;
    height: 4px;
    background: inherit;
}

/* Moves Line Down */
.menu-wrap .hamburger>div::after {
    top: 10px;
}

.menu-wrap .toggler:checked {
    z-index: 100;
}

/* Toggler Animation */
.menu-wrap .toggler:checked+.hamburger>div {
    transform: rotate(135deg);
    z-index: 10;
}

/* Turns Lines Into X */
.menu-wrap .toggler:checked+.hamburger>div:before,
.menu-wrap .toggler:checked+.hamburger>div:after {
    top: 0;
    transform: rotate(90deg);
}

/* Rotate On Hover When Checked */
.menu-wrap .toggler:checked:hover+.hamburger>div {
    transform: rotate(225deg);
}

.menu-wrap .toggler:not(:checked):hover+.hamburger {
    transition: all 0.4s ease;
    background-color: rgba(192, 189, 189, 0.166);
    border-radius: 2px;
}

/* Show Menu */
.menu-wrap .toggler:checked~.menu {
    visibility: visible;
}

.menu-wrap .toggler:checked~.menu>div {
    transform: scale(1);
    transition-duration: $speed;
}

.menu-wrap .toggler:checked~.menu>div>div {
    opacity: 1;
    transition: opacity 0.4s ease 0.4s;
}

.menu-wrap .menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.menu-wrap .menu>div {
    background: $overlay;
    border-radius: 50%;
    width: 300vw;
    height: 300vw;
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;
    transform: scale(0);
    transition: all 0.5s ease;
}

.menu-wrap .menu>div>div {
    text-align: center;
    max-width: 90vw;
    max-height: 100vh;
    opacity: 0;
    transition: opacity 0.4s ease;
}

.menu-wrap .menu>div>div>ul {
    padding: 0;

    &>li {
        list-style: none;
        color: #fff;
        font-size: 1.5rem;
        padding: 1rem;

        &>a {
            color: inherit;
            text-decoration: none;
            transition: color 0.4s ease;
            font-size: 2rem;

            &:hover{
                color: grey;
            }
        }
    }
}

</style>
