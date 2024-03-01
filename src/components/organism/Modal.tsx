import { PropsWithChildren, useEffect, useRef } from "react";

const Modal = ({
  children,
  showModal,
  closeModal,
}: PropsWithChildren & {
  showModal: boolean;
  closeModal: () => void;
}) => {
  const divRef: any = useRef(null);

  const handleClickOutside = (e: any) => {
    if (divRef.current && !divRef.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return showModal ? (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-transparent text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div ref={divRef}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
