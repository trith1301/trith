"use client"

import { ReactNode, useEffect, useState } from "react"
import { Heading, Skeleton } from "@chakra-ui/react"
import Header from "@/app/components/Shared/Header"
import { API_URL } from "@/core/constants"
import ProjectCard from "@/app/components/Shared/ProjectCard"
import ProjectCardSkeleton from "../components/Shared/Skeletons/ProjectCard"

const Projects = () => {
  const [projects, setProjects] = useState([])

  const getProjects = async () => fetch(`${API_URL}/projects`)

  const renderProjectCard = (projects: any[]): ReactNode[] => {
    const cards = []

    if (projects.length) {
      return projects.map((project) => (
        <ProjectCard key={project.title} props={project} />
      ))
    }

    return projects.map((project, index) => [])
  }

  useEffect(() => {
    let executor = async () => {
      const call = await getProjects()
      const result = await call.json()

      if (result.status === "success") setProjects(result.data)
    }

    executor()

    return () => {}
  }, [])

  return (
    <div>
      <Header />
      <div className="container mt-6 mx-auto px-6">
        <Heading as="h3" fontSize="xl" mb="30px">
          {projects.length ? (
            `There are ${projects.length} projects currently completed or in progress`
          ) : (
            <Skeleton height="20px" />
          )}
        </Heading>
        <section className="flex flex-col gap-4">
          {renderProjectCard(projects)}
        </section>
      </div>
    </div>
  )
}

export default Projects
