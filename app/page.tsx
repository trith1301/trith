import Header from "@/app/components/Shared/Header"
import ShortIntro from "@/app/components/Pages/About/ShortIntro"

const About = () => {
  return (
    <div>
      <Header />
      <div className="container mt-6 mx-auto px-6">
        <ShortIntro />
      </div>
    </div>
  )
}

export default About
