"use client"

import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import themes from "@/configs/themes"

const NextChakraProvider = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider theme={themes}>{children}</ChakraProvider>
}

export default NextChakraProvider
