import api from '../../api/coronaData'

const state = {
    countryStatus: JSON.parse(window.localStorage.getItem('Status'))
}

const getters = {
    getCountryStatus: state => state.countryStatus
}

const actions = {
    async fetchCountryStatus({ commit }, country) {
        const response = await api.fetchCountryStatus(country)
        commit('setCountryStatus', response.data)
        window.localStorage.setItem('Status', JSON.stringify(response.data))
    }
}

const mutations = {
    setCountryStatus: (state, countryStatus) => {
        state.countryStatus = countryStatus;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}