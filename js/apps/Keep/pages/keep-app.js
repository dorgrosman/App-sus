import { keepService } from '../services/keep-service.js'
import keepAdd from '../cmps/keep-add.cmps.js'
import keepList from '../cmps/keep-list.cmps.js'
import keepFilter from '../cmps/keep-filter.cmps.js'
import { eventBus } from '../../../services/event-bus.js'

export default {
    name: 'keep-app',
    template: `
    <section class="keep-app">
        <h1 class="keep-app-title">MissKeep</h1>
        <section class="keep-add-filter">
            <keep-add></keep-add>
            <keep-filter  @filtered="setFilter"></keep-filter>
</section>

            <keep-list :notes="notesToShow" 
            @colorChange="changeColorBgC" 
            @update="updateNote" 
            @pinned="updatePinNote" 
            @show-msg="emitMsg"
            @strike="strikeToDo">

            </keep-list>
      
    </section>
`,
    data() {
        return {
            notes: null,
            filterByTxt: null
        }
    },
    computed: {
        notesToShow() {

            if (!this.filterByTxt) return this.notes;
            const txt = this.filterByTxt.toLowerCase();
            return this.notes.filter(note => {
                return note.info.title.toLowerCase().includes(txt)

            })
        }
    },
    methods: {

        changeColorBgC(newColor, id) {
            keepService.changeBgColor(newColor, id)
                .then(res => {
                    // console.log('res:', res)
                    this.notes = res;
                    console.log('this.notes = res;:', this.notes = res)
                });
        },
        setFilter(filterByTxt) {
            this.filterByTxt = filterByTxt;
        },
        updateNote(noteId, info, type) {
            keepService.updateNote(noteId, info, type)
        },
        updatePinNote(noteId, pinInfo) {
            keepService.pinNote(noteId, pinInfo)
        },
        strikeToDo(noteId, idx) {
            keepService.strikingToDo(noteId, idx)
        },
        emitMsg() {
            eventBus.$emit('show-msg', { txt: 'Deleted', type: 'Success' })
        },
    },

    components: {
        keepAdd,
        keepList,
        keepFilter,

    },
    created() {
        keepService.getNotes()
            .then(notes => this.notes = notes)
    }
}

