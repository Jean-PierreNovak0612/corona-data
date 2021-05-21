<template>
    <header>
        <nav class="navbar navbar-light fixed-top border border-3 border-right-0 border-left-0 border-top-0 navbar-expand-lg justify-content-between">
            <a class="navbar-brand p-3 fw-bold fs-3" href="#">Corona Status</a>
            <button class="navbar-toggler m-3" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse p-3 justify-content-between" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link fw-bold fs-5" href="#">Home</a>
                    <a class="nav-item nav-link fw-bold fs-5" href="#">Status</a>
                </div>
                <form class="form-inline form-group my-2 my-lg-0 d-lg-flex">
                    <input type="search" id="search" class="form-control me-sm-2" placeholder="Enter country name">
                    <button class="btn btn-outline-dark my-3 my-lg-0">Submit</button>
                </form>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>