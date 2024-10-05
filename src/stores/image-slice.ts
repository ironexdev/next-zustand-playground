import { StateCreator } from "zustand"
import { useAppStore } from "@/stores/app-store"

export type ImageInstanceType = {
  rotation?: number
  grayscale?: boolean
}

export type ImageSliceType = {
  imagesSlice: {
    images: {
      [id: string]: ImageInstanceType
    }
    actions: {
      setRotation: (id: string, rotation: number) => void
      setGrayscale: (id: string, grayscale: boolean) => void
    }
  }
}

export const createImageSlice: StateCreator<ImageSliceType> = (
  set,
  get,
  store,
) => ({
  imagesSlice: {
    images: {},
    actions: {
      setRotation: (id: string, rotation: number) => {
        set((state) => ({
          imagesSlice: {
            ...state.imagesSlice,
            images: {
              ...state.imagesSlice.images,
              [id]: {
                ...state.imagesSlice.images[id],
                rotation,
              },
            },
            actions: state.imagesSlice.actions,
          },
        }))
      },
      setGrayscale: (id: string, grayscale: boolean) => {
        set((state) => ({
          imagesSlice: {
            ...state.imagesSlice,
            images: {
              ...state.imagesSlice.images,
              [id]: {
                ...state.imagesSlice.images[id],
                grayscale,
              },
            },
            actions: state.imagesSlice.actions,
          },
        }))
      },
    },
  },
})

export function useImageActions(id: string) {
  const actions = useAppStore((state) => state.imagesSlice.actions)

  return {
    setRotation: (rotation: number) => actions.setRotation(id, rotation),
    setGrayscale: (grayscale: boolean) => actions.setGrayscale(id, grayscale),
  }
}

export function useImageRotation(id: string) {
  return useAppStore((state) => state.imagesSlice.images[id]?.rotation)
}

export function useImageGrayscale(id: string) {
  return useAppStore((state) => state.imagesSlice.images[id]?.grayscale)
}
