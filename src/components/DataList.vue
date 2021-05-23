<template>
    <div class="pt-5 px-2 mt-5">{{ setData() }}
        <DataItem class="alone mx-auto" :title="globalTitle" :info="allSummaryData.Global"></DataItem>
        <div class="search mx-auto" @input="onInput">
            <label class="form-label mt-3">Search for a Country</label>
            <input type="text" class="form-control mt-1" placeholder="Croatia" />
            <p class="form-text">Select a card to see the daily details</p>
        </div>
        <div class="text-center">
            <DataItem  @click="onClick(country.Country)" class="mx-auto mx-md-2 d-md-inline-block multiple" v-for="country in filteredCountries" :key="country.Id" :info="country" />
            <p v-if="!filteredCountries.length" class="alert alert-danger mt-3">No matches found!</p>
        </div>  
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import DataItem from './DataItem'
import { router } from '../main'

export default {
    name: 'DataList',
    components: {
        DataItem
    },
    data() {
        return {
            globalTitle: "Global Summary",
            searchTerm: '',
            countries: []
        }
    },
    computed: {
        ...mapGetters(['allSummaryData']),
        filteredCountries() {
            let lands = this.countries;
            if(this.searchTerm) {
                lands = lands.filter(land => {
                    return land.Country.toLowerCase().startsWith(this.searchTerm)
                })
            }
            return lands;
        }
    },
    methods: {
        ...mapActions(['fetchSummaryData', 'fetchCountryStatus']),
        onClick(country) {
            country = country.replace(/\s+/g, '-').toLowerCase();
            this.fetchCountryStatus(country);
            router.push('/status/country')
        },
        onInput(e) {
            this.searchTerm = e.target.value.toLowerCase();
        },
        setData() {
            setTimeout(() => {
                this.countries = this.allSummaryData.Countries;
            }, 50)
        }
    },
    created() {
        this.fetchSummaryData()
        setTimeout(() => {
            this.counties = this.allSummaryData.Countries;
        }, 100);
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
        background-color: rgb(248, 248, 248);
        transform: scale(1.03)
    }

    .search {
        width: 90%;
    }
</style>