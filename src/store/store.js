import { create } from 'zustand';

const useUIStore = create((set) => ({
  // Modal state
  isModalOpen: false,
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),

  isSearchModalOpen: false,
  toggleSearchModal: () => set((state) => ({ isSearchModalOpen: !state.isSearchModalOpen })),

  // Search input state
  searchInputValue: '',
  setSearchInputValue: (payload) => set({ searchInputValue: payload }),

  // Dark mode state
  darkMode: false,
  themeColors: {
    background: 'rgba(41, 41, 41, 0.8)',
    color: '#fff',
  },
  toggleDarkMode: () => set((state) => ({
    darkMode: !state.darkMode,
    themeColors: !state.darkMode
      ? { background: 'rgba(41, 41, 41, 0.8)', color: '#ffffff' }
      : { background: 'rgba(206, 201, 205, 0.8)', color: '#000000' },
  })),
}));

export default useUIStore;
