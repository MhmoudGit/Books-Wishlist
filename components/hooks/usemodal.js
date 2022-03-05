import { useState } from "react";

const useModal = () => {
    const [modal, setModal] = useState(false);
  
    const openModal = () => {
      setModal(true);
      document.body.style.overflow = "hidden";
    };

    return { modal, openModal, setModal }
}
 
export default useModal;