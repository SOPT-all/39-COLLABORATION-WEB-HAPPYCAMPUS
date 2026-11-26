import {
  type SubmitEvent,
  type SyntheticEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';

import { FOLDER_CREATE_ERROR_MESSAGE } from '@domains/cart/constants/folder-create';
import { isDefaultCategoryName } from '@domains/cart/utils/is-default-category-name';
import { IcClose } from '@shared/assets/icons';
import Button from '@shared/ui/button/button';
import TextField from '@shared/ui/text-field/text-field';

import * as styles from './add-folder-modal.css';

const FOLDER_NAME_MAX_LENGTH = 8;

interface AddFolderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (folderName: string) => void;
  disabled?: boolean;
}

const AddFolderModal = ({
  isOpen,
  onClose,
  onConfirm,
  disabled,
}: AddFolderModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const titleId = useId();
  const [folderName, setFolderName] = useState('');

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
      inputRef.current?.focus();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  const isEmpty = folderName.trim().length === 0;
  const isError = folderName.trim().length > FOLDER_NAME_MAX_LENGTH;

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isDefaultCategoryName(folderName)) {
      alert(FOLDER_CREATE_ERROR_MESSAGE.duplicated);
      return;
    }

    onConfirm(folderName.trim());
  };

  const handleDialogCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
    event.preventDefault();
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      className={styles.container}
      onCancel={handleDialogCancel}
      onClose={() => setFolderName('')}
    >
      <header className={styles.header}>
        <button
          type="button"
          aria-label="닫기"
          className={styles.closeButton}
          onClick={onClose}
        >
          <IcClose aria-hidden />
        </button>
        <hgroup className={styles.titleContainer}>
          <h2 id={titleId} className={styles.title}>
            폴더 추가
          </h2>
          <p className={styles.description}>
            공백 포함 최대 {FOLDER_NAME_MAX_LENGTH}자 이내
          </p>
        </hgroup>
      </header>

      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          ref={inputRef}
          aria-label="폴더명"
          placeholder="폴더명을 입력하세요"
          value={folderName}
          error={isError}
          helperText={
            isError
              ? `최대 ${FOLDER_NAME_MAX_LENGTH}자 이내로 입력해주세요`
              : undefined
          }
          onChange={(event) => setFolderName(event.target.value)}
        />
        <div className={styles.buttonContainer}>
          <Button variant="outlined" onClick={onClose}>
            취소
          </Button>
          <Button type="submit" disabled={isEmpty || isError || disabled}>
            확인
          </Button>
        </div>
      </form>
    </dialog>
  );
};

export default AddFolderModal;
