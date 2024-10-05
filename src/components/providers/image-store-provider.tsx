"use client"

import { createContext, type ReactNode, useState } from "react"
import { createImageStore } from "@/stores/image-store"

export type ImageStoreApi = ReturnType<typeof createImageStore>

export const ImageStoreContext = createContext<ImageStoreApi | undefined>(
  undefined,
)

export type ImageStoreProviderProps = {
  children: ReactNode
}

export function ImageStoreProvider({ children }: ImageStoreProviderProps) {
  const [store] = useState(() => createImageStore())

  return (
    <ImageStoreContext.Provider value={store}>
      {children}
    </ImageStoreContext.Provider>
  )
}
