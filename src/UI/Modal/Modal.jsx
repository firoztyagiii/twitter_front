import {
  Children,
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import styles from "./Modal.module.css";
import { AiOutlineClose } from "react-icons/ai";

import { createPortal } from "react-dom";

const ModalContext = createContext({
  isShow: false,
  showHandler() {},
});

const Modal = ({ children }) => {
  const [isShow, setIsShow] = useState(false);

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

const Button = ({ children }) => {
  const { showHandler } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => {
      showHandler();
    },
  });
};
const Window = ({ children }) => {
  const { isShow, showHandler } = useContext(ModalContext);

  if (!isShow) return null;
  return createPortal(
    <div className={styles.modalOverlay} onClick={(e) => e.stopPropagation()}>
      <div className={styles.modalBody}>
        <span onClick={showHandler}>
          <AiOutlineClose></AiOutlineClose>
        </span>
        {Children.only(children)}
      </div>
    </div>,
    document.body
  );
};

Modal.Button = Button;
Modal.Window = Window;

export default Modal;
