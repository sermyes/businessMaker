import { firebaseDatabase } from './firebase';

class NoteRespository{
    saveNote(userId, note){
        firebaseDatabase.ref(`${userId}/noteApp/notes/${note.id}`).set(note);
    }

    saveNoteSetting(userId, setting){
        firebaseDatabase.ref(`${userId}/noteApp/setting`).set(setting);
    }

    removeNote(userId, note){
        firebaseDatabase.ref(`${userId}/noteApp/notes/${note.id}`).remove();
    }

    syncNote(userId, onUpdate){
        const ref = firebaseDatabase.ref(`${userId}/noteApp`);
        ref.on('value', (snapshot) => {
            const data = snapshot.val();
            data && onUpdate(data);
        });

        return () => ref.off();
    }
}

export default NoteRespository;