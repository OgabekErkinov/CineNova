import { create } from "zustand";


const useSearchStore = create((set) => ({

  // Search Modal
  isSearchModalOpen: false,
  openSearchModal: () => set({ isSearchModalOpen: true }),
  closeSearchModal: () => set({ isSearchModalOpen: false }),

  // Search input
  searchInputValue: '',
  setSearchInputValue: (payload) => set({ searchInputValue: payload }),
}));


export default useSearchStore