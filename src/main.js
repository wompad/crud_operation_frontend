//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import "./assets/css/font-awesome.css"
import "./assets/css/vendors/icofont.css"
import "./assets/css/vendors/themify.css"
import "./assets/css/vendors/flag-icon.css"
import "./assets/css/vendors/feather-icon.css"
import "./assets/css/vendors/scrollbar.css"
import "./assets/css/vendors/animate.css"
import "./assets/css/vendors/chartist.css"
import "./assets/css/vendors/owlcarousel.css"
import "./assets/css/vendors/prism.css"
import "./assets/css/responsive.css"
import "./assets/css/vendors/select2.css"
import "./assets/css/style.css"
import "./assets/css/color-1.css"
import "./assets/css/responsive.css"

const app = createApp(App)

app.use(router)

app.mount('#app')
