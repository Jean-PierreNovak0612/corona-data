<template>
    <main class="pt-5">
        <transition name="slide-fade-top">
            <h2 v-if="show" class="pb-5 mb-5">Check out what corona does to our world</h2>
        </transition>
        <button @click="fadeOut" class="btn btn-outline-danger border border-3 border-danger rounded py-3 px-4 fw-bold fs-6" to="/status">Check it out!</button>
        <Footer class="fixed-bottom border border-3 border-dark" />
    </main>
</template>

<script>
import Footer from './Footer'
import { router } from '../main'

export default {
    name: "MainPage",
    data() {
        return {
            show: true,
        }
    },
    components: {
        Footer
    },
    methods: {
        fadeOut() {
            this.show = false;
            setTimeout(() =>{
                router.push('/status')
                this.$emit('checkLink', null)
                this.show = true;
            }, 500)
        }
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
        font-size: 4vmax;
        max-width: 20ch;
    }

    /* Links and buttons */
    button{
        position: relative;
    }

    /* Transitions */
    .slide-fade-top-enter-active {
        transition: all .3s ease;
        }
    .slide-fade-top-leave-active {
        transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-top-enter, .slide-fade-top-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateY(-100px);
        opacity: 0;
    }
    @media (max-width: 992px){
        main {
            justify-content: flex-start;
        }
        main::before{
            background-size: 100% 70%;
            background-position: 50% 170%
        }
        h2{
            margin-top: 100px
        }
        button {
            background-color: #dc3545;
            color: #fff;
        }
    }
</style>