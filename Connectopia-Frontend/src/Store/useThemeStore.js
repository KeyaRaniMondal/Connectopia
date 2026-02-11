import { create } from "zustand";

export const useThemeStore = create((set) => ({
    theme: localStorage.getItem("chat-theme") || "coffee",
    setTheme: (theme) => {
        localStorage.setItem("chat-theme", theme);
        set({ theme });
        // Apply theme immediately to HTML element
        document.documentElement.setAttribute('data-theme', theme);
    },
}));