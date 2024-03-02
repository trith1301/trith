import "@/app/globals.css"
import fonts from "@/configs/fonts"
import type { Metadata } from "next"
import NextTopLoader from "nextjs-toploader"
import { GoogleAnalytics } from "@next/third-parties/google"
import NextChakraProvider from "./components/providers/NextChakraProvider"

export const metadata: Metadata = {
  title: "Tri Tran Personal Site",
  description: "This is Tri Tran's personal site",
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en" className={fonts.OpenSans.variable}>
    <body className={fonts.OpenSans.className}>
      <NextTopLoader showSpinner={false} color="black" />
      <NextChakraProvider>{children}</NextChakraProvider>
      <GoogleAnalytics gaId={process.env.GOOGLE_GTAG_ID as string} />
    </body>
  </html>
)

export default RootLayout
