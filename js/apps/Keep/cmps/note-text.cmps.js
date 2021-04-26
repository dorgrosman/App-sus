import noteColors from './note-colors.cmps.js'
import longText from '../../../cmps/long-text.cmps.js'

export default {
    props: ['info', 'id', 'isPinned'],
    template: `
        <section  class="note-text-container">
           
<div>
            <div class="note-text-content">
            <long-text :txt="info.title" />
                <!-- <p class="note-text-title">{{info.title}}</p> -->
                <!-- <p class="note-text-title">{{isPinned}}</p> -->
            </div>
            <span @click="toggleControls" class="fas fa-font fa-lg text-controls"></span>

            <div v-if="isControlsShown" class="note-control-panel"> 

                <!-- <button @click="editNote">?</button> -->
                <!-- <button @click="onRemoveNote()">xx</button> -->
                
                <span @click.stop="SendMail" class="fas fa-envelope"></span>
                <span @click.stop="emitPinNote" class="fas fa-thumbtack"></span>
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
            </div>

        </section>
`,
    data() {
        return {
            isEdit: false,
            isColorEdit: false,
            newText: this.info.txt,
            isControlsShown: false,
            pinned: this.isPinned
           
            
        
            

        }
    },
    methods: {
        emitPinNote() {
            this.pinned = !this.pinned;
            this.$emit('pinned', this.id, this.pinned)
        },
        changeBColor(color) {
            this.$emit('changeBGC', color, this.id)
        },
        toggleControls() {
            this.isControlsShown = !this. isControlsShown;
        },
        editNote() {
            this.isEdit = !this.isEdit;
        },
        updateNote() {
            this.$emit('update', this.id, this.newText, 'noteText')
            this.isEdit = !this.isEdit;
        },
        onRemoveNote(){
            this.$emit('delete', this.id)
        },
        colorEdit() {
            this.isColorEdit = !this.isColorEdit;
        }
    },
    components: {
        noteColors,
        longText
    },


}