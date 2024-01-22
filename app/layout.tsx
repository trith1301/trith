import "./globals.css"
import fonts from "@/configs/fonts"
import type { Metadata } from "next"
import NextTopLoader from "nextjs-toploader"

export const metadata: Metadata = {
  title: "Tri Tran Personal Site",
  description: "This is Tri Tran's personal site",
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en">
    <body className={fonts.className}>
      <NextTopLoader showSpinner={false} color="black" />
      {children}
    </body>
  </html>
)

export default RootLayout
