// import '../asset/img/mail-1.jpeg'
export default {

    template: `
        <section class="main-header">
          
            <nav class="header-container flex space-between align-center">
                <div class="logo flex"><router-link to="/" exact><img src="./js/asset/img/logo.png" /> </router-link></div>  
               
                <div class="header-links flex" v-if="showHamburger" @click="showHamburgerIsFalse" >
                    <router-link to="/" exact><i class="fas fa-home"></i></router-link> 
                    <router-link to="/book"  exact><i class="fas fa-book-open"></i></router-link> 
                    <router-link to="/keep"  exact><i class="far fa-clipboard"></i></router-link> 
                    <router-link to="/mail"  exact><i class="far fa-envelope"></i></i></router-link> 
                    <router-link to="/about" ><i class="far fa-address-card"></i></router-link> 
                </div>

                <span @click="toggleMenu" class="fas fa-th hamburger"></span>
               
            </div>
            </nav>
     
        </section>
    `,
    data() {
        return {
            showHamburger: true
        }
    },
    methods: {
        toggleMenu() {

            this.showHamburger = !this.showHamburger
        },
        showHamburgerIsFalse() {
            this.showHamburger = false
        }
    },
}