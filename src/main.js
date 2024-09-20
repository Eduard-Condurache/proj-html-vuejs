import { createApp } from 'vue'
import App from './App.vue'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// FONT AWESOME

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faClock} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faFacebookF, faTwitter, faLinkedinIn, faEnvelope, faPhone, faClock)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
