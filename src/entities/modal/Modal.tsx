import { createPortal } from 'react-dom';
import type { PropsWithChildren } from 'react';

import styles from './Modal.module.css';

type ModalProps = PropsWithChildren<{
  show: boolean;
  onClose: () => void;
}>;

export default function Modal({ show, onClose, children }: ModalProps) {
  if (!show) {
    return null;
  }

  const closeByOverlayClick = (event: React.MouseEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest('.modal-content')) return;
    onClose();
  };

  return createPortal(
    <div className={styles.overlay} onClick={closeByOverlayClick}>
      <div className="modal-content">{children}</div>
    </div>,
    document.body
  );
}
