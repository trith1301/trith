import { NextResponse } from "next/server"
import helper from "./helper"

export const GET = async () => {
  const greeting = "🚀 Welcome to trith13102.dev web services"

  helper.log("GET", "", greeting)
  return NextResponse.json(greeting)
}
