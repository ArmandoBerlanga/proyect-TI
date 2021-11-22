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
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    flex-flow: column;
    align-items: center;
    align-self: center;
    justify-content: center;

        &>* {
            align-self: center;
        }

    .popup-inner {
        background: #FFF;
        padding: 32px;
    }
}
</style>
