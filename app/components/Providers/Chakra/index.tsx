"use client"

import React from "react"
import theme from "@/configs/theme"
import { ChakraProvider } from "@chakra-ui/react"

const Chakra = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

export default Chakra
