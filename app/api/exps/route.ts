import { NextResponse } from "next/server"
import helper from "../helper"

import EXPS_DATA from "../../../assets/data/exps.json"

export const GET = async () => {
  const exps = EXPS_DATA

  helper.log("GET", "exps", exps)
  return NextResponse.json(exps)
}
