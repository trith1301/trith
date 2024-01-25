import Image from "next/image"
import portraitPic from "@/assets/images/profile/portrait-pic.png"
import linkedInIcon from "@/assets/images/socials/linkedin.svg"
import gitHubIcon from "@/assets/images/socials/github.svg"
import discordIcon from "@/assets/images/socials/discord.svg"
import { SOCIALS } from "@/core/enums"

const ShortIntro = () => {
  return (
    <section style={{ height: "calc(100vh - 84px)" }}>
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center lg:justify-around gap-8 lg:gap-20 pt-12 md:pt-6 lg:pt-10">
        <div className="">
          <p className="mt-0 lg:mt-24 text-4xl lg:text-6xl text-center lg:text-left font-extrabold tracking-wider uppercase">
            Trần Hữu Trí
          </p>
          <p className="mt-4 sm:text-base md:text-lg lg:text-2xl font-medium tracking-wider leading-8 lg:leading-10 text-center lg:text-left">
            I am a passionate Frontend Developer, <br />
            based in Ho Chi Minh City, Vietnam 🇻🇳
          </p>
          <ul className="flex gap-x-6 justify-center lg:justify-start mt-6 lg:mt-12">
            <li>
              <a href={SOCIALS.GITHUB}>
                <div className="w-[40px] h-[40px]">
                  <Image
                    className="w-full"
                    priority={false}
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
        </div>
        <div className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[500px]">
          <Image
            priority={false}
            quality={100}
            className="w-full"
            src={portraitPic}
            alt="Portrait picture"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  )
}

export default ShortIntro
