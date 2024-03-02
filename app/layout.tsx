import "@/app/globals.css"
import font from "@/configs/fonts"
import type { Metadata } from "next"
import NextTopLoader from "nextjs-toploader"
import { GoogleAnalytics } from "@next/third-parties/google"

export const metadata: Metadata = {
  title: "Tri Tran Personal Site",
  description: "This is Tri Tran's personal site",
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en">
    <body className={font.className}>
      <NextTopLoader showSpinner={false} color="black" />
      {children}
      <GoogleAnalytics gaId={process.env.GOOGLE_GTAG_ID as string} />
    </body>
  </html>
)

export default RootLayout
