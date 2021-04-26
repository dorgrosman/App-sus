import { bookService } from '../services/book-service.js'

export default {
    
    template: `
        <section v-if="book" class="book-details flex">
          
                <div class="details-main flex">

                <div class="book-details-img-container flex column">
                    <img class="book-img-details" :src="imgUrl" />

                </div>

                <div class="book-details-container flex column">
                    

                  
                    <h2>"{{book.title}}"</h2>
                    <p><span class="title-style"></span>{{book.subtitle}}</p>
                    <p><span class="title-style">Author:</span> {{...book.authors}}</p>
                    <p><span class="title-style">Price:</span> <span v-bind:class="priceClass"> {{book.listPrice.amount}}</span></p>
                    <p><span class="title-style">Description:</span> {{bookDesc}}</p>
                    <p><span class="title-style">Catagories:</span> {{categories}}</p>
                    <p><span class="title-style">Language:</span> {{book.language}}</p>
                    <p>{{textVolume}}</p>
                    <p>{{publishedAt}}</p>
                    <h3> {{bookOnSale}}</h3>
                   
                <div class="book-btn-container">
                <!-- <router-link :to="/book"exact>dddd</router-link> -->
               <button class="back-btn" @click="emitBack()">BACK</button>
                    <button class="prev-btn" @click="changeBook(-1)">PREV</button>
                    <button class="next-btn" @click="changeBook(+1)">NEXT</button>
                </div>
                </div>  
            </div>


        </section>
    `,
    data() {
        return {
            book: null
        }
    },
    computed: {
        textVolume() {
            if (this.book.pageCount > 500) return 'Long Reading';
            else if (this.book.pageCount > 200 && this.book.pageCount <= 500) return 'Decent Reading'
            else if (this.book.pageCount < 100) return 'Light Reading'
        },
        publishedAt() {
            var currYear = 2020
            if (currYear - this.book.publishedDate > 10) return 'Veteran Book'
            else if (currYear - this.book.publishedDate < 1) return 'New!'
        },
        bookOnSale() {
            if (this.book.listPrice.isOnSale) return 'ON SALE'
        },
        priceClass() {
            return { red: this.book.listPrice.amount > 150, green: this.book.listPrice.amount < 20 }
        },
        imgUrl() {
            return this.book.thumbnail
        },
        saleImgUrl() {
            if (this.book.listPrice.isOnSale) return "../img/Sale.png"
        },
        bookDesc() {
            if (this.book.description.length > 100) {

                return this.book.description.substring(0, 100) + "...";
            }
            else {
                return this.book.description
            }
        },
        categories() {
            return this.book.categories.join(", ")
        }
    },
    methods: {
        emitBack() {
            // this.$emit('selected', null)
            this.$router.push(`/`);

        },
        changeBook(diff) {
            const nextId = bookService.getNextBookId(this.book.id, diff);
            this.$router.push(`/book/${nextId}`);
            this.hideText = true;
        }
    },
    watch: {
        '$route.params.bookId'() {
            bookService.getBookById(this.$route.params.bookId)
                .then(book => this.book = book)
        }
    },
    created() {
        const id = this.$route.params.bookId
        bookService.getBookById(id)
            .then(book => this.book = book)
    }
}