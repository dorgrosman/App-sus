import { utilsService } from './utils-service.js'

const NOTES_DB = 'noteDb'

export const keepService = {
    addNote,
    getNotes,
    removeNote,
    changeBgColor,
    updateNote,
    pinNote,
    convertYouTube,
    strikingToDo

}

var gNotes;

function getNotes() {
    var notes = utilsService.loadFromStorage(NOTES_DB)
    if (!notes || notes.length === 0) {
        notes = createDefaultNotes()
        utilsService.storeToStorage(NOTES_DB, notes)
    }
    gNotes = notes
    return Promise.resolve(gNotes);
}


function addNote(note) {
    const newNote = formatNotes(note);
    gNotes.unshift(newNote);

    utilsService.storeToStorage(NOTES_DB, gNotes)
    return Promise.resolve();
}

function removeNote(noteId) {

    const noteIdx = gNotes.findIndex((note) => {
        return noteId === note.id
    })
    gNotes.splice(noteIdx, 1)
    utilsService.storeToStorage(NOTES_DB, gNotes)
    return Promise.resolve(gNotes)
}




async function changeBgColor(color, id) {
    console.log('color:', color)
    
    let note = await findNoteById(id);
    
    note.style.backgroundColor = color;
    utilsService.storeToStorage(NOTES_DB, gNotes)
    return Promise.resolve(gNotes);
}


function findNoteById(noteId) {
    const note = gNotes.find(note => note.id === noteId);
    return Promise.resolve(note)
}



function createDefaultNotes() {

    let defaultNotes = [
        {
            type: "noteText",
            isPinned: true,
            info: {
                title: '\"Toto, I\'ve a feeling we\'re not in Kansas anymore\"'
            },
            style: {
                backgroundColor: "#2a9d8f"
            }
        },
        {
            type: "noteText",
            isPinned: false,
            info: {
                title: '\"No matter what anybody tells you, words and ideas can change the world\"'
            },
            style: {
                backgroundColor: "#f4a261"
            }
        },
        {
            type: "noteImg",
            isPinned: false,
            info: {
                url: "https://picsum.photos/180/120?random=2",
                title: "Photography is not Dead"
            },
            style: {
                backgroundColor: "#00B4D8"
            }
        },
        {
            type: "noteTodos",
            isPinned: false,
            info: {
                title: "What to Do:",
                todos: [
                    { id: utilsService.makeId(5), txt: "Code", isDone: false },
                    { id: utilsService.makeId(5), txt: "Code Some More", isDone: false },
                    { id: utilsService.makeId(5), txt: "And a Bit More", isDone: false }
                ]
            },
            style: {
                backgroundColor: "#ff5c8a"
            }
        },
        {
            type: "noteImg",
            isPinned: true,
            info: {
                url: "https://picsum.photos/180/120?random=1",
                title: "Through the Looking Glass"
            },
            style: {
                backgroundColor: "#e9c46a"
            }
        },
        {
            type: "noteVideo",
            isPinned: false,
            info: {
                url: "https://www.youtube.com/embed/ggFKLxAQBbc",
                title: "Enter the Matrix"
            },
            style: {
                backgroundColor: "#0077B6"
            }
        },
    ].map(formatNotes);
    return defaultNotes
}


function formatNotes(rawNotes) {
    return {
        id: utilsService.makeId(),
        type: rawNotes.type,
        isPinned: rawNotes.isPinned || false,
        info: rawNotes.info,
        style: rawNotes.style || { backgroundColor: '#BCD4E6' }
    }
}


function updateNote(noteId, info, type) {
    findNoteById(noteId)
        .then(note => {

            if (type === 'noteText') {
                note.info.title = info;
            } else if (type === 'noteImg') {
                note.info.url = info;
            } else if (type === 'noteVideo') {
                note.info.url = info;
            } else if (type === 'noteTodos') {
                note.info.todos = info
            }
        })
    utilsService.storeToStorage(NOTES_DB, gNotes)
}

function strikingToDo(noteId, idx) {
    const note = findNoteById(noteId)
        .then(note => {
            note.info.todos[idx].isDone = !note.info.todos[idx].isDone
        })

}

function pinNote(noteId, pinInfo) {
    const note = findNoteById(noteId)
        .then(note => {
            note.isPinned = pinInfo
        })
    utilsService.storeToStorage(NOTES_DB, gNotes)
}


function convertYouTube(url) {

    const videoId = getVideoId(url);
    const iframeMarkup = 'https://www.youtube.com/embed/' + videoId;
    return iframeMarkup
}

function getVideoId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
}
