import "@/app/globals.css"
import font from "@/configs/fonts"
import type { Metadata } from "next"
import NextTopLoader from "nextjs-toploader"
import { GoogleAnalytics } from "@next/third-parties/google"
import Chakra from "./components/Providers/Chakra"

export const metadata: Metadata = {
  title: "Tri Tran Personal Site",
  description: "This is Tri Tran's personal site",
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en" className={font.variable}>
    <body className={font.className}>
      <NextTopLoader showSpinner={false} color="black" />
      <Chakra>{children}</Chakra>
      <GoogleAnalytics gaId={process.env.GOOGLE_GTAG_ID as string} />
    </body>
  </html>
)

export default RootLayout
