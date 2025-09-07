import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface AppState {
  count: number
  theme: 'light' | 'dark' | 'system'
}

interface AppActions {
  increment: () => void
  decrement: () => void
  reset: () => void
  setTheme: (theme: AppState['theme']) => void
}

export const useAppStore = create<AppState & AppActions>()(
  devtools(
    (set) => ({
      // State
      count: 0,
      theme: 'system',
      
      // Actions
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'app-store',
    },
  ),
)