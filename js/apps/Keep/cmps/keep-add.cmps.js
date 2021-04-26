
import { keepService } from '../services/keep-service.js'

export default {
    name: 'keep-add',
    template: `
       <section class="keep-add">
            <h2 class="keep-add-title"> Easy Not To Forget</h2>
            
            <div class="keep-icons">
            <label>
                <input type="radio" v-model="note.type" value="noteText" checked="true"/>  
                <span class="fas fa-font fa-lg selected"></span>
            </label>
            
            <label>
                <input type="radio" v-model="note.type" value="noteImg" />  
                <span class="far fa-image fa-lg"></span>
            </label>

            <label>
                <input type="radio" v-model="note.type" value="noteTodos" /> 
                <span class="fas fa-list fa-lg"></span>
            </label>
            <label>
                <input type="radio" v-model="note.type" value="noteVideo" /> 
                <span class="fab fa-youtube fa-lg"></span>
            </label>
        </div>
            
            <div class="keep-add-inputs">
            <input
        v-if="isTitle"
        v-model="title"
        type="text"
        
        placeholder="Add title"
        class="add-title"
        />

        <input
        v-if="isTodos"
        v-model="todosLabel"
        type="text"
        
        placeholder="Add label"
        class="add-lable"
        />

        <input 
        v-model="info"
        @keyup.enter="updateNoteInfo"
        type="text"
        ref="info"
        
        :placeholder="[[placeholder]]"
        class="user-info"
        />
</div>
        
       
        </section>
    `,
    data() {
        return {
            note: { type: 'noteText' },
            placeholder: 'What\'s on your mind...',
            info: '',
            isTodos: false,
            todosLabel: '',
            isTitle: false,
            title: ''
        }
    },
    watch: {
        'note.type' () {
            this.isTodos = false;
            this.isTitle = false;
            this.title = '',
                this.todosLabel = ''

            if (this.note.type === 'noteText') {
                this.placeholder = 'What\'s on your mind...'
            } else if (this.note.type === 'noteImg') {
                this.isTitle = true;
                this.placeholder = 'Enter image URL...'
            } else if (this.note.type === 'noteVideo') {
                this.isTitle = true;
                this.placeholder = 'Enter video URL...'
            } else {
                this.isTodos = true;
                this.placeholder = 'Enter comma separated list...'
            }
        }
    },
    methods: {
        updateNoteInfo() {
            if (this.note.type === 'noteText') this.note.info = { title: this.info }

            else if (this.note.type === 'noteImg') {
                this.note.info = { url: this.info, title: this.title }

            } else if (this.note.type === 'noteVideo') {
                this.note.info = { url:keepService.convertYouTube(this.info), title: this.title }
            }
            else if (this.note.type === 'noteTodos') {
                let todos = this.info.split(',');

                var todosObj = todos.map(todo => {
                    return { txt: todo, doneAt: null }
                });
                this.note.info = { todos: todosObj, title: this.todosLabel };
            }
            keepService.addNote(this.note)
                .then(res => {
                    this.info = '';
                    this.title = '';
                    this.todosLabel = '';
                })
        },
    },
    created() {
    }
}