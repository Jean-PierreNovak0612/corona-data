<template>
    <header>
        <nav class="navbar navbar-light fixed-top border border-3 border-right-0 border-left-0 border-top-0 navbar-expand-lg justify-content-between">
            <router-link class="navbar-brand p-3 fw-bold fs-3" to="/">Corona Status</router-link>
            <button class="navbar-toggler m-3" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse p-3 justify-content-between" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link class="nav-item nav-link fw-bold fs-5" to="/">Home</router-link>
                    <router-link class="nav-item nav-link fw-bold fs-5" to="/status">Status</router-link>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
    nav{
        background-color: #fff;
    }
</style>