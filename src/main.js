import Vue from "vue"
import App from "./App.vue"
import store from "./store"
import "./registerServiceWorker"
import {
	LayoutPlugin,
	ModalPlugin,
	ButtonPlugin,
	FormPlugin,
	FormTimepickerPlugin
} from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.config.productionTip = false

Vue.use(LayoutPlugin)
Vue.use(ModalPlugin)
Vue.use(ButtonPlugin)
Vue.use(FormPlugin)
Vue.use(FormTimepickerPlugin)

new Vue({
	store,
	render: h => h(App)
}).$mount("#app")
