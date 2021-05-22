<template>
    <main class="pt-5">
        <h2 v-if="show" class="pb-5 mb-5">Check out what corona does to our world</h2>
        <router-link @click="fadeOut" class="btn btn-outline-danger border border-3 border-danger rounded py-3 px-4 fw-bold fs-6" to="/status">Check it out!</router-link>
        <Footer class="fixed-bottom border border-3 border-dark" />
    </main>
</template>

<script>
import Footer from './Footer'

export default {
    name: "MainPage",
    data() {
        return {
            show: false,
        }
    },
    components: {
        Footer
    },
    mounted() {
        this.show = true;
    }
}
</script>

<style scoped>

    /* Main container */
    main{
        height:100vh;
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 5%
    }
    main::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left:0;
        right: 0;
        opacity: .4;
        background-image: url('../assets/images/corona.png');
        background-repeat: no-repeat;
        background-size: 70% 100%;
        background-position: -100% 50%;
        
    }

    /* Headers */
    h2 {
        position: relative;
        text-align: center;
        font-size: 5vmax;
        max-width: 30ch;
    }

    /* Links and buttons */
    a{
        position: relative;
    }

    /* Transitions */
    .slide-fade-top-enter-active,
    .slide-fade-top-leave-active {
        transition: all .5s ease;
    }
    .slide-fade-top-enter,
    .slide-fade-top-leave {
        transform: translateY(20px);
        opacity: 0;
    }
    @media (max-width: 992px){
        main::before{
            background-size: 100% 70%;
            background-position: 50% 170%
        }
    }
</style>