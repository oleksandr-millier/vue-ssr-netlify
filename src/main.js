import Vue from 'vue'
import App from '@/app.vue'
import router from '@/router'
import store from '@/store'
import { Auth0Plugin } from '@/auth'
import { AUTH_DOMAIN, AUTH_CLIENT_ID } from '@/constants/auth.js'

Vue.config.productionTip = false

Vue.use(Auth0Plugin, {
  domain: AUTH_DOMAIN,
  clientId: AUTH_CLIENT_ID,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
