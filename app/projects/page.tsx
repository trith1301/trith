"use client"

import { ReactNode, useEffect, useState } from "react"
import { Heading, Skeleton } from "@chakra-ui/react"
import Header from "@/app/components/Shared/Header"
import { API_URL, SKELETON_COUNT } from "@/core/constants"
import ProjectCard from "@/app/components/Shared/ProjectCard"
import ProjectCardSkeleton from "../components/Shared/Skeletons/ProjectCard"
import { nanoid } from "nanoid"

const Projects = () => {
  const [projects, setProjects] = useState([])

  const getProjects = async () => fetch(`${API_URL}/projects`)

  const renderProjectCard = (projects: any[]): ReactNode[] => {
    if (projects.length) {
      return projects.map((project) => (
        <ProjectCard key={nanoid()} props={project} />
      ))
    }

    const skeletonCards = []

    for (let i = 0; i <= SKELETON_COUNT; i++) {
      skeletonCards.push(<ProjectCardSkeleton />)
    }

    return skeletonCards
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
      <div className="container mt-6 mx-auto px-6 pb-44">
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
