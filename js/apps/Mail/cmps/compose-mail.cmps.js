import { mailService } from '../service/mail-service.js'
import { utilsService } from '../service/utils-service.js'


export const composeMail = {
    name: 'compose-mail',
    template: `
    <section>
        <form  class="main-add">
            <div class="new-email-header flex space-between">
            <h3>New Mail </h3>
            <button @click="cancelAdd"><i class="fas fa-times"></i></button>
            </div>
            <label class="flex">
                <p>To:<p><input type="text" ref="nameInput" v-model:value="mail.user" >
            </label>
            <label class="flex">
            <p>Subject:<p><input type="text" v-model:value="mail.subject">
            </label>
            <textarea name="moreInfo" cols="50" rows="10" v-model:value="mail.body"></textarea>
            <div class="main-add-buttons flex">
                <button @click="addMail" class="far fa-share-square compose-btn"></button>
                <button @click="cancelAdd" class="fas fa-trash compose-btn"></button>
            </div>
        </form>
        </section>
        `,

    data() {
        return {
            mail: null,
            addingMail: false
        }
    },
    methods: {
        addMail() {
            mailService.addMail(this.mail)
            this.$router.push('/mail')
        },
        cancelAdd() {
            this.$router.push('/mail')
        }
    },
    mounted() {
        this.$refs.nameInput.focus();
    },
    created() {
        this.mail = mailService.getNewMail()
        this.addingMail = true;
    }
}