import { type SubmitEvent, useEffect, useRef, useState } from 'react';

import { IcClose } from '@shared/assets/icons';
import Button from '@shared/ui/button/button';
import TextField from '@shared/ui/text-field/text-field';

import * as styles from './add-folder-modal.css';

const FOLDER_NAME_MAX_LENGTH = 8;

interface AddFolderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (folderName: string) => void;
}

const AddFolderModal = ({
  isOpen,
  onClose,
  onConfirm,
}: AddFolderModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [folderName, setFolderName] = useState('');

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  const isEmpty = folderName.trim().length === 0;
  const isError = folderName.length > FOLDER_NAME_MAX_LENGTH;

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    onConfirm(folderName);
  };

  return (
    <dialog
      ref={dialogRef}
      className={styles.container}
      onCancel={onClose}
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
          <h2 className={styles.title}>폴더 추가</h2>
          <p className={styles.description}>공백 포함 최대 8자 이내</p>
        </hgroup>
      </header>

      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          placeholder="폴더명을 입력하세요"
          value={folderName}
          error={isError}
          helperText={isError ? '최대 8자 이내로 입력해주세요' : undefined}
          onChange={(event) => setFolderName(event.target.value)}
        />
        <div className={styles.buttonContainer}>
          <Button variant="outlined" onClick={onClose}>
            취소
          </Button>
          <Button type="submit" disabled={isEmpty || isError}>
            확인
          </Button>
        </div>
      </form>
    </dialog>
  );
};

export default AddFolderModal;
