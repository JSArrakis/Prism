import { FC, useEffect, useState } from 'react';
import styles from './MediaListItem.module.css';
import { MediaItem } from '../../../models/responses/MediaItem';

interface MediaListItemProps {
  item: MediaItem;
  onEdit: (item: MediaItem) => void;
  onSave: (item: MediaItem) => void;
  onRemove: (item: MediaItem) => void;
  onPin: (item: MediaItem) => void;
}

const MediaListItem: FC<MediaListItemProps> = ({
  item,
  onEdit,
  onSave,
  onRemove,
  onPin,
}) => {
  const [title, setTitle] = useState(item.title || '');
  const [hasIncomingTitle, setHasIncomingTitle] = useState(false);

  useEffect(() => {
    console.log('item.title', item.title);
    if (item.title) {
      console.log('setting title', item.title);
      setTitle(item.title);
      setHasIncomingTitle(true);
    }
  }, [item.title]);

  const getFileName = (path: string) => {
    const parts = path.split('\\');
    return parts[parts.length - 1];
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTitleSave = () => {
    onSave({ ...item, title });
  };
  console.log('Editable Title', hasIncomingTitle);
  return (
    <div className={styles.mediaItem}>
      <div className={styles.closeRow} onClick={() => onRemove(item)}>
        <span className="material-symbols-rounded">close</span>
      </div>
      <div className={styles.pinRow} onClick={() => onPin(item)}>
        <span className="material-symbols-rounded">keep</span>
      </div>
      <div className={styles.itemContent}>
        {hasIncomingTitle ? (
          <div className={styles.itemTitle}>{title}</div>
        ) : (
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            onBlur={handleTitleSave}
            placeholder="ENTER TITLE"
            className={styles.titleInput}
          />
        )}
        <div className={styles.itemPathContainer}>
          <div></div><div className={styles.itemPath}>{getFileName(item.path)}</div>
        </div>
      </div>
      <div className={styles.actionsRow}>
        <div className={styles.saveRow} onClick={handleTitleSave}>
          <span className="material-symbols-rounded">save</span>
        </div>
        <div className={styles.editRow} onClick={() => onEdit(item)}>
          <span className="material-symbols-rounded">edit_square</span>
        </div>
      </div>
    </div>
  );
};

export default MediaListItem;
