// import './book-preview.js';
import bookPreview from './book-preview.js'

export default {
    props:['books'],
    template: `
        <section class="book-list">
          
            <ul >
                <li v-for="book in books" :key="book.id" >
                   <!-- <book-preview :book="book" /> -->
                   <book-preview :book="book" @click.native="emitBook(book.id)" />
                   <!-- <button @click="emitBook(book)">?</button> -->
                </li>
            </ul>
        </section>
    `,
    methods: {
        emitBook(bookId) {
            this.$emit('selected', bookId)
        }
    },
    components: {
        bookPreview 
    }
}