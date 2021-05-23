import axios from 'axios';

export default {
    fetchSummary() {
        return axios.get('https://api.covid19api.com/summary')
    },
    fetchCountryStatus(country) {
        return axios.get(`https://api.covid19api.com/live/country/${country}/status/confirmed`)
    }
}