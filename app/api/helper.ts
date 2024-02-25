import { API_URL, API_METHODS } from "@/core/constants"

const helper = {
  apiURL: API_URL,
  methods: API_METHODS,

  log: function (method: string, route: string, data: any) {
    const flash = route === "" ? "" : "/"

    console.log(
      `\n[${this.methods[method as keyof typeof API_METHODS]}]: ${API_URL}${
        flash + route
      } ${JSON.stringify(data)}`
    )
  },
}

export default helper
