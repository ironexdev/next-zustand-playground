import { createStore } from "zustand/vanilla"
import { useContext } from "react"
import { useStore } from "zustand"
import { createImageSlice, ImageSliceType } from "@/stores/image-slice"
import { AppStoreContext } from "@/components/providers/app-store-provider"

export type AppStoreType = ImageSliceType

export function createAppStore() {
  return createStore<AppStoreType>()((set, get, store) => ({
    ...createImageSlice(set, get, store),
  }))
}

export function useAppStore<T>(selector: (store: AppStoreType) => T): T {
  const appStoreContext = useContext(AppStoreContext)
  if (!appStoreContext) {
    throw new Error("useAppStore must be used within AppStoreProvider")
  }
  return useStore(appStoreContext, selector)
}
