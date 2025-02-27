import { FC, useEffect, useState } from 'react';
import styles from './MediaItemList.module.css';
import { MediaItem } from '../../models/responses/MediaItem';
import MediaListItem from './MediaListItem/MediaListItem';
import SimpleMediaEditForm from '../SimpleMediaEditForm/SimpleMediaEditForm';
import Modal from '../Modal/Modal';
import useDebounce from 'src/renderer/hooks/useDebounce';
import { SegmentedTags } from 'src/renderer/models/responses';
import { Collection } from 'src/renderer/models/responses/Collection';

interface MediaItemListProps {
  items: MediaItem[];
  type: string;
  isEditModalOpen: boolean;
  selectedItem: MediaItem;
  tags: SegmentedTags;
  collections: Collection[];
  onEdit: (item: MediaItem) => void;
  onSave: (item: MediaItem) => void;
  onRemove: (item: MediaItem) => void;
  onDelete: (item: MediaItem) => void;
  onPin: (item: MediaItem) => void;
  onAddItem: () => void;
  onSearch: (searchString: string) => void;
}

const MediaItemList: FC<MediaItemListProps> = ({
  items,
  type,
  isEditModalOpen,
  selectedItem,
  tags,
  collections,
  onEdit,
  onSave,
  onRemove,
  onDelete,
  onPin,
  onAddItem,
  onSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(onSearch, 1000);

  useEffect(() => {
    if (!searchTerm) {
      return;
    }
    debouncedSearch(searchTerm);
  }, [searchTerm, debouncedSearch]);

  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemHeader}>
        <div className={styles.addItem} onClick={onAddItem}>
          <span className="material-symbols-rounded">add</span>
        </div>
        <div className={styles.searchContainer}>
          <div className={styles.searchField}>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="SEARCH TITLE"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {/* <div className={styles.searchButton}>
            <span className="material-symbols-rounded">search</span>
          </div> */}
        </div>
      </div>
      <div className={styles.mediaList}>
        {items.map((item) => (
          <MediaListItem
            key={item.id}
            item={item}
            onEdit={onEdit}
            onSave={onSave}
            onRemove={onRemove}
            onPin={onPin}
          />
        ))}
        <Modal
          isOpen={isEditModalOpen}
          fullScreen={false}
          style={{
            padding: '0px',
            maxWidth: 'calc(100% - 40px)',
          }}
        >
          <SimpleMediaEditForm
            item={selectedItem}
            itemType={type}
            tags={tags}
            onDelete={onDelete}
            onSave={onSave}
            onCancel={onEdit}
            collections={collections}
          />
        </Modal>
      </div>
    </div>
  );
};

export default MediaItemList;
