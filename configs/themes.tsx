import { extendTheme, type ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const themes = extendTheme({
  config,
  fonts: {
    heading: "var(--font-open-sans)",
    body: "var(--font-open-sans)",
  },
})

export default themes
