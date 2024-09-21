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
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faGem } from '@fortawesome/free-regular-svg-icons'
import { faTruckRampBox } from '@fortawesome/free-solid-svg-icons/faTruckRampBox'
import { faTemperatureLow } from '@fortawesome/free-solid-svg-icons'
import { faBoxesStacked } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(
    faFacebookF, 
    faTwitter, 
    faLinkedinIn, 
    faEnvelope, 
    faPhone, 
    faClock, 
    faUser,
    faGem,
    faTruckRampBox,
    faTemperatureLow,
    faBoxesStacked,
    faArrowRight
)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
