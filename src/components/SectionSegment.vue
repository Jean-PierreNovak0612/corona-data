<template>
    <div>
        <div class="py-5 px-4 mt-3 mx-auto section border border-2 rounded border-dark">
            <h2 class="pb-3">{{title}} {{ country && country }}</h2>
            <div>
                <p class="fs-5">{{text}}</p>
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
    props: ['title', 'info', 'country', 'text', 'dataType', 'date'],
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
        width: 90%;
    }
</style>