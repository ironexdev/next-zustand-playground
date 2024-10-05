"use client"

import { ReactNode } from "react"
import { AppStoreProvider } from "@/components/providers/app-store-provider"

export default function Providers({ children }: { children: ReactNode }) {
  return <AppStoreProvider>{children}</AppStoreProvider>
}
