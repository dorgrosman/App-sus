// import './book-preview.js';
// import keepAdd from './keep-add.cmps.js'
import { keepService } from '../services/keep-service.js'
// import { eventBus } from '../../../services/event-bus.js'
import noteText from './note-text.cmps.js'
import noteImg from './note-img.cmps.js'
import noteTodos from './note-todos.cmps.js'
import noteVideo from './note-video.cmps.js'

export default {
    props: ['notes'],
    name: 'keep-list',
    template: `

        <section class="keep-list">
                 <!-- <keep-add></keep-add> -->
<div class="keep-list-pinned-notes">
          <h2 class="pinned-notes-title">Pinned Notes    <span class="fas fa-paperclip paperclip-title"></span></h2>  
<ul class="keep-list-pinned" >
                <li v-if=note.isPinned  class="note" v-for="note in notes" :key="note.id" :style="bgc(note)" >
                <span class="fas fa-paperclip pinned" v-if="isPinned"></span> 
                   <component
                        :is="note.type"
                        :note="note"
                        :info="note.info" 
                        :id="note.id" 
                       :isPinned="note.isPinned"
                        @changeBGC="changeColor"
                        @update="updateNote"
                        @delete="onRemoveNote"
                        @pinned="pinNote"
                        >                      
                    </component>
                  
                </li>  
            </ul>
</div>
<div class="keep-list-unpinned-notes">
<hr>
<ul class="keep-list-pinned" >
                <li v-if=!note.isPinned class="note" v-for="note in notes" :key="note.id" :style="bgc(note)" >
                
                   <component
                        :is="note.type"
                        :info="note.info" 
                        :id="note.id" 
                       :isPinned="note.isPinned"
                        @changeBGC="changeColor"
                        @update="updateNote"
                        @delete="onRemoveNote"
                        @pinned="pinNote"
                        @toDoDone="strikeToDo"
                        >                      
                    </component>
                   
                </li>  
            </ul>
</div>

        </section>
    `,
    data() {
        return {
            isPinned: true
        }
    },
    methods: {
        bgc(note) {

            return `background-color: ${note.style.backgroundColor}`;
        },
        pinNote(id, pinInfo) {
            this.$emit('pinned', id, pinInfo);
        },
        onRemoveNote(noteId) {
            keepService.removeNote(noteId)
                // .then(() => eventBus.$emit('show-msg', { txt: 'Note has been deleted', type: 'Success' }))
                .then(() => this.$emit('show-msg', { txt: 'Note has been deleted', type: 'Success' }))
        },

        updateNote(noteId, info, type) {
            this.$emit('update', noteId, info, type);
        },

        changeColor(color, id) {
            this.$emit('colorChange', color, id)
        },
        strikeToDo(noteId, idx) {
            this.$emit('strike', noteId, idx)
        }
    },
    components: {
        noteText,
        noteImg,
        noteTodos,
        noteVideo
    }
}
