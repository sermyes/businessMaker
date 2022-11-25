import { getDatabase, ref, set, remove, onValue, off } from 'firebase/database';

class NoteRespository {
  constructor() {
    this.database = getDatabase();
  }

  saveNote(userId, note) {
    set(ref(this.database, `${userId}/noteApp/notes/${note.id}`), note);
  }

  saveNoteSetting(userId, setting) {
    set(ref(this.database, `${userId}/noteApp/setting`), setting);
  }

  removeNote(userId, note) {
    remove(ref(this.database, `${userId}/noteApp/notes/${note.id}`));
  }

  syncNote(userId, onUpdate) {
    const query = ref(this.database, `${userId}/noteApp`);
    onValue(query, snapshot => {
      const value = snapshot.val();
      value && onUpdate(value);
    });

    return () => off(query);
  }
}

export default NoteRespository;
