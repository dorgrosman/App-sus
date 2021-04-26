import mailPreview from './mail-preview.cmps.js'




export default {
    props:['mail'],
    template: `
    <section class="mail-preview " >
         
        <h2 class="itemsub" >{{mailForSubject}}</h2>
        <p class="itemuser">{{mailUser}}</p>
        <p class="longTxt" >{{textForPreview}}</p>
        <p class="longdate">{{mail.sentAt}}</p> 
        
        <div class="starActiv" >
            <span :class="isStart" class="far fa-star" @click.stop="emitActiv(mail.id)">  </span>
        </div>   
        <div class="delIcon" >
            <span  class="fas fa-trash-alt" @click.stop="emitDelete(mail.id)"> </span>
        </div> 
     </section>
    `,
    data(){
        return{
            hideText: true,
        }
    },
    methods:{
        emitDelete(id){        
            
            this.$emit('delete', id)
        },
        emitActiv(id){        
            this.$emit('activ', id)
        },
      
    },
    computed:{
        textForPreview() {
            // return this.mail.body.slice(0, 27) + '...' && this.mail.body
            console.log('this.mail.body:', this.mail.subject)
            return this.mail.body.slice(0, 24) + '...'
        },
        mailForSubject(){
            // let msgShow = 0
            if(this.mail.subject.length > 6){
                return   this.mail.subject.slice(0,6) + '..'    
            }
            return   this.mail.subject
        },
        mailUser(){
            // let msgShow = 0
            if(this.mail.user.length > 10){
                return   this.mail.user.slice(0,10) + '..'    
            }
            return   this.mail.user
        },
        isStart(){
            return { fas: this.mail.isActiv, far: !this.mail.isActiv }
        },
    },
    components: {
        
    }

    
}