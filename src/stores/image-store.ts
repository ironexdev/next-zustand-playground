import { createStore, useStore } from "zustand"
import { useContext } from "react"
import { ImageStoreContext } from "@/components/providers/image-store-provider"

export type ImageStoreType = {
  rotation: number
  grayscale: boolean
  actions: {
    setRotation: (rotation: number) => void
    setGrayscale: (grayscale: boolean) => void
  }
}

export function createImageStore() {
  return createStore<ImageStoreType>()((set) => ({
    rotation: 0,
    grayscale: false,
    actions: {
      setRotation: (rotation: number) => {
        set({ rotation })
      },
      setGrayscale: (grayscale: boolean) => {
        set({ grayscale })
      },
    },
  }))
}

export function useImageStore<T>(selector: (store: ImageStoreType) => T): T {
  const imageStoreContext = useContext(ImageStoreContext)

  if (!imageStoreContext) {
    throw new Error("useImageStore must be used within ImageStoreProvider")
  }

  return useStore(imageStoreContext, selector)
}

export function useImageActions() {
  return useImageStore((state) => state.actions)
}

export function useImageRotation() {
  return useImageStore((state) => state.rotation)
}

export function useImageGrayscale() {
  return useImageStore((state) => state.grayscale)
}
