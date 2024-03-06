import { NextResponse } from "next/server"
import { getDataTest } from "@/aws/dynamo-db"

export const GET = async () => {
  const data = await getDataTest()

  return NextResponse.json(data)
}
