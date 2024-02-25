import { NextResponse } from "next/server"
import helper from "../helper"

import PROJECTS_DATA from "../../../assets/data/projects.json"

export const GET = async () => {
  const projects = PROJECTS_DATA

  helper.log("GET", "projects", projects)
  return NextResponse.json(projects)
}
