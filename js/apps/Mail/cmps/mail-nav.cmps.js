

export default {
    template: `
    <section class="mail-nav flex column align-center">
        <!-- <router-link to="/mail/newmail"  ><button class="compose-btn"><span> New Mail</span> <span class="plus">+</span></button></router-link> -->
        <router-link to="/mail/newmail"  > <button class="compose-btn"><span> New Mail</span> <span class="plus">+</span></button></router-link>
         <div class="nav-icons flex column ">
            <a class="fas fa-inbox"  @click="setmailInboxFIlter('inbox')"> <span> Inbox </span></a>
            <a class="fas fa-star" @click="setmailInboxFIlter('mark')"><span> Mark</span></a>
            <a class="far fa-paper-plane" @click="setmailInboxFIlter('sent')"><span> Sent</span></a>  
         </div>
    </section>
   `,
    data() {
        return {
            boxShow: false
        }
    },
    methods: {
        setmailInboxFIlter(mailType) {
            this.$emit('mailInboxFilter', mailType)
            this.$router.push('/mail')
        }
    },
    

}

