const About = () => {
  return (
    <div>
      <div className="container mt-6 mx-auto px-6">
        <h1>Current Environment: {process.env.CURRENT_ENV}</h1>
      </div>
    </div>
  )
}

export default About
