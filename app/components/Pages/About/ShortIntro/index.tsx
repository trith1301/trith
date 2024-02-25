"use client"

import Image from "next/image"
import { useEffect } from "react"
import { SOCIALS } from "@/core/enums"
import { SlideDown, ZoomIn } from "@/core/animations"
import { useSpring, animated } from "@react-spring/web"
import gitHubIcon from "@/assets/images/socials/github.svg"
import discordIcon from "@/assets/images/socials/discord.svg"
import linkedInIcon from "@/assets/images/socials/linkedin.svg"
import portraitPic from "@/assets/images/profile/portrait-pic.png"

const ShortIntro = () => {
  const [fadeInSlideDown, slideDownMethods] = useSpring(() => SlideDown.from)
  const [zoomIn, zoomInMethods] = useSpring(() => ZoomIn.from)

  const animate = () => {
    slideDownMethods.start(SlideDown)
    zoomInMethods.start(ZoomIn)
  }

  useEffect(() => {
    animate()
  }, [])

  return (
    <section style={{ height: "calc(100vh - 84px)" }}>
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center lg:justify-around gap-8 lg:gap-20 pt-12 md:pt-6 lg:pt-10">
        <div className="">
          <animated.div
            style={{
              ...fadeInSlideDown,
            }}
          >
            <p className="mt-0 lg:mt-24 text-4xl lg:text-6xl text-center lg:text-left font-extrabold tracking-wider uppercase">
              Trần Hữu Trí
            </p>
          </animated.div>
          <animated.div
            style={{
              ...fadeInSlideDown,
            }}
          >
            <p className="mt-4 sm:text-base md:text-lg lg:text-2xl font-medium tracking-wider leading-8 lg:leading-10 text-center lg:text-left">
              I am a passionate Frontend Developer, <br />
              based in Ho Chi Minh City, Vietnam 🇻🇳
            </p>
          </animated.div>
          <animated.div
            style={{
              ...fadeInSlideDown,
            }}
          >
            <ul className="flex gap-x-6 justify-center lg:justify-start mt-6 lg:mt-12">
              <li>
                <a href={SOCIALS.GITHUB}>
                  <div className="w-[40px] h-[40px]">
                    <Image
                      className="w-full"
                      priority={true}
                      quality={100}
                      src={gitHubIcon}
                      alt="Github icon"
                      sizes="100vw"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href={SOCIALS.LINKEDIN}>
                  <div className="w-[40px] h-[40px]">
                    <Image
                      className="w-full"
                      priority={false}
                      quality={100}
                      src={linkedInIcon}
                      alt="Portrait picture"
                      sizes="100vw"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href={SOCIALS.DISCORD}>
                  <div className="w-[40px] h-[40px]">
                    <Image
                      className="w-full"
                      priority={false}
                      quality={100}
                      src={discordIcon}
                      alt="Portrait picture"
                      sizes="100vw"
                    />
                  </div>
                </a>
              </li>
            </ul>
          </animated.div>
        </div>
        <div className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[500px]">
          <animated.div
            style={{
              ...zoomIn,
            }}
          >
            <Image
              priority={true}
              quality={100}
              className="w-full"
              src={portraitPic}
              alt="Portrait picture"
              sizes="100vw"
            />
          </animated.div>
        </div>
      </div>
    </section>
  )
}

export default ShortIntro
