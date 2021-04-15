import Vue from "vue";
import App from "./App.vue";
import Vuex from 'vuex';
import VueRouter from "vue-router"

import Main from "./pages/Main.vue";
import Post from "./pages/Post.vue";
import * as mutations from './store/mutations'
import * as actions from './store/actions'
import state from './store/state'

Vue.use(VueRouter);
Vue.use(Vuex);

export function createApp() {
    
    const store = new Vuex.Store({
        state,
        mutations,
        actions
    })

    const router = new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: Main
            },
            {
                path: '/:id',
                component: Post
            }
        ]
    })

    const app = new Vue({
        store,
        router,
        render: h => h(App)
    });

    return {
        app,
        router,
        store
    }
}