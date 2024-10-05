"use client"

import { createContext, type ReactNode, useState } from "react"
import { createAppStore } from "@/stores/app-store"

export type AppStoreApi = ReturnType<typeof createAppStore>

export const AppStoreContext = createContext<AppStoreApi | undefined>(undefined)

export type AppStoreProviderProps = {
  children: ReactNode
}

export function AppStoreProvider({ children }: AppStoreProviderProps) {
  const [store] = useState(() => createAppStore())

  return (
    <AppStoreContext.Provider value={store}>
      {children}
    </AppStoreContext.Provider>
  )
}
