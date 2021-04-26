
import { myRouter } from './routes.js'
import { keepService } from '../js/apps/Keep/services/keep-service.js'
import mainHeader from './pages/main-header.js'
import mainFooter from '../js/pages/main-footer.js'
import userMsg from './cmps/user-msg.cmps.js'
import { eventBus } from './services/event-bus.js'

const options = {
    el: '#app',
    router: myRouter,
    template: `
        
        <section>
            <main-header></main-header>

                <main>
                    <router-view></router-view>
                </main>

                <user-msg />
                <!-- <main-footer></main-footer> -->
        
        </section>
    `,
    components: {
        mainHeader,
        userMsg,
        eventBus,
        mainFooter

    },
}

const app = new Vue(options);

