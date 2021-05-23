import api from '../../api/coronaData'

const state = {
    summaryData: [],
}

const getters = {
    allSummaryData: state => state.summaryData
}
const actions = {
    async fetchSummaryData({ commit }) {
        const response = await api.fetchSummary()
        commit('setSummaryData', response.data)
    }
}

const mutations = {
    setSummaryData: (state, summaryData) => {
        state.summaryData = summaryData; 
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}