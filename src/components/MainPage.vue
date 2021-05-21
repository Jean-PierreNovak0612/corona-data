<template>
    <main class="pt-5">
        <Footer class="fixed-bottom border border-3 border-dark" />
    </main>
</template>

<script>
import Footer from './Footer'

export default {
    name: "MainPage",
    components: {
        Footer
    }
}
</script>

<style scoped>
    main{
        height:100vh;
        background-image: url('../assets/images/corona.png');
        background-repeat: no-repeat;
        background-size: 70% 100%;
        background-position: -100% 50%;
    }
    @media (max-width: 992px){
        main{
            background-size: 100% 70%;
            background-position: 50% 170%
        }
    }
</style>