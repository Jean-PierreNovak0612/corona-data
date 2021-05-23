<template>
    <div class="pt-5 px-2 mt-5">
        <DataItem class="alone mx-auto" :title="globalTitle" :info="allSummaryData.Global"></DataItem>
        <div class="text-center">
            <DataItem class="mx-auto mx-md-2 d-md-inline-block multiple" v-for="country in allSummaryData.Countries" :key="country.Id" :info="country" />
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import DataItem from './DataItem'

export default {
    name: 'DataList',
    components: {
        DataItem
    },
    data() {
        return {
            globalTitle: "Global Summary"
        }
    },
    computed: mapGetters(['allSummaryData']),
    methods: {
        ...mapActions(['fetchSummaryData']),
    },
    created() {
        this.fetchSummaryData()
    }
}
</script>

<style scoped>
    .alone {
        max-width: 900px;
        width: 90%;
    }
    .multiple {
        max-width: 350px;
        width: 90%;
        transition: all .2s ease
    }
    .multiple:hover {
        background-color: #eee;
        transform: scale(1.05)
    }
</style>