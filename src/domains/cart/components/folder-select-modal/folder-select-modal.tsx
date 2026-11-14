import { type KeyboardEvent, useEffect, useId, useRef } from 'react';

import FolderOption from '@domains/cart/components/folder-option/folder-option';
import {
  DEFAULT_CATEGORY_LABEL,
  type DefaultCategoryType,
} from '@domains/cart/constants/default-category';
import type { Folder } from '@domains/cart/types/folder';
import { IcAdd, IcClose, IcInfo } from '@shared/assets/icons';
import Button from '@shared/ui/button/button';

import * as styles from './folder-select-modal.css';

const DEFAULT_CATEGORIES = Object.keys(
  DEFAULT_CATEGORY_LABEL,
) as DefaultCategoryType[];

interface FolderSelectModalProps {
  isOpen: boolean;
  category: DefaultCategoryType;
  folders: Folder[];
  selectedFolderIds: number[];
  onFolderToggle: (folderId: number, checked: boolean) => void;
  onCreateFolderClick: () => void;
  onClose: () => void;
  onCompareClick: () => void;
}

const FolderSelectModal = ({
  isOpen,
  category,
  folders,
  selectedFolderIds,
  onFolderToggle,
  onCreateFolderClick,
  onClose,
  onCompareClick,
}: FolderSelectModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  const orderedCategories = [
    category,
    ...DEFAULT_CATEGORIES.filter(
      (defaultCategory) => defaultCategory !== category,
    ),
  ];

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.show();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  const handleDialogKeyDown = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onKeyDown={handleDialogKeyDown}
      className={styles.folderSelectModal}
    >
      <div className={styles.contentContainer}>
        <header className={styles.header}>
          <h2 id={titleId} className={styles.title}>
            어느 폴더에 담을까요?
          </h2>
          <button type="button" aria-label="닫기" onClick={onClose}>
            <IcClose width={24} height={24} aria-hidden />
          </button>
        </header>

        <div className={styles.folderContainer}>
          <ul className={styles.folderList}>
            {orderedCategories.map((defaultCategory) => {
              const isOriginal = defaultCategory === category;

              return (
                <li key={defaultCategory}>
                  <FolderOption
                    folderName={DEFAULT_CATEGORY_LABEL[defaultCategory]}
                    isDefault={isOriginal}
                    selected={isOriginal}
                    disabled={!isOriginal}
                  />
                </li>
              );
            })}

            {folders.map((folder) => {
              const isSelected = selectedFolderIds.includes(folder.folderId);

              return (
                <li key={folder.folderId}>
                  <FolderOption
                    folderName={folder.name}
                    isDefault={false}
                    selected={isSelected}
                    onClick={() => onFolderToggle(folder.folderId, !isSelected)}
                  />
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={onCreateFolderClick}
            className={styles.addFolderButton}
          >
            <IcAdd width={20} height={20} aria-hidden />새 폴더 만들기
          </button>

          <p className={styles.infoText}>
            <IcInfo width={16} height={16} aria-hidden />
            폴더를 고르지 않으면 {DEFAULT_CATEGORY_LABEL[category]}에 담겨요.
          </p>
        </div>
      </div>

      <footer className={styles.footer}>
        <Button variant="outlined" onClick={onClose}>
          취소
        </Button>
        <Button onClick={onCompareClick}>담고 비교하기</Button>
      </footer>
    </dialog>
  );
};

export default FolderSelectModal;
