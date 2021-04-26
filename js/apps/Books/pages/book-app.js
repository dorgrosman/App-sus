import { bookService } from '../services/book-service.js'
import bookFilter from '../cmps/book-filter.js'
// // import '../cmps/book-list.js'
import bookList from '../cmps/book-list.js'
// // import '../cmps/book-details.js'
import bookDetails from '../cmps/book-details.js'



export default {
    template: `
    <section class='book-app'>
    
       
        <book-filter @filtered="setFilter"></book-filter>
        <h2 class="book-main-title">Miss Books</h2>
        <book-list v-if="!selectedBook" :books="booksToShow" @selected="selectBook"></book-list>
        <book-details v-else :book="selectedBook" @selected="selectBook"></book-details>

    </section>
    `,
    data() {
        return {
            books: null,
            filterBy: null,
            selectedBook: null
        }
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;
            const txt = this.filterBy.byName.toLowerCase();
            return this.books.filter(
                book => book.title.toLowerCase().includes(txt) &&
                    book.listPrice.amount >= this.filterBy.fromPrice &&
                    book.listPrice.amount <= this.filterBy.toPrice);
        }
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        selectBook(bookId) {
            // bookService.getBookById(bookId)
            // .then(bookId => this.books.id = bookId)
            this.selectedBook = bookService.getBookById(bookId)
        },
    },
    created() {
        bookService.getBooks()
        .then(books => this.books = books)
    },
    components: {
        bookFilter,
        bookList,
        bookDetails
    }

}