import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "404: This page could not be found.",
}

const NotFound = () => {
  return (
    <div className="container mx-auto pt-20 text-center">
      <h1 className="inline-block text-[24px] font-[500] leading-[49px]">
        404
      </h1>
      <h2>This page could not be found.</h2>
    </div>
  )
}

export default NotFound
