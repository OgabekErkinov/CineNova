import { create } from "zustand";


const useContactStore = create((set) => ({
  // Contact Modal
  isContactModalOpen: false,
  openContactModal: () => set({ isContactModalOpen: true }),
  closeContactModal: () => set({ isContactModalOpen: false }),

}));


export default useContactStore