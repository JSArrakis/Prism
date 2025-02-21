import { FC, useState, useRef, useEffect } from 'react';
import fuzzysort from 'fuzzysort';
import styles from './SimpleMediaEditForm.module.css';
import { MediaItem } from '../../models/responses/MediaItem';
import { SegmentedTags } from 'src/renderer/models/responses';
import { getFileName } from 'src/renderer/util/helpers/common';
import { TAG_CATEGORIES } from '../../models/constants';
import useDebounce from 'src/renderer/hooks/useDebounce';

interface SimpleMediaEditFormProps {
  item: MediaItem;
  itemType: string;
  tags: SegmentedTags;
  onSave: (item: MediaItem) => void;
  onDelete: (item: MediaItem) => void;
  onCancel: (item: MediaItem) => void;
}

const SimpleMediaEditForm: FC<SimpleMediaEditFormProps> = ({
  item,
  itemType,
  tags,
  onSave,
  onDelete,
  onCancel,
}) => {
  const allTags = Object.values(tags).flat();
  const [tagListSearchTerm, setTagListSearchTerm] = useState('');

  const [tagChipList, setTagChipList] = useState<string[]>([]);
  const [selectedTagList, setSelectedTagList] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    TAG_CATEGORIES.ALL,
  );
  const [title, setTitle] = useState(item.title || '');
  const [alias, setAlias] = useState(item.alias || '');
  const [imdb, setImdb] = useState(item.imdb || '');
  const tagListRef = useRef<HTMLSelectElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const aliasRef = useRef<HTMLInputElement>(null);
  const imdbRef = useRef<HTMLInputElement>(null);
  const searchTagsRef = useRef<HTMLInputElement>(null);
  const searchCollectionsRef = useRef<HTMLInputElement>(null);

  const onSearch = (searchTerm: string) => {
    if (!searchTerm) {
      setSelectedTagList(allTags);
      return;
    }
    const results = fuzzysort.go(searchTerm, allTags, {
      threshold: -1000,
      limit: 50,
    });
    setSelectedTagList(results.map((result) => result.target));
  };
  const debouncedSearch = useDebounce(onSearch, 1000);

  useEffect(() => {
    debouncedSearch(tagListSearchTerm);
  }, [tagListSearchTerm, debouncedSearch]);

  useEffect(() => {
    console.log('Selected category:', selectedCategory);
    switch (selectedCategory) {
      case TAG_CATEGORIES.AGE_GROUP:
        setSelectedTagList(tags.AgeGroupTags);
        break;
      case TAG_CATEGORIES.GENRE:
        setSelectedTagList(tags.GenreTags);
        break;
      case TAG_CATEGORIES.SPECIALTY:
        setSelectedTagList(tags.SpecialtyTags);
        break;
      case TAG_CATEGORIES.ERA:
        setSelectedTagList(tags.EraTags);
        break;
      case TAG_CATEGORIES.HOLIDAY:
        setSelectedTagList(tags.HolidayTags);
        break;
      default:
        setSelectedTagList(allTags);
        break;
    }
  }, [selectedCategory, tags]);

  const handleSave = () => {
    const updatedItem: MediaItem = {
      ...item,
      title,
      alias,
      imdb,
      tags: tagChipList,
    };
    onSave(updatedItem);
  };

  const handleAddChip = () => {
    const selectedTag = tagListRef.current?.value;

    if (selectedTag && !tagChipList.includes(selectedTag)) {
      setTagChipList([...tagChipList, selectedTag]);
    }
    setTagListSearchTerm('');
  };

  const handleRemoveChip = (chip: string) => {
    setTagChipList(tagChipList.filter((item) => item !== chip));
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.classList.add(styles.hidePlaceholder);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.classList.remove(styles.hidePlaceholder);
  };

  return (
    <div className={styles.simpleItemEditContainer}>
      <div className={styles.editModalHeader}>
        <div></div>
        <div className={styles.editModalCardTitle}>
          EDIT {itemType.toUpperCase()}
        </div>
        <div className={styles.closeEdit} onClick={() => onCancel(item)}>
          <span className="material-symbols-rounded">close</span>
        </div>
      </div>
      <div className={styles.editModalFile}>
        <div className={styles.editInputLabel}>File:</div>
        <div className={styles.editInputFileName}>{getFileName(item.path)}</div>
      </div>
      <div className={styles.topBody}>
        <div className={styles.mediaLabels}>
          <div className={styles.editModalTitle}>
            <div className={styles.editInputLabel}>TItle:</div>
            <input
              className={styles.editInputField}
              type="text"
              placeholder="MEDIA TITLE"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              ref={titleRef}
            />
          </div>
          <div className={styles.editModalAlias}>
            <div className={styles.editInputLabel}>Alias:</div>
            <input
              className={styles.editInputField}
              type="text"
              placeholder="MEDIA ALIAS"
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              ref={aliasRef}
            />
          </div>
          <div className={styles.editModalImdb}>
            <div className={styles.editInputLabel}>IMDB:</div>
            <input
              className={styles.editInputField}
              type="text"
              placeholder="IMDB URL"
              value={imdb}
              onChange={(e) => setImdb(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              ref={imdbRef}
            />
          </div>
          <div className={styles.tagListHeader}>
            <div className={styles.tagsLabel}>Tags:</div>
            <select
              className={styles.dropdown}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {Object.values(TAG_CATEGORIES).map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <input
              className={styles.tagListSearchInput}
              type="text"
              placeholder="TAG SEARCH"
              value={tagListSearchTerm}
              onChange={(e) => setTagListSearchTerm(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              ref={searchTagsRef}
            />
          </div>
        </div>
        <div className={styles.collectionContainer}>
          <div className={styles.collectionHeader}>
            <div className={styles.collectionLabel}>Collections:</div>
            <input
              className={styles.collectionSearch}
              type="text"
              placeholder="COLLECTION SEARCH"
              value={tagListSearchTerm}
              onChange={(e) => setTagListSearchTerm(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              ref={searchCollectionsRef}
            />
          </div>
          <div className={styles.collectionList}></div>
        </div>
      </div>
      <div className={styles.tagsContainer}>
        <div className={styles.tagListContainer}>
          <select multiple className={styles.tagList} ref={tagListRef}>
            {selectedTagList.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
          <div className={styles.addChipButton} onClick={handleAddChip}>
            <span className="material-symbols-rounded">add</span>
          </div>
          <div className={styles.tagChipList}>
            {tagChipList.map((chip, index) => (
              <div key={index} className={styles.tagChip}>
                {chip}
                <button
                  className={styles.closeButton}
                  onClick={() => handleRemoveChip(chip)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.editModalId}>id: {item.id}</div>
    </div>
  );
};

export default SimpleMediaEditForm;
