import { mailService } from '../service/mail-service.js'
import { eventBus } from "../../../services/event-bus.js"

export default {
    template: `
    <section class="mail-detail flex justify-center column">
        <div class="main-container">
            <header class="head-mail ">
            <h2>Sent by: {{mail.user}}</h2>
            <h3>subject: {{mail.subject}} </h3>
            <h4 class="date">At:{{mail.sentAt}}</h4>
            </header>
            <main class="main-mail ">
                <p>{{mailBody}}</p>
            </main>
        </div>
        <footer class="footer-mail flex" >
            <div class="inbox-icon" >
                <span  class="fas fa-inbox"  @click="returnBack"> </span>
            </div> 
            <button v-if="readMore" class="readMore">Read More</button>
            <div class="del-icon" >
                <span  class="fas fa-trash-alt" @click.stop="emitDelete(mail.id)"> </span>
            </div> 
         </footer>
    </section>
 `,
    data() {
        return {
            mail: null,
            readMore: false,
        }
    },
    computed:{
    mailBody() {
        if(this.mail.body.length > 590){
            this.readMore = true;
        }
        return this.mail.body.slice(0, 590) + '...'
    },
    },
    methods: {
        emitDelete(id) {
            this.$emit('delete', id)
            mailService.deleteMail(id)
            eventBus.$emit('show-msg', { txt: 'Mail has been deleted', type: 'Success' })
        },
        returnBack() {
            this.$router.go(-1);
        },
        changeMail(diff) {
            const nextId = mailService.getMailById(this.mail.id, diff);
            console.log('nextId:', nextId)
            this.$router.push(`/mail/${nextId}`);

        },
    },
    created() {
        const mailId = this.$route.params.mail;
        this.mail = mailService.getMailById(mailId)
    },
}
