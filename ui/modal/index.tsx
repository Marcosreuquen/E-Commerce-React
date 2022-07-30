import { useState } from "react";
import { Bg, Modal, CloseButton, ModalBody } from "./styled";
import cn from "classnames";

export default function ModalComponent({
  children,
  show,
  onClose = null,
  transparent = false,
}: any) {
  const [hideModal, setHide] = useState(false);
  const showModal = show && !hideModal;
  const hideIt = () => setHide(true);
  const closeModal = onClose || hideIt;

  return (
    <Bg
      style={{
        display: showModal ? "" : "none",
      }}>
      <Modal className={cn({ transparent })}>
        <CloseButton onClick={closeModal} />
        <ModalBody>{children}</ModalBody>
      </Modal>
    </Bg>
  );
}
