"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ModalData = {
  imgPath: string;
  projectName?: string;
} | null;

type ModalContextType = {
  openModal: (data: ModalData) => void;
  closeModal: () => void;
  modalData: ModalData;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalData, setModalData] = useState<ModalData>(null);

  const openModal = (data: ModalData) => setModalData(data);
  const closeModal = () => setModalData(null);

  return (
    <ModalContext.Provider value={{ openModal, closeModal, modalData }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within ModalProvider");
  return context;
};
