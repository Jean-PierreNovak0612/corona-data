import api from '../../api/coronaData'

const state = {
    countryStatus: {}
}

const getters = {
    getCountryStatus: state => state.countryStatus
}

const actions = {
    async fetchCountryStatus({ commit }, country) {
        const response = await api.fetchCountryStatus(country)
        commit('setCountryStatus', response.data)
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