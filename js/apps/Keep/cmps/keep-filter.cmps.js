import { keepService } from '../services/keep-service.js'


export default {
    props: ['notes'],
    template: `
    <section class="keep-filter">
    <form @submit.prevent="emitFilter">
           <div class=keep-filter-search-container> 
                <input class="keep-filter-input" type="text" v-model="filterByTxt" placeholder="Search here" @input="emitFilter" />
            <!-- <input type="text" v-model="filterByTxt" placeholder="Search here" /> -->

            <!-- <button class="">Search Your Notes</button> -->
                <span class="fas fa-search keep-filter-search" @click="emitFilter"></span>
            </div>
        </form>
    </section>
    `,
    data() {
        return {
        
             filterByTxt: ''
          
        }
    },
    methods: {
        emitFilter() {
            this.$emit('filtered', this.filterByTxt)
        },
    },
}