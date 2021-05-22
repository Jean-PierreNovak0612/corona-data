<template>
    <footer class="text-center text-lg-start">
        <div class="text-center fw-bold fs-6 p-3">
            All rights reserved.
        </div>
        <div class="text-center fw-bold fs-6 p-3">
            &copy; 2021 - {{ new Date().getFullYear() }}
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
    footer {
        background-color: #fff;
    }
</style>