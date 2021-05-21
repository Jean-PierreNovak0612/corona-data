<template>
    <div>
        <Header />
        <MainPage />
    </div>
</template>

<script>

import Header from './components/Header';
import MainPage from './components/MainPage';

export default {
    name: 'App',
    components: {
        Header,
        MainPage
    }
}
</script>

<style scoped>
    *{
        box-sizing: border-box;
    }
    body {
        padding: 0;
        margin: 0;
    }
</style>