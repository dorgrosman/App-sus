import noteColors from './note-colors.cmps.js'

export default {
    props: ['info', 'id'],
    template: `
        <section class="note-todos">
            <div class="note-todos-content"> 
                <div class="todos">
                    <h3>{{info.title}}</h3>
                         
                        <div class="todo" v-for="(todos,idx) in info.todos">
                            <!-- <p ref="theTodo" :class="strikeClass" @click="toggleCompleted(todos, idx)" > -->
                            <p ref="theTodo"  @click="toggleCompleted(todos, idx)" >
                                <span v-if="todos.isDone" class="fas fa-check-circle done-todo"></span>
                                <span v-if="!todos.isDone" class="far fa-circle undone-todo"></span>
                                {{todos.txt}}
                            </p>
                        </div>
                </div>
            </div>
           
            <span @click="toggleControls" class="fas fa-list fa-lg todos-controls"></span>
           <div v-if="isControlsShown" class="note-control-panel"> 
                    
                    <span @click="emitPinNote" class="fas fa-thumbtack"></span>
                    <span @click="editNote" class="fas fa-edit"></span> 
                    <span @click="onRemoveNote" class="fas fa-trash-alt"></span>
                    <span @click="colorEdit" class="fas fa-palette info colors dropdown"></span> 
                    <note-colors v-if="isColorEdit" @colorChange="changeBColor"></note-colors>
                    
                    <section v-if="isEdit" class="edit-note">
                        <input v-model="newText"  type="text" placeholder="Edit Title"/>
                            <div> 
                                <button @click="updateNote">Update</button>
                                <button @click="editNote">Cancel</button>
                            </div>
                    </section>
                </div>

        </section>
`,
    data() {
        return {
            isEdit: false,
            isColorEdit: false,
            newText: this.info.txt,
            isControlsShown: false,
            isComplete: false




        }
    },
    methods: {
        emitPinNote() {
            this.isPinned = !this.isPinned;
            this.$emit('pinned', this.id, this.isPinned)
        },
        changeBColor(color) {
            this.$emit('changeBGC', color, this.id)
        },
        toggleControls() {
            this.isControlsShown = !this.isControlsShown;
        },
        editNote() {
            this.isEdit = !this.isEdit;
        },
        updateNote() {
            this.$emit('update', this.id, this.newText, 'noteText')
            this.isEdit = !this.isEdit;
        },
        onRemoveNote() {
            this.$emit('delete', this.id)
        },
        colorEdit() {
            this.isColorEdit = !this.isColorEdit;
        },
        toggleCompleted(todos, idx) {
            this.isComplete = !this.isComplete
            this.$emit('toDoDone', this.id, idx)
        }
    },
    computed: {
        strikeClass() {
            return { striked: this.isComplete }
        }
    },
    components: {
        noteColors
    },
}