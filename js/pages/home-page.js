
export default {
    template: `
    <section class="home-page ">

            <section class="home-page-container flex"> 
                
                <div class="home-page-img-container flex space-between ">

                   <div class="image-container-home"> 
                       <h2 class="home-page-title">Books</h2>
                            <router-link to="/book" exact>
                                <img src="./js/asset/img/book-1.jpeg"/>
                                
                                
                            </router-link> 
                    </div>
                   
                   <div class="image-container-home"> 
                       <h2 class="home-page-title">Notes</h2>
                            <router-link to="/keep" exact>
                                <img src="./js/asset/img/note-1.jpeg"/>
                            </router-link>
                    </div>
                   
                   <div class="image-container-home"> 
                       <h2 class="home-page-title">Mail</h2>
                            <router-link to="/mail" exact>
                                <img src="./js/asset/img/mail-1.jpeg"/>
                            </router-link> 
                    </div>
                </div>
            </section>
    </section>
    `,
}