import { createStore } from 'vuex';

import summary from './modules/summary';
import countryState from './modules/countryStatus'

const store = createStore({
    modules: {
        summary,
        countryState
    }
});

export default store