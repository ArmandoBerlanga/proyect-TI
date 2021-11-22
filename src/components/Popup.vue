<template>
    <div class="popup">
        <div class="popup-inner">
            <slot />
            <button class="popup-close" @click="TogglePopup()">
                ACEPTAR 
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['TogglePopup']
}
</script>

<style lang="scss" scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;

    margin: 10%;
    display: flex;
    justify-content: center;
        
    .popup-inner {
        background: rgba(255, 255, 255, 0.863);
        display: flex;
        flex-flow: column nowrap;
        text-align: center;
        align-items: center;
        justify-content: center;
        gap: 0.7rem;
        height: 100%;

        border-radius: 5px;
        padding: 2rem;
        font-size: 1.5rem;

        button{
            margin-top: 0.7rem;
            font-size: 1.2rem;
            width: 10rem;
            height: 4rem;
        }
    }
}
</style>
