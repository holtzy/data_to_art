"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// There is a modal set at the summit of the app tree
// Clicking on any image in the app will open the modal on top of the app
// This allow to switch to next/prev project easily

type ModalData = { imgPath: string } | null;

type ModalContextType = {
  openModal: (data: ModalData) => void;
  closeModal: () => void;
  modalData: ModalData;
  setModalData: (data: ModalData) => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalData, setModalData] = useState<ModalData>(null);

  const openModal = (data: ModalData) => setModalData(data);
  const closeModal = () => setModalData(null);

  return (
    <ModalContext.Provider
      value={{ openModal, closeModal, modalData, setModalData }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within ModalProvider");
  return context;
};
