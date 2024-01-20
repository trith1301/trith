const EnvCheck = () => {
  return (
    <p className="mt-10 text-center">
      Current environment: {process.env.NODE_ENV}
    </p>
  )
}

export default EnvCheck
