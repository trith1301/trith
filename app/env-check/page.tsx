const EnvCheck = () => {
  return (
    <p className="mt-10 text-center">
      Current environment: {process.env.ENVIRONMENT}
    </p>
  )
}

export default EnvCheck
