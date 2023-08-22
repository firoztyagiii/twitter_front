import {
  PropsWithChildren,
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import styles from "./Modal.module.css";
import { AiOutlineClose } from "react-icons/ai";

import { createPortal } from "react-dom";

interface modalInterface {
  isShow: boolean;
  showHandler: () => void;
}

export const ModalContext = createContext<modalInterface>({
  isShow: false,
  showHandler() {},
});

const Modal: React.FC<PropsWithChildren> = ({ children }) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const showHandler = () => {
    setIsShow((prev) => {
      return !prev;
    });
  };

  return (
    <ModalContext.Provider value={{ isShow, showHandler }}>
      {children}
    </ModalContext.Provider>
  );
};

const Button: React.FC<PropsWithChildren> = ({ children }) => {
  const { showHandler } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => {
      showHandler();
    },
  });
};
const Window: React.FC<PropsWithChildren> = ({ children }) => {
  const { isShow, showHandler } = useContext(ModalContext);

  if (!isShow) return null;
  return createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalBody}>
        <span onClick={showHandler}>
          <AiOutlineClose></AiOutlineClose>
        </span>
        {children}
      </div>
    </div>,
    document.body
  );
};

Modal.Button = Button;
Modal.Window = Window;

export default Modal;
