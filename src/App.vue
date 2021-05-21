<template>
    <div>
        <Header />
    </div>
</template>

<script>

import Header from './components/Header'

export default {
    name: 'App',
    components: {
        Header
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