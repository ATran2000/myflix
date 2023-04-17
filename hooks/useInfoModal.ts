import { create } from 'zustand'

export interface ModalStoreInterface {
    animeId?: string,
    isOpen: boolean,
    openModal: (animeId: string) => void,
    closeModal: () => void
}

const useInfoModal = create<ModalStoreInterface>((set) => ({
    animeId: undefined,
    isOpen: false,
    openModal: (animeId: string) => set({ isOpen: true, animeId }),
    closeModal: () => set({ isOpen: false, animeId: undefined })
}))

export default useInfoModal