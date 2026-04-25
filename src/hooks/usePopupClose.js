import { useEffect } from "react";

const usePopupClose = (popupRef, isOpen, onClose) => {
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    }

    function handleEscKey(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose, popupRef]);
};

export default usePopupClose;
