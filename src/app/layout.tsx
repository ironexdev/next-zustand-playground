import { ReactNode } from "react"
import "@/app/globals.css"
import Providers from "@/components/providers"

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <header className="flex h-[50px] w-full items-center justify-center bg-gray-200">
            Header - outside of the page
          </header>
          {children}
        </body>
      </html>
    </Providers>
  )
}
