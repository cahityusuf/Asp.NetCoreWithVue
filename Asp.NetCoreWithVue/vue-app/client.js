import { createApp } from "./main";

const { app, router, store } = createApp();

//catchup with server here 
if(window.__INITIAL_STATE__){
    store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
    app.$mount('.app')
})