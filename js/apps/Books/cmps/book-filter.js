

export default {
    template: `
        <section class="book-filter">
            <h2 class="book-filter-title">Filter Those Books</h2>
          
           <form class="book-filter-form" @submit.prevent="emitFilter" >
                <input type="text" v-model="filterBy.byName" placeholder="Search By " @input="emitFilter" />
                <input type="number" v-model.number="filterBy.fromPrice" placeholder="From Price" @input="emitFilter" />
                <input type="number" v-model.number="filterBy.toPrice" placeholder="To Price" @input="emitFilter" />
            </form>  
        </section>
    `,
    data() {
        return {
            filterBy: { byName: '', fromPrice: 0, toPrice: 2000 }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('filtered', this.filterBy);
        }
    }
}