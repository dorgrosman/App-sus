
export default {
    props:['book'],
    template: `
      
        <section class="book-preview">

            <router-link :to="'/book/' +book.id "exact>
            <!-- <book-add></book-add> -->
            
            <div class="book-title-container">
                
                <p class="book-title" >{{book.title}}</p>
            </div>
            
            <img class="book-img" :src="imgUrl" />
            <p class="book-price">{{getCurrency}}</p>
        </router-link>

        <!-- <router-link :to='/book/add' exact>Add</router-link> -->
        Details
        </section>
    `,
    computed: {
        
        getCurrency() {
            var price = this.book.listPrice.amount 
            if (this.book.listPrice.currencyCode === 'ILS') return '₪' + price;
            else if (this.book.listPrice.currencyCode === 'EUR') return price + ' €';
            else if (this.book.listPrice.currencyCode === 'USD') return price + ' $'

        },
        imgUrl() {
            return this.book.thumbnail
        }
    }
}