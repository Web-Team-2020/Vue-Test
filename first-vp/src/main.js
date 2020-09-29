import {createApp} from 'vue'

import App from './App.vue'
import Show from './components/Show.vue'
import Vuex from 'vuex'

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++;
        }

    },
    getters: {
        getCount(state) {
            return state.count;
        }

    }
})
const app = createApp(App);
app.component('show-app', Show);
app.use(store);
app.mount('#app');
