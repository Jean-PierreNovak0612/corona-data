<template>
    <div class="section mt-3 border border-2 rounded border-dark mx-auto">
        <div class="py-5 px-4">
            <h5 class="pb-3" v-if="province">Province: {{province && province}}</h5>
            <div>
                <ul>
                    <li class="fs-5 fw-bold">{{dataType}} {{info && info}}</li>
                </ul>
                <p class="fs-5 mt-5">Published on: {{getDate()}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SectionSegment',
    props: [ 'info', 'dataType', 'date', 'province'],
    methods: {
        getDate() {
            const currdate = new Date(this.date)
            return `${currdate.getDate()}/${currdate.getMonth() + 1}/${currdate.getFullYear()}`
        }
    }
}
</script>

<style scoped>
    .section {
        max-width: 750px;
        width: 85%;
    }
    ul{
        list-style-image: url('../assets/images/corona_bullets.png')
    }
</style>