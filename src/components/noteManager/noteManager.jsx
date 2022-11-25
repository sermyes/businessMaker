import React, { useCallback, useEffect, useRef, useState } from 'react';
import NoteModal from '../noteModal/noteModal';
import NoteAddButton from '../noteAddButton/noteAddButton';
import NoteColor from '../noteColor/noteColor';
import NoteSubject from '../noteSubject/noteSubject';
import styles from './noteManager.module.css';

const NoteManager = ({
  onClose,
  notes,
  addNote,
  setSelectedNote,
  updateSetting,
  setting
}) => {
  const { color, size } = setting;
  const sortRef = useRef();
  const searchRef = useRef();
  const searchInputRef = useRef();
  const [active, setActive] = useState(false);
  const [sortedNotes, setSortedNotes] = useState([]);

  const onColorChange = (eventTarget) => {
    const name = eventTarget.getAttribute('name');
    const color = eventTarget.getAttribute('data-color');

    updateSetting({
      ...setting,
      [name]: color
    });
  };

  const onChange = (e) => {
    e.preventDefault();
    updateSetting({
      ...setting,
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  const onSearchBar = (e) => {
    e.preventDefault();
    if (active) {
      searchRef.current.style.cssText = `height: 0`;
      setActive(false);
    } else {
      searchRef.current.style.cssText = `height: 32px`;
      searchInputRef.current.focus();
      setActive(true);
    }
  };
  const onKeyUp = (e) => {
    if (!(e.key === 'Enter')) {
      return;
    }
    e.preventDefault();
    handleSearch();
  };

  const onClick = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const handleSearch = () => {
    if (searchInputRef.current.value === '') {
      setSortedNotes(Object.values(notes));
    } else {
      const str = searchInputRef.current.value;

      setSortedNotes((notes) => {
        const sorted = notes.filter(
          (note) =>
            note.title.indexOf(str) !== -1 || note.content.indexOf(str) !== -1
        );
        return sorted;
      });
    }

    searchInputRef.current.value = '';
  };

  const sortNotes = useCallback(() => {
    if (sortRef.current.value === 'title') {
      setSortedNotes(
        Object.values(notes).sort((a, b) => (a.title > b.title ? 1 : -1))
      );
    } else {
      setSortedNotes(
        Object.values(notes).sort((a, b) =>
          a.updatedTime > b.updatedTime ? -1 : 1
        )
      );
    }
  }, [notes]);

  const onSortChange = () => {
    sortNotes();
  };

  useEffect(() => {
    sortNotes();
  }, [sortNotes]);

  return (
    <NoteModal>
      <div className={styles.manager}>
        <div className={styles.header}>
          <button
            className={styles.iconContainer}
            onClick={() => onClose(null)}
          >
            <i className={`${styles.icon} fas fa-arrow-left`}></i>
          </button>
          <h2 className={styles.managerTitle}>Note Manager</h2>
          <button className={styles.iconContainer} onClick={onSearchBar}>
            <i className={`${styles.icon} fas fa-search`}></i>
          </button>
        </div>
        <div ref={searchRef} className={styles.searchContainer}>
          <div className={styles.searchBar}>
            <input
              type='text'
              className={styles.searchText}
              ref={searchInputRef}
              name='search'
              onKeyUp={onKeyUp}
            />
            <button className={styles.searchBtn} onClick={onClick}>
              <i className={`${styles.searchIcon} fas fa-search`}></i>
            </button>
          </div>
        </div>
        <div className={styles.option}>
          <div className={styles.setting}>
            <h2 className={styles.settingTitle}>
              Settings <i className={`${styles.settingIcon} fas fa-cog`}></i>
            </h2>
            <div className={styles.fontContainer}>
              <span className={styles.fontTitle}>font-size </span>
              <select
                className={styles.fontSize}
                name='size'
                defaultValue={size}
                onChange={onChange}
              >
                <option value='small'>small</option>
                <option value='regular'>regular</option>
                <option value='big'>big</option>
              </select>
            </div>
            <div className={styles.colorContainer}>
              <span className={styles.colorTitle}>color </span>
              <NoteColor
                onColorChange={onColorChange}
                color={color}
                onManager={true}
              />
            </div>
          </div>
          <div className={styles.sortContainer}>
            <select
              ref={sortRef}
              className={styles.sort}
              defaultValue='updated'
              onChange={onSortChange}
            >
              <option value='updated'>Sort by Updated Time</option>
              <option value='title'>Sort by Title</option>
            </select>
          </div>
        </div>
        <div className={styles.notesContainer}>
          <ul className={styles.notes}>
            {sortedNotes &&
              sortedNotes.map((note) => (
                <NoteSubject
                  key={note.id}
                  note={note}
                  setSelectedNote={setSelectedNote}
                  onClose={onClose}
                />
              ))}
            <NoteAddButton onManager={true} addNote={addNote} />
          </ul>
        </div>
      </div>
    </NoteModal>
  );
};

export default NoteManager;
