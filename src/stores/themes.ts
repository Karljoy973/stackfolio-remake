import { defineStore } from "pinia";

interface themeState {
    currentTheme: "solar"|"geek"|"dark"
}

export const themeStore = defineStore<"themes", themeState>('themes', {
    state: () => 
    ({
       currentTheme : "solar" 
    }), 
    actions: {
        setTheme({ currentTheme }: themeState) {
            this.currentTheme = currentTheme; 
            document.body.className = `theme-${this.currentTheme}`
        }
    }
})