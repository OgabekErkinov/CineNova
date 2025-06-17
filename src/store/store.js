import { create } from "zustand";

const useUIStore = create((set) => ({
  darkMode: false,
  themeColors: {
    background: 'rgba(206, 201, 205, 0.8)', 
    color: '#000000',
  },
  toggleDarkMode: () =>
    set((state) => {
      const newDarkMode = !state.darkMode;
      const newThemeColors = newDarkMode
        ? { background: 'rgba(41, 41, 41, 0.8)', color: '#ffffff' }
        : { background: 'rgba(206, 201, 205, 0.8)', color: '#000000' };

      return {
        darkMode: newDarkMode,
        themeColors: newThemeColors,
      };
    }),
}));

export default useUIStore;
